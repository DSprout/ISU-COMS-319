fetch("./assets/toilet_catalog.json")
    .then(response => response.json())
    .then(catalog => loadCatalog(catalog))

var currentPage = 0;
var numPages;
var catalog;
const elementsPerPage = 12;

function loadCatalog(cat){
    catalog = cat;
    numPages = cat.length / elementsPerPage;
    createPagination();
    goToPage(0);

}
function goToPage(new_page){
    emptyDisplay();
    currentPage = new_page;

    let subCatalog = catalog.slice((currentPage * elementsPerPage), ((currentPage + 1) * elementsPerPage));

    addCatalogtoDisplay(subCatalog);
}

function nextPage(){
    if((currentPage + 1) <= numPages){
        goToPage(currentPage + 1);
    }
}

function prevPage(){
    if(currentPage > 0){
        goToPage(currentPage - 1);
    }
}
function addCatalogtoDisplay(catalog){
    var elements_container = document.getElementById("product_elements");

    for (let i = 0; i < catalog.length; i++){
        let imgLocation = "./assets/toilet_pictures/" + catalog[i]["Picture"];

        elements_container.innerHTML +=
            `<div class="d-grid">
                        <div class="card shadow-lg rounded-4" type="button">
                            <a href="./index.html" class="stretched-link"></a>
                            <img src="${imgLocation}" alt="Executive One-Piece Elongated Toilet" class="rounded-top-4">
                            <div class="card-body">
                                <p class="card-title fw-bold">${catalog[i]["Brand"]}</p>
                                <p class="card-text">${catalog[i]["Product Name"]}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="fw-bolder">${catalog[i]["Price"]}</small>
                                </div>
                            </div>
                        </div>
                </div>`;
    }
}

function emptyDisplay(){
    var elements_container = document.getElementById("product_elements");
    elements_container.innerHTML = '';
}

function createPagination(){
    var pag = document.getElementById("page_navigation");

    pag.innerHTML += '<li class="page-item"><a class="page-link" onclick="prevPage()">Previous</a></li>';

    for(let i = 0; i < numPages; i++){
        pag.innerHTML += '<li class="page-item"><a class="page-link" onclick="goToPage(' + i + ')">' + (i+1) + '</a></li>';
    }

    pag.innerHTML += '<li class="page-item"><a class="page-link" onclick="nextPage()">Next</a></li>';
}

