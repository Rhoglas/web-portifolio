import { licence, experience, project } from "./api.js";

// carrega a lista de certificados
const list_licence = () => {
  const data = licence;
  return data;
};
// carrega a lista de experiencia
const list_experience = () => {
  const data = experience;
  return data;
};
// carrega a lista de projetos
const list_project = () => {
  const data = project;
  return data;
};
// cria lista de certificados  no html
const createLicences = () => {
  const ul = document.querySelector("[data-js='list_licence']");

  list_licence().forEach((e) => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");

    const h4 = document.createElement("h4");
    h4.classList.add("a3");
    h4.textContent = e.title;

    const span = document.createElement("span");
    span.textContent = e.date;

    const p = document.createElement("p");
    p.textContent = e.desc;

    li.appendChild(h4);
    li.appendChild(span);
    li.appendChild(p);

    ul.appendChild(li);
  });
};
// cria lista de experiencia no html
const createExperience = () => {
  const ul = document.querySelector('[data-js="list_experience"');

  list_experience().forEach((e) => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");

    const h4 = document.createElement("h4");
    h4.classList.add("a3");
    h4.textContent = e.title;

    const span = document.createElement("span");
    span.textContent = e.date;

    const p = document.createElement("p");
    p.textContent = e.desc;

    li.appendChild(h4);
    li.appendChild(span);
    li.appendChild(p);

    ul.appendChild(li);
  });
};
// cria cards dos pojetos
const createProject = () => {
  const ul = document.querySelector('[data-js="list_project"]');
  list_project().forEach((e) => {
    const li = document.createElement("li");
    li.classList.add("proj-card");

    const figure = document.createElement("figure");
    figure.classList.add("cont-viewer");

    const section = document.createElement("section");
    section.classList.add("proj-viewer");

    const a1 = document.createElement("a");
    a1.setAttribute("href", `${e.link1}`);
    a1.setAttribute("target", "_blank");
    a1.classList.add("viewer-code");
    a1.textContent = `.`;

    const a2 = document.createElement("a");
    a2.setAttribute("href", `${e.link2}`);
    a2.setAttribute("target", "_blank");
    a2.classList.add("viewer-app");
    a2.textContent = `.`;

    const i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-journal-code");

    const i2 = document.createElement("i");
    i2.classList.add("bi");
    i2.classList.add("bi-eye");

    const img = document.createElement("img");
    img.alt = "Imagem do projeto";
    img.src = `${e.url_img}`;

    const a3 = document.createElement("a");
    a3.classList.add("a3");
    a3.href = `${e.url_repo}`;
    a3.target = `_blank`;
    a3.textContent = e.title;

    const p = document.createElement("p");
    p.textContent = e.desc;

    a1.appendChild(i1);
    a2.appendChild(i2);
    section.appendChild(a1);
    section.appendChild(a2);
    figure.appendChild(section);
    figure.appendChild(img);
    li.appendChild(figure);
    li.appendChild(a3);
    li.appendChild(p);

    ul.appendChild(li);
  });
};
// links da navbar de paginação
const btn = document.querySelectorAll(".btn-link");
btn.forEach((click) => {
  click.addEventListener("click", (e) => {
    // captura o click e retorna o btn-link
    const letter = e.target.innerText
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    // captura o cont-sec relativo ao btn-link
    const container = document.querySelectorAll(".cont-sec");
    container.forEach((cont) => {
      if (cont.id.includes(letter)) {
        cont.style.display = "block";
      } else {
        cont.style.display = "none";
      }
    });
  });
});
// link de esconder dados do usuário
const btn2 = document.querySelector("#btn-info");
btn2.addEventListener("click", () => {
  const cont = document.querySelector("#data-info-more");
  cont.classList.toggle("show");
});
// evento ativado ao massar o mouse ou clicar em projetos
const onBtnViewer = () => {
  const cards = document.querySelectorAll(".cont-viewer");
  cards.forEach((card) => {
    const figureElement = card.querySelector(".proj-viewer"); // Corrigido para usar 'card' como elemento pai
    card.addEventListener("mouseenter", () =>
      toggleClass(figureElement, "proj-viewer", "show-viewer")
    );
    card.addEventListener("mouseleave", () =>
      toggleClass(figureElement, "show-viewer", "proj-viewer")
    );
    card.addEventListener("click", () =>
      toggleClass(figureElement, "proj-viewer", "show-viewer")
    );
  });
  function toggleClass(element, classToRemove, classToAdd) {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
  }
};

function init() {
  createLicences(list_licence);
  createExperience(list_experience);
  createProject(list_project);
  onBtnViewer();
}

init();
