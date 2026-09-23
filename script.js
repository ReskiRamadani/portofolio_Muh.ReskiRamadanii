// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const backTop = document.getElementById("backTop");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function setMenuIcon(isOpen) {
    if (!menuBtn) return;

    const icon = menuBtn.querySelector("i");
    if (!icon) return;

    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);
}

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");
        setMenuIcon(isOpen);
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            setMenuIcon(false);
        });
    });
}


// ================================
// BACK TO TOP
// ================================

if (backTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backTop.classList.add("show");
        } else {
            backTop.classList.remove("show");
        }
    });
}


// ================================
// ACTIVE NAVIGATION
// ================================

if (sections.length && navLinks.length) {
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
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
}