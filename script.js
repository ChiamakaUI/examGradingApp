
let addButton = document.getElementById("add");
let calculate = document.getElementById("calculate");
let trash = document.getElementById("clear");
let calAverage = document.getElementById("calculateAverage");
let firstBtn = document.querySelectorAll(".cancel-btn");
let scores = document.querySelectorAll(".text");
let grades = document.querySelectorAll(".grade");


firstBtn.forEach((btn) => btn.addEventListener('click', clearRow))

function clearRow(e){
    e.preventDefault();
    const rowid = e.target.dataset.id
    console.log(rowid)

    let clearFirstRow = document.querySelectorAll('.text');
    clearFirstRow[Number(rowid) - 1].value=''
    grades[Number(rowid) - 1].innerHTML=''
    

}
    

addButton.addEventListener('click', displayTables);

function displayTables(e){

    e.preventDefault;

    let dTable = document.getElementsByTagName('td');
    for (var i=0;i<dTable.length;i+=1){
    dTable[i].style.display = 'table-cell';
}
}

calculate.addEventListener('click', calculateGrades);

function calculateGrades(e){
    e.preventDefault;
    let scores = document.querySelectorAll(".text");
    let grades = document.querySelectorAll(".grade");

    const totalScore = Object.entries(scores).reduce((acc, [key, { value }]) => {
        if (value >= 70 && value <= 100) {
            grades[key].innerHTML = 'A'
        }
        else if(value >= 60 && value <= 69){
            grades[key].innerHTML = 'B'
        }
        else if(value >= 50 && value <= 59){
            grades[key].innerHTML = 'C'
        }
        else if(value >= 40 && value <= 49){
            grades[key].innerHTML = 'D'
        }
        else if(value >= 1 && value <= 39){
            grades[key].innerHTML = 'F'
        }
        else{
            grades[key].innerHTML = 'Please, input your score'
        }

        return acc + Number(value) 
        console.log(value)
    }, 0) 
    console.log(totalScore)
    
}

trash.addEventListener('click', clearTables);

function clearTables(e){

    e.preventDefault;
    
    let cTable = document.querySelectorAll('td');
    for (var i=0;i<cTable.length;i+=1){
    cTable[i].style.display = "none"; 
}
}

calAverage.addEventListener('click', calculateAverage);

function calculateAverage(e){

    e.preventDefault();

    let scores = document.querySelectorAll(".text");
    let grades = document.querySelectorAll(".grade");

    const totalScore = Object.entries(scores).reduce((acc, [key, { value }]) =>{
        return acc + Number(value)
    }, 0)

    const avg = Number(totalScore / scores.length).toFixed(2)

   document.getElementById('avg').value = avg



    console.log(avg);
    
}


        
    


