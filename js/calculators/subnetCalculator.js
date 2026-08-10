/* ==========================================
   SubnetX — Subnet Calculator
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const subnetIP = document.getElementById("subnetIP");
    const originalCIDR = document.getElementById("originalCIDR");
    const newCIDR = document.getElementById("newCIDR");

    const calculateButton = document.getElementById("calculateSubnet");
    const clearButton = document.getElementById("clearSubnet");
    const exampleButton = document.getElementById("subnetExample");

    const errorBox = document.getElementById("subnetError");

    const summaryNetwork = document.getElementById("summaryNetwork");
    const summaryOriginalCIDR = document.getElementById("summaryOriginalCIDR");
    const summaryNewCIDR = document.getElementById("summaryNewCIDR");
    const summaryMask = document.getElementById("summaryMask");
    const summarySubnetCount = document.getElementById("summarySubnetCount");
    const summaryAddresses = document.getElementById("summaryAddresses");
    const summaryHosts = document.getElementById("summaryHosts");
    const summaryBorrowed = document.getElementById("summaryBorrowed");

    const subnetCount = document.getElementById("subnetCount");
    const subnetTableBody = document.getElementById("subnetTableBody");


    /* ==========================================
       IPv4 Validation
       ========================================== */

    function isValidIPv4(ip) {

        const parts = ip.trim().split(".");

        if (parts.length !== 4) {
            return false;
        }

        return parts.every(part => {

            if (part === "") {
                return false;
            }

            const number = Number(part);

            return (
                Number.isInteger(number) &&
                number >= 0 &&
                number <= 255
            );

        });

    }


    /* ==========================================
       IPv4 → Integer
       ========================================== */

    function ipToInteger(ip) {

        const parts = ip.split(".").map(Number);

        return (
            parts[0] * 16777216 +
            parts[1] * 65536 +
            parts[2] * 256 +
            parts[3]
        );

    }


    /* ==========================================
       Integer → IPv4
       ========================================== */

    function integerToIP(number) {

        number = number >>> 0;

        return [
            (number >>> 24) & 255,
            (number >>> 16) & 255,
            (number >>> 8) & 255,
            number & 255
        ].join(".");

    }


    /* ==========================================
       CIDR → Subnet Mask
       ========================================== */

    function cidrToMask(cidr) {

        if (cidr === 0) {
            return "0.0.0.0";
        }

        const mask = (0xFFFFFFFF << (32 - cidr)) >>> 0;

        return integerToIP(mask);

    }


    /* ==========================================
       Calculate Network Address
       ========================================== */

    function calculateNetwork(ipNumber, cidr) {

        if (cidr === 0) {
            return 0;
        }

        const mask = (0xFFFFFFFF << (32 - cidr)) >>> 0;

        return (ipNumber & mask) >>> 0;

    }


    /* ==========================================
       Clear Error
       ========================================== */

    function clearError() {

        errorBox.textContent = "";
        errorBox.classList.remove("show");

    }


    /* ==========================================
       Show Error
       ========================================== */

    function showError(message) {

        errorBox.textContent = message;
        errorBox.classList.add("show");

    }


    /* ==========================================
       Clear Results
       ========================================== */

    function clearResults() {

        summaryNetwork.textContent = "—";
        summaryOriginalCIDR.textContent = "—";
        summaryNewCIDR.textContent = "—";
        summaryMask.textContent = "—";
        summarySubnetCount.textContent = "—";
        summaryAddresses.textContent = "—";
        summaryHosts.textContent = "—";
        summaryBorrowed.textContent = "—";

        subnetCount.textContent = "0 Subnets";

        subnetTableBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-table">
                    Enter network details
                    and generate subnets.
                </td>
            </tr>
        `;

    }


    /* ==========================================
       Generate Subnets
       ========================================== */

    function generateSubnets() {

        clearError();

        const ip = subnetIP.value.trim();

        const original = Number(originalCIDR.value);
        const target = Number(newCIDR.value);


        /* ---------- Validate IP ---------- */

        if (!isValidIPv4(ip)) {

            showError(
                "Please enter a valid IPv4 address."
            );

            return;

        }


        /* ---------- Validate CIDR ---------- */

        if (
            !Number.isInteger(original) ||
            original < 0 ||
            original > 32
        ) {

            showError(
                "Original CIDR must be between /0 and /32."
            );

            return;

        }


        if (
            !Number.isInteger(target) ||
            target < 0 ||
            target > 32
        ) {

            showError(
                "New subnet CIDR must be between /0 and /32."
            );

            return;

        }


        /* ---------- Validate relationship ---------- */

        if (target < original) {

            showError(
                "New subnet CIDR must be greater than or equal to the original CIDR."
            );

            return;

        }


        /* ==========================================
           Convert IP
           ========================================== */

        const inputIP = ipToInteger(ip);

        const originalNetwork =
            calculateNetwork(inputIP, original);


        /* ==========================================
           Calculate subnet information
           ========================================== */

        const borrowedBits =
            target - original;

        const numberOfSubnets =
            Math.pow(2, borrowedBits);

        const addressesPerSubnet =
            Math.pow(2, 32 - target);


        let usableHostsPerSubnet;

        if (target === 31) {
            usableHostsPerSubnet = 2;
        }
        else if (target === 32) {
            usableHostsPerSubnet = 1;
        }
        else {
            usableHostsPerSubnet =
                addressesPerSubnet - 2;
        }


        /* ==========================================
           Update Summary
           ========================================== */

        summaryNetwork.textContent =
            integerToIP(originalNetwork);

        summaryOriginalCIDR.textContent =
            `/${original}`;

        summaryNewCIDR.textContent =
            `/${target}`;

        summaryMask.textContent =
            cidrToMask(target);

        summarySubnetCount.textContent =
            numberOfSubnets.toLocaleString();

        summaryAddresses.textContent =
            addressesPerSubnet.toLocaleString();

        summaryHosts.textContent =
            usableHostsPerSubnet.toLocaleString();

        summaryBorrowed.textContent =
            borrowedBits;


        subnetCount.textContent =
            `${numberOfSubnets.toLocaleString()} Subnets`;


        /* ==========================================
           Generate Table
           ========================================== */

        subnetTableBody.innerHTML = "";


        /*
         * IMPORTANT:
         *
         * Every subnet must start from:
         *
         * originalNetwork +
         * (subnetIndex × addressesPerSubnet)
         *
         * This is what prevents every row
         * from becoming 192.168.0.0.
         */

        for (
            let i = 0;
            i < numberOfSubnets;
            i++
        ) {

            const subnetStart =
                originalNetwork +
                (i * addressesPerSubnet);


            const subnetEnd =
                subnetStart +
                addressesPerSubnet -
                1;


            const networkAddress =
                integerToIP(subnetStart);

            const broadcastAddress =
                integerToIP(subnetEnd);


            let firstHost;
            let lastHost;


            /* ---------- /31 ---------- */

            if (target === 31) {

                firstHost =
                    integerToIP(subnetStart);

                lastHost =
                    integerToIP(subnetEnd);

            }

            /* ---------- /32 ---------- */

            else if (target === 32) {

                firstHost =
                    networkAddress;

                lastHost =
                    networkAddress;

            }

            /* ---------- Normal subnet ---------- */

            else {

                firstHost =
                    integerToIP(subnetStart + 1);

                lastHost =
                    integerToIP(subnetEnd - 1);

            }


            /* ==========================================
               Table Row
               ========================================== */

            const row =
                document.createElement("tr");

            row.innerHTML = `

                <td>
                    ${i + 1}
                </td>

                <td>
                    <strong>
                        ${networkAddress}
                    </strong>
                </td>

                <td>
                    /${target}
                </td>

                <td>
                    ${firstHost}
                </td>

                <td>
                    ${lastHost}
                </td>

                <td>
                    ${broadcastAddress}
                </td>

                <td>
                    ${addressesPerSubnet}
                </td>

            `;


            subnetTableBody.appendChild(row);

        }

    }


    /* ==========================================
       Calculate Button
       ========================================== */

    if (calculateButton) {

        calculateButton.addEventListener(
            "click",
            generateSubnets
        );

    }


    /* ==========================================
       Clear Button
       ========================================== */

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            () => {

                subnetIP.value = "";
                originalCIDR.value = "24";
                newCIDR.value = "26";

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

                subnetIP.value =
                    "192.168.1.0";

                originalCIDR.value =
                    "24";

                newCIDR.value =
                    "26";

                generateSubnets();

            }
        );

    }

});