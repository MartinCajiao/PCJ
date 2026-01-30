import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handlesubmit) {
    super(popupSelector);
    // Usamos _popupSelector que viene de la clase padre Popup
    this.formSelector = this._popupSelector.querySelector(".form"); 
    this.formlist = Array.from(this._popupSelector.querySelectorAll(".form__input")); 
    this._formSubmit = this._formSubmit.bind(this);
    this.handlesubmit = handlesubmit;
  }

  // Eliminamos openPopUp y closePopUp si solo llaman a super (ya se heredan)

  getInputValues() {
    const saveInputs = {};
    this.formlist.forEach(input => {
      // Usamos el atributo 'name' en lugar de 'id' para que sea más compatible con la API
      const key = input.name || input.id;
      saveInputs[key] = input.value;
    });
    return saveInputs;
  }

  _formSubmit(event) {
    event.preventDefault(); // Detiene la recarga de la página
    
    const inputs = this.getInputValues();
    this.handlesubmit(inputs);

    // --- EL CAMBIO CLAVE AQUÍ ---
    // Si el ID del popup NO es el del chat, lo cerramos. 
    // Si ES el chat, lo dejamos abierto para ver la respuesta de la IA.
    if (this._popupSelector.id !== "pop-up-chat") {
      this.closePopUp();
    } else {
      // Para el chat, solo limpiamos el input para el siguiente mensaje
      this.formSelector.reset();
    }
  }

  addEvenLtistener() {
    // Asegúrate de que el formulario exista antes de añadir el listener
    if (this.formSelector) {
      this.formSelector.addEventListener("submit", this._formSubmit);
    }
  }

  // Si en index.js usas setEventlisteners, asegúrate de que llame a addEvenLtistener
  setEventlisteners() {
    super.setEventlisteners();
    this.addEvenLtistener();
  }
}