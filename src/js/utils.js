      // dark
      $(document).ready(function () {
        var rts_light = $('.mode-switcher');
        if (rts_light.length) {
          var toggle = $('#theme-mode, #theme-mode-2');
          var storedTheme = localStorage.getItem('t-portfolio') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
          if (storedTheme) {
            $('html').attr('data-theme', 'dark');
          }
          toggle.click(function () {
            var currentTheme = $('html').attr('data-theme');
            var targetTheme = (currentTheme === "dark") ? "light" : "dark";
            gsap.to('body', {
              opacity: 0,
              duration: 0.2,
              ease: "power1.out",
              onComplete: function () {
                $('html').attr('data-theme', targetTheme);
                localStorage.setItem('t-portfolio', targetTheme);
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