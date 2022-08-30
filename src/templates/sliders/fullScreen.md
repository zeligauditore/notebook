# Full Screen Slider

::: tip Slick Slider
Ver más opciones de configuración en la [página oficial](https://kenwheeler.github.io/slick/)
:::

<img :src="$withBase('/img/slickSlider/fullScreen-Slider.gif')">

<img :src="$withBase('/img/separador.png')">

## Código Html

```html
<!-- Start FullScreen Slider -->
<div class="slider">
  <!-- Start Slider Item -->
  <div class="reel img-slider-1">
    <!-- Start Content Slider -->
    <div class="content">
      <div class="container p-3">
        <div class="row">
          <div class="col-8">
            <h1>Lorem ipsum dolor sit.</h1>
            <p class="slider-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              magni excepturi nihil laboriosam commodi quis, officiis minima
              aliquid natus exercitationem quisquam ratione repellendus
              consequuntur et maiores. Porro sint numquam iste.
            </p>
            <button type="button" class="btn btn-light">Light</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content Slider -->
  </div>
  <!-- End Slider Item -->
</div>
<!-- End FullScreen Slider -->
```

## Código SCSS

```scss
/* Start FullScreen Slider */
.slider {
  /* BackGround Image Slides */
  .img-slider-1 {
    background-image: url("img/3.png");
  }
  .img-slider-2 {
    background-image: url("/img/2.jpg");
  }
  .img-slider-3 {
    background-image: url("/img/1.jpg");
  }
  .img-slider-4 {
    background-image: url("/img/4.jpg");
  }

  /* Slider Items Styles */
  .reel {
    margin-top: 0px !important;
    width: 100%;
    height: 100vh;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      background-color: rgba(0, 0, 0, 0.47);
      color: white;
    }
  }

  /* Arrow Styles */
  .PrevArrow,
  .NextArrow {
    position: absolute;
    top: 50vh;
    z-index: 1;
    background-color: transparent;
    background: none;
    border: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .PrevArrow {
    margin-left: 20px;
  }
  .NextArrow {
    right: 20px;
  }

  .PrevArrow::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f104";
    color: white;
    font-size: 4rem;
  }
  .NextArrow::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f105";
    color: white;
    font-size: 4rem;
  }
  /* Arrow Styles */
}
/* End FullScreen Slider */
```

## Código JS

```js
// FullScreen Slider
$(".slider").slick({
  centerPadding: "0px", // Remove left & right padding (Default 50px)
  pauseOnFocus: true, // Pause AutoSlide on Focus
  pauseOnHover: false, // Pause AutoSlide on Hover
  draggable: true,
  autoplay: true,
  autoplaySpeed: 2000, // Time to Change Slider Items
  speed: 600,
  centerMode: true,
  dots: false, // Enable Dots
  slidesToShow: 1, // Slider Items to Show
  infinite: true,
  // Enable Arrows
  arrows: true,
  prevArrow: '<button class="PrevArrow"></button>', // Set Preview Arrow Button
  nextArrow: '<button class="NextArrow"></button>', // Set Next Arrow Button
  // Enable Arrows
  lazyLoad: "progressive",
});
```
