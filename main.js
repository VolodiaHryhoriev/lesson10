const getS = selector => document.querySelector(selector);

// start button function
getS('.btn-edit').addEventListener('click', () => {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
})

getS('.btn-save').addEventListener('click', () => {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
})

getS('.btn-style').addEventListener('click', () => {
        getS('.style-block').classList.add('show');
        getS('.edit-block').classList.remove('show');
    })
    // end button function

// start function font-size style
for (const iterator of document.getElementsByName('size')) {
    iterator.addEventListener('click', fontSize)
}

function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}
// end function font-size style

// start function font family style

let fF = document.getElementById('fontFamily');
fF.addEventListener('change', (event) => {
    getS('.top-block').style.fontFamily = event.target.value;
})

// end function font family style

// start function color style
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].addEventListener('click', (event) => {
        getS('.top-block').style.color = event.target.style.backgroundColor;
        getS('.colors').classList.add('hide');
    })
}

getS('.btn-text-color').addEventListener('click', () => {
        getS('.colors').classList.remove('hide');
        getS('.bg-colors').classList.add('hide');
    })
    // end function color style

// start function bg color style

let bgColors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];

for (let i = 0; i < getS('.bg-colors').children.length; i++) {
    getS('.bg-colors').children[i].style.backgroundColor = bgColors[i];
    getS('.bg-colors').children[i].addEventListener('click', (event) => {
        getS('.top-block').style.backgroundColor = event.target.style.backgroundColor;
        getS('.bg-colors').classList.add('hide');
    })
}

getS('.btn-bg-color').addEventListener('click', () => {
    getS('.bg-colors').classList.remove('hide');
    getS('.colors').classList.add('hide');
})

//end function bg color style

/* start function text style */

document.querySelector('.form-style-element').addEventListener('click', fontWeight)

function fontWeight(event) {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    } else {
        getS('.top-block').classList.remove('bold');
    }
}

document.querySelector('.form-style-element2').addEventListener('click', fontWeightCursive)

function fontWeightCursive(event) {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    } else {
        getS('.top-block').classList.remove('cursive');
    }
}

/* end function text style */

getS('.btn-add').addEventListener('click', () => {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
})



// start function create list
const list = document.forms['form-list'];

document.getElementById('chooseList').addEventListener('click', () => {
    getS('.create-list').classList.remove('hide');
    getS('.create-table').style.display = 'none';
})

getS('.btn-create-list').addEventListener('click', () => {
        const countLi = list.count.value;
        const typeLi = list.type.value;
        getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
        for (let i = 0; i < countLi; i++) {
            getS('.edit-area').value += `<li>item ${i + 1}</li>`;
        }
        getS('.edit-area').value += '</ul>';

        getS('.first').classList.add('show');
        getS('.second').classList.remove('show');
    })
    // end function create list

//start function create table
document.getElementById('chooseTable').addEventListener('click', () => {
    getS('.create-table').style.display = 'block';
    getS('.create-list').classList.add('hide');
})

getS('.btn-create-table').addEventListener('click', () => {
    let countTr = parseInt(document.getElementById('countTr').value)
    let countTd = parseInt(document.getElementById('coundTd').value)
    let table = '<table>';
    for (let i = 0; i < countTr; i++) {
        table += "<tr>"
        for (let x = 0; x < countTd; x++) {
            table += `<td style="width: ${parseInt(document.getElementById('setWidthTd').value)}px;
            height: ${parseInt(document.getElementById('setHeightTd').value)}px; 
            border: ${parseInt(document.getElementById('widthBorderTd').value)}px
             ${document.getElementById('typeOfBorder').value} 
             ${document.getElementById('colorOfBorder').value};
             text-align: center;">td</td>`
        }
        table += "</tr>"
    }

    table += '</table>'
    getS('.edit-area').value += table;
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
})

//end function create table