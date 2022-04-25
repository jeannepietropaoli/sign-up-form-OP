const LABELS = document.querySelectorAll('label');

LABELS.forEach(label => {
    let labelength = label.innerHTML.length;
    label.style.backgroundSize = `${labelength-38}px`;
})