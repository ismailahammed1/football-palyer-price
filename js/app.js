const playerarray = [];
let totalPalyersemty = document.getElementById('total-plyer');
// selectedPlayers area
function displayPlayer(selectedPlayers) {


    // console.log("selectedPlayers");
    const tablelist = document.getElementById('name-list')
    tablelist.innerHTML = '';
    if (playerarray.length == 5) {
        totalPalyersemty.innerHTML = '0';


        alert('hi');
        return location.reload();
    }
    for (let i = 0; i < selectedPlayers.length; i++) {
        // console.log(playerarray[i].playerNames, playerarray[i].playerSkill);
        const name = playerarray[i].playerNames;
        // let length = playerarray[i];


        // if (length == 2) {
        //     console.log('length');
        //     element.disabled = true
        // } else {
        //     console.log('hi');
        // }
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
       
        `;
        tablelist.appendChild(tr);

    }


}


function playerName(element) {

    const playerNames = element.parentNode.parentNode.children[0].innerText;

    const playerSkill = element.parentNode.parentNode.children[1].innerText;
    const playerobj = {
        playerNames: playerNames,
        playerSkill: playerSkill
    }
    playerarray.push(playerobj);
    // console.log(playerarray);
    // console.log(playerarray.length);
    // document.getElementById('total-plyer').innerText = playerarray.length;
    document.getElementById('total-plyer').innerText = playerarray.length;
    element.disabled = true;

    displayPlayer(playerarray);
}

document.getElementById('calculated').addEventListener('click', function () {
    const playerCostInput = document.getElementById('player-cost');
    const playerCost = playerCostInput.value;

    const totelPlayer = document.getElementById('total-plyer').innerText;

    const playerExpenses = document.getElementById('player-expenses');

    const cost = playerCost * totelPlayer;

    playerExpenses.innerText = cost;
})
// player calculated part end

// Budget part start 
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