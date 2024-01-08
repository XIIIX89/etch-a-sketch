const body = document.body;
const mainBox = body.querySelector('#mainBox');
const inputsBox = body.querySelector('#inputsBox');
let rowNumber = 0;
let resSize = body.querySelector('#resSize');


inputsBox.addEventListener('click', (e) => {
    let target = e.target.id;
    switch(target) {
        case 'newGridBtn': 
        mainBox.innerHTML = ''; //removes everything from mainBox
        //resSize = 
        let dimensions = parseInt(prompt("Enter dimensions (one number. <= 100):"));
        if(dimensions > 100) {
            alert("Size out of boundaries!")
            newGridBtn.click();
        }
        dimensions--; // accounts for 0 index of dimensions so its accurate to what the user inputs
        mainBox.style = 'border: 4px solid black;'
        createRows(dimensions, resSize.value); // creates the number of rows specified by user, then calls the function to fill them with boxes of the same dimensions
        break;
    }
});

mainBox.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.classList.add('marked');
});

// creates the flexbox row divs that contain the smaller boxes
function createRows(dimensions, resSize) {
    for (let i = 0; i <= dimensions; i++) {
        const rowDiv = document.createElement('div');
        mainBox.append(rowDiv);
        rowDiv.classList.toggle('rowDiv');
        fillRow(dimensions, rowDiv, rowNumber, resSize);
        rowNumber += 1;
    }
}

// fills rows with boxes 20px square, called in createRows function each loop. These boxes are identified as R#C# for row #, column #
function fillRow(dimensions, rowDiv, rowNumber, resSize) {
    for (let columnNumber = 0; columnNumber <= dimensions; columnNumber++) {
        const boxDiv = document.createElement('div');
        rowDiv.append(boxDiv);
        boxDiv.classList.toggle('boxDiv'); // this defaults the resSize to 20px
        boxDiv.style = `min-width: ${resSize}px; min-height: ${resSize}px;`; // sets the resolution size for the divBoxes
        boxDiv.id = 'R' + rowNumber + 'C' + columnNumber;
    }
}

