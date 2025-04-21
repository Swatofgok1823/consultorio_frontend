<template>
    <div>
    <!-- Condicional para mostrar el header según el rol -->
        <HeaderEstu v-if="rolUsuario === rolUsuario" />
        <Header v-else />

        <router-view />
    </div>

    <div class="seccion">
        <div class="seccion-imagen">
            <img src="../assets/img/fondo section 1.jpg" alt="Consultorio Jurídico Medellín">
            <div class="overlay-texto">
                <h1>Bienvenido Estudiante de Consultorio Juridico</h1>
            </div>
        </div>
        </div>

</template>

<script>
import Header from './Header.vue';
import HeaderAdmin from './HeaderAdmin.vue';
import HeaderEstu from './HeaderEstu.vue';
import HeaderProfe from './HeaderProfe.vue';

export default {
    components: {
        Header,
        HeaderEstu,
        HeaderProfe,
        HeaderAdmin
    },
    data() {
        return {
            rolUsuario: 'estudiante' // Cambia este valor para probar cada rol
        };
    },
    mounted() {
        console.log("Rol del usuario:", this.rolUsuario); // Revisa en la consola si se muestra
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(21, 11, 160);
    height: 100px;
}

.seccion {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 60px;
}
h1{
  background: transparent;
}
.seccion-imagen {
    position: relative;
    width: 100%;
    max-height: 500px;
    overflow: hidden;
}

.seccion-imagen img {
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    .seccion {
        margin-top: 15px; /* Reduce el margen superior en pantallas pequeñas */
        margin-bottom: 10px; /* Reduce el margen inferior */
        padding: 0 10px; /* Reduce el padding lateral */
    }


    .overlay-texto h1 {
        height: 50px;
        position: relative;
        font-size: 20px;
        top: 5px;
    }
}
</style>
