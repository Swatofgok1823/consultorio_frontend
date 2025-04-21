<template>
    <div id="app">
      <router-view></router-view>
      <footer class="footer">
        <!-- Fondo amarillo -->
        <div class="footer-container">
          <!-- Cuadro blanco con borde azul -->
          <div class="footer-content">
            <div class="info">
              <h3>UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA</h3>
              <p><strong>Sede principal:</strong> Calle 28 No. 5B-02 Bogotá D.C. Colombia - Sur América</p>
              <p><strong>Código postal:</strong> 110311</p>
              <p><strong>Horario de atención:</strong> Lunes a Viernes, 8:00 a.m. a 5:00 p.m</p>
              <p><strong>Teléfono PBX:</strong> 57 601 2418800 (En Mantenimiento)</p>
              <p><strong>Teléfono atención al usuario:</strong> 571 282 5716 (En Mantenimiento)</p>
              <p><strong>Teléfono resto del país:</strong> 018000 113044 (En Mantenimiento)</p>
              <p><strong>Correo institucional:</strong> juricoconsultorio@gmail.com</p>
              <p><strong>Vigilada:</strong> MINEDUCACIÓN</p>
              <div class="social-media">
                <a href="#" class="social-link"><i class="fab fa-twitter"></i> Twitter</a>
                <a href="#" class="social-link"><i class="fab fa-instagram"></i> Instagram</a>
                <a href="#" class="social-link"><i class="fab fa-facebook"></i> Facebook</a>
                <a href="#" class="social-link"><i class="fab fa-youtube"></i> YouTube</a>
                <a href="#" class="social-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
              </div>
            </div>
            <div class="certifications">
              <h4>Certificaciones</h4>
              <ul>
                <li>Acreditación Institucional en Alta Calidad</li>
                <li>ISO 9001</li>
                <li>IQNET Certified Management System</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Franja azul inferior -->
        <div class="footer-bottom">
          <div class="gov">
            <p><a href="#">Políticas</a> | <a href="#">Mapa del sitio</a></p>
            <p>© GOV.CO</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router';
  import Header from './components/Header.vue';
  
  const rutasmostrar = ['/profesor'];
  const ruta = useRouter();
  const visible = ref(true);
  
  watch(
    () => ruta.path,
    (nuevaruta) => {
      visible.value = !rutasmostrar.includes(nuevaruta);
    },
    { immediate: true }
  );
  </script>
  
  <style>
  /* Estilos generales para fijar el footer en la parte inferior */
  #app {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Fondo amarillo */
  .footer {
    background-color: #ffe600; /* Amarillo */
    padding: 20px 0;
    font-family: Arial, sans-serif;
    font-size: 0.9rem;
    color: #333;
    position: relative;
    margin-top: 200px; /* Permite que el footer se mantenga en la parte inferior */
  }
  
  /* Contenedor central */
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  /* Cuadro blanco con borde azul */
  .footer-content {
    background-color: #fff; /* Blanco */
    padding: 20px 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 3px solid #0055a5; /* Borde azul */
    margin-bottom: 20px; /* Espacio para mostrar el amarillo alrededor */
  }
  
  /* Información principal */
  .info {
    max-width: 60%;
  }
  
  .info h3 {
    color: #0055a5;
    margin-bottom: 15px;
  }
  
  .info p {
    margin: 5px 0;
  }
  
  /* Redes sociales */
  .social-media {
    margin-top: 15px;
  }
  
  .social-link {
    display: inline-block;
    text-decoration: none;
    color: #0055a5;
    margin-right: 15px;
    font-size: 1rem;
  }
  
  /* Certificaciones */
  .certifications {
    max-width: 35%;
  }
  
  .certifications h4 {
    color: #0055a5;
    margin-bottom: 10px;
  }
  
  .certifications ul {
    list-style-type: none;
    padding: 0;
  }
  
  .certifications li {
    margin: 5px 0;
  }
  
  /* Franja azul inferior */
  .footer-bottom {
    background-color: #0055a5; /* Azul */
    padding: 10px 0;
  }
  
  .footer-bottom .gov {
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
  }
  
  .footer-bottom .gov a {
    text-decoration: none;
    color: #fff;
  }
  
  .footer-bottom .gov p {
    margin: 5px 0;
  }
  </style>
  