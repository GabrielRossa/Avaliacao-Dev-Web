function ativ1(){
    var num1, num2
    const result = document.getElementById("result")
    
    num1 = parseInt(window.prompt("Informe o primeiro valor: "))
    num2 = parseInt(window.prompt("Informe o segundo valor: "))


    if(num1 > num2){
        result.innerHTML = `O maior valor é ${num1}.`
    }else if(num2 > num1){
        result.innerHTML = `O maior valor é ${num2}.`
    }else{
        result.innerHTML = `Ambos os números possuem valor ${num1}.`
    }    
}

function ativ2(){
    var gen, alt
    const result = document.getElementById("result")

    gen =  window.prompt("Informe seu gênero (M/F):").toLowerCase()
    alt = parseFloat(window.prompt("Informe sua altura em m: "))

    if(gen == 'm' || gen == 'masculino'){
        alt = ((alt*72.7)-58).toFixed(1)
        result.innerHTML = `Seu peso ideal é ${alt}`
    }else if(gen == 'f' || gen == 'feminino'){
        alt = ((alt*62.1)-44.7).toFixed(1)
        result.innerHTML = `Seu peso ideal é ${alt}`
    }
}

function ativ3(){
    var nums = [], men
    const result = document.getElementById("result")

    for(i = 0; i<3; i++){
        nums[i] = parseInt(window.prompt(`Informe o ${i+1}º número: `))
    }
    
    men = nums[0]

    for(i = 1; i<3; i++){
        if(nums[i] <men){
            men = nums[i]
        }
    }

    result.innerHTML = (`O menor número é ${men}`)
}

function ativ4(){
    var num
    const result = document.getElementById("result")

    num = parseInt(window.prompt("Informe o número: "))

    if(num>=0){
        if(num%2 == 0){
            result.innerHTML = (`O número ${num} é positivo e PAR`)
        }else{
            result.innerHTML = (`O número ${num} é positivo e ÍMPAR`)
        }
    }else{
        result.innerHTML = (`O número ${num} é negativo e seu valor absoluto é ${-num}`)
    }
}

function ativ5(){
    var fract = 0, num
    const result = document.getElementById("result")

    num = parseInt(window.prompt("Informe o número: "))

    if(num%2 == 0){
        fract++
    }
    if(num%3 == 0){
        fract+=2
    }

    switch(fract){
        case 0:
            result.innerHTML = (`O número ${num} não é divisível por 2 nem por 3`)
            break
        case 1:
            result.innerHTML = (`O número ${num} é divisível apenas por 2`)
            break
        case 2:
            result.innerHTML = (`O número ${num} é divisível apenas por 3`)
            break
        case 3:
            result.innerHTML = (`O número ${num} é divisível por 2 e por 3`)
            break
    }
}

function ativ6(){
    var fract = 0, num 
    const result = document.getElementById("result")

    num = parseInt(window.prompt("Informe o número: "))

    if(num%2 == 0){
        fract++
    }
    if(num%7 == 0){
        fract+=2
    }

    switch(fract){
        case 0:
            result.innerHTML = (`O número ${num} não é divisível por 2 nem por 7`)
            break
        case 1:
            result.innerHTML = (`O número ${num} é divisível apenas por 2`)
            break
        case 2:
            result.innerHTML = (`O número ${num} é divisível apenas por 7`)
            break
        case 3:
            result.innerHTML = (`O número ${num} é divisível por 2 e por 7`)
            break
    }
}

function ativ7(){
    var day
    const result = document.getElementById("result")

    day = parseInt(window.prompt("Informe o número: "))

    switch(day){
        case 1:
            result.innerHTML = (`Domingo`)
            break
        case 2:
            result.innerHTML = (`Segunda-feira`)
            break
        case 3:
            result.innerHTML = (`Terça-feira`)
            break
        case 4:
            result.innerHTML = (`Quarta-feira`)
            break
        case 5:
            result.innerHTML = (`Quinta-feira`)
            break
        case 6:
            result.innerHTML = (`Sexta-feira`)
            break
        case 7:
            result.innerHTML = (`Sábado`)
            break
        default:
            result.innerHTML = (`Esse valor não possui um dia correspondente`)
            break
    }
}

function ativ8(){
    var total = 0
    const result = document.getElementById("result")

    for(let i=2; i<20; i+=2){
        total+=i
    }

    result.innerHTML = (`Total: ${total}`)
}

function ativ9(){
    var num, table = ''
    const result = document.getElementById("result")
 
    num = parseInt(window.prompt("Informe o número: "))
    
    for(var i = 0; i<=10; i++){
        table += (`${num} x ${i} = ${num*i}<br>`)
    }

    result.innerHTML = (table)
}

function ativ10(){
    var num
    const result = document.getElementById("result")

    num = parseInt(window.prompt("Informe o número: "))
        
    if(num != 0){
        for(let i = num; i>1; i--){
            num*=(i-1)
        }
    }else{
        num = 1
    }    
    result.innerHTML = (`Fatorial = ${num}`)
}