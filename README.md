# Parallax.js

Parallax.js is a simple javascript library that makes objects in your page move smooth on page scroll.

## Installation

In order to make everything works, you have to import jquery in your project.

If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

Then you have to download the source code and add the file "parallax.js" in your project.

## Usage

Call the **parallax()** function in yor main javascript file, in the *window.scroll()*:

```javascript
$(window).scroll(function () {
  parallax();
});
```
If you want to change the speed of the objects' movement, just add the **data attribute _speed_:**

```html
<img class="big-rose parallax" data-speed="0.2" src="./img/big-rose.png" alt="big-rose">
```

The values can range from _0_ to _0.3_. Default value is _0.3_.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.