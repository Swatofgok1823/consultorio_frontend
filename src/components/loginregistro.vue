<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
  <div class="auth_container">
    <h1 v-if="!recuperarContrasena">Iniciar sesión</h1>
    <h1 v-if="recuperarContrasena">Recuperar contraseña</h1>
    <form @submit.prevent="recuperarContrasena ? enviarCredenciales() : loginUsuario()">
      <div v-if="!recuperarContrasena">
        <div class="form-group">
          <label for="documento">Documento</label>
          <input type="number" id="documento" v-model="documento" required />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="pasword" required />
        </div>

        <a class="recuperarcontraseña" href="#" @click.prevent="mostrarRecuperarContrasena">¿Olvidó su contraseña?</a>

        <button type="submit">Iniciar sesión</button>
      </div>

      <div v-if="recuperarContrasena">
        <div class="form-group">
          <label for="email">Escribe tu correo</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <button type="submit">Enviar</button>
        <button id="cancel" type="button" @click="cancelarRecuperacion">Cancelar</button>
      </div>

      <div v-if="menError" class="error">{{ menError }}</div>
    </form>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const documento = ref('');
const pasword = ref('');
const email = ref('');
const menError = ref('');
const recuperarContrasena = ref(false);

const mostrarRecuperarContrasena = () => {
  recuperarContrasena.value = true;
};

const cancelarRecuperacion = () => {
  recuperarContrasena.value = false;
  email.value = '';
};

const loginUsuario = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/login', {
      documento: documento.value,
      password: pasword.value,
    });

    const { rol: userRol } = response.data;

    if (userRol === 'administrador') {
      router.push('/administrador');
    } else if (userRol === 'profesor') {
      router.push('/profesor');
    } else if (userRol === 'estudiante') {
      router.push('/estudiante');
    } else {
      throw new Error('Rol no válido');
    }

    Swal.fire({
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      text: 'Bienvenido a tu cuenta',
    });
  } catch (error) {
    menError.value = 'Error de inicio de sesión';
    Swal.fire({
      icon: 'error',
      title: 'Error de inicio de sesión',
      text: error.response?.data?.detail || 'Error al iniciar sesión. Inténtalo de nuevo.',
    });
  }
};

const enviarCredenciales = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/enviarcredenciales', { email: email.value });
    Swal.fire({
      icon: 'success',
      title: 'Correo enviado',
      text: 'Revisa tu correo para obtener tus credenciales.',
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo enviar el correo. Inténtalo de nuevo.',
    });
  }
};
</script>

<style scoped>
.auth_container {
  width: 400px;
  margin: 150px auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}

h1 {
  margin-bottom: 1em;
  text-align: center;
  color: #333;
  background: transparent;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.7em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 1em;
  text-align: center;
}

#cancel {
  background-color: red;
}

.recuperarcontraseña{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-bottom: 20px;

}
</style>


