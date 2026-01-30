import {deleteCard,heartActive} from "./utils.js"
import {popUpQuestion} from "./index.js"
export class Card
{
constructor({name,link},handleOpen)
{
    this.name=name;
    this.link=link;
    this.handleOpen=handleOpen;
    this.template=document.querySelector("#template")
    console.log(this.handleOpen)
}
cloneNode()
{
    return this.template.content.querySelector(".card__container-one").cloneNode(true);
}
createCard()
{
    this.card=this.cloneNode();
    this.assignProperties()
    this.setEvents()
    return this.card
}
 assignProperties()
 {
  this.card.querySelector(".card__image").src = this.link;
  this.card.querySelector(".card__title").textContent = this.name;
  this.card.querySelector(".card__image").alt = this.name;
 }
 setEvents()
 {
 this.trashNode =this.card.querySelector(".card__icon-one")
 this.trashNode.addEventListener("click", () => popUpQuestion.openPopUp(this))
 this.card.querySelector(".card__image").addEventListener("click", () => this.handleOpen(this.name,this.link))
 }
}