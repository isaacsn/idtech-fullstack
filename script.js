


function sortTable(table, columnIndex, ascending, numeric) {
    const rows = Array.from(table.rows).slice(1);
    const direction = ascending ? 1 : -1;

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.trim();
        const cellB = b.cells[columnIndex].textContent.trim();

        if(numeric) {
            return (parseInt(cellA, 10) - parseInt(cellB, 10)) * direction;
        } 
        return cellA.localeCompare(cellB) * direction;
    
    });
    rows.forEach(row => table.appendChild(row));
}

function sortTwoHeaderTable(table, columnIndex, ascending, numeric) {
    const rows = Array.from(table.rows).slice(2);
    const direction = ascending ? 1 : -1;

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.trim();
        const cellB = b.cells[columnIndex].textContent.trim();

        if(numeric) {
            return (parseInt(cellA, 10) - parseInt(cellB, 10)) * direction;
        } 
        return cellA.localeCompare(cellB) * direction;
    
    });
    rows.forEach(row => table.appendChild(row));
}

/* Combat */
const enemyTable = document.getElementById("enemyTable");
if (enemyTable) { 
    let enemySortButton = document.getElementById("enemySortButton");
    let combatXPSort = document.getElementById("combatXPSort");

    let combatAscending = true;
    let combatXPAscending = true;
    enemySortButton.addEventListener("click", () => {
        sortTable(enemyTable, 0, combatAscending, false);
        combatAscending = !combatAscending;
    });

    combatXPSort.addEventListener("click", () => {
        sortTable(enemyTable, 1, combatXPAscending, true);
        combatXPAscending = !combatXPAscending;
    });
}


/* Foraging */
const foragingTable = document.getElementById("foragingTable");
if (foragingTable) {
    let foragingSortButton = document.getElementById("foragingSortButton");
    let foragingXPSort = document.getElementById("foragingXPSort");

    let foragingAscending = true;
    let foragingXPAscending = true;

    foragingSortButton.addEventListener("click", () => {
        sortTable(foragingTable, 0, foragingAscending, false);
        foragingAscending = !foragingAscending;
    });

    foragingXPSort.addEventListener("click", () => {
        sortTable(foragingTable, 1, foragingXPAscending, true);
        foragingXPAscending = !foragingXPAscending;
    });
}

/* Mining */
const miningTable = document.getElementById("miningTable");
if (miningTable) {
    let rockSortButton = document.getElementById("rockSortButton");
    let miningXPSort = document.getElementById("miningXPSort");

    let miningAscending = true;
    let miningXPAscending = true;

    rockSortButton.addEventListener("click", () => {
        sortTable(miningTable, 0, miningAscending, false);
        miningAscending = !miningAscending;
    });

    miningXPSort.addEventListener("click", () => {
        sortTable(miningTable, 1, miningXPAscending, true);
        miningXPAscending = !miningXPAscending;
    });
}

/* Farming */
const springFarmingTable = document.getElementById("springFarmingTable");
const summerFarmingTable = document.getElementById("summerFarmingTable");
const fallFarmingTable = document.getElementById("fallFarmingTable");
const winterFarmingTable = document.getElementById("winterFarmingTable");
if (springFarmingTable) {
    /* Spring */
    let springCropSortButton = document.getElementById("springCropSortButton");
    let farmingXPSortSpring = document.getElementById("farmingXPSortSpring");

    let springAscending = true;
    let springXPAscending = true;

    springCropSortButton.addEventListener("click", () => {
        sortTwoHeaderTable(springFarmingTable, 0, springAscending, false);
        springAscending = !springAscending;
    });

    farmingXPSortSpring.addEventListener("click", () => {
        sortTwoHeaderTable(springFarmingTable, 1, springXPAscending, true);
        springXPAscending = !springXPAscending;
    });


    /* Summer */
    let summerCropSortButton = document.getElementById("summerCropSortButton");
    let farmingXPSortSummer = document.getElementById("farmingXPSortSummer");

    let summerAscending = true;
    let summerXPAscending = true;

    summerCropSortButton.addEventListener("click", () => {
        sortTwoHeaderTable(summerFarmingTable, 0, summerAscending, false);
        summerAscending = !summerAscending;
    });

    farmingXPSortSummer.addEventListener("click", () => {
        sortTwoHeaderTable(summerFarmingTable, 1, summerXPAscending, true);
        summerXPAscending = !summerXPAscending;
    });


    /* Fall */
    let fallCropSortButton = document.getElementById("fallCropSortButton");
    let farmingXPSortFall = document.getElementById("farmingXPSortFall");

    let fallAscending = true;
    let fallXPAscending = true;

    fallCropSortButton.addEventListener("click", () => {
        sortTwoHeaderTable(fallFarmingTable, 0, fallAscending, false);
        fallAscending = !fallAscending;
    });

    farmingXPSortFall.addEventListener("click", () => {
        sortTwoHeaderTable(fallFarmingTable, 1, fallXPAscending, true);
        fallXPAscending = !fallXPAscending;
    });
}


/*  */