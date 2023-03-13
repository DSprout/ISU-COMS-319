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
            `<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style="width: 100%">
                    <div class="my-3 py-3">
                        <h2 class="display-5">${product["Brand"]}</h2>
                        <p class="lead">${product["Product Name"]}</p>
                        <p class="lead"><b><em>${product["Price"]}</em></b></p>
                    </div>
                    <div class="bg-light box-shadow mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="${imgLocation}" class="bg-light box-shadow mx-auto" style="width: 100%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                    </div>
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style="width: 100%">
                    <div class="my-3 p-3">
                        <p class="lead">${product["Description"]}</p>
                        <p class="lead">Toilet Variant : ${product["Toilet Type"]}</p>
                        <p class="lead">Average Rating of <i> ${product["Rating"]} / 5 </i></p>
                        <!-- add star rating instead of text eventually -->
                    </div>
                 </div>
            </div>
            `;
}

function FindProduct(catalog, Brand, Name){
    for (let i = 0; i < catalog.length; i++) {
        if(catalog[i]["Brand"] === Brand &&catalog[i]["Product Name"] === Name)
            return catalog[i];
    }
}
