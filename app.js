document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  // Pobieramy dane z pliku projects.json
  fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
      // Dla każdego projektu w pliku JSON tworzymy pasujący kafelek HTML
      projects.forEach(project => {
        const card = document.createElement("a");
        card.href = project.link;
        card.className = "kafelek";

        // Pobieramy obrazek (obsługuje zarówno mainImage, jak i starsze pole image)
        const projectImage = project.mainImage || project.image || "";

        card.innerHTML = `
          <img src="${projectImage}" alt="${project.title}">
          <div class="overlay">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => console.error("Błąd podczas ładowania projektów:", error));
});