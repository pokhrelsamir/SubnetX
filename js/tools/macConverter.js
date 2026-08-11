/* =========================================
   NetCalc - MAC Address Converter
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const macInput = document.getElementById("macInput");
    const macError = document.getElementById("macError");

    const convertMACButton =
        document.getElementById("convertMAC");

    const clearMACButton =
        document.getElementById("clearMAC");

    const macExample =
        document.getElementById("macExample");


    /* =========================================
       Result Elements
    ========================================= */

    const resultColon =
        document.getElementById("resultMACColon");

    const resultHyphen =
        document.getElementById("resultMACHyphen");

    const resultCisco =
        document.getElementById("resultMACCisco");

    const resultPlain =
        document.getElementById("resultMACPlain");

    const resultType =
        document.getElementById("resultMACType");

    const resultAdmin =
        document.getElementById("resultMACAdmin");

    const resultOUI =
        document.getElementById("resultMACOUI");

    const resultNIC =
        document.getElementById("resultMACNIC");

    const resultBinary =
        document.getElementById("resultMACBinary");


    /* =========================================
       Normalize MAC Address
    ========================================= */

    function normalizeMAC(value) {

        return value
            .trim()
            .replace(/[:\-.]/g, "")
            .toUpperCase();

    }


    /* =========================================
       Validate MAC Address
    ========================================= */

    function isValidMAC(mac) {

        return /^[0-9A-F]{12}$/.test(mac);

    }


    /* =========================================
       Format MAC Address
    ========================================= */

    function formatMAC(mac) {

        return {

            colon:
                mac.match(/.{2}/g).join(":"),

            hyphen:
                mac.match(/.{2}/g).join("-"),

            cisco:
                mac
                    .match(/.{4}/g)
                    .join("."),

            plain:
                mac

        };

    }


    /* =========================================
       MAC Type
    ========================================= */

    function getMACType(mac) {

        const firstByte =
            parseInt(mac.substring(0, 2), 16);

        /*
            Least significant bit of the
            first byte determines unicast/multicast.

            0 = Unicast
            1 = Multicast
        */

        return (firstByte & 1)
            ? "Multicast"
            : "Unicast";

    }


    /* =========================================
       Administration Type
    ========================================= */

    function getAdministrationType(mac) {

        const firstByte =
            parseInt(mac.substring(0, 2), 16);

        /*
            Second least significant bit:

            0 = Universally administered
            1 = Locally administered
        */

        return (firstByte & 2)
            ? "Locally Administered"
            : "Universally Administered";

    }


    /* =========================================
       Binary Conversion
    ========================================= */

    function macToBinary(mac) {

        return mac
            .match(/.{2}/g)
            .map(byte =>
                parseInt(byte, 16)
                    .toString(2)
                    .padStart(8, "0")
            )
            .join(" ");

    }


    /* =========================================
       Display Error
    ========================================= */

    function showError(message) {

        if (!macError) return;

        macError.textContent = message;

        macError.classList.add("show");

    }


    /* =========================================
       Clear Error
    ========================================= */

    function clearError() {

        if (!macError) return;

        macError.textContent = "";

        macError.classList.remove("show");

    }


    /* =========================================
       Calculate MAC
    ========================================= */

    function convertMAC() {

        clearError();

        const input =
            macInput.value;

        const mac =
            normalizeMAC(input);


        /* Empty Input */

        if (!input.trim()) {

            showError(
                "Please enter a MAC address."
            );

            return;

        }


        /* Invalid MAC */

        if (!isValidMAC(mac)) {

            showError(
                "Enter a valid MAC address with 12 hexadecimal characters."
            );

            return;

        }


        const formatted =
            formatMAC(mac);


        /* =====================================
           Display Formats
        ===================================== */

        if (resultColon) {
            resultColon.textContent =
                formatted.colon;
        }

        if (resultHyphen) {
            resultHyphen.textContent =
                formatted.hyphen;
        }

        if (resultCisco) {
            resultCisco.textContent =
                formatted.cisco;
        }

        if (resultPlain) {
            resultPlain.textContent =
                formatted.plain;
        }


        /* =====================================
           Display Information
        ===================================== */

        if (resultType) {

            resultType.textContent =
                getMACType(mac);

        }

        if (resultAdmin) {

            resultAdmin.textContent =
                getAdministrationType(mac);

        }

        if (resultOUI) {

            resultOUI.textContent =
                mac.substring(0, 6)
                    .match(/.{2}/g)
                    .join(":");

        }

        if (resultNIC) {

            resultNIC.textContent =
                mac.substring(6)
                    .match(/.{2}/g)
                    .join(":");

        }


        /* =====================================
           Binary
        ===================================== */

        if (resultBinary) {

            resultBinary.textContent =
                macToBinary(mac);

        }

    }


    /* =========================================
       Clear Converter
    ========================================= */

    function clearMAC() {

        if (macInput) {
            macInput.value = "";
        }

        clearError();


        const results = [

            resultColon,
            resultHyphen,
            resultCisco,
            resultPlain,
            resultType,
            resultAdmin,
            resultOUI,
            resultNIC,
            resultBinary

        ];


        results.forEach(element => {

            if (element) {

                element.textContent = "—";

            }

        });

    }


    /* =========================================
       Quick Example
    ========================================= */

    function loadExample() {

        if (!macInput) return;

        macInput.value =
            "AA:BB:CC:DD:EE:FF";

        convertMAC();

    }


    /* =========================================
       Copy MAC
    ========================================= */

    async function copyValue(element) {

        if (!element) return;

        const value =
            element.textContent.trim();

        if (!value || value === "—") {
            return;
        }


        try {

            await navigator.clipboard.writeText(value);

            const original =
                element.textContent;

            element.textContent = "Copied!";

            setTimeout(() => {

                element.textContent =
                    original;

            }, 1000);

        } catch (error) {

            console.error(
                "Copy failed:",
                error
            );

        }

    }


    /* =========================================
       Copy Buttons
    ========================================= */

    document.querySelectorAll(".copy-mac")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const targetId =
                        button.dataset.target;

                    const target =
                        document.getElementById(
                            targetId
                        );

                    copyValue(target);

                }
            );

        });


    /* =========================================
       Event Listeners
    ========================================= */

    if (convertMACButton) {

        convertMACButton.addEventListener(
            "click",
            convertMAC
        );

    }


    if (clearMACButton) {

        clearMACButton.addEventListener(
            "click",
            clearMAC
        );

    }


    if (macExample) {

        macExample.addEventListener(
            "click",
            loadExample
        );

    }


    /* =========================================
       Enter Key
    ========================================= */

    if (macInput) {

        macInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    convertMAC();

                }

            }
        );

    }

});