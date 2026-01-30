import Popup from "./Popup.js";
export  default class PopupWithImage extends Popup
{
 constructor(popupSelector)
 {
 super(popupSelector)
 this.popupSelector=popupSelector;
 this.buttonClose = this.popupSelector.querySelector(".images__button");
 this.titleSelector=document.querySelector(".images__text");
 this.imageSelector=document.querySelector(".images");
 }
 openPopUp(titleValue,imageValue)
 {
 this.titleSelector.textContent=titleValue;
 this.imageSelector.src=imageValue;
 super.openPopUp()
 }
 closePopUp()
 {
  super.closePopUp()
 }
 setEventsListeners()
 {
 this.buttonClose.addEventListener("click", () => {
      this.closePopUp();
    })
 }   
}
/*<div class="images__pop-up">
      <div class="images__overlay"></div>
      <div class="images__container">
        <button class="images__button"></button>
        <img src="" alt="image" class="images">
        <p class="images__text"></p>
      </div>*/
