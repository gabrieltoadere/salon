const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-item.open");
    if (openItem && openItem !== header.parentElement) {
      closeAccordion(openItem);
    }
    header.parentElement.classList.toggle("open");
    toggleAccordion(header.parentElement);
  });
});

function toggleAccordion(item) {
  const content = item.querySelector(".accordion-content");
  if (item.classList.contains("open")) {
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    content.style.maxHeight = null;
  }
}

function closeAccordion(item) {
  const content = item.querySelector(".accordion-content");
  item.classList.remove("open");
  content.style.maxHeight = null;
}

window.addEventListener('load', () => {
  const imgs = document.querySelectorAll('#image-track .image');

  imgs.forEach((img, i) => {
    // Add the class that triggers the CSS animation
    img.classList.add('reveal');

    // Stagger timing (120ms start, +160ms per image)
    const delay = 120 + i * 160;
    // We have two animations in the CSS, so set delay for both
    img.style.animationDelay = `${delay}ms, ${delay}ms`;
  });
});