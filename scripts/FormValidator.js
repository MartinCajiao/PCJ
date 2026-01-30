export default class FormValidator {
    showError(input) {
        const errorMessage = input.validationMessage
        const errorText = document.querySelector(`#${input.id}-error`)
        errorText.textContent = errorMessage
        input.classList.add("form__input_error");
    }
    hideError(input) {
        const errorText = document.querySelector(`#${input.id}-error`)
        errorText.textContent = ""
        input.classList.remove("form__input_error");
    }
    checkInputValidity(input) {
        if (input.validity.valid) {
            this.hideError(input)
        }
        else { this.showError(input) }
    }
    toogleButtonState(form, button) {
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
    setEventsListeners(form, validationConfig) {
        const saveInputs = document.querySelectorAll(validationConfig.inputSelector)
        const submitButton = form.querySelector(validationConfig.submitButtonSelector)
        this.toogleButtonState(form, submitButton)
        saveInputs.forEach(input => {
            input.addEventListener("input", () => {
                /* console.log(input, "input") */
                this.checkInputValidity(input)
                this.toogleButtonState(form, submitButton)
            })
        });
        form.addEventListener("submit", (e) => {
            e.preventDefault()
        })
    }
    enableValidation() {
        const validationConfig = {
            formSelector: ".form",
            inputSelector: ".form__input",
            submitButtonSelector: ".form__create-button",
            inactiveButtonClass: "form__create_disabled",
            inputErrorClass: "form__text_error",
            errorClass: "form__error_visible"
        }
        const forms = document.querySelectorAll(validationConfig.formSelector)
        forms.forEach(form => {
            this.setEventsListeners(form, validationConfig)
        })
    }
}