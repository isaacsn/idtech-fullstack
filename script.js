function getNumber(cell) {
    const cleaned = cell.textContent.trim().replace(/,/g, "");
    const n = parseInt(cleaned, 10);
    return Number.isNaN(n) ? -Infinity : n;
}



function sortTable(table, columnIndex, ascending, numeric) {
    const rows = Array.from(table.rows).slice(1);
    const direction = ascending ? 1 : -1;

    rows.sort((a, b) => {
        if(numeric) {
            return (getNumber(a.cells[columnIndex]) - getNumber(b.cells[columnIndex])) * direction;
        }
        const cellA = a.cells[columnIndex].textContent.trim();
        const cellB = b.cells[columnIndex].textContent.trim();
        return cellA.localeCompare(cellB) * direction;
    
    });
    rows.forEach(row => table.appendChild(row));
}

function sortTwoHeaderTable(table, columnIndex, ascending, numeric) {
    const rows = Array.from(table.rows).slice(2);
    const direction = ascending ? 1 : -1;

    rows.sort((a, b) => {
        if(numeric) {
            return (getNumber(a.cells[columnIndex]) - getNumber(b.cells[columnIndex])) * direction;
        }
        const cellA = a.cells[columnIndex].textContent.trim();
        const cellB = b.cells[columnIndex].textContent.trim();
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


/* Carpenter Item List */
const carpenterItemTable = document.getElementById("carpenterItemTable");
if (carpenterItemTable) {
    let carpenterItemSortButton = document.getElementById("carpenterItemSortButton");
    let carpenterItemCostSort = document.getElementById("carpenterItemCostSort");

    let carpenterItemAscending = true;
    let carpenterItemCostAscending = true;

    carpenterItemSortButton.addEventListener("click", () => {
        sortTable(carpenterItemTable, 0, carpenterItemAscending, false);
        carpenterItemAscending = !carpenterItemAscending;
    });

    carpenterItemCostSort.addEventListener("click", () => {
        sortTable(carpenterItemTable, 1, carpenterItemCostAscending, true);
        carpenterItemCostAscending = !carpenterItemCostAscending;
    });
}

/* Pierre Item Lists */

/* Yearly */
const pierreYearItemTable = document.getElementById("pierreYearItemTable");
if (pierreYearItemTable) {
    let pierreItemSortButton = document.getElementById("pierreItemSortButton");
    let pierreItemCostSort = document.getElementById("pierreItemCostSort");

    let pierreItemAscending = true;
    let pierreItemCostAscending = true;

    pierreItemSortButton.addEventListener("click", () => {
        sortTable(pierreYearItemTable, 0, pierreItemAscending, false);
        pierreItemAscending = !pierreItemAscending;
    });

    pierreItemCostSort.addEventListener("click", () => {
        sortTable(pierreYearItemTable, 1, pierreItemCostAscending, true);
        pierreItemCostAscending = !pierreItemCostAscending;
    });
}

/* Seasonaly */
const pierreSpringItemTable = document.getElementById("pierreSpringItemTable");
const pierreSummerItemTable = document.getElementById("pierreSummerItemTable");
const pierreFallItemTable = document.getElementById("pierreFallItemTable");
if (pierreSpringItemTable) {
    /* Spring */
    let pierreSpringItemSortButton = document.getElementById("pierreSpringItemSortButton");
    let pierreSpringItemCostSort = document.getElementById("pierreSpringItemCostSort");
    let pierreSpringItemCostOOSSort = document.getElementById("pierreSpringItemCostOOSSort");

    let springAscending = true;
    let springCropAscending = true;
    let springCropOOSAscending = true;

    pierreSpringItemSortButton.addEventListener("click", () => {
        sortTable(pierreSpringItemTable, 0, springAscending, false);
        springAscending = !springAscending;
    });

    pierreSpringItemCostSort.addEventListener("click", () => {
        sortTable(pierreSpringItemTable, 1, springCropAscending, true);
        springCropAscending = !springCropAscending;
    });

    pierreSpringItemCostOOSSort.addEventListener("click", () => {
        sortTable(pierreSpringItemTable, 2, springCropOOSAscending, true);
        springCropOOSAscending = !springCropOOSAscending;
    });


    /* Summer */
    let pierreSummerItemSortButton = document.getElementById("pierreSummerItemSortButton");
    let pierreSummerItemCostSort = document.getElementById("pierreSummerItemCostSort");
    let pierreSummerItemCostOOSSort = document.getElementById("pierreSummerItemCostOOSSort");

    let summerAscending = true;
    let summerCropAscending = true;
    let summerCropOOSAscending = true;

    pierreSummerItemSortButton.addEventListener("click", () => {
        sortTable(pierreSummerItemTable, 0, summerAscending, false);
        summerAscending = !summerAscending;
    });

    pierreSummerItemCostSort.addEventListener("click", () => {
        sortTable(pierreSummerItemTable, 1, summerCropAscending, true);
        summerCropAscending = !summerCropAscending;
    });

    pierreSummerItemCostOOSSort.addEventListener("click", () => {
        sortTable(pierreSummerItemTable, 2, summerCropOOSAscending, true);
        summerCropOOSAscending = !summerCropOOSAscending;
    });


    /* Fall */
    let pierreFallItemSortButton = document.getElementById("pierreFallItemSortButton");
    let pierreFallItemCostSort = document.getElementById("pierreFallItemCostSort");
    let pierreFallItemCostOOSSort = document.getElementById("pierreFallItemCostOOSSort");

    let fallAscending = true;
    let fallCropAscending = true;
    let fallCropOOSAscending = true;

    pierreFallItemSortButton.addEventListener("click", () => {
        sortTable(pierreFallItemTable, 0, fallAscending, false);
        fallAscending = !fallAscending;
    });

    pierreFallItemCostSort.addEventListener("click", () => {
        sortTable(pierreFallItemTable, 1, fallCropAscending, true);
        fallCropAscending = !fallCropAscending;
    });

    pierreFallItemCostOOSSort.addEventListener("click", () => {
        sortTable(pierreFallItemTable, 2, fallCropOOSAscending, true);
        fallCropOOSAscending = !fallCropOOSAscending;
    });
}

/* Fish */
const FishTable = document.getElementById("FishTable");
if (FishTable) {
    let FishSortButton = document.getElementById("FishSortButton");
    let FishPriceSort = document.getElementById("FishPriceSort");
    let FishFisherPriceSort = document.getElementById("FishFisherPriceSort");
    let FishAnglerPriceSort = document.getElementById("FishAnglerPriceSort");
    let FishLocationSort = document.getElementById("FishLocationSort");
    let FishTimeSort = document.getElementById("FishTimeSort");
    let FishSeasonSort = document.getElementById("FishSeasonSort");
    let FishWeatherSort = document.getElementById("FishWeatherSort");
    let FishDifficultySort = document.getElementById("FishDifficultySort");
    let FishXPSort = document.getElementById("FishXPSort");
    let FishUsedInSort = document.getElementById("FishUsedInSort");

    let FishAscending = true;
    let FishPriceAscending = true;
    let FishFisherPriceAscending = true;
    let FishAnglerPriceAscending = true;
    let FishLocationAscending = true;
    let FishTimeAscending = true;
    let FishSeasonAscending = true;
    let FishWeatherAscending = true;
    let FishDifficultyAscending = true;
    let FishXPAscending = true;
    let FishUsedInAscending = true;

    FishSortButton.addEventListener("click", () => {
        sortTable(FishTable, 0, FishAscending, false);
        FishAscending = !FishAscending;
    });

    FishPriceSort.addEventListener("click", () => {
        sortTable(FishTable, 1, FishPriceAscending, true);
        FishPriceAscending = !FishPriceAscending;
    });

    FishFisherPriceSort.addEventListener("click", () => {
        sortTable(FishTable, 2, FishFisherPriceAscending, true);
        FishFisherPriceAscending = !FishFisherPriceAscending;
    });

    FishAnglerPriceSort.addEventListener("click", () => {
        sortTable(FishTable, 3, FishAnglerPriceAscending, true);
        FishAnglerPriceAscending = !FishAnglerPriceAscending;
    });

    FishLocationSort.addEventListener("click", () => {
        sortTable(FishTable, 4, FishLocationAscending, false);
        FishLocationAscending = !FishLocationAscending;
    });

    FishTimeSort.addEventListener("click", () => {
        sortTable(FishTable, 5, FishTimeAscending, false);
        FishTimeAscending = !FishTimeAscending;
    });

    FishSeasonSort.addEventListener("click", () => {
        sortTable(FishTable, 6, FishSeasonAscending, false);
        FishSeasonAscending = !FishSeasonAscending;
    });

    FishWeatherSort.addEventListener("click", () => {
        sortTable(FishTable, 7, FishWeatherAscending, false);
        FishWeatherAscending = !FishWeatherAscending;
    });

    FishDifficultySort.addEventListener("click", () => {
        sortTable(FishTable, 8, FishDifficultyAscending, true);
        FishDifficultyAscending = !FishDifficultyAscending;
    });

    FishXPSort.addEventListener("click", () => {
        sortTable(FishTable, 9, FishXPAscending, true);
        FishXPAscending = !FishXPAscending;
    });

    FishUsedInSort.addEventListener("click", () => {
        sortTable(FishTable, 10, FishUsedInAscending, false);
        FishUsedInAscending = !FishUsedInAscending;
    });
}