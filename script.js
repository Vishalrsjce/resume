// Rail Fence Transposition Encryption and Decryption Code
function railFenceEncrypt(text, depth) {
    if (depth < 1 || depth > Math.ceil(text.length / 2)) {
        alert("Invalid Rail Fence depth. Must be between 1 and N/2.");
        return text;
    }

    const fence = Array.from({ length: depth }, () => []); // Create empty rows
    let row = 0, direction = 1; // Direction: 1 = down, -1 = up

    const steps = [`<strong>Text:</strong> ${text}`];
    steps.push(`<strong>Depth:</strong> ${depth}`);
    
    // Zigzag pattern
    for (let char of text) {
        fence[row].push(char);
        row += direction;

        // Reverse direction at the top or bottom of the zigzag
        if (row === 0 || row === depth - 1) direction *= -1;
    }

    steps.push("<strong>Zigzag Pattern:</strong>");
    fence.forEach((row, idx) => steps.push(`Row ${idx + 1}: ${row.join("")}`));

    const encrypted = fence.flat().join("");
    steps.push(`<strong>Rail Fence Ciphertext:</strong> ${encrypted}`);
    showSteps(steps);

    return encrypted;
}

function railFenceDecrypt(text, depth) {
    if (depth < 1 || depth > Math.ceil(text.length / 2)) {
        alert("Invalid Rail Fence depth. Must be between 1 and N/2.");
        return text;
    }

    const length = text.length;
    const pos = [];
    const counts = Array(depth).fill(0);

    let row = 0, direction = 1;
    for (let i = 0; i < length; i++) {
        pos.push(row);
        counts[row]++;
        row += direction;

        if (row === 0 || row === depth - 1) direction *= -1;
    }

    const fence = Array.from({ length: depth }, () => []);
    let index = 0;
    counts.forEach((count, row) => {
        for (let i = 0; i < count; i++) {
            fence[row].push(text[index++]);
        }
    });

    const decrypted = pos.map((row) => fence[row].shift()).join("");

    const steps = [`<strong>Ciphertext:</strong> ${text}`, `<strong>Depth:</strong> ${depth}`];
    steps.push("<strong>Row Counts:</strong> " + counts.join(", "));
    steps.push("<strong>Zigzag Reconstruction:</strong>");
    fence.forEach((row, idx) => steps.push(`Row ${idx + 1}: ${row.join("")}`));
    steps.push(`<strong>Decrypted from Rail Fence:</strong> ${decrypted}`);

    showSteps(steps);
    return decrypted;
}

// Chaos-based encryption
function textToNumbers(text) {
    return text.toLowerCase().split('').map(char => {
        return char >= 'a' && char <= 'z' ? char.charCodeAt(0) - 97 : -1;
    });
}

function numbersToText(numbers) {
    return numbers.map(num => {
        return num >= 0 ? String.fromCharCode(num + 97) : ' ';
    }).join('');
}

function generateKeyStream(initialKey, r, length) {
    let keyStream = [];
    let key = initialKey / 100000;
    for (let i = 0; i < length; i++) {
        key = (r * key * (1 - key)) % 1;
        keyStream.push(Math.floor(key * 26));
    }
    return keyStream;
}

function encrypt() {
    const plaintext = document.getElementById("plaintext").value;
    const initialKey = parseInt(document.getElementById("initialKey").value);
    const r = parseFloat(document.getElementById("rValue").value);
    const depth = parseInt(document.getElementById("railFenceDepth").value);
    const steps = [];

    if (isNaN(initialKey) || isNaN(r) || r < 0 || r > 4) {
        alert("Please enter a valid initial key and r value.");
        return;
    }

    if (plaintext.length < 2 || isNaN(depth)) {
        alert("Please provide valid input and Rail Fence depth.");
        return;
    }

    const plainNumbers = textToNumbers(plaintext);
    const keyStream = generateKeyStream(initialKey, r, plainNumbers.length);
    steps.push(`<strong>Plaintext Numeric:</strong> ${plainNumbers.join(", ")}`);
    steps.push(`<strong>Key Stream:</strong> ${keyStream.join(", ")}`);

    const encryptedNumbers = plainNumbers.map((num, i) => {
        return num >= 0 ? (num + keyStream[i]) % 26 : num;
    });
    steps.push(`<strong>Encrypted Numeric:</strong> ${encryptedNumbers.join(", ")}`);

    const chaosCipher = numbersToText(encryptedNumbers);
    steps.push(`<strong>Chaos-Enhanced Ciphertext:</strong> ${chaosCipher}`);

    const railFenceCipher = railFenceEncrypt(chaosCipher, depth);
    document.getElementById("output").innerText = `Before Rail Fence: ${chaosCipher}\nAfter Rail Fence: ${railFenceCipher}`;
    showSteps(steps);
}

function decrypt() {
    const ciphertext = document.getElementById("ciphertext").value;
    const initialKey = parseInt(document.getElementById("initialKey").value);
    const r = parseFloat(document.getElementById("rValue").value);
    const depth = parseInt(document.getElementById("railFenceDepth").value);
    const steps = [];

    if (isNaN(initialKey) || isNaN(r) || r < 0 || r > 4) {
        alert("Please enter a valid initial key and r value.");
        return;
    }

    if (ciphertext.length < 2 || isNaN(depth)) {
        alert("Please provide valid ciphertext and Rail Fence depth.");
        return;
    }

    const decryptedRailFence = railFenceDecrypt(ciphertext, depth);
    const cipherNumbers = textToNumbers(decryptedRailFence);
    const keyStream = generateKeyStream(initialKey, r, cipherNumbers.length);
    steps.push(`<strong>Ciphertext Numeric:</strong> ${cipherNumbers.join(", ")}`);
    steps.push(`<strong>Key Stream:</strong> ${keyStream.join(", ")}`);

    const decryptedNumbers = cipherNumbers.map((num, i) => {
        return num >= 0 ? (num - keyStream[i] + 26) % 26 : num;
    });
    steps.push(`<strong>Decrypted Numeric:</strong> ${decryptedNumbers.join(", ")}`);

    const decryptedText = numbersToText(decryptedNumbers);
    steps.push(`<strong>Final Plaintext:</strong> ${decryptedText}`);

    document.getElementById("output").innerText = `After Rail Fence: ${decryptedRailFence}\nFinal Plaintext: ${decryptedText}`;
    showSteps(steps);
}

// Matrix Effect Code
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00aaff';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

// Helper Function
function showSteps(steps) {
    const stepsDiv = document.getElementById("steps");
    stepsDiv.innerHTML = steps.join("<br>");
}
