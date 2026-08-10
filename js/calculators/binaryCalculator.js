/* ==========================================
   NetCalc — Binary Calculator
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const ipInput =
        document.getElementById("binaryIPInput");

    const convertButton =
        document.getElementById("convertBinary");

    const clearButton =
        document.getElementById("clearBinary");

    const exampleButton =
        document.getElementById("binaryExample");

    const errorBox =
        document.getElementById("binaryError");


    const decimalResult =
        document.getElementById("binaryDecimalResult");

    const fullBinaryResult =
        document.getElementById("binaryFullResult");

    const binary32Result =
        document.getElementById("binary32Result");


    const octet1 =
        document.getElementById("binaryOctet1");

    const octet2 =
        document.getElementById("binaryOctet2");

    const octet3 =
        document.getElementById("binaryOctet3");

    const octet4 =
        document.getElementById("binaryOctet4");


    /* ==========================================
       Validate IPv4
       ========================================== */

    function isValidIPv4(ip) {

        const parts =
            ip.trim().split(".");

        if (parts.length !== 4) {
            return false;
        }

        return parts.every(part => {

            if (part === "") {
                return false;
            }

            const value =
                Number(part);

            return (
                Number.isInteger(value) &&
                value >= 0 &&
                value <= 255
            );

        });

    }


    /* ==========================================
       Convert Octet → Binary
       ========================================== */

    function octetToBinary(octet) {

        return Number(octet)
            .toString(2)
            .padStart(8, "0");

    }


    /* ==========================================
       Show Error
       ========================================== */

    function showError(message) {

        errorBox.textContent =
            message;

        errorBox.classList.add("show");

    }


    /* ==========================================
       Clear Error
       ========================================== */

    function clearError() {

        errorBox.textContent = "";

        errorBox.classList.remove("show");

    }


    /* ==========================================
       Clear Results
       ========================================== */

    function clearResults() {

        decimalResult.textContent = "—";

        fullBinaryResult.textContent = "—";

        binary32Result.textContent = "—";

        octet1.textContent = "—";
        octet2.textContent = "—";
        octet3.textContent = "—";
        octet4.textContent = "—";

    }


    /* ==========================================
       Convert IPv4
       ========================================== */

    function convertIPv4() {

        clearError();

        const ip =
            ipInput.value.trim();


        /* Validate */

        if (!isValidIPv4(ip)) {

            showError(
                "Please enter a valid IPv4 address."
            );

            return;

        }


        /* Split IP */

        const octets =
            ip.split(".").map(Number);


        /* Convert each octet */

        const binaries =
            octets.map(octetToBinary);


        /* Full binary */

        const fullBinary =
            binaries.join(".");


        const continuousBinary =
            binaries.join("");


        /* ==========================================
           Display Results
           ========================================== */

        decimalResult.textContent =
            ip;

        fullBinaryResult.textContent =
            fullBinary;


        octet1.textContent =
            binaries[0];

        octet2.textContent =
            binaries[1];

        octet3.textContent =
            binaries[2];

        octet4.textContent =
            binaries[3];


        binary32Result.textContent =
            continuousBinary;

    }


    /* ==========================================
       Convert Button
       ========================================== */

    if (convertButton) {

        convertButton.addEventListener(
            "click",
            convertIPv4
        );

    }


    /* ==========================================
       Clear Button
       ========================================== */

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            () => {

                ipInput.value = "";

                clearError();

                clearResults();

            }
        );

    }


    /* ==========================================
       Quick Example
       ========================================== */

    if (exampleButton) {

        exampleButton.addEventListener(
            "click",
            () => {

                ipInput.value =
                    "192.168.1.25";

                convertIPv4();

            }
        );

    }


    /* ==========================================
       Enter Key
       ========================================== */

    if (ipInput) {

        ipInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    convertIPv4();

                }

            }
        );

    }

});