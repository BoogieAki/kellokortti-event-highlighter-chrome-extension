function updateEventColors(projects) {
    document.querySelectorAll(".kellokortti_new_event").forEach(event => {
        const innerDiv = event.querySelector(".kellokortti_new_event_inner");
        if (!innerDiv) return;

        projects.forEach(({ name, color }) => {
            if (innerDiv.textContent.includes(name)) {
                const barInner = event.querySelector(".kellokortti_new_event_bar_inner");
                if (barInner) {
                    barInner.style.backgroundColor = color;
                }
            }
        });
    });
}

// Observer changes in DOM
const observer = new MutationObserver(() => {
    chrome.storage.sync.get("projects", (data) => {
        updateEventColors(data.projects || []);
    });
});

// Start observer
observer.observe(document.body, { childList: true, subtree: true });

chrome.storage.sync.get("projects", (data) => {
    updateEventColors(data.projects || []);
});
