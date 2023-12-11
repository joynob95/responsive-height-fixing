$(document).ready(function(){



///////////////////////////////////////////////////////////////////
      // Function to initialize Slick slider
      function initializeSlider() {
        $('.wrapper').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1
        });
      }

      // Function to destroy Slick slider
      function destroySlider() {
        $('.wrapper').slick('unslick');
      }

      // Function to handle media query changes
      function handleMediaQuery() {

        const tabletQuery = window.matchMedia("(max-width: 1150px) and (max-height: 860px)");
        const tablet2Query = window.matchMedia("(max-width: 880px) and (max-height: 510px)");
        const tablet3Query = window.matchMedia("(max-width: 780px) and (max-height: 500px)");
        const mobileQuery = window.matchMedia("(max-width: 768px)");
        const desktopQuery = window.matchMedia("(max-height: 450px)");

        if (mobileQuery.matches) {
          // Destroy the slider for less height
          destroySlider();
        } else if (tabletQuery.matches) {
          destroySlider();
        } else if (tablet2Query.matches) {
          destroySlider();
        }
        else if (tablet3Query.matches) {
          destroySlider();
        }
        else if (desktopQuery.matches) {
          destroySlider();
        }
        else{
          initializeSlider();
        }
      }

      // Initial setup
      handleMediaQuery();

      // Listen for changes in the media queries
      window.addEventListener('resize', handleMediaQuery);

});