$(function() {
    $(".navbar-toggler").on("click", function(e) {
        $(".header").toggleClass("show");
        e.stopPropagation();
      });
    
      $("html").click(function(e) {
        var header = document.getElementById("header");
        var close = document.getElementById("menu-close");
    
        if (!header.contains(e.target)) {
          $(".header").removeClass("show");
        }
      });
    
      $("#nav .nav-link").click(function(e) {
        $(".header").removeClass("show");
      });
});