
# Bootstrap Cheatsheet

Welcome to the Bootstrap 5.0 cheatsheet. This sheet is perfect for beginners and amatuers.

Please do refer the documentation [here](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

Let's get started!

# Basics
The first thing to know about Bootstrap is that its a CSS framework and it's main function is to make the website responsive without the need of using media queries.

It is possible through pre-defined CLASSES by the creators of Bootstrap.

For example, the class ```.text-center``` when used in a div, automatically centers it.

So easy and simple right? Well that's just scratching the surface.

# How to get started

Start your ```index.html``` with this boilerplate code.

```<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
```
This includes the bootstrap CSS and required Javascript inbuilt code.

# Containers

Containers are basically responsive divs and are extremely useful.

Bootstrap comes with three different containers:

* ```.container```, which sets a max-width at each responsive breakpoint

* ```.container-{breakpoint}```, which is width: 100% until the specified breakpoint

* ```.container-fluid```, which is width: 100% at all breakpoints

# Grid

The grid system is the foundation of Bootstrap. Basically, the entire website is broken into rows and columns

```
<div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
</div>
```
This code creates a row which is divided into two equally sized columns.

# Typography

The ```.display``` class is used to create big headings that look great on a website and automatically change its font size according to the sceen size.
```
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```
# Images

* Images in Bootstrap are made responsive with ```.img-fluid```. This applies ```max-width: 100%;``` and ```height: auto;``` to the image so that it scales with the parent width.

* To make an image into a thumbnail, use ```img-thumbnail```

* To make your image's edges rounded, use ```.rounded``` class.

# Tables

Basic template of a responsive table in Bootstrap:
```
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">New</th>
      <th scope="col">Old</th>
      <th scope="col">Present</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Marcus</td>
      <td>Ottoman</td>
      <td>Matt</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jack</td>
      <td>Thorn</td>
      <td>Brick</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry</td>
      <td>Nord</td>
    </tr>
  </tbody>
</table>
```
# Buttons

Buttons are really pretty and clean in Bootstrap.There are default colours available but they can easily be changed with CSS.

```<button type="button" class="btn btn-primary">Primary</button>```

This button creates a blue colored button.

# Cards

Cards are useful to segregate content. Cards can have images,buttons and so on.

```
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

# Carousel

Last but certainly not the least, carousels are sections of images that can be scrolled through horizontally.

```
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```
# End Note

Well, that is enough to start off with Bootstrap or refer to it if needed. Thanks for reading!
