//menu

function openClose(){
    let nav = document.querySelector("nav.navegacao");
    let l1 = document.querySelector("div.linha1");
    let l2 = document.querySelector("div.linha2");
    let l3 = document.querySelector("div.linha3");

    if(nav.style.width == '0%'){
        nav.style.width = '30%'
        nav.style.transition = '1s'
        l1.style.background = "transparent";
        l1.style.transition = 'all 1s'
        /* rotacao */
        l2.style.position = 'relative'
        l2.style.rotate = '51deg'
        l2.style.transition = 'all 1s'
        l3.style.position = 'relative'
        l3.style.rotate = '128deg'
        l3.style.top = '-9px'
        l3.style.transition = 'all 1s'
    }else{
        nav.style.width = '0%'
        nav.style.transition = '1s'
        l1.style.background = " #f812ed";
        /* rotacao */
        l2.style.rotate = '0deg'
        l3.style.rotate = '0deg'
        l3.style.top = '0px'
    }
} 