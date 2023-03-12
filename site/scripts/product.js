fetch("./assets/toilet_catalog.json")
    .then(response => response.json())
    .then(catalog => LoadPage(catalog))



const urlParams = new URLSearchParams(window.location.search);

function LoadPage(catalog){
    let product = FindProduct(catalog, urlParams.get("Brand"), urlParams.get("Name"));
    console.log(product);

    /*Create Product Page here*/
}

function FindProduct(catalog, Brand, Name){
    for (let i = 0; i < catalog.length; i++) {
        if(catalog[i]["Brand"] === Brand &&catalog[i]["Product Name"] === Name)
            return catalog[i];
    }
}
