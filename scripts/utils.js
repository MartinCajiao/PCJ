export function heartActive(heart) {
  if (heart.classList.contains("card__active")) {
    heart.classList.remove("card__active");
  } else {
    heart.classList.add("card__active");
  }
}
export function deleteCard(trash) {
  trash.remove()
}
export const input1 = document.getElementById("input1");
export const input2 = document.getElementById("input2");
export const form = document.querySelector("#form2");
export const popupSelector =document.querySelector(".pop-up");
export const buttonClose =document.querySelector(".form__close");