// Próximamente.
document.addEventListener("DOMContentLoaded", () => {
  const asideTemplate = `
                <section class="aside__user-info">
                    <!--Información general del usuario.-->
                    <div class="user-info__general">
                            <div class="user-info__container-image">
                                <img src="assets/img/default-user.jpg" alt="" class="user-info__image"/>
                                <!-- La sombra de la imagen se agrega aquí con ::after-->
                            </div>
                            <h2 class="user-info__name">Gabriel Orellana Vásquez</h2>
                            <div class="user-info__job">Desarrollador Web</div>
                    </div>
                    <!--Menú de navegación.-->
                    <nav class="layout__menu">
                        <ul class="menu__list">
                            <li class="menu__option">
                                <a href="index.html" class="menu__link">
                                    <i class="menu__icon fa-solid fa-house"></i>
                                    <span class="menu__overlay">Home</span>
                                </a>                            
                            </li>

                            <li class="menu__option">
                                <a href="sobre-mi.html" class="menu__link">
                                    <i class="menu__icon fa-solid fa-user"></i>
                                    <span class="menu__overlay">Sobre mí</span>
                                </a>                            
                            </li>

                            <li class="menu__option">
                                <a href="curriculum.html" class="menu__link">
                                    <i class="menu__icon fa-solid fa-graduation-cap"></i>
                                    <span class="menu__overlay">Curriculum</span>
                                </a>                            
                            </li>

                            <li class="menu__option">
                                <a href="portafolio.html" class="menu__link">
                                    <i class="menu__icon fa-solid fa-briefcase"></i>
                                    <span class="menu__overlay">Portafolio</span>
                                </a>
                            </li>

                            <li class="menu__option">
                                <a href="blog.html" class="menu__link menu__link--active">
                                    <i class="menu__icon fa-solid fa-book"></i>
                                    <span class="menu__overlay">Blog</span>
                                </a>                            
                            </li>

                            <li class="menu__option">
                                <a href="contacto.html" class="menu__link">
                                    <i class="menu__icon fa-solid fa-envelope"></i>
                                    <span class="menu__overlay">Contacto</span>
                                </a>                            
                            </li>
                        </ul>
                    </nav>

                    <!--Links a redes sociales.-->
                    <div class="user-info__user-links">

                        <ul class="user-links__social">
                            <li class="social__option">
                                <a href="https://www.linkedin.com/in/gabriel-orellana-vasquez/" class="social__link" target="_blank">
                                    <i class="social__icon fa-brands fa-linkedin"></i>
                                </a>
                            </li>

                            <li class="social__option">
                                <a href="https://github.com/gabrielleSoftwareDeveloper" class="social__link" target="_blank">
                                    <i class="social__icon fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <!--Botón del currículum.-->
                    <div class="user-info__buttons">
                        <a href="assets/documents/Curriculum_01_2025_Gabriel_Orellana_SD.pdf" class="user-info__btn" target="_blank">
                            Descargar CV
                        </a>
                    </div>

                    <!--Pie de página.-->
                    <footer class="user-info__footer">
                       &copy; 2024 Gabriel Orellana Vásquez 
                    </footer>

                </section>`;
  
  // Adición del navegador en sus correspondientes contenedores.
      document.querySelector(".layout__aside").innerHTML = asideTemplate;
  });