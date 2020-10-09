window.addEventListener('wheel', handleScroll);

function handleScroll(event) {
    //event.deltaY;
    let productElm = document.querySelector('.product-demo')
    console.log(productElm)
    productElm.style.cssText = "border: border: 5px solid black;";
}