<template>
  <v-select :label="label"
            prepend-inner-icon="filter_list"
            :items="types"
            v-model="filter"
            @input="$emit('input', $event)"
            dense
            multiple
            clearable>
    <template slot="selection"
              slot-scope="data">
      <v-chip @input="filter.splice(filter.indexOf(data.item), 1)"
              :color="data.item"
              text-color="white"
              small
              close>
        <v-avatar :color="`${data.item} darken-3`">
          <img :src="getImgSrc(data.item)" />
        </v-avatar>
      </v-chip>
    </template>
  </v-select>
</template>

<script>
//https://scotch.io/tutorials/add-v-model-support-to-custom-vuejs-component
export default {
  name: 'TypeSelect',
  props: {
    label: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    filter: [],
  }),
  methods: {
    getImgSrc(type) {
      return require(`../assets/${type}.png`);
    },
  },
};
</script>

<style scoped>
</style>
