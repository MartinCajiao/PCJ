export class Section
{
    constructor(items,renderer,cardContainer)
    {
    this.items=items;
    this.renderer=renderer;
    this.cardContainer=cardContainer;
    }
    renderItems()
    {
     this.items.forEach((item) => {
     this.renderer(item)
     /*((item)=>{
     const newCard = new Card(item);
     const newNode = newCard.createCard()
     section.addItem(newNode)
     }*/
     });   
    }
    addItem(newNode)
    {
    this.cardContainer.append(newNode)
    }
}