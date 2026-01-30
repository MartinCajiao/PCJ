import Popup from "./Popup.js";
export  default class popUpQuestion extends Popup
{
 constructor(popupSelector)
 {
   super(popupSelector)
   this.popupSelector=popupSelector; 
 }   
    openPopUp()
    {
    super.openPopUp()
    }
    closePopUp()
    {
     super.closePopUp()
    }
} 