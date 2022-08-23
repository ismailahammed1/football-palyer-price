//----------funtion playerName select section--------------///
const playerarray = [];

// selectedPlayers area
function displayPlayer(selectedPlayers) {


    // console.log("selectedPlayers");
    const tablelist = document.getElementById('name-list')
    tablelist.innerHTML = '';

    for (let i = 0; i < selectedPlayers.length; i++) {

        const name = playerarray[i].playerNames;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
       
        `;
        tablelist.appendChild(tr);

    }
}
//----------funtion playerName select section--------------///
//----------funtion playerName--------------///
function playerName(element) {

    const playerNames = element.parentNode.parentNode.children[0].innerText;

    const playerSkill = element.parentNode.parentNode.children[1].innerText;
    const playerobj = {
        playerNames: playerNames,
        playerSkill: playerSkill
    }
    if (playerarray.length >= 5) {
        alert('Max selected players are not allowed');
        return;
    } else {
        playerarray.push(playerobj);

        document.getElementById('total-plyer').innerText = playerarray.length;
        element.disabled = true;

        displayPlayer(playerarray);
    }

}
//----------funtion playerName--------------///


//--------------------- player price calculated ----------------//
document.getElementById('calculated').addEventListener('click', function () {
    const playerCostInput = document.getElementById('player-cost');
    const playerCost = playerCostInput.value;

    const totalPlayer = document.getElementById('total-plyer').innerText;

    const playerExpenses = document.getElementById('player-expenses');

    const cost = playerCost * totalPlayer;

    playerExpenses.innerText = cost;
})


// ----------------price calculated  end----------------//

// ---------------- total cost calculeted start---------------//
document.getElementById('total-calculated').addEventListener('click', function () {
    const managerCostInput = document.getElementById('manager-cost').value;
    const managerCost = parseInt(managerCostInput);
    const coachCostInput = document.getElementById('coach-cost').value;
    const coachCost = parseInt(coachCostInput);

    const playerExpensesInput = document.getElementById('player-expenses').innerText;
    const playerExpenses = parseInt(playerExpensesInput);

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = playerExpenses + managerCost + coachCost;
})
// ---------------- total cost calculeted end---------------//