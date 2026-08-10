/* ==========================================
   NetCalc — Binary Calculator
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const ipInput = document.getElementById("binaryIPInput");
    const convertButton = document.getElementById("convertBinary");
    const clearButton = document.getElementById("clearBinary");
    const exampleButton = document.getElementById("binaryExample");

    const errorBox = document.getElementById("binaryError");

    const decimalResult =
        document.getElementById("binaryDecimalResult");

    const fullBinaryResult =
        document.getElementById("binaryFullResult");

    const octet1 =
        document.getElementById("binaryOctet1");

    const octet2 =
        document.getElementById("binaryOctet2");

    const octet3 =
        document.getElementById("binaryOctet3");

    const octet4 =
        document.getElementById("binaryOctet4");

    const binary32Result =
        document.getElementById("binary32Result");


    /* ==========================================
       Check Required Elements
    ========================================== */

    if (
        !ipInput ||
        !convertButton ||
        !clearButton
    ) {

        console.error(
            "NetCalc: Binary Calculator elements not found."
        );

        return;
    }


    /* ==========================================
       Validate IPv4
    ========================================== */

    function isValidIPv4(ip) {

        const parts = ip.trim().split(".");

        if (parts.length !== 4) {
            return false;
        }

        return parts.every(function (part) {

            if (part === "") {
                return false;
            }

            if (!/^\d+$/.test(part)) {
                return false;
            }

            const value = Number(part);

            return value >= 0 && value <= 255;

        });

    }


    /* ==========================================
       IPv4 Octet → 8-bit Binary
    ========================================== */

    function convertOctetToBinary(value) {

        return Number(value)
            .toString(2)
            .padStart(8, "0");

    }


    /* ==========================================
       Show Error
    ========================================== */

    function showError(message) {

        if (!errorBox) {
            return;
        }

        errorBox.textContent = message;

        errorBox.classList.add("show");

    }


    /* ==========================================
       Clear Error
    ========================================== */

    function clearError() {

        if (!errorBox) {
            return;
        }

        errorBox.textContent = "";

        errorBox.classList.remove("show");

    }


    /* ==========================================
       Clear Results
    ========================================== */

    function clearResults() {

        decimalResult.textContent = "—";
        fullBinaryResult.textContent = "—";

        octet1.textContent = "—";
        octet2.textContent = "—";
        octet3.textContent = "—";
        octet4.textContent = "—";

        binary32Result.textContent = "—";

    }


    /* ==========================================
       Main Conversion
    ========================================== */

    function convertToBinary() {

        clearError();

        const ip = ipInput.value.trim();


        /* Validate */

        if (!isValidIPv4(ip)) {

            showError(
                "Please enter a valid IPv4 address."
            );

            return;

        }


        /* Split IPv4 */

        const octets =
            ip.split(".").map(Number);


        /* Convert */

        const binaryOctets =
            octets.map(convertOctetToBinary);


        /* Full binary with dots */

        const fullBinary =
            binaryOctets.join(".");


        /* Full 32-bit binary */

        const binary32 =
            binaryOctets.join("");


        /* ==========================================
           Display
        ========================================== */

        decimalResult.textContent = ip;

        fullBinaryResult.textContent =
            fullBinary;

        octet1.textContent =
            binaryOctets[0];

        octet2.textContent =
            binaryOctets[1];

        octet3.textContent =
            binaryOctets[2];

        octet4.textContent =
            binaryOctets[3];

        binary32Result.textContent =
            binary32;


        console.log(
            "NetCalc Binary:",
            ip,
            "→",
            fullBinary
        );

    }


    /* ==========================================
       Convert Button
    ========================================== */

    convertButton.addEventListener(
        "click",
        convertToBinary
    );


    /* ==========================================
       Clear Button
    ========================================== */

    clearButton.addEventListener(
        "click",
        function () {

            ipInput.value = "";

            clearError();

            clearResults();

            ipInput.focus();

        }
    );


    /* ==========================================
       Quick Example
    ========================================== */

    if (exampleButton) {

        exampleButton.addEventListener(
            "click",
            function () {

                ipInput.value =
                    "192.168.1.25";

                convertToBinary();

            }
        );

    }


    /* ==========================================
       Enter Key
    ========================================== */

    ipInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                convertToBinary();

            }

        }
    );


});