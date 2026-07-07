/* =====================================================
   MINI MATTERS
   main.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Sticky Header
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.background = "rgba(255,255,255,.96)";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

        } else {

            header.style.background = "rgba(255,255,255,.85)";
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";
        }

    });


    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });


    /* ==========================================
       Scroll Reveal
    ========================================== */

    const hiddenElements = document.querySelectorAll(

        ".story, .features, .social, .contact, .newsletter, .card"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


    /* ==========================================
       Active Navigation
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 140;

            if (window.pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /* ==========================================
       Hero Button Pulse
    ========================================== */

    const heroButton = document.querySelector(".btn");

    if (heroButton) {

        setInterval(() => {

            heroButton.animate(

                [

                    {
                        transform: "scale(1)"
                    },

                    {
                        transform: "scale(1.05)"
                    },

                    {
                        transform: "scale(1)"
                    }

                ],

                {

                    duration: 1800,

                    easing: "ease-in-out"

                }

            );

        }, 4500);

    }


    /* ==========================================
       Card Hover Animation
    ========================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    /* ==========================================
       Social Icon Animation
    ========================================== */

    const icons = document.querySelectorAll(".icons a");

    icons.forEach(icon => {

        icon.addEventListener("mouseenter", () => {

            icon.style.transform = "translateY(-8px) scale(1.12)";

        });

        icon.addEventListener("mouseleave", () => {

            icon.style.transform = "translateY(0) scale(1)";

        });

    });


    /* ==========================================
       Lazy Image Loading
    ========================================== */

    const images = document.querySelectorAll("img[data-src]");

    images.forEach(img => {

        img.setAttribute("src", img.dataset.src);

    });


    /* ==========================================
       Current Year
    ========================================== */

    const year = new Date().getFullYear();

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML = `© ${year} Mini Matters. All Rights Reserved.`;

    }


    /* ==========================================
       Console Message
    ========================================== */

    console.log("%cMini Matters", "font-size:26px;color:#7F9C84;font-weight:bold;");

    console.log("%cLittle Clothes. Big Love.", "font-size:15px;color:#666;");

    console.log("%cLaunching Soon...", "font-size:14px;color:#999;");

});