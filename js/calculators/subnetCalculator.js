/* =========================================
   NetCalc - Subnet Calculator
========================================= */


/* =========================================
   DOM Elements
========================================= */

const subnetIP =
    document.getElementById("subnetIP");

const originalCIDR =
    document.getElementById("originalCIDR");

const newCIDR =
    document.getElementById("newCIDR");

const calculateSubnetButton =
    document.getElementById("calculateSubnet");

const clearSubnetButton =
    document.getElementById("clearSubnet");

const subnetExample =
    document.getElementById("subnetExample");

const subnetError =
    document.getElementById("subnetError");

const subnetTableBody =
    document.getElementById("subnetTableBody");

const subnetCount =
    document.getElementById("subnetCount");


/* =========================================
   Summary Elements
========================================= */

const summaryNetwork =
    document.getElementById("summaryNetwork");

const summaryOriginalCIDR =
    document.getElementById(
        "summaryOriginalCIDR"
    );

const summaryNewCIDR =
    document.getElementById(
        "summaryNewCIDR"
    );

const summaryMask =
    document.getElementById("summaryMask");

const summarySubnetCount =
    document.getElementById(
        "summarySubnetCount"
    );

const summaryAddresses =
    document.getElementById(
        "summaryAddresses"
    );

const summaryHosts =
    document.getElementById(
        "summaryHosts"
    );

const summaryBorrowed =
    document.getElementById(
        "summaryBorrowed"
    );


/* =========================================
   IPv4 Validation
========================================= */

function isValidSubnetIPv4(ip) {

    const parts =
        ip.split(".");

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

        const value =
            Number(part);

        return (
            value >= 0 &&
            value <= 255
        );

    });

}


/* =========================================
   CIDR Validation
========================================= */

function isValidSubnetCIDR(cidr) {

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

function subnetIPToInteger(ip) {

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

function subnetIntegerToIP(number) {

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

        Math.floor(
            number / 256
        ) % 256,

        number % 256

    ]
        .slice(0, 4)
        .join(".");

}


/* =========================================
   CIDR → Mask
========================================= */

function subnetCIDRToMask(cidr) {

    if (cidr === 0) {

        return "0.0.0.0";

    }

    const mask =
        (0xFFFFFFFF <<
            (32 - cidr)
        ) >>> 0;

    return [

        (mask >>> 24) & 255,
        (mask >>> 16) & 255,
        (mask >>> 8) & 255,
        mask & 255

    ].join(".");

}


/* =========================================
   Get Network Address
========================================= */

function getSubnetNetwork(ipNumber, cidr) {

    const mask =
        cidr === 0
            ? 0
            : (
                0xFFFFFFFF <<
                (32 - cidr)
            ) >>> 0;

    return (
        ipNumber &
        mask
    ) >>> 0;

}


/* =========================================
   Generate Subnets
========================================= */

function generateSubnets(
    networkIP,
    originalPrefix,
    newPrefix
) {

    const ipNumber =
        subnetIPToInteger(
            networkIP
        );


    const baseNetwork =
        getSubnetNetwork(
            ipNumber,
            originalPrefix
        );


    const borrowedBits =
        newPrefix -
        originalPrefix;


    const subnetCount =
        2 ** borrowedBits;


    const addressesPerSubnet =
        2 ** (32 - newPrefix);


    const subnets = [];


    for (
        let i = 0;
        i < subnetCount;
        i++
    ) {

        const subnetNetwork =
            baseNetwork +
            (
                i *
                addressesPerSubnet
            );


        const broadcast =
            subnetNetwork +
            addressesPerSubnet -
            1;


        let firstHost;
        let lastHost;
        let usableHosts;


        if (newPrefix === 32) {

            firstHost =
                subnetNetwork;

            lastHost =
                subnetNetwork;

            usableHosts = 1;

        }

        else if (newPrefix === 31) {

            firstHost =
                subnetNetwork;

            lastHost =
                broadcast;

            usableHosts = 2;

        }

        else {

            firstHost =
                subnetNetwork + 1;

            lastHost =
                broadcast - 1;

            usableHosts =
                addressesPerSubnet - 2;

        }


        subnets.push({

            number:
                i + 1,

            network:
                subnetIntegerToIP(
                    subnetNetwork
                ),

            cidr:
                newPrefix,

            firstHost:
                subnetIntegerToIP(
                    firstHost
                ),

            lastHost:
                subnetIntegerToIP(
                    lastHost
                ),

            broadcast:
                subnetIntegerToIP(
                    broadcast
                ),

            addresses:
                addressesPerSubnet,

            usableHosts

        });

    }


    return {

        subnets,

        subnetCount,

        addressesPerSubnet,

        borrowedBits,

        mask:
            subnetCIDRToMask(
                newPrefix
            ),

        network:
            subnetIntegerToIP(
                baseNetwork
            )

    };

}


/* =========================================
   Render Summary
========================================= */

function renderSubnetSummary(
    result,
    originalPrefix,
    newPrefix
) {

    summaryNetwork.textContent =
        result.network;


    summaryOriginalCIDR.textContent =
        `/${originalPrefix}`;


    summaryNewCIDR.textContent =
        `/${newPrefix}`;


    summaryMask.textContent =
        result.mask;


    summarySubnetCount.textContent =
        result.subnetCount.toLocaleString();


    summaryAddresses.textContent =
        result.addressesPerSubnet.toLocaleString();


    const usableHosts =
        newPrefix >= 31
            ? result.addressesPerSubnet
            : result.addressesPerSubnet - 2;


    summaryHosts.textContent =
        usableHosts.toLocaleString();


    summaryBorrowed.textContent =
        result.borrowedBits;


    subnetCount.textContent =
        `${result.subnetCount.toLocaleString()} Subnets`;

}


/* =========================================
   Render Table
========================================= */

function renderSubnetTable(subnets) {

    subnetTableBody.innerHTML = "";


    subnets.forEach(subnet => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${subnet.number}
            </td>

            <td>
                <strong>
                    ${subnet.network}
                </strong>
            </td>

            <td>
                /${subnet.cidr}
            </td>

            <td>
                ${subnet.firstHost}
            </td>

            <td>
                ${subnet.lastHost}
            </td>

            <td>
                ${subnet.broadcast}
            </td>

            <td>
                ${subnet.addresses.toLocaleString()}
            </td>

        `;


        subnetTableBody.appendChild(
            row
        );

    });

}


/* =========================================
   Error
========================================= */

function showSubnetError(message) {

    subnetError.textContent =
        message;

    subnetError.classList.add(
        "show"
    );

}


/* =========================================
   Clear Error
========================================= */

function clearSubnetError() {

    subnetError.textContent =
        "";

    subnetError.classList.remove(
        "show"
    );

}


/* =========================================
   Calculate
========================================= */

function handleSubnetCalculation() {

    clearSubnetError();


    const ip =
        subnetIP.value.trim();


    const originalPrefix =
        Number(
            originalCIDR.value
        );


    const newPrefix =
        Number(
            newCIDR.value
        );


    /* Validate IP */

    if (
        !isValidSubnetIPv4(ip)
    ) {

        showSubnetError(
            "Please enter a valid IPv4 address."
        );

        return;

    }


    /* Validate original CIDR */

    if (
        !isValidSubnetCIDR(
            originalPrefix
        )
    ) {

        showSubnetError(
            "Original CIDR must be between /0 and /32."
        );

        return;

    }


    /* Validate new CIDR */

    if (
        !isValidSubnetCIDR(
            newPrefix
        )
    ) {

        showSubnetError(
            "New CIDR must be between /0 and /32."
        );

        return;

    }


    /* New prefix cannot be smaller */

    if (
        newPrefix <
        originalPrefix
    ) {

        showSubnetError(
            "New CIDR must be greater than or equal to the original CIDR."
        );

        return;

    }


    /* Prevent huge tables */

    const subnetCount =
        2 ** (
            newPrefix -
            originalPrefix
        );


    if (
        subnetCount > 1024
    ) {

        showSubnetError(
            "Too many subnets. Please choose a smaller CIDR difference."
        );

        return;

    }


    const result =
        generateSubnets(
            ip,
            originalPrefix,
            newPrefix
        );


    renderSubnetSummary(
        result,
        originalPrefix,
        newPrefix
    );


    renderSubnetTable(
        result.subnets
    );

}


/* =========================================
   Clear Calculator
========================================= */

function clearSubnetCalculator() {

    subnetIP.value =
        "";

    originalCIDR.value =
        "24";

    newCIDR.value =
        "26";


    clearSubnetError();


    summaryNetwork.textContent =
        "—";

    summaryOriginalCIDR.textContent =
        "—";

    summaryNewCIDR.textContent =
        "—";

    summaryMask.textContent =
        "—";

    summarySubnetCount.textContent =
        "—";

    summaryAddresses.textContent =
        "—";

    summaryHosts.textContent =
        "—";

    summaryBorrowed.textContent =
        "—";


    subnetCount.textContent =
        "0 Subnets";


    subnetTableBody.innerHTML = `

        <tr>

            <td
                colspan="7"
                class="empty-table"
            >
                Enter network details
                and generate subnets.
            </td>

        </tr>

    `;

}


/* =========================================
   Quick Example
========================================= */

function loadSubnetExample() {

    subnetIP.value =
        "192.168.1.0";

    originalCIDR.value =
        "24";

    newCIDR.value =
        "26";

    clearSubnetError();

}


/* =========================================
   Events
========================================= */

calculateSubnetButton.addEventListener(
    "click",
    handleSubnetCalculation
);


clearSubnetButton.addEventListener(
    "click",
    clearSubnetCalculator
);


subnetExample.addEventListener(
    "click",
    loadSubnetExample
);


/* Enter Key */

subnetIP.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            handleSubnetCalculation();

        }

    }
);


originalCIDR.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            handleSubnetCalculation();

        }

    }
);


newCIDR.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            handleSubnetCalculation();

        }

    }
);