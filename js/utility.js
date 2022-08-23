// function getInputFieldValueById(inputFieldId) {
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValues = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValues;
// }

// function getTextElemetnValueById(textElemetnId) {
//     const textElemetn = document.getElementById(textElemetnId);
//     const textElemetnValueString = textElemetn.value;
//     const textElemetnValues = parseFloat(textElemetnValueString);
//     textElemetn.value = '';
//     return textElemetnValues;
// }
// function setTextElementValueById(textElemetnId, newValue) {
//     const textElemetn = document.getElementById(textElemetnId);
//     textElemetn.innerText = newValue;
// }


// // const playerCostInput = document.getElementById('player-cost');
// //     const playerCost = playerCostInput.value;

// //     const totalPlayer = document.getElementById('total-plyer').innerText;

// //     const playerExpenses =document.getElementById('player-expenses');

// //     const cost = playerCost * totalPlayer;

// //     playerExpenses.innerText = cost;
// document.getElementById('calculd').addEventListener('click', function () {
//     const newDepositAmount  = getInputFieldValueById('cost');
//      const previousDepositTotal  = getTextElemetnValueById('total');
//     const Expenses = document.getElementById('expenses');
//     const newBalanceTotal = newDepositAmount  + previousDepositTotal ;
    
//     setTextElementValueById('expenses', newBalanceTotal)
    
//     // setTextElementValueById('player-expenses', newBalanceTotal);
// })