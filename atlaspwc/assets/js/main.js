let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.header_top');
    let currentScrollY = window.scrollY;

    // Agar device width 992px se zyada hai tabhi scroll check hoga
    if (window.innerWidth > 992) {
        // Agar upar scroll ho raha hai aur 110px se neeche ho
        if (currentScrollY < lastScrollY && currentScrollY > 110) {
            navbar.classList.add('header-scrolled-up');
        } 
        
        // Neeche scroll ya upar scroll hone par top se 110px ke andar
        else if (currentScrollY > lastScrollY || currentScrollY <= 110) {
            navbar.classList.remove('header-scrolled-up');
        }
    }

    // Har scroll ke baad lastScrollY ko update karna zaroori hai
    lastScrollY = currentScrollY;
});
function openNavigation() {
    const nav = document.querySelector('.navigation-for-mobile');
    nav.classList.add('active');  // Add the 'active' class when the hamburger icon is clicked
}

function closeNavigation() {
    const nav = document.querySelector('.navigation-for-mobile');
    nav.classList.remove('active');  // Remove the 'active' class when the close icon is clicked
}

 $(document).ready(function() {
        $(".carousel-1").owlCarousel({
          items: 1, // Change this as per your requirement
          loop: false,
          margin: 10,
          nav: false,
          autoplay: true,

        });
          $(".carousel-2").owlCarousel({
        loop: true, // Enable loop
        margin: 10, // Space between items
        nav: true, // Enable next and prev buttons
        responsive: {
            0: {
                items: 1 // Show 1 item for screen widths less than 992px
            },
            992: {
                items: 4 // Show 4 items for screen widths 992px and above
            }
        }
    });
    

    $(".carousel-3").owlCarousel({
     loop: false,            // Enable looping
        margin: 10,           // Margin between items
        nav: false,            // Show next and prev buttons
        responsive: {
            0: {
                items: 1     // Show 1 item for screens less than 992px
            },
           992: {
            items: 3, // Show 3 full items
            margin: 24, // Set margin-right to 24px between items
            autoWidth: false // Disable auto width to enforce fixed width
        }
        }
    });


      });
      
      
      
      
    




window.onload = function () {
    // Select the countdown container and its children
    const countdownElement = document.querySelector(".runTimer");
    const daysElement = countdownElement.querySelector(".days");
    const hoursElement = countdownElement.querySelector(".hours");
    const minutesElement = countdownElement.querySelector(".minutes");

    // Get the target date from the data attribute
    const targetDate = new Date(
      countdownElement.getAttribute("data-countdown")
    ).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      // Calculate days, hours, and minutes
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

      // Update the DOM
      daysElement.textContent = days < 10 ? `0${days}` : days;
      hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
      minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;

      // Stop countdown when the target date is reached
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
      }
    }

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to set the countdown immediately
    updateCountdown();
};








 function scrollToSection(event) {
      event.preventDefault();  // Prevent default anchor behavior
      const target = document.querySelector(event.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }