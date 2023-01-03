

let submitForm = document.querySelector('#form')

document.querySelector('#entryExitform').addEventListener('submit', (e) => {
    e.preventDefault();

    const entryCount = document.getElementById('entry').value;
    const exitCount = document.getElementById('exit').value;

    console.log(entryCount);
    console.log(exitCount);

    addCounterToTable(entryCount, exitCount)
})

const addCounterToTable = (entry, exit) => {
    const tableBody = document.querySelector('#tableBody');
    const row = document.createElement('tr');
    row.innerHTML = 
       `<td>${entry}</td>
        <td>${exit}</td>
       `;
    tableBody.appendChild(row);
}