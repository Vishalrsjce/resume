const certData = [
    {
        detail: "IEEE Published Paper (IoT Smart Monitoring)",
        authority: "IEEE",
        year: "2024",
        link: "https://ieeexplore.ieee.org/document/10895461",
        verifyText: "Verify via IEEE Xplore"
    },
    {
        detail: "Cybersecurity Professional Certification",
        authority: "Cyber Lancers",
        year: "2025",
        link: "Cyber Academy Certificate_.pdf",
        verifyText: "View Certificate"
    },
    {
        detail: "Digital Engineering (Industry Readiness)",
        authority: "NASSCOM",
        year: "2024",
        link: "Vishal+R_nasscom.pdf",
        verifyText: "View NASSCOM ID"
    },
    {
        detail: "Advanced PLC Programming & Logic",
        authority: "Siemens Certified",
        year: "2023",
        link: "#",
        verifyText: "Internal Record"
    },
    {
        detail: "SCADA Infrastructure Engineering",
        authority: "Rockwell Automation",
        year: "2023",
        link: "#",
        verifyText: "Internal Record"
    }
];

function renderCertifications() {
    const tableBody = document.getElementById('cert-table-body');
    tableBody.innerHTML = certData.map(cert => `
        <tr>
            <td>
                <strong>${cert.detail}</strong>
                <a href="${cert.link}" target="_blank" class="pdf-link">${cert.verifyText}</a>
            </td>
            <td>${cert.authority}</td>
            <td>${cert.year}</td>
        </tr>
    `).join('');
}