<template>
<div>

      <Header />

      <router-view />
  </div>
    <section class="quienes-somos">
      <div class="contenedor">
        <h1 class="titulo">¿Quiénes somos?</h1>
        <h2 class="subtitulo">LA UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA</h2>
        <p class="descripcion">
          Es un Ente Universitario Autónomo, con régimen especial, personería jurídica, autonomía académica, administrativa y financiera, patrimonio independiente, vinculado al Ministerio de Educación Nacional en lo que se refiere a las políticas y la planeación del sector educativo.
        </p>
        <p class="descripcion">
          Creada por la Ley 48 del 17 de diciembre de 1945, con el nombre de Colegio Mayor de Cultura Femenina de Cundinamarca. Mediante la Ley 24 de 1988 cambia su denominación por el de Colegio Mayor de Cundinamarca, y luego organiza niveles de pregrado y postgrado. 
        </p>
  
        <h2 class="subtitulo">Su Fundación</h2>
        <p class="descripcion">
          La historia de la UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA comprende una serie de etapas, directamente relacionadas con los cambios operados en las políticas gubernamentales, relativas a la política educativa y a los procesos económicos a través de los cuales se ha venido incorporando al aparato productivo del país, dadas las transformaciones sociales que se pusieron en marcha desde comienzos del siglo XX.
        </p>
  
        <h2 class="subtitulo">Reseña Histórica</h2>
        <ul class="lista">
          <li>
            <strong>Fundación:</strong> La Ley 48 del 17 de diciembre de 1945, firmada por el entonces Ministro de Educación, crea el COLEGIO MAYOR DE CULTURA FEMENINA DE CUNDINAMARCA, adscrita a la División de Educación Postsecundaria del MEN.
          </li>
          <li>
            <strong>Unidad Administrativa Especial, adscrita al MEN:</strong> Decreto 083 de 1980 cambia su naturaleza jurídica, se realizan cambios curriculares internos, y cambia su denominación por el de COLEGIO MAYOR DE CUNDINAMARCA.
          </li>
          <li>
            <strong>Ente Universitario Autónomo Establecimiento Público:</strong> La Ley 24 del 11 de febrero de 1988, relacionada con el Ministerio de Educación Nacional y en concordancia con el Decreto 758, fija misión y visión de educación superior.
          </li>
          <li>
            <strong>Colegio Mayor de Cundinamarca Institución Universitaria:</strong> Desde 1988 hasta la fecha, organiza sus niveles de pregrado y posgrado.
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  import Header from './Header.vue';
  import HeaderEstu from './HeaderEstu.vue';
  import HeaderProfe from './HeaderProfe.vue';
  import HeaderAdmin from './HeaderAdmin.vue';
  
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
  .quienes-somos {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    padding: 80px;
    margin-bottom: 80px;
  }
  
  .contenedor {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .titulo {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #003366;
    background: transparent;
  }
  
  .subtitulo {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
    color: #0055a5;
  }
  
  .descripcion {
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 1rem;
  }
  
  .lista {
    margin-top: 1rem;
    padding-left: 1.5rem;
  }
  
  .lista li {
    margin-bottom: 0.5rem;
  }
  </style>
  