let colorpick = document.getElementById("colorpick");


let ColRow = document.getElementById("scroller").value;

let currentcolor =  "red"

let tbl = document.getElementById("grid");

for (let i = 0; i < 16; i++) {
    let myRow = document.createElement("tr");
    myRow.id = "row"+i;
    myRow.style.cssText = "onclick = changeCell(this); onmouseover = hoverCellChange(this)";
    myRow.style.backgroundColor = currentcolor;

    tbl.appendChild(myRow);
    let rowW = document.getElementById("row"+i);

    for (let j = 0; j < 16; j++) {
        let myCell = document.createElement("td");
        myCell.id = "cell"+i+"-"+j;
        rowW.appendChild(myCell);
    }
    [].forEach.call(document.getElementsByTagName('td'), function(item) {
        item.addEventListener('mousedown', function() {
            item.style.backgroundColor = currentcolor;
        }, false)
        item.addEventListener('mouseover', function() {
           if (mouseDown == 1) {
            item.style.backgroundColor = currentcolor;
           }
            
        }, false)
    })
}

function gridChange() {
ColRow = document.getElementById("scroller").value;
let newTable = document.getElementById("grid");
while (newTable.firstChild) {
    newTable.removeChild(newTable.firstChild);
}


for (let i = 0; i < ColRow; i++) {
    let myRow = document.createElement("tr");
    myRow.id = "row"+i;
    myRow.style.cssText = "onmouseenter= changeCell(this); onmouseenter = hoverCellChange(this)";
    myRow.style.backgroundColor = currentcolor;

    tbl.appendChild(myRow);
    let rowW = document.getElementById("row"+i);

    for (let j = 0; j < ColRow; j++) {
        let myCell = document.createElement("td");
        myCell.id = "cell"+i+"-"+j;
        rowW.appendChild(myCell);
    }
    [].forEach.call(document.getElementsByTagName('td'), function(item) {
        item.addEventListener('mousedown', function() {
            item.style.backgroundColor = currentcolor;
        }, false)
        item.addEventListener('mouseover', function() {
            if (mouseDown == 1) {
             item.style.backgroundColor = currentcolor;
            }
             
         }, false)
    })
}

}



function changeCell(cell) {
cell.style.backgroundColor = currentcolor;
}
function hoverCellChange(cell) {
    if (mouseDown == 1) {
        cell.style.backgroundColor = currentcolor;
    }
}

function colorChange() {
    colorpick.focus();
    currentcolor = colorpick.value;
    document.getElementById("dot").style.backgroundColor = document.getElementById("colorpick").value;
    
}

function selectColor() {
    colorpick.focus();
   
    colorpick.click();
    currentcolor = colorpick.value;
    document.getElementById("dot").style.backgroundColor = document.getElementById("colorpick").value;
}



let mouseDown = 0;

document.body.onmousedown = function() {
mouseDown = 1;
}

document.body.onmouseup = function() {
    mouseDown = 0;
    }
    