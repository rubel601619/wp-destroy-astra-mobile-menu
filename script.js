(function ($) {
   const destroyMenu = () => {
      const openMobileMenu = $(".main-header-bar-navigation");
      $("body").on("click", function (e) {
         const isClickOnToggle = $(e.target).closest(".menu-toggle").length;
         const isClickInsideMenu = $(e.target).closest(".main-header-bar-navigation").length;

         if (openMobileMenu.hasClass("toggle-on") && !isClickOnToggle && !isClickInsideMenu) {
            $(".menu-toggle").click(); // Close menu
         }
      });
   };
   

   $(document).ready(function () {
      destroyMenu();
      $("body").on("click", ".main-header-bar-navigation", function (e) {
         e.stopPropagation();
      });
   });
   
})(jQuery);
