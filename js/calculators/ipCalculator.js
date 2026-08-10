/* =========================================
   NetCalc - IPv4 Calculator
========================================= */


/* =========================================
   DOM Elements
========================================= */

const ipInput =
    document.getElementById("ipInput");

const cidrInput =
    document.getElementById("cidrInput");

const calculateIPButton =
    document.getElementById("calculateIP");

const clearIPButton =
    document.getElementById("clearIP");

const ipError =
    document.getElementById("ipError");

const ipResults =
    document.getElementById("ipResults");


/* =========================================
   IPv4 Validation
========================================= */

function isValidIPv4(ip) {

    const parts = ip.split(".");

    if (parts.length !== 4) {
        return false;
    }

    return parts.every(part => {

        if (
            part === "" ||
            !/^\d+$/.test(part)
        ) {
            return false;
        }

        const number =
            Number(part);

        return (
            number >= 0 &&
            number <= 255
        );

    });

}


/* =========================================
   CIDR Validation
========================================= */

function isValidCIDR(cidr) {

    const value =
        Number(cidr);

    return (
        Number.isInteger(value) &&
        value >= 0 &&
        value <= 32
    );

}


/* =========================================
   IP → Integer
========================================= */

function ipToInteger(ip) {

    const parts =
        ip.split(".").map(Number);

    return (
        (
            parts[0] * 256 ** 3
        ) +
        (
            parts[1] * 256 ** 2
        ) +
        (
            parts[2] * 256
        ) +
            parts[3]
    );

}


/* =========================================
   Integer → IP
========================================= */

function integerToIP(number) {

    return [

        Math.floor(
            number / 256 ** 3
        ) % 256,

        Math.floor(
            number / 256 ** 2
        ) % 256,

        Math.floor(
            number / 256
        ) % 256,

        number % 256

    ].join(".");

}


/* =========================================
   CIDR → Subnet Mask
========================================= */

function cidrToMask(cidr) {

    if (cidr === 0) {

        return "0.0.0.0";

    }


    const mask =
        (0xFFFFFFFF << (32 - cidr))
        >>> 0;


    return integerToIP(mask);

}


/* =========================================
   Wildcard Mask
========================================= */

function calculateWildcard(mask) {

    const parts =
        mask.split(".")
            .map(Number);

    return parts
        .map(part => 255 - part)
        .join(".");

}


/* =========================================
   IP Class
========================================= */

function getIPClass(firstOctet) {

    if (firstOctet >= 1 && firstOctet <= 126) {

        return "Class A";

    }

    if (firstOctet >= 128 && firstOctet <= 191) {

        return "Class B";

    }

    if (firstOctet >= 192 && firstOctet <= 223) {

        return "Class C";

    }

    if (firstOctet >= 224 && firstOctet <= 239) {

        return "Class D";

    }

    if (firstOctet >= 240 && firstOctet <= 255) {

        return "Class E";

    }

    return "Reserved";

}


/* =========================================
   Private IP Detection
========================================= */

function isPrivateIP(ip) {

    const parts =
        ip.split(".").map(Number);

    const first =
        parts[0];

    const second =
        parts[1];


    /* 10.0.0.0/8 */

    if (first === 10) {

        return true;

    }


    /* 172.16.0.0/12 */

    if (
        first === 172 &&
        second >= 16 &&
        second <= 31
    ) {

        return true;

    }


    /* 192.168.0.0/16 */

    if (
        first === 192 &&
        second === 168
    ) {

        return true;

    }


    return false;

}


/* =========================================
   Calculate Network
========================================= */

function calculateNetwork(ip, cidr) {

    const ipNumber =
        ipToInteger(ip);


    const maskNumber =
        cidr === 0
            ? 0
            : (
                0xFFFFFFFF <<
                (32 - cidr)
            ) >>> 0;


    const networkNumber =
        (
            ipNumber &
            maskNumber
        ) >>> 0;


    const broadcastNumber =
        (
            networkNumber |
            (
                ~maskNumber >>> 0
            )
        ) >>> 0;


    const totalAddresses =
        2 ** (32 - cidr);


    let firstHost;
    let lastHost;
    let usableHosts;


    if (cidr === 32) {

        firstHost =
            networkNumber;

        lastHost =
            networkNumber;

        usableHosts = 1;

    }

    else if (cidr === 31) {

        firstHost =
            networkNumber;

        lastHost =
            broadcastNumber;

        usableHosts = 2;

    }

    else {

        firstHost =
            networkNumber + 1;

        lastHost =
            broadcastNumber - 1;

        usableHosts =
            totalAddresses - 2;

    }


    return {

        ip,

        cidr,

        subnetMask:
            cidrToMask(cidr),

        wildcardMask:
            calculateWildcard(
                cidrToMask(cidr)
            ),

        networkAddress:
            integerToIP(
                networkNumber
            ),

        broadcastAddress:
            integerToIP(
                broadcastNumber
            ),

        firstHost:
            integerToIP(
                firstHost
            ),

        lastHost:
            integerToIP(
                lastHost
            ),

        totalAddresses,

        usableHosts,

        ipClass:
            getIPClass(
                Number(
                    ip.split(".")[0]
                )
            ),

        addressType:
            isPrivateIP(ip)
                ? "Private"
                : "Public"

    };

}


/* =========================================
   Display Results
========================================= */

function displayResults(result) {

    document.getElementById(
        "resultIP"
    ).textContent =
        result.ip;


    document.getElementById(
        "resultCIDR"
    ).textContent =
        `/${result.cidr}`;


    document.getElementById(
        "resultSubnet"
    ).textContent =
        result.subnetMask;


    document.getElementById(
        "resultWildcard"
    ).textContent =
        result.wildcardMask;


    document.getElementById(
        "resultNetwork"
    ).textContent =
        result.networkAddress;


    document.getElementById(
        "resultBroadcast"
    ).textContent =
        result.broadcastAddress;


    document.getElementById(
        "resultFirstHost"
    ).textContent =
        result.firstHost;


    document.getElementById(
        "resultLastHost"
    ).textContent =
        result.lastHost;


    document.getElementById(
        "resultTotal"
    ).textContent =
        result.totalAddresses.toLocaleString();


    document.getElementById(
        "resultUsable"
    ).textContent =
        result.usableHosts.toLocaleString();


    document.getElementById(
        "resultClass"
    ).textContent =
        result.ipClass;


    document.getElementById(
        "resultType"
    ).textContent =
        result.addressType;


    ipResults.classList.add(
        "show"
    );

}


/* =========================================
   Show Error
========================================= */

function showError(message) {

    ipError.textContent =
        message;

    ipError.classList.add(
        "show"
    );

}


/* =========================================
   Clear Error
========================================= */

function clearError() {

    ipError.textContent =
        "";

    ipError.classList.remove(
        "show"
    );

}


/* =========================================
   Main Calculation
========================================= */

function handleIPCalculation() {

    clearError();


    const ip =
        ipInput.value.trim();

    const cidr =
        Number(
            cidrInput.value
        );


    if (!isValidIPv4(ip)) {

        showError(
            "Please enter a valid IPv4 address."
        );

        return;

    }


    if (!isValidCIDR(cidr)) {

        showError(
            "CIDR prefix must be between 0 and 32."
        );

        return;

    }


    const result =
        calculateNetwork(
            ip,
            cidr
        );


    displayResults(result);

}


/* =========================================
   Clear Calculator
========================================= */

function clearCalculator() {

    ipInput.value =
        "";

    cidrInput.value =
        "24";

    clearError();

    ipResults.classList.remove(
        "show"
    );

}


/* =========================================
   Events
========================================= */

calculateIPButton.addEventListener(
    "click",
    handleIPCalculation
);


clearIPButton.addEventListener(
    "click",
    clearCalculator
);


/* Enter Key */

ipInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            handleIPCalculation();

        }

    }
);


cidrInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            handleIPCalculation();

        }

    }
);

const quickExample =
    document.getElementById("quickExample");

quickExample.addEventListener(
    "click",
    () => {

        ipInput.value =
            "192.168.1.25";

        cidrInput.value =
            "24";

        clearError();

    }
);