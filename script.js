const body = document.body;
const mainBox = body.querySelector('#mainBox');

let dimensions = prompt("Enter dimensions (one number):");
createRows(dimensions);


// creates the flexbox row divs that contain the smaller boxes
function createRows(dimensions) {
    for (let i = 0; i <= dimensions; i++) {
        const rowDiv = document.createElement('div');
        mainBox.append(rowDiv);
        rowDiv.classList.toggle('rowDiv');
        fillRow(dimensions, rowDiv);
    }
}

// fills rows with boxes 20px square, called in createRows function each loop
function fillRow(dimensions, rowDiv) {
    for (let i = 0; i <= dimensions; i++) {
        const boxDiv = document.createElement('div');
        rowDiv.append(boxDiv);
        boxDiv.classList.toggle('boxDiv');
    }
}

