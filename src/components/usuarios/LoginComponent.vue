<template>
  <div>
    <p>{{ textoEscrito }}</p>
    <input type="email" v-model="correo" placeholder="Correo electrónico" />
    <input type="password" v-model="contraseña" placeholder="Contraseña" />
    <button @click="iniciarSesion">Iniciar Sesión</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {app} from "../../auth/firebase";
import {getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence,onAuthStateChanged } from "firebase/auth";

@Component
export default class LoginComponent extends Vue {
  usuarioActual = "";
  texto = "";
  correo = "";
  contraseña = "";
  get textoEscrito() {
    return this.texto;
  }

  created() {
    // Verificar si hay un usuario autenticado al cargar el componente
    this.verificarUsuarioAutenticado();
  }

  async verificarUsuarioAutenticado() {
    const auth = getAuth(app);
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        // El usuario está autenticado, redirigir a la página deseada
        console.log("Usuario autenticado:", usuario);
        const token = await auth.currentUser?.getIdToken();
        console.log(token)
        // Redirigir a la página deseada después del inicio de sesión exitoso
        // this.$router.push("/"); // Cambia "/dashboard" por la ruta que necesites
      } else {
        // El usuario no está autenticado
        console.log("Usuario no autenticado");
      }
    });
  }

  async iniciarSesion() {
    try {
      const auth = getAuth(app);


      // Establecer la persistencia de la sesión en el navegador
      await setPersistence(auth, browserSessionPersistence);

      const credenciales = await signInWithEmailAndPassword(auth, this.correo, this.contraseña);
      // Si el inicio de sesión es exitoso, credenciales.user contendrá la información del usuario
      console.log("Inicio de sesión exitoso:", credenciales.user);
      // Redirigir a la página deseada después del inicio de sesión exitoso
      // this.$router.push("/"); // Cambia "/dashboard" por la ruta que necesites
    } catch (error: any ) {
      // Manejo de errores durante el inicio de sesión
      console.error("Error al iniciar sesión:", error.message);
      // Mostrar un mensaje al usuario indicando el error
      this.texto = "Error al iniciar sesión. Verifica tus credenciales.";
    }
  }
}



</script>
