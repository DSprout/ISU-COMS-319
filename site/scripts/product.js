fetch("./assets/toilet_catalog.json")
    .then(response => response.json())
    .then(catalog => LoadPage(catalog))



const urlParams = new URLSearchParams(window.location.search);

function LoadPage(catalog){
    let product = FindProduct(catalog, urlParams.get("Brand"), urlParams.get("Name"));
    console.log(product);
    
    //product["element"]
    
    var elements_container = document.getElementById("product_elements");
        let imgLocation = "./assets/toilet_pictures/" + product["Picture"];
        
        elements_container.innerHTML +=
            `<div class="col-lg-6">
                <img src="${imgLocation}" class="rounded-4 img-fluid">
            </div>
            <div class="col-lg-6 text-center">
                <h2 class="display-3">${product["Brand"]}</h2>
                <p class="display-5">${product["Product Name"]}</p>
                <p class="lead"><b><em>${product["Price"]}</em></b></p>
                <p class="lead">${product["Description"]}</p>
                <p class="lead">Toilet Variant : ${product["Toilet Type"]}</p>
                <p class="lead">Average Rating of <i> ${product["Rating"]} / 5 </i></p>
                <!-- add star rating instead of text eventually -->
            </div>
            `;
}

function FindProduct(catalog, Brand, Name){
    for (let i = 0; i < catalog.length; i++) {
        if(catalog[i]["Brand"] === Brand &&catalog[i]["Product Name"] === Name)
            return catalog[i];
    }
}
