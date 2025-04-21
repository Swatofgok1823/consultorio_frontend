<template>
    <header class="header">
      <!-- Botón Menú Hamburguesa -->
      <div class="menu-icon" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
  
      <!-- Logo -->
      <div class="header-left">
        <img src="../assets/img/logo uni.png" alt="Universidad Colegio Mayor De Cundinamarca" class="logo">
      </div>
  
      <!-- Navegación -->
      <div class="header-center">
        <nav>
          <ul class="nav-list" :class="{ active: isMenuOpen }">
            <li><router-link to="/profesor">Inicio</router-link></li>
            <li><router-link to="/recursos">Recursos</router-link></li>
            <li><router-link to="/gestion_casos_profe">Gestión Casos</router-link></li>
            <li><a href="https://www.unicolmayor.edu.co/">Universidad</a></li>
          </ul>
        </nav>
      </div>
  
      <!-- Botones de autenticación -->
      <div class="header-right">
        <div class="auth-buttons">
          <a class="register-btn"><router-link to="/home">Cerrar Sesion</router-link></a>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  /* Header container */
  .header {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0px 4px 6px rgba(23, 21, 179, 0.1);
    height: 80px;
    position: relative;
    z-index: 1000;
  }
  
  /* Logo */
  .logo {
    height: 60px;
    width: auto;
    margin-left: 10px;
  }

  .header-center{
    margin-left: 200px;
  }
  
  
  /* Menu icon */
  .menu-icon {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-right: 15px;
  }
  
  .menu-icon div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 4px 0;
    transition: transform 0.3s ease;
  }
  
  /* Navigation menu */
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }
  
  .nav-list li {
    display: inline-block;
  }
  
  .nav-list a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 8px 12px;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .nav-list a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    left: 0;
    bottom: -5px;
    background-color: rgb(230, 199, 0);
    transition: width 0.3s ease;
  }
  
  .nav-list a:hover::after {
    width: 100%;
  }
  
  .nav-list a:hover {
    color: darkblue;
  }
  
  /* Auth buttons */
  .auth-buttons {
    display: flex;
    gap: 10px;
  }
  
  .auth-buttons a {
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  }
  
  .register-btn {
    margin-left: 120px;
      background-color:  #ff0000c0;
  }

  a{
    color: white;
  }
  
  .register-btn:hover {
      background-color: #f55757;
      transform: scale(1.1); 
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
  .header {
    flex-wrap: wrap;
    justify-content: space-between; /* Distribuir los elementos de forma uniforme */
    align-items: center; /* Centrar verticalmente los elementos */
    padding: 10px; /* Mantener padding para espacio extra */
  }

  .menu-icon {
    position: absolute;
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;
    width: 100%; /* Mantener el ícono en línea completa */
    padding-left: 10px; /* Espacio a la izquierda */
  }

  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }

  .nav-list.active {
    display: flex;
  }

  .logo {
    display: none; /* Ocultar el logo en pantallas pequeñas */
  }

  .auth-buttons {
    display: flex;
    justify-content: space-between; /* Alinear los botones al lado */
    width: 100%; /* Ocupan toda la línea */
    gap: 10px; /* Espacio entre botones */
    margin-top: 10px;
    flex-wrap: nowrap; /* Asegura que los botones estén en línea, sin apilarse */
  }

  .auth-buttons a {
    font-size: 14px; /* Tamaño de texto ajustado */
    width: calc(20% - 20px); /* Ajuste dinámico del ancho */
    min-width: 100px; /* Ancho mínimo para evitar que se encojan demasiado */
  }
}

  </style>
  