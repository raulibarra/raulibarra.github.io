/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').stop(true, false); // cancel current animation if any
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

function includeHTML() {

  const elements = document.querySelectorAll('[include-html]');
  const promises = [];

  elements.forEach(elmnt => {
    const file = elmnt.getAttribute('include-html');
    if (file) {
      const promise = fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error('Page not found.');
          }
          return response.text();
        })
        .then(data => {
          elmnt.innerHTML = data;
          elmnt.removeAttribute('include-html');
          // Check if new 'include-html' attributes were added after loading
          if (elmnt.querySelector('[include-html]')) {
            return includeHTML(); // Recursively call includeHTML for nested includes
          }
        })
        .catch(error => {
          elmnt.innerHTML = error.message;
          elmnt.removeAttribute('include-html');
        });

      promises.push(promise);
    }
  });

  return Promise.all(promises);
}

function autoCheckForHashRedirects(){
  
  // Get the ID from the URL hash
  const hash = window.location.hash.substring(1); // Remove the '#' character

  console.log(`${autoCheckForHashRedirects.name}: hash: ${hash}`);

  if (!hash) { return; } // don't do anything if there's no hash
    
  const targetElement = document.getElementById(hash);
  if (targetElement) 
  {
    console.log(`${autoCheckForHashRedirects.name}: auto-scroll resolved: ${hash}. targetElement: ${targetElement.nodeName}`);

    // try toggle element if not visible
    toggleDiv(hash);

    targetElement.scrollIntoView({ behavior: "smooth" });
    return true;
  }

  console.log(`${autoCheckForHashRedirects.name}: hash not found`);
  return false;
}

const texts = [
  "Full-Stack Gameplay Developer",
  "Gameplay Systems Architect",
  "Gameplay and UI Programmer",
  "Audio Programmer and Technical Sound Designer",
  "Gameplay Systems Generalist"
];
let index = 0;

function cycleText() {
  const subtitleElement = document.getElementById('subtitle');
  subtitleElement.style.opacity = 0; // Start fade-out

  setTimeout(() => {
    subtitleElement.textContent = texts[index];
    subtitleElement.style.opacity = 1; // Start fade-in
    index = (index + 1) % texts.length;
  }, 750); // Wait for fade-out to complete
}

setInterval(cycleText, 3000); // Change text every 3 seconds