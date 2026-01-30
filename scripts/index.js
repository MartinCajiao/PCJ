import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";
import chat from "./chat.js"; // Asegúrate de que el archivo se llame chat.js en minúscula
import { input1, input2, form } from "./utils.js";
import PopUpQuestion from "./popUpQuestion.js";
import { localService } from "./apiCards.js";
// SELECTORES EXISTENTES
const popUpOne = document.querySelector("#pop-up-one");
const popUpTwo = document.querySelector("#pop-up-two");

const imagesPop = document.querySelector(".images__pop-up");
const closeImages = document.querySelector(".images__button");
const popCreate = document.querySelector(".create-pop");

const closeplace = document.querySelector("#close__create");
const cardContainer = document.querySelector(".card");
const popUpDoubt = document.querySelector("#pop-up-policy");
const photoContainer = document.querySelector(".photo__container-second");
// --- SELECTORES CHAT ---
const popUpChatElement = document.querySelector("#pop-up-chat");
const buttonChatOpen = document.querySelector(".chat-open-button");



// --- INSTANCIAS DE APOYO ---
const api = new Api({
  baseUrl: "https://chatbot-05az.onrender.com",
  headers: { "Content-Type": "application/json" }
});

const chatUI = new chat(".chat-messages-container");
const userInfoContent = new UserInfo(".profile__profesion", ".profile__name");
const PopUpImage = new PopupWithImage(imagesPop);

// --- SECCIÓN DE TARJETAS ---

let section;

// Llamamos a la API local (Python)
localService.getCards()
  .then((initialCards) => {
    // 1. Creamos la sección SOLO cuando ya tenemos los datos
    section = new Section(
      initialCards,
      (data) => {
        const newCard = new Card(data, (titleValue, imageValue) => {
          PopUpImage.openPopUp(titleValue, imageValue);
        });
        const newNode = newCard.createCard();
        section.addItem(newNode);
      },
      cardContainer
    );

    // 2. Renderizamos dentro del .then
    section.renderItems();
  })
  .catch((err) => {
    console.error("Error al cargar tarjetas desde Python:", err);
  });

// --- VALIDACIÓN ---
export const popUpQuestion = new PopUpQuestion(popUpDoubt);
popUpQuestion.setEventlisteners();



// --- POPUP: CHAT AI ---
const popUpChat = new PopupWithForm(popUpChatElement, function (data) {
  const userMessage = data.chatInput; 
  chatUI.renderMessage(userMessage, "user");

  api.sendMessage(userMessage)
    .then((res) => {
      chatUI.renderMessage(res.reply, "bot");
    })
    .catch((err) => {
      console.log("Error en el chat:", err);
      chatUI.renderMessage("Error al conectar con el servidor", "bot");
    });
});

// --- SET EVENT LISTENERS (Corregido nombres de métodos) ---
PopUpImage.setEventsListeners();
popUpChat.setEventlisteners();

// --- EVENTOS DE CLICK ---


buttonChatOpen.addEventListener("click", () => popUpChat.openPopUp());

closeImages.addEventListener("click", () => imagesPop.classList.remove("images__pop-up-active"));
closeplace.addEventListener("click", () => popCreate.classList.remove("create-pop__active"));


