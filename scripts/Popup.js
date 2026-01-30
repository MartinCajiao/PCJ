
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._buttonClose = this._popupSelector.querySelector(".form__close");
  }
  openPopUp() {
    this._popupSelector.classList.add("pop-up__active");
  }
  closePopUp() {
    this._popupSelector.classList.remove("pop-up__active");
  }

  setEventlisteners() {
    this._buttonClose.addEventListener("click", () => {
      this.closePopUp();
    })
  }
}
/*<div class="pop-up">
      <div class="pop-up__overlay"></div>
      <div class="edit">
        <button class="form__close"></button>
        <h3 class="form__title">Editar perfil</h3>
        <form class="form" id="form2" novalidate>
          <input type="text" class="form__input" placeholder="Nombre" id="input1" required minlength="2" maxlength="40"/>
          <p class="form__text_error" id="input1-error"></p>
          <input type="text" class="form__input" placeholder="Acerca de mí" id="input2" required minlength="2" maxlength="40"/>
          <p class="form__text_error" id="input2-error"></p>
          <button class="form__create-button" id="submitButton" type="submit">Guardar</button>
        </form>
      </div>
    </div> */