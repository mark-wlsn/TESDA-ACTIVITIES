document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top'
  });

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
  });

  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
    hover: false,
  });

  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {

  });

  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    height: 450,
    interval: 3000
  });

  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {
    autoClose: true
  });

  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, {
    autoClose: true,

  });

  var elems = document.querySelectorAll('.chips');
  var instances = M.Chips.init(elems, {

  });

  var elems = document.querySelectorAll('.chips-initial');
  var instances = M.Chips.init(elems, {
    data: [{
      tag: 'Apple',
    }, {
      tag: 'Microsoft',
    }, {
      tag: 'Google',
    }],
  });

  var elems = document.querySelectorAll('.chips-placeholder');
  var instances = M.Chips.init(elems, {
    placeholder: 'Enter a tag',
    secondaryPlaceholder: 'Add Tag'

  });

  var elems = document.querySelectorAll('.chips-autocomplete');
  var instances = M.Chips.init(elems, {
    autocompleteOptions: {
      data: {
        'Apple': null,
        'Microsoft': null,
        'Google': null
      },
      limit: 10,
      minLength: 1
    }
  });
});
