function callfunction(){
    let inputEl = document.getElementById("input").value       
    console.log(inputEl)
    let optionEl = "<option value =''> Select </option>"
    for (let i = 1; i<=inputEl; i++){
        optionEl += "<option value='"+i+"'>"+i+"</option>"
    }
    document.getElementById("listing").innerHTML = optionEl 
}
function callfuction2() {
    let input2El = document.getElementById("listing").value
    console.log(input2El)
    let option2El = "<option value =''> Select </option>"
    for (let l = 1; l<=input2El; l++){
        option2El += "<option value='"+l+"'>"+l+"</option>"
    }
    document.getElementById("listing2").innerHTML = option2El 
}
function callfuction3(){
    let input3El = document.getElementById("listing2").value
    console.log(input3El)
    for (let x = 1;  x <= input3El; x++){
        let outputEl = document.getElementById("output")
        let output1El = document.createElement("form")
        output1El.innerHTML ='<input type="text"> <input type="text"></p> <button>submit</button>'
        outputEl.append(output1El)
    }     
}