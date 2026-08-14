const form = document.getElementById("converter");
const input = document.getElementById("temperature");
const unit = document.getElementById("unit");
const error = document.getElementById("error");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const mercury = document.getElementById("mercury");
const bulb = document.getElementById("bulb");

const rows = {
C: document.getElementById("c-row"),
F: document.getElementById("f-row"),
K: document.getElementById("k-row")
};

function convert() {
const value = input.value.trim();


error.textContent = "";

if (value === "" || !isFinite(value)) {
    clearResults();
    return;
}

const temp = Number(value);
const selected = unit.value;

if (
    (selected === "C" && temp < -273.15) ||
    (selected === "F" && temp < -459.67) ||
    (selected === "K" && temp < 0)
) {
    error.textContent = "Temperature cannot be below absolute zero.";
    clearResults();
    return;
}

let c, f, k;

if (selected === "C") {
    c = temp;
    f = temp * 9 / 5 + 32;
    k = temp + 273.15;
} else if (selected === "F") {
    f = temp;
    c = (temp - 32) * 5 / 9;
    k = c + 273.15;
} else {
    k = temp;
    c = temp - 273.15;
    f = c * 9 / 5 + 32;
}

celsius.textContent = `${c.toFixed(2)} °C`;
fahrenheit.textContent = `${f.toFixed(2)} °F`;
kelvin.textContent = `${k.toFixed(2)} K`;

Object.values(rows).forEach(row => row.classList.remove("active"));
rows[selected].classList.add("active");

const percent = Math.max(0, Math.min(100, ((c + 50) / 200) * 100));
mercury.style.height = `${percent}%`;

const cold = c < 0;
mercury.style.background = cold ? "var(--cold)" : "var(--accent)";
bulb.style.background = cold ? "var(--cold)" : "var(--accent)";
}

function clearResults() {
celsius.textContent = "— °C";
fahrenheit.textContent = "— °F";
kelvin.textContent = "— K";
mercury.style.height = "0";
bulb.style.background = "var(--accent)";
Object.values(rows).forEach(row => row.classList.remove("active"));
}

input.addEventListener("input", convert);
unit.addEventListener("change", convert);

form.addEventListener("submit", event => {
event.preventDefault();
convert();
});
