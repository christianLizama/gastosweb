<template>
  <div>
    <table-component :tableTitle="'Usuarios'"></table-component>
  </div>
</template>

<script lang="ts">
  import TableComponent from "../components/TableComponent.vue";

  export default {
    components: {
      TableComponent,
    },
    data() {
      return {
      };
    },
  }
</script>
