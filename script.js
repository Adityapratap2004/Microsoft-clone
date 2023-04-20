const hamburger=document.getElementsByClassName("hamburger")[0];
const features=document.getElementsByClassName("features")[0];
const close=document.getElementsByClassName("close")[0];

hamburger.addEventListener("click",()=>{
    // console.log("hamburger");
    hamburger.style.display="none";
    close.style.display="block"
    features.style.transform="translateX(" + (0) + "px)"
})

close.addEventListener("click",()=>{
    // console.log("close");
    hamburger.style.display="block";
    close.style.display="none"
    features.style.transform="translateX("+(-94)+"rem)"
})



function viewNavElement(){
    if(window.screen.width>=768){
        // console.log("screen resize");
        features.style.transform="translateX(" + (0) + "px)"
    }
    else{
        features.style.transform="translateX("+(-94)+"rem)"
    }

}
window.onresize=viewNavElement;

