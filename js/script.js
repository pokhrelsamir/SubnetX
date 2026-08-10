/* =========================================
   SubnetX - Main Application
========================================= */


/* =========================================
   Elements
========================================= */

const pages =
    document.querySelectorAll(".page");

const navItems =
    document.querySelectorAll(".nav-item");

const pageButtons =
    document.querySelectorAll(
        "[data-page]"
    );

const pageTitle =
    document.getElementById("pageTitle");

const sidebar =
    document.getElementById("sidebar");

const menuButton =
    document.getElementById("menuButton");


/* =========================================
   Page Names
========================================= */

const pageNames = {

    dashboard:
        "Dashboard",

    "ip-calculator":
        "IP Calculator",

    "subnet-calculator":
        "Subnet Calculator",

    "binary-calculator":
        "Binary Converter",

    "port-reference":
        "Port Reference",

    "mac-converter":
        "MAC Converter",

    practice:
        "Networking Practice",

    learn:
        "Learn Networking"

};


/* =========================================
   Show Page
========================================= */

function showPage(pageId) {

    /* Hide all pages */

    pages.forEach(page => {

        page.classList.remove(
            "active-page"
        );

    });


    /* Find requested page */

    const selectedPage =
        document.getElementById(
            pageId
        );


    if (!selectedPage) {

        return;

    }


    /* Show requested page */

    selectedPage.classList.add(
        "active-page"
    );


    /* Update navigation */

    navItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageId
        );

    });


    /* Update title */

    pageTitle.textContent =
        pageNames[pageId]
        || "SubnetX";


    /* Close mobile sidebar */

    sidebar.classList.remove(
        "open"
    );


    /* Scroll to top */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   Navigation Events
========================================= */

pageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const page =
                button.dataset.page;

            showPage(page);

        }
    );

});


/* =========================================
   Mobile Menu
========================================= */

menuButton.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );

    }
);


/* =========================================
   Close Sidebar Outside Click
========================================= */

document.addEventListener(
    "click",
    event => {

        const clickedInsideSidebar =
            sidebar.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);


        if (
            window.innerWidth <= 800 &&
            !clickedInsideSidebar &&
            !clickedMenuButton
        ) {

            sidebar.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   Initial Page
========================================= */

showPage("dashboard");


/* ==========================================
   Theme Toggle
========================================== */

const themeButton = document.getElementById("themeButton");


// Apply saved theme when page loads

const savedTheme = localStorage.getItem("netcalc-theme");

if (savedTheme === "light") {

    document.documentElement.setAttribute(
        "data-theme",
        "light"
    );

    updateThemeButton("light");

} else {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    updateThemeButton("dark");

}


/* Toggle Theme */

if (themeButton) {

    themeButton.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "light") {

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem(
                "netcalc-theme",
                "dark"
            );

            updateThemeButton("dark");

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

            localStorage.setItem(
                "netcalc-theme",
                "light"
            );

            updateThemeButton("light");

        }

    });

}


/* Update Button Icon */

function updateThemeButton(theme) {

    if (!themeButton) {
        return;
    }

    if (theme === "light") {

        themeButton.textContent = "☀️";

        themeButton.setAttribute(
            "title",
            "Switch to dark mode"
        );

        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    } else {

        themeButton.textContent = "🌙";

        themeButton.setAttribute(
            "title",
            "Switch to light mode"
        );

        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    }

}