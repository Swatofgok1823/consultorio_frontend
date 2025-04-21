<template>
  <div class="reset_container">
    <h1>Restablecer Contraseña</h1>
    <form @submit.prevent="restablecerContrasena">
      <div class="form-group">
        <label for="nueva_contraseña">Nueva Contraseña</label>
        <input type="password" id="nueva_contraseña" v-model="nuevaContrasena" required />
      </div>

      <div class="form-group">
        <label for="confirmar_contraseña">Confirmar Contraseña</label>
        <input type="password" id="confirmar_contraseña" v-model="confirmarContrasena" required />
      </div>

      <button type="submit">Restablecer Contraseña</button>
      <div v-if="menError" class="error">{{ menError }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const nuevaContrasena = ref('');
const confirmarContrasena = ref('');
const menError = ref('');

const restablecerContrasena = async () => {
  if (nuevaContrasena.value !== confirmarContrasena.value) {
    menError.value = 'Las contraseñas no coinciden';
    return;
  }

  const token = route.query.token;
  console.log("Token recibido:", token); // Depuración

  try {
    const response = await axios.post('http://127.0.0.1:8000/restablecer-contrasena', {
      token: token,
      nueva_contraseña: nuevaContrasena.value,
    });

    Swal.fire({
      icon: 'success',
      title: 'Contraseña restablecida',
      text: 'Tu contraseña ha sido restablecida exitosamente.',
    });

    router.push('/login');
  } catch (error) {
    menError.value = 'Error al restablecer la contraseña';
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data?.detail || 'Error al restablecer la contraseña. Inténtalo de nuevo.',
    });
  }
};
</script>

<style scoped>
.reset_container {
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

input {
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
</style>