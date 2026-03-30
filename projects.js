const projectData = [
    // TIER 1: CORE INTELLIGENCE (Priority 01)
    {
        title: "Autonomous AI CTI Engine",
        category: "cyber ai",
        priority: "FLAGSHIP",
        description: "Llama-3 based engine for Cyber Threat Intelligence. Processes 172k reports for automated incident verdicts.",
        link: "https://vishalrsjce.github.io/AI_CTI_Project/",
        tier: "Priority 01: Core Intelligence & Security Operations"
    },
    {
        title: "Wazuh SIEM Operations",
        category: "cyber",
        priority: "SOC OPS",
        description: "Comprehensive SIEM deployment guide including real-time monitoring and active response configuration.",
        link: "https://vishalrsjce.github.io/SOC-Operations-Wazuh-SIEM-Training/",
        tier: "Priority 01: Core Intelligence & Security Operations"
    },
    {
        title: "Red Teaming Methodology",
        category: "cyber",
        priority: "OFFENSIVE",
        description: "Exploitation frameworks and offensive web security strategies for enterprise vulnerability assessment.",
        link: "https://vishalrsjce.github.io/Red-Teaming-Offensive-Web-Security/",
        tier: "Priority 01: Core Intelligence & Security Operations"
    },

    // TIER 2: TECHNICAL DEPTH (Priority 02)
    {
        title: "Nanosatellite EPS",
        category: "iot",
        priority: "AEROSPACE",
        description: "Electrical Power System design for satellites, focusing on MPPT logic and battery management.",
        link: "https://vishalrsjce.github.io/Electrical-Power-System-EPS-for-Nanosatellites/",
        tier: "Priority 02: Advanced Engineering & Forensics"
    },
    {
        title: "PCAP Threat Hunting",
        category: "cyber",
        priority: "FORENSICS",
        description: "Network forensic analysis to identify malware beaconing and lateral movement patterns.",
        link: "https://vishalrsjce.github.io/PCAP-Threat-Hunting-Network-Analysis/",
        tier: "Priority 02: Advanced Engineering & Forensics"
    },
    {
        title: "Network Emulation (GNS3)",
        category: "soft",
        priority: "INFRA",
        description: "High-fidelity simulation of enterprise-grade security architectures and complex routing topologies.",
        link: "https://vishalrsjce.github.io/Network-Emulation-Enterprise-Security-GNS3-/",
        tier: "Priority 02: Advanced Engineering & Forensics"
    },

    // TIER 3: INDUSTRIAL & SMART HARDWARE (Priority 03)
    {
        title: "Bash & Linux Automation",
        category: "soft",
        priority: "DEVOPS",
        description: "Advanced shell scripting for log rotation, server health, and system hardening.",
        link: "https://vishalrsjce.github.io/Bash-Scripting-and-Linux-Automation/",
        tier: "Priority 03: Infrastructure & Smart Hardware"
    },
    {
        title: "Cisco Enterprise Design",
        category: "soft",
        priority: "NETWORKING",
        description: "Scalable network infrastructure design using VLAN, OSPF, and ACL policies.",
        link: "https://vishalrsjce.github.io/Cisco-Packet-Tracer-Laboratory-Enterprise-Design/",
        tier: "Priority 03: Infrastructure & Smart Hardware"
    },
    {
        title: "ESP32-CAM Monitoring",
        category: "iot",
        priority: "HARDWARE",
        description: "IoT-based surveillance system with real-time video streaming and image capture capabilities.",
        link: "https://vishalrsjce.github.io/ESP32-CAM-Smart-Monitoring-System/",
        tier: "Priority 03: Infrastructure & Smart Hardware"
    },
    {
        title: "Smart Attendance System",
        category: "iot",
        priority: "AIOT",
        description: "Biometric and OpenCV integration for automated logging and workforce management.",
        link: "https://vishalrsjce.github.io/Smart-Attendance-Monitoring-System/",
        tier: "Priority 03: Infrastructure & Smart Hardware"
    },

    // TIER 4: DATA & SOFTWARE (Priority 04)
    {
        title: "Movie Recommendation (SVD)",
        category: "ai",
        priority: "DATA SCI",
        description: "Predictive engine utilizing Singular Value Decomposition algorithm for user preference mapping.",
        link: "https://vishalrsjce.github.io/Movie-Recommendation-System-with-and-without-SVD-using-Front-end/",
        tier: "Priority 04: Data Science & Software Frameworks"
    },
    {
        title: "Reservation & Ad-Monetization",
        category: "soft",
        priority: "FULLSTACK",
        description: "Full-stack reservation platform with custom integrated advertisement pre-load logic.",
        link: "https://vishalrsjce.github.io/Integrated-Movie-Reservation-System-with-Pre-Load-Ad-Monetization/",
        tier: "Priority 04: Data Science & Software Frameworks"
    },
    {
        title: "Python Development Logic",
        category: "soft",
        priority: "LOGIC",
        description: "Collection of core software engineering logic and advanced algorithm implementations.",
        link: "https://vishalrsjce.github.io/Python-Software-Development-Logic/",
        tier: "Priority 04: Data Science & Software Frameworks"
    },
    {
        title: "Cyber Knowledge Base",
        category: "cyber",
        priority: "GRC",
        description: "Mapping security domains to NIST and MITRE ATT&CK industrial frameworks.",
        link: "https://vishalrsjce.github.io/Cybersecurity-Knowledge-Base-Frameworks/",
        tier: "Priority 04: Data Science & Software Frameworks"
    },

    // TIER 5: CRYPTO, GAMES & SUB-MODULES (Priority 05)
    {
        title: "Chaos Enhanced Vigenère",
        category: "soft",
        priority: "CRYPTO",
        description: "Cryptographic project hardening classical ciphers using advanced Chaos Theory logic.",
        link: "https://vishalrsjce.github.io/Movie-Recommendation-System-with-and-without-SVD-using-Front-end/Chaos-Enhanced%20Vigen%C3%A8re%20Cipher.HTML",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "Traffic Light Controller",
        category: "iot",
        priority: "ARDUINO",
        description: "Density-based Arduino logic for smart city traffic management using ultrasonic sensors.",
        link: "https://vishalrsjce.github.io/Density-Based-Traffic-Light-Controller-Using-Arduino/",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "2-Player Battleground",
        category: "soft",
        priority: "GAME ENGINE",
        description: "Real-time multiplayer combat engine focused on low-latency browser input handling.",
        link: "https://vishalrsjce.github.io/2-Player-Battleground/",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "Flappy Bird: Custom Physics",
        category: "soft",
        priority: "GAME DEV",
        description: "Re-engineered physics engine and state logic implementation of a classic browser game.",
        link: "https://vishalrsjce.github.io/Flappy-Bird-Custom-Edition---Weakypedia/",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "Windows Batch Automation",
        category: "soft",
        priority: "SCRIPTS",
        description: "System-level attribute automation and administrative file management scripts.",
        link: "https://vishalrsjce.github.io/Windows-Batch-Scripting-Attribute-Automation/",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "Personal Workout Module",
        category: "soft",
        priority: "WEB APP",
        description: "Fitness tracking logic implementation for personalized routine generation.",
        link: "https://vishalrsjce.github.io/Movie-Recommendation-System-with-and-without-SVD-using-Front-end/workout_app.html",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "2-Player Games Index",
        category: "soft",
        priority: "PORTAL",
        description: "Portal for browser-based multiplayer logic and sprite-based interaction indexes.",
        link: "https://vishalrsjce.github.io/Movie-Recommendation-System-with-and-without-SVD-using-Front-end/2%20player%20games.html",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "Movie Platform Home",
        category: "soft",
        priority: "SUB-PAGE",
        description: "Landing architecture for integrated movie recommendation and reservation systems.",
        link: "https://vishalrsjce.github.io/Movie-Recommendation-System-with-and-without-SVD-using-Front-end/home.html",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    },
    {
        title: "Flappy Bird (HTML Module)",
        category: "soft",
        priority: "SUB-PAGE",
        description: "Specific browser module implementation of the Flappy Bird physics logic.",
        link: "https://vishalrsjce.github.io/Movie-Recommendation-System-with-and-without-SVD-using-Front-end/FLAPPY%20BIRD.HTML",
        tier: "Priority 05: Cryptography, Interactive & Sub-Modules"
    }
];

function renderProjects(filter = 'all') {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = '';
    
    let currentTier = "";

    projectData.forEach(project => {
        if (filter !== 'all' && !project.category.includes(filter)) return;

        // Add Tier Markers only in "All" view
        if (filter === 'all' && project.tier !== currentTier) {
            currentTier = project.tier;
            const marker = document.createElement('div');
            marker.className = 'tier-marker';
            marker.innerText = currentTier;
            grid.appendChild(marker);
        }

        const card = `
            <div class="project-card ${project.category}">
                <div class="glass-card">
                    <div>
                        <div class="headline-badge">${project.priority}</div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                    <a href="${project.link}" target="_blank" class="btn-link">Initialize Engine →</a>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}