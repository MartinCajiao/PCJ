
function showError(input) {
    const errorMessage = input.validationMessage
    const errorText = document.querySelector(`#${input.id}-error`)
    errorText.textContent = errorMessage
    input.classList.add("form__input_error");
}
function hideError(input) {
    const errorText = document.querySelector(`#${input.id}-error`)
    errorText.textContent = ""
    input.classList.remove("form__input_error");
}
function checkInputValidity(input) {
    if (input.validity.valid) {


        hideError(input)
    }
    else { showError(input) }
}
function toogleButtonState(form, button) {

    let butttonSelector;
    if (button.textContent === "Crear") {
        butttonSelector = "#createButton"
    }
    else { butttonSelector = "#submitButton" }

    const submitButton = document.querySelector(butttonSelector)

    const inputs = Array.from(form.querySelectorAll(".form__input"))
    const isValid = inputs.every((input) => input.validity.valid)

    if (isValid) {
        submitButton.disabled = false
        submitButton.classList.remove("form__button-disabled")
    }
    else {
        submitButton.disabled = true
        submitButton.classList.add("form__button-disabled")
    }
}
function setEventsListeners(form, validationConfig) {
    const saveInputs = document.querySelectorAll(validationConfig.inputSelector)
    console.log(saveInputs,"saveInputs")
    const submitButton = form.querySelector(validationConfig.submitButtonSelector)
    toogleButtonState(form, submitButton)
    saveInputs.forEach(input => {
        input.addEventListener("input", () => {
            checkInputValidity(input)
            toogleButtonState(form, submitButton)
        })
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })
}

function enableValidation() {

    const validationConfig = {
        formSelector: ".form",
        inputSelector: ".form__input",
        submitButtonSelector: ".form__create-button",
        inactiveButtonClass: "form__create_disabled",
        inputErrorClass: "form__text_error",
        errorClass: "form__error_visible"
    }


    //QuerySelector All es para generar un arreglo
    //QuerySelector es para agregar funcionalidad a elementos
    const forms = document.querySelectorAll(validationConfig.formSelector)
    forms.forEach(form => {
        setEventsListeners(form, validationConfig)
    })
}


export default enableValidation;
