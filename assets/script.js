function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function revealTimelineItems() {
  const items = document.querySelectorAll('.timeline-item');
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;

    if (top < triggerBottom) {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 200);
    }
  });
}

window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('load', revealTimelineItems);
