export default class UserInfo 
{
constructor(profesionSelector,nameSelector)
{
this.profesionSelector= document.querySelector(profesionSelector)
this.nameSelector = document.querySelector(nameSelector)    
}
setuserinfo(name,profesion)
{
this.profesionSelector.textContent = profesion;
this.nameSelector.textContent = name;
}
}