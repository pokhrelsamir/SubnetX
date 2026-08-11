/* =========================================
   SubnetX - Networking Learning Module
   ========================================= */

/* =========================================
   Learning Lessons
   ========================================= */

const learningLessons = [

    /* =====================================
       LESSON 1 - IPv4
       ===================================== */

    {
        id: "ipv4",

        category: "FUNDAMENTALS",

        icon: "🌐",

        title: "IPv4 Addressing",

        description:
            "Learn how IPv4 addresses are structured, divided into octets, and represented.",

        content: `

            <div class="lesson-header">

                <span class="card-label">
                    LESSON 1
                </span>

                <h3>
                    IPv4 Addressing
                </h3>

                <p>
                    IPv4 is one of the most widely used addressing
                    systems in computer networking. It identifies
                    devices on an IP network using a 32-bit address.
                </p>

            </div>


            <div class="lesson-section">

                <h4>What is an IPv4 Address?</h4>

                <p>
                    An IPv4 address is a logical address assigned
                    to a device on an IP network. It allows devices
                    to identify and communicate with one another.
                </p>

                <p>
                    IPv4 addresses contain <strong>32 bits</strong>
                    divided into four groups of 8 bits called
                    <strong>octets</strong>.
                </p>

            </div>


            <div class="lesson-section">

                <h4>IPv4 Structure</h4>

                <div class="lesson-code">
                    192 . 168 . 1 . 25
                </div>

                <p>
                    Each number represents one octet.
                    Each octet can contain a value from
                    <strong>0 to 255</strong>.
                </p>

            </div>


            <div class="lesson-section">

                <h4>IPv4 Address Components</h4>

                <table class="lesson-table">

                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Meaning</th>
                            <th>Example</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Network Portion</td>
                            <td>Identifies the network</td>
                            <td>192.168.1</td>
                        </tr>

                        <tr>
                            <td>Host Portion</td>
                            <td>Identifies a device</td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>Octet</td>
                            <td>8-bit section</td>
                            <td>192</td>
                        </tr>

                        <tr>
                            <td>Total Bits</td>
                            <td>Total IPv4 address size</td>
                            <td>32 bits</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Private IPv4 Addresses</h4>

                <p>
                    Private addresses are commonly used inside
                    local networks and are not directly routable
                    across the public Internet.
                </p>

                <table class="lesson-table">

                    <thead>
                        <tr>
                            <th>Range</th>
                            <th>CIDR</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>10.0.0.0 - 10.255.255.255</td>
                            <td>/8</td>
                        </tr>

                        <tr>
                            <td>172.16.0.0 - 172.31.255.255</td>
                            <td>/12</td>
                        </tr>

                        <tr>
                            <td>192.168.0.0 - 192.168.255.255</td>
                            <td>/16</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section example-box lesson-example">

                <span>EXAMPLE</span>

                <h4>
                    Identify the parts of:
                </h4>

                <div class="lesson-code">
                    192.168.1.25/24
                </div>

                <p>
                    <strong>Network:</strong>
                    192.168.1.0
                </p>

                <p>
                    <strong>Host:</strong>
                    25
                </p>

                <p>
                    <strong>Prefix:</strong>
                    /24
                </p>

            </div>


            <div class="lesson-section quick-check">

                <span class="card-label">
                    QUICK CHECK
                </span>

                <h4>
                    How many bits are in an IPv4 address?
                </h4>

                <div class="lesson-check-options">

                    <button data-correct="false">
                        16 bits
                    </button>

                    <button data-correct="true">
                        32 bits
                    </button>

                    <button data-correct="false">
                        64 bits
                    </button>

                </div>

                <p class="check-result"></p>

            </div>

        `
    },


    /* =====================================
       LESSON 2 - SUBNETTING
       ===================================== */

    {
        id: "subnetting",

        category: "NETWORKING",

        icon: "🧮",

        title: "Subnetting",

        description:
            "Understand CIDR, subnet masks, network addresses and host ranges.",

        content: `

            <div class="lesson-header">

                <span class="card-label">
                    LESSON 2
                </span>

                <h3>
                    Subnetting
                </h3>

                <p>
                    Subnetting divides a larger network into
                    smaller logical networks called subnets.
                </p>

            </div>


            <div class="lesson-section">

                <h4>What is Subnetting?</h4>

                <p>
                    Subnetting is the process of dividing an IP
                    network into smaller networks.
                </p>

                <p>
                    It helps organizations use IP addresses more
                    efficiently and separate network segments.
                </p>

            </div>


            <div class="lesson-section">

                <h4>CIDR Notation</h4>

                <p>
                    CIDR stands for
                    <strong>Classless Inter-Domain Routing</strong>.
                </p>

                <div class="lesson-code">
                    192.168.1.0/24
                </div>

                <p>
                    The <strong>/24</strong> means that the first
                    24 bits represent the network portion.
                </p>

            </div>


            <div class="lesson-section">

                <h4>Common CIDR Prefixes</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>CIDR</th>
                            <th>Subnet Mask</th>
                            <th>Total Addresses</th>
                            <th>Usable Hosts</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>/24</td>
                            <td>255.255.255.0</td>
                            <td>256</td>
                            <td>254</td>
                        </tr>

                        <tr>
                            <td>/25</td>
                            <td>255.255.255.128</td>
                            <td>128</td>
                            <td>126</td>
                        </tr>

                        <tr>
                            <td>/26</td>
                            <td>255.255.255.192</td>
                            <td>64</td>
                            <td>62</td>
                        </tr>

                        <tr>
                            <td>/27</td>
                            <td>255.255.255.224</td>
                            <td>32</td>
                            <td>30</td>
                        </tr>

                        <tr>
                            <td>/28</td>
                            <td>255.255.255.240</td>
                            <td>16</td>
                            <td>14</td>
                        </tr>

                        <tr>
                            <td>/30</td>
                            <td>255.255.255.252</td>
                            <td>4</td>
                            <td>2</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Network, Host and Broadcast</h4>

                <p>
                    A typical subnet contains:
                </p>

                <ul class="lesson-list">

                    <li>Network address</li>

                    <li>Usable host addresses</li>

                    <li>Broadcast address</li>

                </ul>

            </div>


            <div class="lesson-section lesson-example">

                <span>EXAMPLE</span>

                <h4>
                    192.168.1.0/26
                </h4>

                <table class="lesson-table">

                    <tbody>

                        <tr>
                            <td>Network</td>
                            <td>192.168.1.0</td>
                        </tr>

                        <tr>
                            <td>First Host</td>
                            <td>192.168.1.1</td>
                        </tr>

                        <tr>
                            <td>Last Host</td>
                            <td>192.168.1.62</td>
                        </tr>

                        <tr>
                            <td>Broadcast</td>
                            <td>192.168.1.63</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Useful Formula</h4>

                <div class="lesson-code">
                    Total Addresses = 2^(32 - Prefix)
                </div>

                <div class="lesson-code">
                    Usable Hosts = Total Addresses - 2
                </div>

            </div>


            <div class="lesson-section quick-check">

                <span class="card-label">
                    QUICK CHECK
                </span>

                <h4>
                    How many usable hosts are in a /26 subnet?
                </h4>

                <div class="lesson-check-options">

                    <button data-correct="false">
                        30
                    </button>

                    <button data-correct="true">
                        62
                    </button>

                    <button data-correct="false">
                        126
                    </button>

                </div>

                <p class="check-result"></p>

            </div>

        `
    },


    /* =====================================
       LESSON 3 - BINARY
       ===================================== */

    {
        id: "binary",

        category: "FUNDAMENTALS",

        icon: "🔢",

        title: "Binary & IP Addresses",

        description:
            "Learn how decimal IPv4 octets are converted into 8-bit binary values.",

        content: `

            <div class="lesson-header">

                <span class="card-label">
                    LESSON 3
                </span>

                <h3>
                    Binary &amp; IP Addresses
                </h3>

                <p>
                    Computers process network addresses using
                    binary values. Understanding binary makes
                    subnetting much easier.
                </p>

            </div>


            <div class="lesson-section">

                <h4>What is Binary?</h4>

                <p>
                    Binary is a number system that uses only
                    two digits:
                    <strong>0</strong> and <strong>1</strong>.
                </p>

                <p>
                    Each IPv4 octet contains exactly 8 bits.
                </p>

            </div>


            <div class="lesson-section">

                <h4>8-Bit Binary Values</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Bit</th>
                            <th>128</th>
                            <th>64</th>
                            <th>32</th>
                            <th>16</th>
                            <th>8</th>
                            <th>4</th>
                            <th>2</th>
                            <th>1</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Value</td>
                            <td>2⁷</td>
                            <td>2⁶</td>
                            <td>2⁵</td>
                            <td>2⁴</td>
                            <td>2³</td>
                            <td>2²</td>
                            <td>2¹</td>
                            <td>2⁰</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section lesson-example">

                <span>EXAMPLE</span>

                <h4>
                    Convert 192 to binary
                </h4>

                <div class="lesson-code">
                    192 = 128 + 64
                </div>

                <div class="lesson-code">
                    192 = 11000000
                </div>

            </div>


            <div class="lesson-section lesson-example">

                <span>IP EXAMPLE</span>

                <h4>
                    Convert an IPv4 address
                </h4>

                <div class="lesson-code">
                    192.168.1.25
                </div>

                <div class="lesson-code">
                    11000000.10101000.00000001.00011001
                </div>

            </div>


            <div class="lesson-section">

                <h4>Why Binary Matters</h4>

                <ul class="lesson-list">

                    <li>
                        Helps understand subnet masks.
                    </li>

                    <li>
                        Helps calculate network boundaries.
                    </li>

                    <li>
                        Makes CIDR easier to understand.
                    </li>

                    <li>
                        Helps understand how routers process addresses.
                    </li>

                </ul>

            </div>


            <div class="lesson-section quick-check">

                <span class="card-label">
                    QUICK CHECK
                </span>

                <h4>
                    What is the binary representation of 255?
                </h4>

                <div class="lesson-check-options">

                    <button data-correct="false">
                        00001111
                    </button>

                    <button data-correct="true">
                        11111111
                    </button>

                    <button data-correct="false">
                        10101010
                    </button>

                </div>

                <p class="check-result"></p>

            </div>

        `
    },


    /* =====================================
       LESSON 4 - PORTS
       ===================================== */

    {
        id: "ports",

        category: "NETWORK TOOLS",

        icon: "🔌",

        title: "TCP & UDP Ports",

        description:
            "Understand ports, protocols and commonly used networking services.",

        content: `

            <div class="lesson-header">

                <span class="card-label">
                    LESSON 4
                </span>

                <h3>
                    TCP &amp; UDP Ports
                </h3>

                <p>
                    Ports allow network devices to identify
                    specific services and applications.
                </p>

            </div>


            <div class="lesson-section">

                <h4>What is a Port?</h4>

                <p>
                    A port is a logical number used to identify
                    a specific network service or application.
                </p>

                <p>
                    Port numbers range from
                    <strong>0 to 65535</strong>.
                </p>

            </div>


            <div class="lesson-section">

                <h4>TCP vs UDP</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Feature</th>
                            <th>TCP</th>
                            <th>UDP</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Connection</td>
                            <td>Connection-oriented</td>
                            <td>Connectionless</td>
                        </tr>

                        <tr>
                            <td>Reliability</td>
                            <td>Reliable</td>
                            <td>No delivery guarantee</td>
                        </tr>

                        <tr>
                            <td>Ordering</td>
                            <td>Maintains order</td>
                            <td>No ordering guarantee</td>
                        </tr>

                        <tr>
                            <td>Speed</td>
                            <td>More overhead</td>
                            <td>Lower overhead</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Common Ports</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Port</th>
                            <th>Protocol</th>
                            <th>Service</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>20 / 21</td>
                            <td>TCP</td>
                            <td>FTP</td>
                        </tr>

                        <tr>
                            <td>22</td>
                            <td>TCP</td>
                            <td>SSH</td>
                        </tr>

                        <tr>
                            <td>23</td>
                            <td>TCP</td>
                            <td>Telnet</td>
                        </tr>

                        <tr>
                            <td>25</td>
                            <td>TCP</td>
                            <td>SMTP</td>
                        </tr>

                        <tr>
                            <td>53</td>
                            <td>TCP / UDP</td>
                            <td>DNS</td>
                        </tr>

                        <tr>
                            <td>80</td>
                            <td>TCP</td>
                            <td>HTTP</td>
                        </tr>

                        <tr>
                            <td>443</td>
                            <td>TCP</td>
                            <td>HTTPS</td>
                        </tr>

                        <tr>
                            <td>5432</td>
                            <td>TCP</td>
                            <td>PostgreSQL</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section lesson-example">

                <span>EXAMPLE</span>

                <h4>
                    Visiting a website
                </h4>

                <p>
                    When your browser connects to a typical
                    HTTPS website, the server commonly listens
                    on port:
                </p>

                <div class="lesson-code">
                    TCP 443
                </div>

            </div>


            <div class="lesson-section">

                <h4>Port Categories</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Range</th>
                            <th>Category</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>0 - 1023</td>
                            <td>Well-known ports</td>
                        </tr>

                        <tr>
                            <td>1024 - 49151</td>
                            <td>Registered ports</td>
                        </tr>

                        <tr>
                            <td>49152 - 65535</td>
                            <td>Dynamic / private ports</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section quick-check">

                <span class="card-label">
                    QUICK CHECK
                </span>

                <h4>
                    Which port is commonly used by HTTPS?
                </h4>

                <div class="lesson-check-options">

                    <button data-correct="false">
                        80
                    </button>

                    <button data-correct="true">
                        443
                    </button>

                    <button data-correct="false">
                        22
                    </button>

                </div>

                <p class="check-result"></p>

            </div>

        `
    },


    /* =====================================
       LESSON 5 - MAC
       ===================================== */

    {
        id: "mac",

        category: "NETWORKING",

        icon: "🖧",

        title: "MAC Addresses",

        description:
            "Learn about MAC addresses, OUI, unicast and locally administered addresses.",

        content: `

            <div class="lesson-header">

                <span class="card-label">
                    LESSON 5
                </span>

                <h3>
                    MAC Addresses
                </h3>

                <p>
                    A MAC address is a hardware-level address
                    used for communication within local networks.
                </p>

            </div>


            <div class="lesson-section">

                <h4>What is a MAC Address?</h4>

                <p>
                    MAC stands for
                    <strong>Media Access Control</strong>.
                </p>

                <p>
                    A traditional MAC address is
                    <strong>48 bits</strong> long and is normally
                    represented using hexadecimal values.
                </p>

                <div class="lesson-code">
                    AA:BB:CC:DD:EE:FF
                </div>

            </div>


            <div class="lesson-section">

                <h4>MAC Address Structure</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Part</th>
                            <th>Size</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>OUI</td>
                            <td>24 bits</td>
                            <td>Identifies the organizational assignment</td>
                        </tr>

                        <tr>
                            <td>NIC Portion</td>
                            <td>24 bits</td>
                            <td>Identifies the interface</td>
                        </tr>

                        <tr>
                            <td>Total</td>
                            <td>48 bits</td>
                            <td>Complete MAC address</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Common MAC Formats</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Format</th>
                            <th>Example</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Colon</td>
                            <td>AA:BB:CC:DD:EE:FF</td>
                        </tr>

                        <tr>
                            <td>Hyphen</td>
                            <td>AA-BB-CC-DD-EE-FF</td>
                        </tr>

                        <tr>
                            <td>Cisco</td>
                            <td>AABB.CCDD.EEFF</td>
                        </tr>

                        <tr>
                            <td>Plain</td>
                            <td>AABBCCDDEEFF</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Unicast, Multicast and Broadcast</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Type</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Unicast</td>
                            <td>One device to another device</td>
                        </tr>

                        <tr>
                            <td>Multicast</td>
                            <td>One device to a group</td>
                        </tr>

                        <tr>
                            <td>Broadcast</td>
                            <td>One device to all devices on the local network</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section lesson-example">

                <span>EXAMPLE</span>

                <h4>
                    MAC Address Analysis
                </h4>

                <div class="lesson-code">
                    AA:BB:CC:DD:EE:FF
                </div>

                <p>
                    First 24 bits:
                    <strong>AA:BB:CC</strong>
                </p>

                <p>
                    Remaining 24 bits:
                    <strong>DD:EE:FF</strong>
                </p>

            </div>


            <div class="lesson-section quick-check">

                <span class="card-label">
                    QUICK CHECK
                </span>

                <h4>
                    How many bits are in a traditional MAC address?
                </h4>

                <div class="lesson-check-options">

                    <button data-correct="false">
                        32 bits
                    </button>

                    <button data-correct="true">
                        48 bits
                    </button>

                    <button data-correct="false">
                        64 bits
                    </button>

                </div>

                <p class="check-result"></p>

            </div>

        `
    },


    /* =====================================
       LESSON 6 - NETWORKING BASICS
       ===================================== */

    {
        id: "network-basics",

        category: "FUNDAMENTALS",

        icon: "📡",

        title: "Networking Basics",

        description:
            "Build a foundation with hosts, networks, protocols and communication.",

        content: `

            <div class="lesson-header">

                <span class="card-label">
                    LESSON 6
                </span>

                <h3>
                    Networking Basics
                </h3>

                <p>
                    Learn the basic concepts that form the
                    foundation of computer networking.
                </p>

            </div>


            <div class="lesson-section">

                <h4>What is a Network?</h4>

                <p>
                    A computer network is a group of connected
                    devices that can communicate and share
                    resources.
                </p>

                <p>
                    Examples include computers, phones, servers,
                    printers, routers and switches.
                </p>

            </div>


            <div class="lesson-section">

                <h4>Important Networking Terms</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Term</th>
                            <th>Meaning</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Host</td>
                            <td>A device connected to a network</td>
                        </tr>

                        <tr>
                            <td>Network</td>
                            <td>A group of connected devices</td>
                        </tr>

                        <tr>
                            <td>Router</td>
                            <td>Connects different networks</td>
                        </tr>

                        <tr>
                            <td>Switch</td>
                            <td>Connects devices within a LAN</td>
                        </tr>

                        <tr>
                            <td>Protocol</td>
                            <td>Rules used for communication</td>
                        </tr>

                        <tr>
                            <td>IP Address</td>
                            <td>Logical network address</td>
                        </tr>

                        <tr>
                            <td>MAC Address</td>
                            <td>Link-layer hardware address</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>Common Networking Devices</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Device</th>
                            <th>Primary Function</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Router</td>
                            <td>Connects and routes between networks</td>
                        </tr>

                        <tr>
                            <td>Switch</td>
                            <td>Connects devices in a local network</td>
                        </tr>

                        <tr>
                            <td>Access Point</td>
                            <td>Provides wireless network access</td>
                        </tr>

                        <tr>
                            <td>Firewall</td>
                            <td>Controls network traffic according to rules</td>
                        </tr>

                        <tr>
                            <td>Modem</td>
                            <td>Provides a connection to a service provider network</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section">

                <h4>How a Device Communicates</h4>

                <ol class="lesson-list">

                    <li>
                        The application creates data.
                    </li>

                    <li>
                        Network protocols prepare the data
                        for transmission.
                    </li>

                    <li>
                        The data is sent through the network.
                    </li>

                    <li>
                        Routers forward packets between networks.
                    </li>

                    <li>
                        The destination device receives and
                        processes the data.
                    </li>

                </ol>

            </div>


            <div class="lesson-section lesson-example">

                <span>REAL-WORLD EXAMPLE</span>

                <h4>
                    Opening a website
                </h4>

                <p>
                    You enter a website address into your browser.
                    The browser uses DNS to resolve the domain,
                    establishes communication with the server,
                    and exchanges data using network protocols.
                </p>

                <div class="lesson-code">
                    Browser → Network → Router → Internet → Server
                </div>

            </div>


            <div class="lesson-section">

                <h4>Common Protocols</h4>

                <table class="lesson-table">

                    <thead>

                        <tr>
                            <th>Protocol</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>HTTP</td>
                            <td>Web communication</td>
                        </tr>

                        <tr>
                            <td>HTTPS</td>
                            <td>Secure web communication</td>
                        </tr>

                        <tr>
                            <td>DNS</td>
                            <td>Domain name resolution</td>
                        </tr>

                        <tr>
                            <td>DHCP</td>
                            <td>Automatic IP configuration</td>
                        </tr>

                        <tr>
                            <td>SSH</td>
                            <td>Secure remote administration</td>
                        </tr>

                        <tr>
                            <td>ICMP</td>
                            <td>Network control and diagnostic messages</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <div class="lesson-section quick-check">

                <span class="card-label">
                    QUICK CHECK
                </span>

                <h4>
                    Which device normally connects different networks?
                </h4>

                <div class="lesson-check-options">

                    <button data-correct="false">
                        Switch
                    </button>

                    <button data-correct="true">
                        Router
                    </button>

                    <button data-correct="false">
                        Hub
                    </button>

                </div>

                <p class="check-result"></p>

            </div>


            <div class="lesson-section lesson-summary">

                <span class="card-label">
                    LESSON COMPLETE
                </span>

                <h4>
                    You now understand the networking fundamentals.
                </h4>

                <p>
                    Continue practicing with the SubnetX calculators
                    and Networking Practice module to strengthen
                    your understanding.
                </p>

            </div>

        `
    }

];


/* =========================================
   Learning State
   ========================================= */

let currentLessonIndex = -1;


/* =========================================
   DOM Elements
   ========================================= */

const learningCards =
    document.querySelectorAll(".learning-card");

const learningContent =
    document.getElementById("learningContent");


/* =========================================
   Show Topic Selection
   ========================================= */

function showTopicSelection() {

    currentLessonIndex = -1;

    if (!learningContent) {
        return;
    }

    learningContent.innerHTML = `

        <div class="learning-content-icon">
            📚
        </div>

        <div>

            <span class="card-label">
                SELECT A TOPIC
            </span>

            <h4>
                Start Learning Networking
            </h4>

            <p>
                Select any topic above to explore
                networking concepts, examples and
                important terminology.
            </p>

        </div>

    `;
}


/* =========================================
   Show Lesson
   ========================================= */

function showLesson(index) {

    if (!learningContent) {
        return;
    }

    if (
        index < 0 ||
        index >= learningLessons.length
    ) {
        return;
    }

    currentLessonIndex = index;

    const lesson =
        learningLessons[index];

    learningContent.innerHTML = `

        <div class="learning-lesson">

            <!-- Lesson Top -->

            <div class="lesson-navigation-top">

                <button
                    type="button"
                    class="lesson-back-button"
                    id="backToTopics"
                >
                    ← All Topics
                </button>

                <span class="lesson-progress">

                    Lesson
                    ${index + 1}
                    of
                    ${learningLessons.length}

                </span>

            </div>


            <!-- Lesson Content -->

            <div class="lesson-content">

                ${lesson.content}

            </div>


            <!-- Previous / Next -->

            <div class="lesson-navigation">

                <button
                    type="button"
                    class="secondary-button lesson-prev"
                    id="previousLesson"
                    ${index === 0 ? "disabled" : ""}
                >
                    ← Previous
                </button>


                <div class="lesson-progress-bar">

                    <div
                        class="lesson-progress-fill"
                        style="
                            width: ${
                                (
                                    ((index + 1) /
                                    learningLessons.length) *
                                    100
                                )
                            }%;
                        "
                    ></div>

                </div>


                <button
                    type="button"
                    class="primary-button lesson-next"
                    id="nextLesson"
                >

                    ${
                        index ===
                        learningLessons.length - 1
                            ? "Finish Lesson"
                            : "Next Lesson"
                    }

                    <span>→</span>

                </button>

            </div>

        </div>

    `;


    /* =====================================
       Back To Topics
       ===================================== */

    const backButton =
        document.getElementById(
            "backToTopics"
        );

    if (backButton) {

        backButton.addEventListener(
            "click",
            showTopicSelection
        );

    }


    /* =====================================
       Previous Lesson
       ===================================== */

    const previousButton =
        document.getElementById(
            "previousLesson"
        );

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                if (
                    currentLessonIndex > 0
                ) {

                    showLesson(
                        currentLessonIndex - 1
                    );

                }

            }
        );

    }


    /* =====================================
       Next Lesson
       ===================================== */

    const nextButton =
        document.getElementById(
            "nextLesson"
        );

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                if (
                    currentLessonIndex <
                    learningLessons.length - 1
                ) {

                    showLesson(
                        currentLessonIndex + 1
                    );

                } else {

                    showTopicSelection();

                }

            }
        );

    }


    /* =====================================
       Quick Checks
       ===================================== */

    const checkButtons =
        learningContent.querySelectorAll(
            ".lesson-check-options button"
        );

    checkButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const check =
                    button.closest(
                        ".quick-check"
                    );

                if (!check) {
                    return;
                }

                const result =
                    check.querySelector(
                        ".check-result"
                    );

                const buttons =
                    check.querySelectorAll(
                        ".lesson-check-options button"
                    );


                /* Prevent multiple answers */

                buttons.forEach(btn => {

                    btn.disabled = true;

                });


                /* Correct */

                if (
                    button.dataset.correct ===
                    "true"
                ) {

                    button.classList.add(
                        "correct"
                    );

                    if (result) {

                        result.textContent =
                            "✓ Correct! Well done.";

                        result.className =
                            "check-result correct-feedback";

                    }

                }


                /* Incorrect */

                else {

                    button.classList.add(
                        "incorrect"
                    );


                    buttons.forEach(btn => {

                        if (
                            btn.dataset.correct ===
                            "true"
                        ) {

                            btn.classList.add(
                                "correct"
                            );

                        }

                    });


                    if (result) {

                        result.textContent =
                            "✕ Not quite. The highlighted answer is correct.";

                        result.className =
                            "check-result incorrect-feedback";

                    }

                }

            }
        );

    });


    /* =====================================
       Scroll To Lesson
       ===================================== */

    learningContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================
   Learning Card Click Events
   ========================================= */

learningCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const topic =
                card.dataset.topic;

            const lessonIndex =
                learningLessons.findIndex(
                    lesson =>
                        lesson.id === topic
                );

            if (lessonIndex !== -1) {

                showLesson(
                    lessonIndex
                );

            }

        }
    );

});


/* =========================================
   Keyboard Navigation
   ========================================= */

document.addEventListener(
    "keydown",
    event => {

        /* Only operate while a lesson is open */

        if (
            currentLessonIndex === -1
        ) {
            return;
        }


        /* Don't interfere with form inputs */

        const activeElement =
            document.activeElement;

        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA" ||
                activeElement.tagName === "SELECT"
            )
        ) {

            return;

        }


        /* Left arrow */

        if (
            event.key === "ArrowLeft" &&
            currentLessonIndex > 0
        ) {

            showLesson(
                currentLessonIndex - 1
            );

        }


        /* Right arrow */

        if (
            event.key === "ArrowRight" &&
            currentLessonIndex <
            learningLessons.length - 1
        ) {

            showLesson(
                currentLessonIndex + 1
            );

        }

    }
);


/* =========================================
   Initial State
   ========================================= */

showTopicSelection();