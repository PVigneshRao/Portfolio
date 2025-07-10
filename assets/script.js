function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  function revealTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerBottom = window.innerHeight * 0.85;
  
    items.forEach((item, index) => {
      const top = item.getBoundingClientRect().top;
  
      if (top < triggerBottom) {
        // Add staggered delay
        setTimeout(() => {
          item.classList.add('show');
        }, index * 200); // delay: 0ms, 200ms, 400ms, etc.
      }
    });
  }
  
  window.addEventListener('scroll', revealTimelineItems);
  window.addEventListener('load', revealTimelineItems);
  