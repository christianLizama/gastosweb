<template>
  <div>
    <login-component></login-component>
  </div>
  
</template>

<script lang="ts">
  import LoginComponent from "../components/usuarios/LoginComponent.vue";

  export default {
    components: {
      LoginComponent,
    },
    data() {
      return {
        usuario: "",
        password: "",
      };
    },
  }

</script>
