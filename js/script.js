let ocultarPaneles=()=>{
    let paneles = document.querySelectorAll("[role=tabpanel]");
    for(let i=0;i<paneles.length;i++){
        paneles[i].classList.remove("visible");
        paneles[i].classList.add("oculto");
    }
}

document.querySelector("[role=tablist]").addEventListener("click",e=>{
    e.preventDefault();
    switch(e.target.getAttribute("href")){
        case "#chapter1Panel":
        case "#chapter2Panel":
        case "#quizPanel":
        ocultarPaneles();
        document.querySelector(e.target.getAttribute("href")).classList.add("visible");
            break;
    }
});