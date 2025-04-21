<template>

  <header class="header">
          <div class="header-left">
              <img src="../assets/img/logo uni.png" alt="Universidad Colegio Mayor De Cundinamarca" class="logo">
          </div>
          <div class="header-center">
              <nav>
                  <ul class="nav-list">
                      <li><a><router-link to="/administrador">Inicio</router-link></a></li>
                      <li><a><router-link to="/gestion_casos_admin">Gestion_Casos</router-link></a></li>
                      <li><a><router-link to="/recursos_admin">Gestion_Recursos</router-link></a></li>
                      <li><a><router-link to="/crudusers">Gestion_Usuarios</router-link></a></li>
                      <li><a href="https://www.unicolmayor.edu.co/">Universidad</a></li>
                  </ul>
              </nav>
          </div>
          <div class="header-right">
              <div class="auth-buttons">
                  <a class="register-btn"><router-link to="/home">Cerrar Sesion</router-link></a>
              </div>
          </div>
      </header>
  
  </template>
  
  <style>
  body {
      margin: 0;
      font-family: Arial, sans-serif;
  }
  
  .header {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding: 10px 20px;
      box-shadow: 0px 4px 6px rgba(23, 21, 179, 0.1);
  }
  .logo {
      margin-left: 10%;
      height: 90px;
      width: 250px;
  }
  
  .header-center {
      flex: 2.9;
      text-align: center;
  }
  
  .nav-list {
      list-style: none;
      margin: 0;
      margin-top: 21px;
      margin-left: 170px;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 20px;
  }
  
  .nav-list li {
      display: inline;
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
      height: 3px; /* Ajusta el grosor de la línea */
      left: 0;
      bottom: -5px; /* Controla la distancia entre el texto y la línea */
      background-color: rgb(230, 199, 0); /* Color de la línea */
      transition: width 0.3s ease;
  }
  
  .nav-list a:hover::after {
      width: 100%;
  }
  
  .nav-list a:hover {
      color: rgb(139, 0, 0);
  }
  
  .header-right {
      flex: 1;
      text-align: right;
  }
  
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
    margin-left: 130px;
      background-color: #ff0000c0;
  }

  a{
    color: white;
  }
  
  .register-btn:hover {
      background-color: #f55757;
      transform: scale(1.1); 
  }
  
 
  </style>