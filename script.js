

document.addEventListener('DOMContentLoaded', () => {
    
    const tableBody = document.querySelector('player-rows');

    function populateTable(players) {
        tableBody.innerHTML = "";
        players.forEach(player =>{
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
            `;
            tableBody.appendChild(row);
        })
    }

    populateTable(data);
})

