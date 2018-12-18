<template>
  <v-card>
  </v-card>
</template>

<script>
export default {
  name: 'TypesRanking',
  data: () => ({
    types: {},
  }),
  created() {
    const self = this;
    const promises = [];
    for (let i = 1; i <= 18; i += 1) {
      promises.push(this.$pokedex.resource(`/api/v2/type/${i}/`));
    }
    Promise.all(promises)
      .then((responses) => {
        const types = {};
        responses
          .forEach((response) => {
            types[response.name] = {
              def: {
                immune: response.damage_relations.no_damage_from
                  .map(type => type.name),
                strong: response.damage_relations.half_damage_from
                  .map(type => type.name),
                weak: response.damage_relations.double_damage_from
                  .map(type => type.name),
                vulnerable: [],
              },
            };
          });
        const baseTypes = Object.keys(types);
        for (let i = 0; i < baseTypes.length - 1; i += 1) {
          for (let j = i + 1; j < baseTypes.length; j += 1) {
            const typeOne = baseTypes[i];
            const typeTwo = baseTypes[j];
            types[`${typeOne}/${typeTwo}`] = {
              def: {
                immune: [],
                strong: [],
                weak: [],
                vulnerable: [],
              },
            };

            const immunities = types[typeOne].def.immune
              .concat(types[typeTwo].def.immune);
            const strengths = types[typeOne].def.strong
              .concat(types[typeTwo].def.strong);
            const weaknesses = types[typeOne].def.weak
              .concat(types[typeTwo].def.weak);
            const vulnerabilities = types[typeOne].def.vulnerable
              .concat(types[typeTwo].def.vulnerable);

            immunities
              .forEach((t, idx, a) => {
                if (a.indexOf(t) === idx) { // filter out duplicates
                  if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this immunity
                    if (strengths.indexOf(t) > -1) { // one type is immune and the other type is strong
                      // immune and strong => leave as immune for now
                      types[`${typeOne}/${typeTwo}`].def.immune.push(t);
                    } else if (weaknesses.indexOf(t) > -1) { // one type is immue and the other type is weak
                      // combined, that leaves strong
                      types[`${typeOne}/${typeTwo}`].def.strong.push(t);
                    } else if (vulnerabilities.indexOf(t) > -1) { // one type is immune and the other type is vulnerable
                      // then they just cancel out
                    } else { // doesn't pair up
                      // then it stays as is
                      types[`${typeOne}/${typeTwo}`].def.immune.push(t);
                    }
                  } else { // does there exist a double immunity?
                    console.log(`${typeOne}/${typeTwo} double immune to ${t}`);
                  }
                }
              });
            strengths
              .forEach((t, idx, a) => {
                if (a.indexOf(t) === idx) { // filter out duplicates
                  if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this strength
                    if (immunities.indexOf(t) > -1) { // already checked this
                      // do nothing this time
                    } else if (weaknesses.indexOf(t) > -1) { // one type is strong and the other type is weak
                      // then they just cancel out
                    } else if (vulnerabilities.indexOf(t) > -1) { // one type is strong and the other type is vulnerable
                      // combined, that leaves weak
                      types[`${typeOne}/${typeTwo}`].def.weak.push(t);
                    } else { // doesn't pair up
                      // then it stays as is
                      types[`${typeOne}/${typeTwo}`].def.strong.push(t);
                    }
                  } else { // both types have this strength
                    // combined as an immunity
                    types[`${typeOne}/${typeTwo}`].def.immune.push(t);
                  }
                }
              });
            weaknesses
              .forEach((t, idx, a) => {
                if (a.lastIndexOf(t) === idx) { // filter out duplicates
                  if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this weakness
                    if (immunities.indexOf(t) > -1) { // already checked this
                      // do nothing this time
                    } else if (strengths.indexOf(t) > -1) { // already checked this
                      // do nothing this time
                    } else if (vulnerabilities.indexOf(t) > -1) { // one type is weak and the other type is vulnerable
                      // leave as vulnerable for now
                      types[`${typeOne}/${typeTwo}`].def.vulnerable.push(t);
                    } else { // doesn't pair up
                      // then it stays as is
                      types[`${typeOne}/${typeTwo}`].def.weak.push(t);
                    }
                  } else { // both types have this weakness
                    // combined as a vulnerability
                    types[`${typeOne}/${typeTwo}`].def.vulnerable.push(t);
                  }
                }
              });
          }
        }

        self.types = types;
      });
  },
};
</script>

<style scoped>
</style>
