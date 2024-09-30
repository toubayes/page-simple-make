
const sections=document.querySelector(".sections");
const down=document.querySelector(".open");
const drp=document.querySelectorAll(".features-drop, .company-drop");  /*feature + company */
const dropdown=document.querySelectorAll(".features-dropdown , .company-dropdown"); /*feature + company  contaent*/

let isOpen =false;
// looop for #la 3add les dr =2
for(let i=0;i<drp.length;i++){   /* iterAtion 1 i==0 */
    drp[i].addEventListener("click",()=>{
        const arrowImage = drp[i].querySelector("img"); /* img ta3 drp[0] */
              /* tooggle img 8**/
        if (arrowImage.src.includes("icon-arrow-down.svg")) {
            arrowImage.src = "images/icon-arrow-up.svg";

            dropdown[i].style.display="block";
        } 
        else {
            arrowImage.src = "images/icon-arrow-down.svg";
            dropdown[i].style.display="none";
        }
           /* end tooggle img 8**/
    });
}/* end iterAtion 1 i==0 */


down.addEventListener("click",()=>{
    console.log("down button clicked");
    
    if (!isOpen) {
        sections.classList.add("active");
        down.src = 'images/icon-close-menu.svg'; // Switch to close icon
    } else {
        sections.classList.remove("active");
        down.src = 'images/icon-menu.svg'; // Switch back to menu icon
    }
    isOpen = !isOpen;
})