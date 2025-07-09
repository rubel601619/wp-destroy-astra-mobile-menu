# WP Destroy Astra Mobile Menu

This lightweight WordPress plugin automatically closes the **Astra theme's mobile menu** when users click outside of the menu area. It’s ideal for improving UX on touch devices and ensuring mobile navigation behaves as expected.

## 🔧 Features

- Automatically closes Astra mobile menu on outside click
- Prevents accidental infinite loops and stack overflows
- No additional configuration needed
- Clean, jQuery-based logic

## 📦 Installation

1. Download or clone the repository:
   ```bash
   git clone https://github.com/your-username/wp-destroy-astra-mobile-menu.git

1. Copy the script and paste it where you exactly want
```javascript
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
