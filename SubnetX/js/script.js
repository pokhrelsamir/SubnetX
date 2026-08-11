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

const themeButton =
    document.getElementById("themeButton");


function applyTheme(theme) {

    const selectedTheme =
        theme === "light"
            ? "light"
            : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        selectedTheme
    );

    localStorage.setItem(
        "SubnetX-theme",
        selectedTheme
    );

    updateThemeButton(
        selectedTheme
    );
}


function updateThemeButton(theme) {

    if (!themeButton) {
        return;
    }

    const isLight =
        theme === "light";

    themeButton.textContent =
        isLight ? "☀️" : "🌙";

    themeButton.setAttribute(
        "title",
        isLight
            ? "Switch to dark mode"
            : "Switch to light mode"
    );

    themeButton.setAttribute(
        "aria-label",
        isLight
            ? "Switch to dark mode"
            : "Switch to light mode"
    );
}


/* Restore saved theme */

const savedTheme =
    localStorage.getItem("SubnetX-theme");

applyTheme(
    savedTheme === "light"
        ? "light"
        : "dark"
);


/* Toggle theme */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            const currentTheme =
                document.documentElement.getAttribute(
                    "data-theme"
                ) || "dark";

            applyTheme(
                currentTheme === "light"
                    ? "dark"
                    : "light"
            );

        }
    );

}
