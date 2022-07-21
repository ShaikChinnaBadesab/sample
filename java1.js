(function ($) {
  "use-strict";
  if ($("typed-text").length == 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new typed(".typed-text-output", {
      stringds: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }
})(JQuery);
