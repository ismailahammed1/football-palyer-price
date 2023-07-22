function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValues = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValues;
}

function getTextElemetnValueById(textElemetnId) {
    const textElemetn = document.getElementById(textElemetnId);
    const textElemetnValueString = textElemetn.innerText;
    const textElemetnValues = parseFloat(textElemetnValueString);
    return textElemetnValues;
}
function setTextElementValueById(textElemetnId, newValue) {
    const textElemetn = document.getElementById(textElemetnId);
    textElemetn.innerText = newValue;
}
