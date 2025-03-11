document.addEventListener("DOMContentLoaded", () => {
    const projectsDiv = document.getElementById("projects");
    const addProjectBtn = document.getElementById("addProject");
    const saveBtn = document.getElementById("save");

    function loadProjects() {
        chrome.storage.sync.get("projects", (data) => {
            projectsDiv.innerHTML = "";
            const projects = data.projects || [];
            projects.forEach((proj, index) => addProjectField(proj.name, proj.color, index));
        });
    }

    function addProjectField(name = "", color = "#94d494", index = null) {
        const div = document.createElement("div");
        div.className = "project";
        div.innerHTML = `
        <input type="text" placeholder="Project Name" value="${name}">
        <input type="color" value="${color}">
        <button class="remove">X</button>
        `;
        projectsDiv.appendChild(div);
        div.querySelector(".remove").addEventListener("click", () => {
            div.remove();
        });
    }

    addProjectBtn.addEventListener("click", () => addProjectField());

    saveBtn.addEventListener("click", () => {
        const projects = [];
        document.querySelectorAll(".project").forEach(div => {
            const name = div.querySelector("input[type=text]").value;
            const color = div.querySelector("input[type=color]").value;
            if (name) projects.push({ name, color });
        });

        chrome.storage.sync.set({ projects }, () => {
            alert("Saved!");
        });
    });

    loadProjects();
});
