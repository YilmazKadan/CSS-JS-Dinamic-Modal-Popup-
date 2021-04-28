const  openPopupElement = document.querySelectorAll("[data-open-popup]");
const  closePopupElement= document.querySelectorAll("[data-close-popup]");
const  blackPanel = document.querySelector(".black-panel");



openPopupElement.forEach(element =>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        openPopUp(element.dataset.openPopup); 
    })
})
function openPopUp(element){
    if(element == null) return; 
    document.querySelector(element).classList.add("active");
    blackPanelOpen();
}
function blackPanelClose(){
    blackPanel.classList.remove("active");
    
}
function blackPanelOpen(){
    blackPanel.classList.add("active");
}
closePopupElement.forEach(element =>{
    element.addEventListener('click',() =>{
        const popup = element.closest(".popup");
        popupClose(popup);
    })
})

blackPanel.addEventListener('click',()=>{
    blackPanelClose();
    allPopupClose();
})

// All popup close

function allPopupClose(){
    document.querySelectorAll(".popup.active").forEach((element)=>{
        element.classList.remove("active");
    })
}
function popupClose(element){
    element.classList.remove("active");
    blackPanelClose();
    
}