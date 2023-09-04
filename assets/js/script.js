// Scroll to top button
    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
    scrollFunction();
    };

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // Function to scroll to the top of the page smoothly
    function topFunction() {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

// Navbar
    // JavaScript code to add active class to the clicked nav-link
    document.addEventListener('DOMContentLoaded', function() {
        var navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(function(navLink) {
            navLink.addEventListener('click', function() {
                // Remove active class from all nav-links
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Add active class to the clicked nav-link
                this.classList.add('active');
            });
        });

        // Get the contact button
        var contactButton = document.querySelector('.btn-contact');

        // Add click event listener to the contact button
        contactButton.addEventListener('click', function() {
            // Remove active class from all nav-links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
        });
    });

    // JavaScript to handle navbar scroll behavior
    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.getElementById("navbar");
        const heroSection = document.getElementById("hero");
        const contactSection = document.getElementById('contact');

        // Function to handle scroll event
        function handleScroll() {
            // Get the height of the hero section
            const heroHeight = heroSection.offsetHeight;
            const contactOffsetTop = contactSection.offsetTop;

            // Get the current vertical scroll position
            const scrollPosition = window.scrollY;

            // Check if the navbar is inside the contact section
            if (contactSection.getBoundingClientRect().top <= navbar.offsetHeight) {
                navbar.style.backgroundColor = 'rgba(83, 83, 83, 0.4)';
            } else if (window.scrollY > heroHeight) {
                navbar.style.backgroundColor = '#403f3f';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        }

        // Add scroll event listener to the window
        window.addEventListener("scroll", handleScroll);

        // Call the function initially to set the initial background color based on the scroll position
        handleScroll();
    });

    // EmailJS
    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            phonenumber: document.getElementById("phone-number").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            };
        
            const serviceID = "service_rn50l5y";
            const templateID = "template_rocv7t8";
        
            emailjs.send(serviceID, templateID, params)
            .then(res=>{
                document.getElementById("name").value = "";
                document.getElementById("phone-number").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully!!")
        
            })
            .catch(err=>console.log(err));
        
        }