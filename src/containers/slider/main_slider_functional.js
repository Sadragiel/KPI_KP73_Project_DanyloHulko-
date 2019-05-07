
let slideIndex = 0;

export function plusDivs(n) {

    showDivs(slideIndex += n);
}

export function showDivs(n) {
    let i;
    let elements = document.getElementsByClassName("main-slider__element");
    let slides = document.getElementsByClassName("main-slider__item");
    let infoblocks = document.getElementsByClassName("main-slider__infoblock");
    if (n > elements.length - 1) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = elements.length - 1
    }
    for (i = 0; i < elements.length; i++) {
        elements[i].style.zIndex = 1;

        slides[i].style.opacity = 0;  
        slides[i].style.visibility = "hidden"; 
        slides[i].style.position = "absolute"; 
        
        // slides[i].style = {
        //     ...slides[i].style,
        //     opacity: 0, 
        //     visibility: "hidden",
        //     position: "absolute",
        // }

        // infoblocks[i].style = {
        //     ...infoblocks[i].style,
        //     opacity: 0, 
        //     visibility: "hidden",
        // }
        infoblocks[i].style.opacity = 0;  
        infoblocks[i].style.visibility = "hidden"; 
    }
    elements[slideIndex].style.zIndex = 2;

    slides[slideIndex].style.position = "relative";  
    slides[slideIndex].style.visibility = "visible";  
    slides[slideIndex].style.opacity = 1;   

    // slides[slideIndex-1].style = {
    //     ...slides[slideIndex-1].style,
    //     opacity: 1, 
    //     visibility: "visible",
    //     position: "relative",
    // }
    // console.log('slides[slideIndex-1].style', slides[slideIndex-1].style.visibility)
    
    infoblocks[slideIndex].style.visibility = "visible";  
    infoblocks[slideIndex].style.opacity = 1;  
    // infoblocks[slideIndex-1].style = {
    //     ...infoblocks[slideIndex-1].style,
    //     opacity: 1, 
    //     visibility: "visible",
    // }
}
