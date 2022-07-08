# Imagen como Background

## Items centrados y logo al centro

<img :src="$withBase('/img/navbars/nav-bg-img.gif')">

## SASS

```sass
  img {
    max-width: 100%;
    height: auto;
  }

  .navigation {
    top: 0px !important;
    height: 200px;
    z-index: 99;
    margin-top: 0px !important;
  }

  .brand {
    position: absolute;
    padding-left: 20px;
    float: left;
    line-height: 70px;
    text-transform: uppercase;
    font-size: 1.4em;

    img{
      width: 130px;
    }
  }
  .brand a,
  .brand a:visited {
    color: black;
    text-decoration: none;
  }

  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  nav ul {
    list-style: none;
    margin: -10px;
    padding: 10px;
  }
  nav ul li {
    float: left;
    position: relative;
  }
  nav ul li a,
  nav ul li a:visited {
    display: block;
    padding: 0 20px;
    text-decoration: none;
  }

  nav ul li a:not(:only-child):after,
  nav ul li a:visited:not(:only-child):after {
    padding-left: 4px;
    content: " ▾";
  }
  nav ul li ul li {
    min-width: 190px;
  }
  nav ul li ul li a {
    padding: 15px;
    line-height: 20px;
  }

  /* Mobile navigation */
  .nav-mobile {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: #212121;
    height: 70px;
    width: 70px;
  }


  @media only screen and (max-width: 798px) {
    .navigation{
      background-image: url("/img/header_background.png");
      -webkit-background-image: url("/img/header_background.png");
      -moz-background-image: url("/img/header_background.png");
      -o-background-image: url("/img/header_background.png");
      -ms-background-image: url("/img/header_background.png");
      background-size:cover;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      -ms-background-size:cover;
      background-repeat: no-repeat;
      width: 100%;
      padding: 10px;
      position: absolute;

      .mobile-brand{
        position: absolute;
        padding: 20px;
      }

    }

    .nav-mobile {
      display: block;
      a{
        left: 0px !important;
        top: 35px !important;
      }
    }

    nav {
      width: 100%;
      padding: 70px 0 15px;

      .br-hide{
        display: none;
      }

    }
    nav ul {
      display: none;
      background-color: #212121;
    }
    nav ul li {
      float: none;
      text-align: center;
    }
    nav ul li a {
      padding: 15px;
      line-height: 20px;
      color: white;
    }
    nav ul li ul li a {
      padding-left: 30px;
    }
  }


  @media screen and (min-width: 799px) {

    .mobile-brand{
      display: none;
    }

    .nav{
      display: flex;
      justify-content: center;
    }

    .resize-nav{
      height: 90px !important;

      img{
        width: 50px;
      }
    }

    .navigation,
    .nav-mobile{
      background-image: url("/img/header_background.png");
      -webkit-background-image: url("/img/header_background.png");
      -moz-background-image: url("/img/header_background.png");
      -o-background-image: url("/img/header_background.png");
      -ms-background-image: url("/img/header_background.png");
      background-size:cover;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      -ms-background-size:cover;
      background-repeat: no-repeat;
      width: 100%;
      padding: 10px;
      position: fixed;

    transition:all 0.2s ease-in-out 0.2s;
    -webkit-transition:all 0.2s ease-in-out 0.2s;
    -moz-transition:all 0.2s ease-in-out 0.2s;
    -o-transition:all 0.2s ease-in-out 0.2s;
    -ms-transition:all 0.2s ease-in-out 0.2s;

      img{
        transition:all 0.2s ease-in-out 0.2s;
        -webkit-transition:all 0.2s ease-in-out 0.2s;
        -moz-transition:all 0.2s ease-in-out 0.2s;
        -o-transition:all 0.2s ease-in-out 0.2s;
        -ms-transition:all 0.2s ease-in-out 0.2s;
      }

      nav ul li a,
      nav ul li a:visited{
        font-size: 1.3em;
      }

      .nav-link{
        color: white;
      }
      .nav-item{
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
        transition: all 0.4s ease !important;
        -webkit-transition: all 0.4s ease !important;
        -moz-transition: all 0.4s ease !important;
        -o-transition: all 0.4s ease !important;
        -ms-transition: all 0.4s ease !important;
      }

      .active,
      .nav-hover:hover{
        background-color: azure;
        a{
          color: #E53F95 !important;
        }
      }

    }

    .nav-list {
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
  }
  #nav-toggle {
    position: absolute;
    left: 18px;
    top: 22px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;
  }
  #nav-toggle span,
  #nav-toggle span:before,
  #nav-toggle span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: "";
    transition: all 300ms ease-in-out !important;
    -webkit-transition: all 300ms ease-in-out !important;
    -moz-transition: all 300ms ease-in-out !important;
    -o-transition: all 300ms ease-in-out !important;
    -ms-transition: all 300ms ease-in-out !important;
  }
  #nav-toggle span:before {
    top: -10px;
  }
  #nav-toggle span:after {
    bottom: -10px;
  }
  #nav-toggle.active span {
    background-color: transparent;
  }
  #nav-toggle.active span:before, #nav-toggle.active span:after {
    top: 0;
  }
  #nav-toggle.active span:before {
    transform: rotate(45deg);
  }
  #nav-toggle.active span:after {
    transform: rotate(-45deg);
  }
```

<img :src="$withBase('/img/separador.png')">

## CSS

```css
img {
  max-width: 100%;
  height: auto;
}

.navigation {
  top: 0px !important;
  height: 200px;
  z-index: 99;
  margin-top: 0px !important;
}

.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: 70px;
  text-transform: uppercase;
  font-size: 1.4em;
}

.brand img {
  width: 130px;
}

.brand a,
.brand a:visited {
  color: black;
  text-decoration: none;
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
}

nav ul {
  list-style: none;
  margin: -10px;
  padding: 10px;
}

nav ul li {
  float: left;
  position: relative;
}

nav ul li a,
nav ul li a:visited {
  display: block;
  padding: 0 20px;
  text-decoration: none;
}

nav ul li a:not(:only-child):after,
nav ul li a:visited:not(:only-child):after {
  padding-left: 4px;
  content: " ▾";
}

nav ul li ul li {
  min-width: 190px;
}

nav ul li ul li a {
  padding: 15px;
  line-height: 20px;
}

/* Mobile navigation */
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: #212121;
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 798px) {
  .navigation {
    background-image: url("/img/header_background.png");
    -webkit-background-image: url("/img/header_background.png");
    -moz-background-image: url("/img/header_background.png");
    -o-background-image: url("/img/header_background.png");
    -ms-background-image: url("/img/header_background.png");
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 10px;
    position: absolute;
  }
  .navigation .mobile-brand {
    position: absolute;
    padding: 20px;
  }
  .nav-mobile {
    display: block;
  }
  .nav-mobile a {
    left: 0px !important;
    top: 35px !important;
  }
  nav {
    width: 100%;
    padding: 70px 0 15px;
  }
  nav .br-hide {
    display: none;
  }
  nav ul {
    display: none;
    background-color: #212121;
  }
  nav ul li {
    float: none;
    text-align: center;
  }
  nav ul li a {
    padding: 15px;
    line-height: 20px;
    color: white;
  }
  nav ul li ul li a {
    padding-left: 30px;
  }
}

@media screen and (min-width: 799px) {
  .mobile-brand {
    display: none;
  }
  .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .resize-nav {
    height: 90px !important;
  }
  .resize-nav img {
    width: 50px;
  }
  .navigation,
  .nav-mobile {
    background-image: url("/img/header_background.png");
    -webkit-background-image: url("/img/header_background.png");
    -moz-background-image: url("/img/header_background.png");
    -o-background-image: url("/img/header_background.png");
    -ms-background-image: url("/img/header_background.png");
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 10px;
    position: fixed;
    transition: all 0.2s ease-in-out 0.2s;
    -webkit-transition: all 0.2s ease-in-out 0.2s;
    -moz-transition: all 0.2s ease-in-out 0.2s;
    -o-transition: all 0.2s ease-in-out 0.2s;
    -ms-transition: all 0.2s ease-in-out 0.2s;
  }
  .navigation img,
  .nav-mobile img {
    transition: all 0.2s ease-in-out 0.2s;
    -webkit-transition: all 0.2s ease-in-out 0.2s;
    -moz-transition: all 0.2s ease-in-out 0.2s;
    -o-transition: all 0.2s ease-in-out 0.2s;
    -ms-transition: all 0.2s ease-in-out 0.2s;
  }
  .navigation nav ul li a,
  .navigation nav ul li a:visited,
  .nav-mobile nav ul li a,
  .nav-mobile nav ul li a:visited {
    font-size: 1.3em;
  }
  .navigation .nav-link,
  .nav-mobile .nav-link {
    color: white;
  }
  .navigation .nav-item,
  .nav-mobile .nav-item {
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    transition: all 0.4s ease !important;
    -webkit-transition: all 0.4s ease !important;
    -moz-transition: all 0.4s ease !important;
    -o-transition: all 0.4s ease !important;
    -ms-transition: all 0.4s ease !important;
  }
  .navigation .active,
  .navigation .nav-hover:hover,
  .nav-mobile .active,
  .nav-mobile .nav-hover:hover {
    background-color: azure;
  }
  .navigation .active a,
  .navigation .nav-hover:hover a,
  .nav-mobile .active a,
  .nav-mobile .nav-hover:hover a {
    color: #e53f95 !important;
  }
  .nav-list {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
}

#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: white;
  position: absolute;
  display: block;
  content: "";
  transition: all 300ms ease-in-out !important;
  -webkit-transition: all 300ms ease-in-out !important;
  -moz-transition: all 300ms ease-in-out !important;
  -o-transition: all 300ms ease-in-out !important;
  -ms-transition: all 300ms ease-in-out !important;
}

#nav-toggle span:before {
  top: -10px;
}

#nav-toggle span:after {
  bottom: -10px;
}

#nav-toggle.active span {
  background-color: transparent;
}

#nav-toggle.active span:before,
#nav-toggle.active span:after {
  top: 0;
}

#nav-toggle.active span:before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-toggle.active span:after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
```

<img :src="$withBase('/img/separador.png')">

## JS

```js
$(document).ready(function () {
  function checkScroollMenu() {
    if ($(window).scrollTop() > 100) {
      // $('#main-header').addClass('fixed-top');
      $("#main-header").addClass("resize-nav");
    } else {
      // $('#main-header').removeClass('fixed-top');
      $("#main-header").removeClass("resize-nav");
    }
  }

  checkScroollMenu();

  $(window).scroll(function () {
    checkScroollMenu();
  });
});

(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
```

<img :src="$withBase('/img/separador.png')">

## Configuraciones extras

### Cambiar la posición de los items horizontalmente

Modificar la propiedad `justify-content` dentro del selector `.nav-list` utilizando [flexbox](https://zeligauditore.github.io/notebook/guide/css/flexbox.html#justify-content) para cambiar la posición de los items (izquierda, derecha, etc.)

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

```css{4}
.nav-list {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
```
