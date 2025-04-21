<template>
    <header class="header">
      <!-- Menú hamburguesa -->
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
            <li><router-link to="/home">Inicio</router-link></li>
            <li><router-link to="/quienesomos">Sobre Nosotros</router-link></li>
            <li><a href="https://www.unicolmayor.edu.co/">Universidad</a></li>
          </ul>
        </nav>
      </div>
  
      <!-- Botones de autenticación -->
      <div class="header-right">
        <div class="auth-buttons">
          <router-link to="/insertar" class="register-btn">Registrarse</router-link>
          <router-link to="/login" class="login-btn">Iniciar Sesión</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  /* Estilo general */
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .header {
    font-family: Arial, Helvetica, sans-serif;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 0 20px;
    box-shadow: 0px 4px 6px rgba(23, 21, 179, 0.1);
    position: relative; /* Asegura que el menú esté contenido dentro del header */
    z-index: 1000; /* Garantiza que el header esté encima de otros elementos */
  }
  
  .logo {
    height: 60px;
    width: auto;
    margin-right: 20px;
  }
  
  /* Botón del menú hamburguesa */
  .menu-icon {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-right: 20px;
  }
  
  .menu-icon div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 4px 0;
  }
  
  /* Estilos para la navegación */
  .nav-list {
    left: 150px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative; /* Asegura su relación con el header */
    z-index: 1100; /* Asegura que esté encima del fondo o contenido */
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
  
  /* Botones de autenticación */
  .auth-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  .auth-buttons a {
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .register-btn {
    background-color: #ffd900;
    color: white;
  }
  
  .register-btn:hover {
    background-color: #7e7e7e;
    transform: scale(1.1);
  }
  
  .login-btn {
    width: 105px;
    margin-right: 20px;
    background-color: #ffd900;
    color: white;
  }
  
  .login-btn:hover {
    background-color: #7e7e7e;
    transform: scale(1.1);
  }
  
  /* Menú móvil */
  @media (max-width: 768px) {
    .menu-icon {
      display: flex;
    }
  
    .nav-list {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: white;
      padding: 20px 0;
      text-align: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 2000; /* Asegura que esté encima del contenido principal */
    }
  
    .nav-list.active {
      display: flex;
    }
  }
  </style>
  