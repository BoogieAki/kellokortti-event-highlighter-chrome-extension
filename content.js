// Example project to highlight
function highLightProjectUBRAH(event) {
  const projectToFind = "Customer: UB Rahoitus Oy";
  const classToAdd = "ub-rahoitus-highlight";

  const innerDiv = event.querySelector(".kellokortti_new_event_inner");
  if (innerDiv && innerDiv.textContent.includes(projectToFind)) {
    const barInner = event.querySelector(".kellokortti_new_event_bar_inner");
    const innverDiv2 = event.querySelector(".kellokortti_new_event_bar");

    if (barInner) {
        barInner.classList.add(classToAdd);
    }
    if (innverDiv2) {
        innverDiv2.classList.add(classToAdd);
    }
  }
}

function updateEventColors() {
  document.querySelectorAll(".kellokortti_new_event").forEach(event => {
    highLightProjectUBRAH(event);
  });
}

// Observer changes in DOM
const observer = new MutationObserver(() => updateEventColors());

// Start observer
observer.observe(document.body, { childList: true, subtree: true });

updateEventColors();