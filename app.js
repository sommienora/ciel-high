

function addValue() {
    let inputOne = document.getElementById("one");
    let inputTwo = document.getElementById("two");
    
    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;
    
    let paragraph = document.getElementById("key");
    
    let sum = Number(numberOne) + Number(numberTwo) ;

    paragraph.innerHTML = "<P> my name is Nora</p>";
}


