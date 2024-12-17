const fontVariations = [
    { weight: 100, style: "normal" },
    { weight: 200, style: "normal" },
    { weight: 300, style: "normal" },
    { weight: 400, style: "normal" },
    { weight: 500, style: "normal" },
    { weight: 600, style: "normal" },
    { weight: 700, style: "normal" },
    { weight: 800, style: "normal" },
    { weight: 900, style: "normal" },
    { weight: 400, style: "italic" },
    { weight: 700, style: "italic" }
];

// DOM elements
const inputBox = document.getElementById('input-box');
const fontWeight = document.getElementById('font-weight');
const italicStyle = document.getElementById('italic-style');
const textColor = document.getElementById('text-color');
const addTextButton = document.getElementById('add-text');
const container = document.getElementById('container');

//text function
function addNewText() {
const text = inputBox.value.trim();
if (text) {
const fontRow = document.createElement('div');
fontRow.className = 'font-row';
        
//scroll direction
const existingCustomRows = document.querySelectorAll('.custom-text').length;
if (existingCustomRows % 2 !== 0) {
fontRow.classList.add('scroll-reverse');
}
        
const scrollingText = document.createElement('div');
scrollingText.className = 'scrolling-text custom-text';
        
//repeated text
const repeatedText = `${text} \u00A0\u00A0\u00A0 `.repeat(20);
scrollingText.textContent = repeatedText;
        
// Apply styles
scrollingText.style.fontWeight = fontWeight.value;
scrollingText.style.fontStyle = italicStyle.checked ? 'italic' : 'normal';
scrollingText.style.color = textColor.value;
        
fontRow.appendChild(scrollingText);
        


// Event Listeners
addTextButton.addEventListener('click', addNewText);

// Preview
function updateInputPreview() {
    inputBox.style.fontWeight = fontWeight.value;
    inputBox.style.fontStyle = italicStyle.checked ? 'italic' : 'normal';
    inputBox.style.color = textColor.value;
}

fontWeight.addEventListener('change', updateInputPreview);
italicStyle.addEventListener('change', updateInputPreview);
textColor.addEventListener('input', updateInputPreview);

// Keyboard shortcut
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        addNewText();
        event.preventDefault();
    }
});

// page load
document.addEventListener('DOMContentLoaded', updateInputPreview);

// Font variation preview on hover
const previewFontVariation = (event) => {
    const randomVariation = fontVariations[Math.floor(Math.random() * fontVariations.length)];
    inputBox.style.fontWeight = randomVariation.weight;
    inputBox.style.fontStyle = randomVariation.style;
};

const resetPreview = () => {
    updateInputPreview();
};

// hover effects
inputBox.addEventListener('mouseover', previewFontVariation);
inputBox.addEventListener('mouseout', resetPreview);

const bouncingBox = document.querySelector('.bouncing-box');
bouncingBox.style.height = `${document.documentElement.scrollHeight}px`;

// Bouncing Boxes
function updateBouncingBoxHeight() {
    const bodyHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const bouncingBox = document.querySelector('.bouncing-box');
    if (bouncingBox) {
        bouncingBox.style.height = bodyHeight + 'px';
    }
}


window.addEventListener('load', updateBouncingBoxHeight);
window.addEventListener('resize', updateBouncingBoxHeight);