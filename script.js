const btns = document.getElementsByClassName('btn');
let numOne = [];
let numTwo = [];

for(let i = 0; i < btns.length; i++){
    let btn = btns[i];
    btn.addEventListener('click', () => {
        if(btn.value == '='){
            let op = numOne.pop();
            let intOne = numOne.join('');
            let intTwo = numTwo.join('');
            let result = equals(intOne, intTwo, op)

            if(intTwo == ''){
                clear();
                document.getElementById('topNumber').innerHTML = `${numOne.join('')}`   
                document.getElementById('bottomNumber').innerHTML = `${numTwo.join('')}`
            }
            if(result){
            document.getElementById('topNumber').innerHTML = `${intOne}${op}${intTwo}`
            document.getElementById('bottomNumber').innerHTML = `${result}`;
            clear();
            }
                 
        } else if (numOne.slice(-1) == '/' || numOne.slice(-1) == "*" ||
                 numOne.slice(-1) == '-' || numOne.slice(-1) == '+'){

            if(btn.value == 'delete'){
                clear();
                document.getElementById('topNumber').innerHTML = `${numOne.join('')}`   
                document.getElementById('bottomNumber').innerHTML = `${numTwo.join('')}`
                return
            }
            numTwo.push(btn.value)
            document.getElementById('topNumber').innerHTML = `${numOne.join('')}`   
            document.getElementById('bottomNumber').innerHTML = `${numTwo.join('')}`

         } else if(btn.value == "delete"){
            clear();
            document.getElementById('topNumber').innerHTML = `${numOne.join('')}`   
            document.getElementById('bottomNumber').innerHTML = `${numTwo.join('')}`

         } else {
             numOne.push(btn.value)
             document.getElementById('bottomNumber').innerHTML = `${numOne.join('')}`;
        }
    });
}

function equals(intOne, intTwo, op){
    let result = 0;
    if(op == "/"){
        result = intOne / intTwo
        return result
    } else if (op == '*'){
        result = intOne * intTwo
        return  result
    } else if (op == '-') {
        result = intOne - intTwo
        return result
    } else if (op == '+'){
        let parsedIntOne = parseInt(intOne)
        let parsedIntTwo = parseInt(intTwo)
        result = parsedIntOne + parsedIntTwo
        return result
    }
}

function clear(){
   let lengthOne = numOne.length
   let lengthTwo = numTwo.length
    
    for(let i = 0; i <= lengthOne; i++){
        numOne.pop();
    }

    for(let i = 0; i <= lengthTwo; i++){
        numTwo.pop();
    }
}