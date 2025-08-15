(function(){
  "use strict";

  if(!document.querySelector('[data-filter-listing]')) return;

  function parseForm(form){
    var data = new FormData(form);
    var params = new URLSearchParams();
    data.forEach(function(value, key){
      if(value !== '' && value !== 'any') params.set(key, value);
    });
    return params;
  }

  function applyFilters(params){
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-recipe-card]'));
    var count = 0;
    cards.forEach(function(card){
      var cuisine = card.getAttribute('data-cuisine') || '';
      var heat = card.getAttribute('data-heat') || '';
      var method = card.getAttribute('data-method') || '';
      var time = parseInt(card.getAttribute('data-time') || '0');
      var diet = card.getAttribute('data-diet') || '';

      var ok = true;
      if(params.get('cuisine') && params.get('cuisine') !== cuisine) ok = false;
      if(params.get('heat') && params.get('heat') !== heat) ok = false;
      if(params.get('method') && params.get('method') !== method) ok = false;
      var maxTime = parseInt(params.get('time') || '0');
      if(maxTime && time && time > maxTime) ok = false;
      if(params.get('diet') && params.get('diet') !== diet) ok = false;

      card.style.display = ok ? '' : 'none';
      if(ok) count++;
    });

    var out = document.querySelector('[data-filter-count]');
    if(out) out.textContent = String(count);

    // Empty state
    var empty = document.querySelector('[data-no-results]');
    if(empty) empty.hidden = count !== 0;
  }

  function syncURL(params){
    var url = new URL(window.location.href);
    url.search = params.toString();
    window.history.replaceState({}, '', url.toString());
  }

  var form = document.querySelector('[data-filter-form]');
  if(!form) return;

  form.addEventListener('input', function(){
    var params = parseForm(form);
    applyFilters(params);
    syncURL(params);
  });

  // Initial apply from existing query params
  var initial = new URLSearchParams(window.location.search);
  if(initial.toString()){
    // populate form
    initial.forEach(function(value, key){
      var el = form.elements.namedItem(key);
      if(el) el.value = value;
    });
    applyFilters(initial);
  }
})();