const createNavbar = (isLogged) => {
  let navHtml = `<nav class="navbar navbar-expand-sm bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              ${
                isLogged
                  ? `<div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Dropdown
                          </a>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li>
                                  <hr class="dropdown-divider">
                              </li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                      </li>
                  </ul>
                  <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  <button id="log-out" class="btn btn-warning">Log Out</button>
                  `
                  : `<button class="btn btn-primary">Log In</button>`
              }
                  
              </div>
          </div>
      </nav>`;
  return navHtml;
};

const createPetCatalogCard = (petObject) => {
  let { picture, name, description } = petObject;
  let cardCol = document.createElement("div");
  cardCol.classList.add("col");

  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card", "mb-3");

  let cardRow = document.createElement("div");
  cardRow.classList.add("row", "g-0");

  let imageWrapper = document.createElement("div");
  imageWrapper.classList.add("col-md-4");

  let cardImage = document.createElement("img");
  cardImage.classList.add("img-fluid", "rounded-start");
  cardImage.setAttribute("src", picture);
  cardImage.setAttribute("alt", "Imagen de un perro");

  let contentWrapper = document.createElement("div");
  contentWrapper.classList.add("col-md-8");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;

  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = description;

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("d-flex", "gap-3", "justify-content-between");

  let detailButton = document.createElement("button");
  detailButton.classList.add("btn", "btn-primary");
  detailButton.innerText = "Ver detalle";

  let adoptButton = document.createElement("button");
  adoptButton.classList.add("btn", "btn-primary");
  adoptButton.innerText = "Adóptame";

  buttonWrapper.append(detailButton, adoptButton);
  cardBody.append(cardTitle, cardText, buttonWrapper);

  contentWrapper.append(cardBody);

  imageWrapper.append(cardImage);

  cardRow.append(imageWrapper, contentWrapper);

  cardWrapper.append(cardRow);

  cardCol.append(cardWrapper);

  return cardCol;
};

export { createNavbar, createPetCatalogCard };
