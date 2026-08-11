/* ==========================================
   SubnetX — Port Reference
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("portSearch");
    const protocolFilter = document.getElementById("protocolFilter");
    const tableBody = document.getElementById("portTableBody");
    const resultCount = document.getElementById("portResultCount");

    if (!searchInput || !protocolFilter || !tableBody) {
        console.error("SubnetX: Port Reference elements not found.");
        return;
    }

    let ports = [];


    /* ==========================================
       Load Port Data
    ========================================== */

    async function loadPorts() {

        try {

            const response = await fetch("data/ports.json");

            if (!response.ok) {
                throw new Error("Unable to load ports.json");
            }

            ports = await response.json();

            renderPorts();

        } catch (error) {

            console.error(error);

            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="empty-table">
                        Unable to load port database.
                    </td>
                </tr>
            `;

        }

    }


    /* ==========================================
       Render Ports
    ========================================== */

    function renderPorts() {

        const searchTerm =
            searchInput.value.trim().toLowerCase();

        const protocol =
            protocolFilter.value;


        const filteredPorts = ports.filter(port => {

            const matchesSearch =
                port.port.toString().includes(searchTerm) ||
                port.service.toLowerCase().includes(searchTerm) ||
                port.description.toLowerCase().includes(searchTerm);

            const matchesProtocol =
                protocol === "all" ||
                port.protocol === protocol ||
                port.protocol.includes(protocol);

            return matchesSearch && matchesProtocol;

        });


        /* Result count */

        if (resultCount) {

            resultCount.textContent =
                `${filteredPorts.length} Ports`;

        }


        /* Empty result */

        if (filteredPorts.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="empty-table">
                        No matching ports found.
                    </td>
                </tr>
            `;

            return;

        }


        /* Build table */

        tableBody.innerHTML =
            filteredPorts.map(port => `

                <tr>

                    <td>
                        <strong class="port-number">
                            ${port.port}
                        </strong>
                    </td>

                    <td>
                        <span class="protocol-badge">
                            ${port.protocol}
                        </span>
                    </td>

                    <td>
                        <strong>
                            ${port.service}
                        </strong>
                    </td>

                    <td>
                        <span class="port-description">
                            ${port.description}
                        </span>
                    </td>

                    <td>
                        <button
                            class="copy-port"
                            data-port="${port.port}"
                            title="Copy port"
                        >
                            📋
                        </button>
                    </td>

                </tr>

            `).join("");


        attachCopyButtons();

    }


    /* ==========================================
       Search
    ========================================== */

    searchInput.addEventListener(
        "input",
        renderPorts
    );


    /* ==========================================
       Protocol Filter
    ========================================== */

    protocolFilter.addEventListener(
        "change",
        renderPorts
    );


    /* ==========================================
       Copy Port
    ========================================== */

    function attachCopyButtons() {

        document
            .querySelectorAll(".copy-port")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    async () => {

                        const port =
                            button.dataset.port;

                        try {

                            await navigator.clipboard.writeText(
                                port
                            );

                            button.textContent = "✓";

                            setTimeout(() => {
                                button.textContent = "📋";
                            }, 1000);

                        } catch (error) {

                            console.error(
                                "Unable to copy port.",
                                error
                            );

                        }

                    }
                );

            });

    }


    /* ==========================================
       Initial Load
    ========================================== */

    loadPorts();

});