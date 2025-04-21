<template>
    <div>
      <!-- Condicional para mostrar el header según el rol -->
      <HeaderEstu v-if="rolUsuario === 'estudiante'" />
      <HeaderProfe v-if="rolUsuario === 'profesor'" />
      <HeaderAdmin v-if="rolUsuario === 'administrador'" />
      <Header v-else />
  
      <router-view />
    </div>
  
    <div class="seccion">
      <div class="seccion-imagen">
        <img src="../assets/img/fondo section 1.jpg" alt="Consultorio Jurídico Medellín">
        <div class="overlay-texto">
          <h1>Consultorio Jurídico Colegio Mayor De Cundinamarca</h1>
        </div>
      </div>
      <div class="seccion-contenido">
        <h2>Consultorio Jurídico y Centro de Conciliación Pío XII de la Facultad de Derecho, UPB-Cundinamarca</h2>
        <div class="sidebar">
          <h3>Requisitos</h3>
          <ul>
            <li>Acreditar pertenecer a estratos 1 y 2 o puntaje equivalente en el SISBEN (categoría A, B y C).</li>
            <li>Fotocopia de la cédula de ciudadanía o documento equivalente.</li>
            <li>Fotocopia de un recibo de servicio público, con dirección y donde se especifique el estrato.</li>
            <li>El servicio de representación en procesos judiciales o administrativos está supeditado a las competencias que la ley permite, actuando como apoderado un estudiante de la Carrera de Derecho de los últimos semestres.</li>
            <li>De manera excepcional, sin consideración al estrato o SISBEN, se podrán atender casos de marcada vulnerabilidad, sujetos de especial protección, comunidades o personas jurídicas sin ánimo de lucro o asociaciones o agremiaciones de tipo comunitario o territorial.</li>
          </ul>
        </div>
      </div>
    </div>
  
    <section class="news-section">
      <h2>Últimas Noticias</h2>
      <div class="news-container">
        <article class="news-item">
          <img src="../assets/img/im1.jpeg" alt="Noticia 1">
          <div class="news-content">
            <h3>Conciliación gratuita</h3>
            <p>En Consultorio Jurídico, sabemos lo importante que es contar con una orientación legal confiable y clara. Por eso, te ofrecemos una consulta inicial gratuita, para que puedas resolver todas tus dudas y tomar decisiones sobre tu situación legal.
Nuestro equipo de abogados altamente capacitados está listo para ofrecerte asesoramiento en diversas áreas del derecho: civil, familiar, laboral, penal, entre otros. Sin importar cuál sea tu inquietud, estamos comprometidos a brindarte la mejor atención.</p>
          </div>
        </article>
  
        <article class="news-item">
          <img src="../assets/img/im2.jpg" alt="Noticia 2">
          <div class="news-content">
            <h3>Podcast</h3>
            <p>Escucha nuestro Podcast Jurídico y resuelve tus dudas legales de manera fácil y rápida. Nuestros abogados expertos explican temas de derecho de forma clara y accesible. Desde asuntos civiles hasta laborales, cada episodio te ofrece consejos prácticos y actualizados. ¡Sintoniza ahora y mantente informado! Disponible en plataformas como Spotify y Apple Podcasts.</p>
          </div>
        </article>
  
        <article class="news-item">
          <img src="../assets/img/img3.jpeg" alt="Noticia 3">
          <div class="news-content">
            <h3>Tutorías</h3>
            <p>Tutorías de Derecho Procesal.</p>
          </div>
        </article>
  
        <article class="news-item">
          <img src="../assets/img/nota-2-consultorio.png" alt="Noticia 4">
          <div class="news-content">
            <h3>Conflictos</h3>
            <p>Mecanismos alternativos de solución de conflictos.</p>
          </div>
        </article>
  
        <article class="news-item">
          <img src="../assets/img/sala-laboral.jpg" alt="Noticia 5">
          <div class="news-content">
            <h3>Consultorio de asesorías</h3>
            <p>Derecho civil y familiar, Derecho penal, Derecho laboral y seguridad social.</p>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue';
  import HeaderEstu from './HeaderEstu.vue';
  import HeaderProfe from './HeaderProfe.vue';
  import HeaderAdmin from './HeaderAdmin.vue';
  </script>
  
  <style scoped>
  .seccion {
    display: flex;
    flex-direction: column;
  }
  
  h1 {
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
  
  /* Media Query para pantallas pequeñas */
  @media (max-width: 768px) {
    .news-item {
      flex: 1 1 100%;
    }
  
    .news-container {
      display: block;
    }
  }
  </style>
  