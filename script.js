const body = document.body;
const mainBox = body.querySelector('#mainBox');
let rowNumber = 0;
let resSize = 20;


let dimensions = parseInt(prompt("Enter dimensions (one number. <= 100):"));
if(dimensions > 100) {

    location.reload();
}
dimensions--; // accounts for 0 index of dimensions so its accurate to what the user inputs
createRows(dimensions); // creates the number of rows specified by user, then calls the function to fill them with boxes of the same dimensions


mainBox.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.classList.add('marked');
});

// creates the flexbox row divs that contain the smaller boxes
function createRows(dimensions) {
    for (let i = 0; i <= dimensions; i++) {
        const rowDiv = document.createElement('div');
        mainBox.append(rowDiv);
        rowDiv.classList.toggle('rowDiv');
        fillRow(dimensions, rowDiv, rowNumber);
        rowNumber += 1;
    }
}

// fills rows with boxes 20px square, called in createRows function each loop. These boxes are identified as R#C# for row #, column #
function fillRow(dimensions, rowDiv, rowNumber) {
    for (let columnNumber = 0; columnNumber <= dimensions; columnNumber++) {
        const boxDiv = document.createElement('div');
        rowDiv.append(boxDiv);
        boxDiv.classList.toggle('boxDiv'); // this defaults the resSize to 20px
        boxDiv.id = 'R' + rowNumber + 'C' + columnNumber;
    }
}

