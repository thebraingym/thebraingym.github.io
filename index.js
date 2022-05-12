var numSelected = null;
var tileSelected = null;

var errors = 0;

var board_easy = [
    "-49-31---",
    "-3--7-98-",
    "8---4----",
    "--61578-2",
    "-5-2841-6",
    "-1------5",
    "-857-34-9",
    "--2--537-",
    "--4-2-5-1"
]

var solution_easy = [
    "649831257",
    "531672984",
    "827549613",
    "496157832",
    "753284196",
    "218396745",
    "185763429",
    "962415378",
    "374928561"
]

var board_medium = [
    "538-19---",
    "--2------",
    "-7---532-",
    "----26---",
    "7--8----3",
    "--14-----",
    "----4-15-",
    "-1--68--4",
    "254-97--6"
]

var solution_medium = [
    "538219647",
    "162734985",
    "479685321",
    "345926718",
    "726851493",
    "891473562",
    "687342159",
    "913568274",
    "254197836"
]

var board_hard = [
    "-------6-",
    "---38-19-",
    "--75--342",
    "89----4--",
    "--6---8-1",
    "34-------",
    "---467---",
    "-----5-3-",
    "-7---1---"
]

var solution_hard = [
    "913724568",
    "254386197",
    "687519342",
    "891652473",
    "726943851",
    "345178926",
    "538467219",
    "162895734",
    "479231685"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board_easy[r][c] != "-") {
                tile.innerText = board_easy[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        this.innerText = numSelected.id;
        if (solution_easy[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}