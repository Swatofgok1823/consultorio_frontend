<template>

    <div>
    
        <HeaderAdmin v-if="rolUsuario === rolUsuario" />
        <Header v-else />

        <router-view />
    </div>

    <div class="seccion">
        <div class="seccion-imagen">
            <img src="../assets/img/fondo section 1.jpg" alt="Consultorio Jurídico Medellín">
            <div class="overlay-texto">
                <h1>Bienvenido Administrador de Consultorio Juridico</h1>
            </div>
        </div>
        </div>
    

</template>

<script>
import Header from './Header.vue';
import HeaderEstu from './HeaderEstu.vue';
import HeaderProfe from './HeaderProfe.vue';
import HeaderAdmin from './HeaderAdmin.vue';

export default {
    components: {
        HeaderAdmin
    },
    data() {
        return {
            rolUsuario: 'administrador' // Cambia este valor para probar cada rol
        };
    },
    mounted() {
        console.log("Rol del usuario:", this.rolUsuario); // Revisa en la consola si se muestra
    }
}
</script>


<style>
h1{

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

.overlay-texto {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 5px;
    
}

.seccion-contenido {
    padding: 20px;
}

.sidebar {
    background-color: #3366CC; 
    color: white;
    padding: 15px;
    border-radius: 5px;
}

.sidebar h3 {
    margin-top: 0;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar ul li {
    margin-bottom: 10px;
}

.sidebar ul li a {
    text-decoration: none;
    color: white;
}

.sidebar ul li a:hover {
    text-decoration: underline;
}
.news-section {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.news-section h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
}

.news-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
 

}

.news-item {
    flex: 1 1 calc(33.333% - 20px);
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    border: solid 1px rgb(230, 199, 0);
}

.news-item:hover {
    transform: translateY(-5px);
}

.news-item img {
    width: 100%;
    height: auto;
    display: block;
}

.news-content {
    padding: 15px;
}

.news-content h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #007BFF;
}

.news-content p {
    font-size: 1rem;
    color: #666;
}


</style>