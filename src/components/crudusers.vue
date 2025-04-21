<template>
  <div>
  
        <HeaderAdmin v-if="rolUsuario === 'administrador'" />
        <Header v-else />

        <router-view />
    </div>
    <div class="cajamayor">
      <h2>Agregar Usuario</h2>
      
      <div class="buscar-agregar">
        <form @submit.prevent="agregarUsuario" class="form-agregar">
          <input v-model="nuevoUsuario.documento" placeholder="Documento" required/>
          <input v-model="nuevoUsuario.nombre" placeholder="Nombre" required/>
          <input v-model="nuevoUsuario.apellido" placeholder="Apellido" required/>
          <input v-model="nuevoUsuario.correo" placeholder="Correo" required/>
          <input v-model="nuevoUsuario.password" placeholder="Contraseña" required/>      
          <div >
            <label> </label>
            <select class="form-group"  v-model="nuevoUsuario.rol" required>
              <option value="">Seleccionar rol</option>
              <option value="administrador">Administrador</option>
              <option value="profesor">Profesor</option>
              <option value="estudiante">Estudiante</option>
            </select>
           </div>

          <button id="agregar" type="submit">Agregar</button>
        </form>
  
        <input 
          v-model="terminoBusqueda"
          placeholder="Buscar usuario..."
          @input="buscarUsuario"
          class="input-busqueda"
        />
      </div>
  
      <table>
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Rol</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuariosFiltrados" :key="index">
            <td>{{ usuario.documento }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.correo }}</td>
            <td>
              <div class="password-container">
                <span>{{ showPassword[usuario.documento] ? usuario.password : '••••••••' }}</span>
                <button 
                  type="button" 
                  class="toggle-password" 
                  @click="togglePasswordVisibility(usuario.documento)"
                >
                  {{ showPassword[usuario.documento] ? '👁️' : '👁️' }}
                </button>
              </div>
            </td>
            <td>{{ usuario.rol }}</td>
            <td>
            <div class="botones-opciones">
                <button class="btn-modificar" @click="iniciarEdicion(usuario)">Modificar</button>
              <button class="btn-eliminar" @click="eliminarUsuario(usuario.documento)">Eliminar</button>
            </div>
          </td>
          </tr>
        </tbody>
      </table>
      <div v-if="usuarioEnEdicion">
      <h2>Editar Usuario</h2>
      <form @submit.prevent="modificarUsuario(usuarioEnEdicion)">
        <input v-model="usuarioEnEdicion.documento" placeholder="Documento" required disabled/>
        <input v-model="usuarioEnEdicion.nombre" placeholder="Nombre" required />
        <input v-model="usuarioEnEdicion.apellido" placeholder="Apellido" required />
        <input v-model="usuarioEnEdicion.correo" placeholder="Correo" required />
        <input v-model="usuarioEnEdicion.password" placeholder="Contraseña" required disabled />
        <select v-model="usuarioEnEdicion.rol" required>
          <option value="administrador">Administrador</option>
          <option value="profesor">Profesor</option>
          <option value="estudiante">Estudiante</option>
        </select>
        <button id="guardarcambios" type="submit">Guardar Cambios</button>

      </form>
    </div>
    </div>
  </template>
  
  
  <script setup>
  import Header from './Header.vue';
  import HeaderEstu from './HeaderEstu.vue';
  import HeaderProfe from './HeaderProfe.vue';
  import HeaderAdmin from './HeaderAdmin.vue';
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    
    const rolUsuario = ref('administrador');
    const usuarios = ref([]);
    const usuariosFiltrados = ref([]);
    const nuevoUsuario = ref({
      documento: '',
      nombre: '',
      apellido: '',
      correo: '',
      password: '',
      rol:'',
    });
    const terminoBusqueda = ref('');
    const usuarioEnEdicion = ref(null); // Para manejar el usuario que se está editando
    
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/consultarCliente');
        usuarios.value = response.data;
        usuariosFiltrados.value = usuarios.value; 
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    const showPassword = ref({}); // Para controlar la visibilidad por usuario

    const togglePasswordVisibility = (documento) => {
      showPassword.value = {
        ...showPassword.value,
        [documento]: !showPassword.value[documento]
      };
    };
    
    const agregarUsuario = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/insertar', nuevoUsuario.value);
        usuarios.value.push(response.data); // Agrega el nuevo usuario
        usuariosFiltrados.value.push(response.data); // También a la lista filtrada
        nuevoUsuario.value = { documento: '', nombre: '', apellido: '', correo: '', password:'', rol:'' }; // Reinicia el formulario
      } catch (error) {
        console.error('Error al agregar usuario:', error);
      }
    };

        const iniciarEdicion = (usuario) => {
        usuarioEnEdicion.value = { ...usuario }; // Crea una copia del usuario para editar
    };



    const modificarUsuario = async () => {
        try {
            const usuarioModificado = {
                documento: usuarioEnEdicion.value.documento,  
                nombre: usuarioEnEdicion.value.nombre,  
                apellido: usuarioEnEdicion.value.apellido,  
                correo: usuarioEnEdicion.value.correo,  
                password: usuarioEnEdicion.value.password,  
                rol: usuarioEnEdicion.value.rol,  
            };

            const response = await axios.put(`http://127.0.0.1:8000/modificar/${usuarioEnEdicion.value.documento}`, usuarioModificado);

            // Filtrando el usuario antiguo y agregando el actualizado
            usuarios.value = usuarios.value.filter(user => user.documento !== usuarioModificado.documento);
            usuarios.value.push(response.data); // Agrega el usuario actualizado a la lista

            // También actualiza la lista filtrada si es necesario
            usuariosFiltrados.value = usuariosFiltrados.value.filter(user => user.documento !== usuarioModificado.documento);
            usuariosFiltrados.value.push(response.data); // Agrega el usuario actualizado a la lista filtrada

            usuarioEnEdicion.value = null; // Limpia la variable de edición después de modificar
        } catch (error) {
            console.error('Error al modificar usuario:', error.response.data); // Detalles del error
        }
    };




    const eliminarUsuario = async (documento) => {
        try {
          await axios.delete(`http://127.0.0.1:8000/eliminar/${documento}`);
          usuarios.value = usuarios.value.filter(usuario => usuario.documento !== documento); // Elimina el usuario de la lista
          usuariosFiltrados.value = usuariosFiltrados.value.filter(usuario => usuario.documento !== documento); // Actualiza la lista filtrada
        } catch (error) {
          console.error('Error al eliminar usuario:', error);
        }
    };

    const buscarUsuario = () => {
    const busqueda = terminoBusqueda.value.toLowerCase();
    usuariosFiltrados.value = usuarios.value.filter(usuario => {
      return (
        usuario.documento.toString().toLowerCase().includes(busqueda) ||
        usuario.nombre.toLowerCase().includes(busqueda) ||
        usuario.apellido.toLowerCase().includes(busqueda) ||
        usuario.correo.toLowerCase().includes(busqueda)
            );
      });
    };
    
    
    onMounted(obtenerUsuarios);

  </script>
  
  <style scoped>
    .cajamayor {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    h2 {
      margin-bottom: 10px;
    }

    .buscar-agregar {
      display: flex;
      align-items: flex-end;
      margin-bottom: 20px;
    }

    .input-busqueda {
      margin-left: 20px; 
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .form-agregar {
      display: flex;
    }

    form input {
      margin-right: 10px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .form-group{
      margin-right: 10px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    #guardarcambios{
        margin-left: 30px;
        background-color: #007bff;
    }

    button {
      padding: 8px 12px;
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9; 
    }

    .btn-modificar {
      background-color: #007bff; 
      margin-right: 5px; 
    }

    .btn-eliminar {
      background-color: #dc3545; 
    }

    #agregar {
      background-color: #05dc28; 
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tbody tr:hover {
      background-color: #f5f5f5;
    }

    .botones-opciones {
      display: flex; 
    }

    .password-container {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .toggle-password {
      background: none;
      border: none;
      padding: 0;
      color: #666;
      cursor: pointer;
      font-size: 1em;
      margin-left: 5px;
    }
    
    .toggle-password:hover {
      color: #333;
    }
    
    /* Para el formulario de edición, agregar similar */
    .editar-form .password-container {
      position: relative;
    }
    
    .editar-form .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  </style>
  