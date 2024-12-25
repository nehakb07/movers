(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });



    
})(jQuery);



// popup 

function showPopup(heading, info, imageUrl) {
    document.getElementById('popup-heading').textContent = heading;
    document.getElementById('popup-info').innerHTML = info;  // Use innerHTML instead of textContent
    document.getElementById('popup-image').src = imageUrl;

    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


// catalogue 
// Smooth Scroll to the corresponding section when clicking on "Read more" or service/product link
document.querySelectorAll('.scroll-to').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 100, // Adjust for header if needed
            behavior: 'smooth'
        });
    });
});

// Open the Brochure Popup when clicking on "E-Catalogue" links
document.querySelectorAll(".open-brochure-modal").forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Brochure Modal Opened"); // Debugging: Check if this logs
        document.getElementById("brochure-modal").style.display = "block";
    });
});

// Close the Brochure Popup
document.querySelector(".close").addEventListener('click', function() {
    document.getElementById("brochure-modal").style.display = "none";
});

// Close modal if clicked outside of content
window.onclick = function(event) {
    if (event.target == document.getElementById("brochure-modal")) {
        document.getElementById("brochure-modal").style.display = "none";
    }
};



















