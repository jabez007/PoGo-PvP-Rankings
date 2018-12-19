import Vue from 'vue';
import Pokedex from 'pokedex-promise-v2';

Vue.prototype.$pokedex = new Pokedex({
  protocol: 'https',
});
Vue.prototype.$typesEffective = {
  def: {
    immune: 0.244140625,
    endures: 0.390625,
    resists: 0.625,
    weak: 1.6,
    vulnerable: 2.56,
  },
};
Vue.prototype.$combineTypes = function (typeOne, typeTwo) {
  const newType = {
    def: {
      immune: [],
      endures: [],
      resists: [],
      weak: [],
      vulnerable: [],
    },
  };

  const endurances = typeOne.def.endures
    .concat(typeTwo.def.endures);
  const resistances = typeOne.def.resists
    .concat(typeTwo.def.resists);
  const weaknesses = typeOne.def.weak
    .concat(typeTwo.def.weak);

  endurances
    .forEach((t, idx, a) => {
      if (a.indexOf(t) === idx) { // filter out duplicates
        if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this endurance
          if (resistances.indexOf(t) > -1) { // one type endures while the other type resists
            // combines as immune
            newType.def.immune.push(t);
          } else if (weaknesses.indexOf(t) > -1) { // one type endures while the other type is weak
            // combined, that leaves resists
            newType.def.resists.push(t);
          } else { // doesn't pair up
            // then it stays as is
            newType.def.endures.push(t);
          }
        } else {
          // does there exist a double endures?
        }
      }
    });
  resistances
    .forEach((t, idx, a) => {
      if (a.indexOf(t) === idx) { // filter out duplicates
        if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type is resistant
          if (endurances.indexOf(t) > -1) { // already checked this
            // do nothing this time
          } else if (weaknesses.indexOf(t) > -1) { // one type resists while the other type is weak
            // then they just cancel out
          } else { // doesn't pair up
            // then it stays as is
            newType.def.resists.push(t);
          }
        } else { // both types have this resistance
          // combined as an endurance
          newType.def.endures.push(t);
        }
      }
    });
  weaknesses
    .forEach((t, idx, a) => {
      if (a.lastIndexOf(t) === idx) { // filter out duplicates
        if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this weakness
          if (endurances.indexOf(t) > -1) { // already checked this
            // do nothing this time
          } else if (resistances.indexOf(t) > -1) { // already checked this
            // do nothing this time
          } else { // doesn't pair up
            // then it stays as is
            newType.def.weak.push(t);
          }
        } else { // both types have this weakness
          // combined as a vulnerability
          newType.def.vulnerable.push(t);
        }
      }
    });

  return newType;
};
Vue.prototype.$getTypeDefScore = function (type) {
  return (18 - (type.def.immune.length + type.def.endures.length + type.def.resists.length + type.def.weak.length + type.def.vulnerable.length))
    + (type.def.immune.length * this.$typesEffective.def.immune)
    + (type.def.endures.length * this.$typesEffective.def.endures)
    + (type.def.resists.length * this.$typesEffective.def.resists)
    + (type.def.weak.length * this.$typesEffective.def.weak)
    + (type.def.vulnerable.length * this.$typesEffective.def.vulnerable);
};
