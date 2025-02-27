document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("character-form");
    const tabela = document.getElementById("character-table-body");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nome = document.getElementById("nome").value;
        let raca = document.getElementById("raca").value;
        let classe = document.getElementById("classe").value;
        let origem = document.getElementById("origem").value;
        let nivel = document.getElementById("nivel").value;

        let newRow = tabela.insertRow();
        newRow.innerHTML = `<td>${nome}</td><td>${raca}</td><td>${classe}</td><td>${origem}</td><td>${nivel}</td>`;

        form.reset();
    });
});

function sortTable(columnIndex) {
    let table = document.querySelector("#character-table-body");
    let rows = Array.from(table.rows);
    let ascending = table.getAttribute("data-sort") === "asc";

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        let cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        return ascending ? cellA.localeCompare(cellB, 'pt-BR', { numeric: true }) : cellB.localeCompare(cellA, 'pt-BR', { numeric: true });
    });

    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));
    table.setAttribute("data-sort", ascending ? "desc" : "asc");
}
