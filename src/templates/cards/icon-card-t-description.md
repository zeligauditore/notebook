# Icon, Title & Description

<img :src="$withBase('/img/cards/icon-card-title-desc.gif')">

## Código HTML
```html
<!-- Card With Icon, Title & Description Styles -->    
    <div class="container my-5">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="icon-card-title-description">
                    <i class="fa-solid fa-money-bills"></i>
                    <div class="card-icon-body">
                        <h3 class="title">Lorem, ipsum.</h3>
                        <p>
                            Consectetuer adipiscing elit, sed diam nonummy
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="icon-card-title-description">
                    <i class="fa-solid fa-hand-holding-medical"></i>
                    <div class="card-icon-body">
                        <h3 class="title">Lorem, ipsum.</h3>
                        <p>
                            Consectetuer adipiscing elit, sed diam nonummy
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="icon-card-title-description">
                    <i class="fa-solid fa-stopwatch"></i>
                    <div class="card-icon-body">
                        <h3 class="title">Lorem, ipsum.</h3>
                        <p>
                            Consectetuer adipiscing elit, sed diam nonummy
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="icon-card-title-description">
                    <i class="fa-brands fa-rocketchat"></i>
                    <div class="card-icon-body">
                        <h3 class="title">Lorem, ipsum.</h3>
                        <p>
                            Consectetuer adipiscing elit, sed diam nonummy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- Card With Icon, Title & Description Styles -->
```

## Código SCSS
```scss
/* Card With Icon, Title & Description Styles */
.icon-card-title-description{
    padding: 30px;
    color: #1b2940;
    text-align: center;
    transition: all 0.5s ease-out;
    border-radius: 20px 0px 20px 0px;
  
    box-shadow: 3px 3px 11px 0px rgba(0,0,0,0.68);
    -webkit-box-shadow: 3px 3px 11px 0px rgba(0,0,0,0.68);
  
    i{
      font-size: 5rem;
      margin-bottom: 30px;
    }
  
    .card-icon-body{
      .title{
        font-weight: bold;
        font-size: 1.7rem !important;
        transition: all 0.5s ease-out;
      }
    }

    &:hover{
        color: white !important;
        background-color: #d01000;
        transition: all 0.5s ease-out;
      
        .card-icon-body{
          .title{
            color: white !important;
            transition: all 0.5s ease-out;
          }
        }
    }
}
/* Card With Icon, Title & Description Styles */
```

## Código CSS
```css
/* Card With Icon, Title & Description Styles */
.icon-card-title-description {
  padding: 30px;
  color: #1b2940;
  text-align: center;
  transition: all 0.5s ease-out;
  border-radius: 20px 0px 20px 0px;
  box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.68);
}
.icon-card-title-description i {
  font-size: 5rem;
  margin-bottom: 30px;
}
.icon-card-title-description .card-icon-body .title {
  font-weight: bold;
  font-size: 1.7rem !important;
  transition: all 0.5s ease-out;
}
.icon-card-title-description:hover {
  color: white !important;
  background-color: #d01000;
  transition: all 0.5s ease-out;
}
.icon-card-title-description:hover .card-icon-body .title {
  color: white !important;
  transition: all 0.5s ease-out;
}

/* Card With Icon, Title & Description Styles */
```