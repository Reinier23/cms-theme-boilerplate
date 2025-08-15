(function(){
  "use strict";

  function qs(selector, scope){ return (scope || document).querySelector(selector); }
  function qsa(selector, scope){ return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }

  function setCSSVar(name, value){ document.documentElement.style.setProperty(name, value); }

  // Apply theme settings from HubL via inline style variables if present
  // (Handled in partials/head-meta.html). This remains as helper only.

  // Accessible mobile nav toggle
  function initNav(){
    var toggle = qs('[data-nav-toggle]');
    var nav = qs('[data-primary-nav]');
    if(!toggle || !nav) return;
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
      nav.classList.toggle('is-open', !expanded);
    });
  }

  // Simple accessible carousel for featured items
  function initCarousel(){
    qsa('[data-carousel]').forEach(function(carousel){
      var track = qs('[data-carousel-track]', carousel);
      var prev = qs('[data-carousel-prev]', carousel);
      var next = qs('[data-carousel-next]', carousel);
      if(!track || !prev || !next) return;

      function scrollBySlide(dir){
        var slide = qs('[data-carousel-slide]', carousel);
        var amount = slide ? slide.getBoundingClientRect().width + 16 : 300;
        track.scrollBy({left: dir * amount, behavior: 'smooth'});
      }

      prev.addEventListener('click', function(){ scrollBySlide(-1); });
      next.addEventListener('click', function(){ scrollBySlide(1); });
    });
  }

  // Placeholder SVG generator for missing/broken images
  function generatePlaceholderSVG(title, width, height){
    var w = width || 800, h = height || 450;
    var bg = '#FFEDE7';
    var fg = '#B71C1C';
    var text = (title || 'Placeholder').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 "+w+" "+h+"' width='"+w+"' height='"+h+"'>"+
      "<defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='#FFEDE7'/><stop offset='100%' stop-color='#FFFFFF'/></linearGradient></defs>"+
      "<rect width='100%' height='100%' fill='url(#g)'/>"+
      "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='32' fill='"+fg+"' opacity='0.9'>"+text+"</text>"+
      "</svg>";
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  // Attach error listeners to images with data-fallback
  function initImageFallbacks(){
    qsa('img[data-fallback]').forEach(function(img){
      img.addEventListener('error', function(){
        var title = img.getAttribute('alt') || img.getAttribute('data-title') || 'Spicy Dish';
        var w = parseInt(img.getAttribute('width')) || 800;
        var h = parseInt(img.getAttribute('height')) || 450;
        img.src = generatePlaceholderSVG(title, w, h);
      }, { once: true });
    });
  }

  // Export a tiny API for other modules
  window.SpicySpoon = {
    generatePlaceholderSVG: generatePlaceholderSVG
  };

  document.addEventListener('DOMContentLoaded', function(){
    initNav();
    initCarousel();
    initImageFallbacks();
  });
})();