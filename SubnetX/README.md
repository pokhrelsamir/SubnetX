<div align="center">

# 🌐 SubnetX — Network Toolkit

**A modern, fast, and privacy-friendly IPv4 networking toolkit built with HTML, CSS, and JavaScript.**

Calculate networks, split subnets, convert IPv4 addresses to binary, explore common ports, and practice networking concepts — directly in your browser.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-SubnetX-6366F1?style=for-the-badge&logo=googlechrome&logoColor=white)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111827)](#)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)

</div>

---

## 🖼️ Project Banner

> **Add your banner image to:** `assets/banner.png`

<div align="center">

![SubnetX Banner](assets/banner.png)

</div>

---

## 📸 Screenshots

### Dashboard

> **Add your dashboard screenshot to:** `assets/dashboard.png`

<div align="center">

![SubnetX Dashboard](assets/dashboard.png)

</div>

### IPv4 Network Calculator

> **Add your IP calculator screenshot to:** `assets/ip-calculator.png`

<div align="center">

![IPv4 Network Calculator](assets/ip-calculator.png)

</div>

### Subnet Calculator

> **Add your subnet calculator screenshot to:** `assets/subnet-calculator.png`

<div align="center">

![Subnet Calculator](assets/subnet-calculator.png)

</div>

### Binary Converter

> **Add your binary converter screenshot to:** `assets/binary-converter.png`

<div align="center">

![Binary Converter](assets/binary-converter.png)

</div>

---

# 📖 About SubnetX

**SubnetX** is a browser-based IPv4 networking toolkit designed for students, beginners, and anyone learning computer networking.

The project focuses on making networking calculations easier to understand by presenting technical results in a clean dashboard-style interface.

It performs calculations locally in the browser, so users can work with IP addresses without sending their input to a remote server.

---

# ✨ Features

## 🌐 IPv4 Network Calculator

Enter an IPv4 address and CIDR prefix to calculate:

- Network address
- Broadcast address
- Subnet mask
- Wildcard mask
- First usable host
- Last usable host
- Total addresses
- Usable hosts
- IP class
- Address type

### Example

```text
Input:
192.168.1.25/24

Network:
192.168.1.0

Broadcast:
192.168.1.255

Usable Host Range:
192.168.1.1 - 192.168.1.254
```

---

## 🧮 Subnet Calculator

Divide an existing IPv4 network into smaller subnets.

The calculator provides:

- Original network
- Original CIDR
- New subnet CIDR
- Subnet mask
- Number of subnets
- Addresses per subnet
- Usable hosts per subnet
- Borrowed bits
- Network address for each subnet
- First usable host
- Last usable host
- Broadcast address

### Example

```text
192.168.1.0/24 → /26

Subnets: 4
Addresses per subnet: 64
Usable hosts per subnet: 62
```

---

## 🔢 Binary Converter

Convert IPv4 addresses between decimal and binary notation.

Features include:

- Decimal IPv4 address
- Dotted binary representation
- Individual 8-bit octets
- Complete 32-bit representation
- Input validation

### Example

```text
Decimal:
192.168.1.25

Binary:
11000000.10101000.00000001.00011001
```

---

## 🔌 Port Reference

Explore commonly used networking ports with:

- Port number
- Protocol
- Service
- Description
- Search functionality
- TCP/UDP filtering
- Quick copy action

Port data is stored locally in:

```text
data/ports.json
```

---

## 🖧 MAC Converter

The project includes a dedicated MAC address utility section prepared for future expansion.

---

## 🎯 Networking Practice

A dedicated learning area is included for interactive networking questions and subnetting practice.

---

## 📚 Learn Networking

SubnetX is designed to grow into a small networking learning platform containing simple explanations, examples, and practical networking concepts.

---

# 🌓 Theme Support

SubnetX supports both:

- 🌙 Dark Mode
- ☀️ Light Mode

The theme applies across the application interface, including:

- Sidebar
- Topbar
- Dashboard
- Cards
- Forms
- Tables
- Calculators
- Binary converter
- Port reference
- Learning sections

The selected theme is preserved using browser `localStorage`.

---

# 🔒 Privacy First

SubnetX is designed around local browser processing.

**No account is required and no backend server is needed for the core calculators.**

IP calculations and binary conversions are performed directly using JavaScript in the browser.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Application structure |
| **CSS3** | Responsive UI and theme system |
| **JavaScript** | Calculator logic and interactivity |
| **JSON** | Local networking data |
| **LocalStorage** | Theme persistence |

---

# 📁 Project Structure

```text
SubnetX/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── script.js
│   │
│   ├── calculators/
│   │   ├── ipCalculator.js
│   │   ├── subSubnetXulator.js
│   │   └── binaryCalculator.js
│   │
│   ├── tools/
│   │   ├── portReference.js
│   │   └── macConverter.js
│   │
│   └── practice/
│       ├── questions.js
│       └── quiz.js
│
├── data/
│   ├── ports.json
│   └── questions.json
│
├── assets/
│   ├── banner.png
│   ├── dashboard.png
│   ├── ip-calculator.png
│   ├── subnet-calculator.png
│   └── binary-converter.png
│
├── LICENSE
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/SubnetX.git
```

## 2. Open the Project

```bash
cd SubnetX
```

## 3. Run the Application

Because SubnetX is a frontend project, you can open:

```text
index.html
```

directly in your browser.

For a better development experience, use VS Code with the **Live Server** extension.

---

# 💻 Running with Live Server

1. Open the project in VS Code.
2. Install **Live Server**.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The application will open in your browser.

---

# 🧠 Networking Concepts Demonstrated

This project provides practical implementation of several networking concepts:

- IPv4 addressing
- CIDR notation
- Subnet masks
- Wildcard masks
- Network addresses
- Broadcast addresses
- Host ranges
- Subnetting
- Borrowed bits
- Binary representation
- TCP and UDP ports
- Common network services
- IP address classes
- Private and public addressing

---

# 🧪 Example Calculations

## IPv4 Calculation

```text
IP Address: 192.168.0.209
CIDR:       /24

Network:    192.168.0.0
Broadcast:  192.168.0.255
Mask:       255.255.255.0
Hosts:      192.168.0.1 - 192.168.0.254
```

## Subnet Calculation

```text
Original Network: 192.168.0.0/24
New CIDR:         /26

Number of Subnets:       4
Addresses / Subnet:      64
Usable Hosts / Subnet:   62
```

---

# 🎨 UI Design

SubnetX uses a modern dashboard-oriented interface with:

- Dark glass-style surfaces
- Clean typography
- Responsive cards
- Interactive navigation
- Consistent spacing
- Status badges
- Responsive tables
- Light/Dark theme support
- Mobile-friendly layouts

The interface is intentionally designed to make networking calculations easier to read and understand.

---

# 📱 Responsive Design

The application is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

Responsive rules are maintained separately in:

```text
css/responsive.css
```

---

# 🔮 Future Improvements

Planned improvements include:

- [ ] MAC address converter
- [ ] Interactive networking quiz
- [ ] Networking learning modules
- [ ] More protocol references
- [ ] IPv6 calculator
- [ ] VLSM calculator
- [ ] CIDR calculator
- [ ] IP range calculator
- [ ] Export calculation results
- [ ] Calculation history
- [ ] More networking utilities
- [ ] Improved accessibility
- [ ] More detailed learning explanations

---

# 🤝 Contributing

Contributions are welcome.

### Steps

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new networking feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.

---

# 👨‍💻 Author

<div align="center">

### Samir Pokhrel

B.Sc. CSIT Student | Web Developer | Networking & Technology Enthusiast

</div>

---

<div align="center">

### 🌐 SubnetX

**Calculate • Understand • Master Networking**

⭐ If you find this project useful, consider giving it a star!

</div>
