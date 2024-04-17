      // dark
      $(document).ready(function () {
        var rts_light = $('.mode-switcher');
        if (rts_light.length) {
          console.log('?????????????????')
          var toggle = $('#theme-mode, #theme-mode-2');
          var storedTheme = localStorage.getItem('axz-portfolio') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
          if (storedTheme) {
            $('html').attr('data-theme', storedTheme);
          }
          toggle.click(function () {
            var currentTheme = $('html').attr('data-theme');
            var targetTheme = (currentTheme === "light") ? "dark" : "light";
            gsap.to('body', {
              opacity: 0,
              duration: 0.2,
              ease: "power1.out",
              onComplete: function () {
                $('html').attr('data-theme', targetTheme);
                localStorage.setItem('axz-portfolio', targetTheme);
                gsap.to('body', {
                  opacity: 1,
                  duration: 0.2,
                  ease: "power1.out",
                });
              }
            });
          });
        }
      });