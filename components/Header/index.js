// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //define elements
    const headerDiv = document.createElement('div');
    const headerDivSDate = document.createElement('span');
    const headerDivH1 = document.createElement('h1');
    const headerDivSTemp = document.createElement('span');

    //tree structure
    headerDiv.appendChild(headerDivSDate);
    headerDiv.appendChild(headerDivH1);
    headerDiv.appendChild(headerDivSTemp);

    //assign classes
    headerDiv.classList.add('header');
    headerDivSDate.classList.add('date');
    headerDivSTemp.classList.add('temp');

    //add content
    headerDivSDate.textContent = 'SMARCH 28,2019';
    headerDivH1.textContent = 'Lambda Times';
    headerDivSTemp.textContent = '98°'


    return headerDiv;
}

//selecting the element where Header function will be appended
const header = document.querySelector('.header-container');
//appending Header function
header.appendChild(Header());