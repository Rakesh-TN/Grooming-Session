function subscriberData(){
    let nameEl = document.querySelector("#floatingInputname").value  
    let emailEl = document.querySelector("#floatingInputmail").value
    let numberEl = document.querySelector("#floatingInputnumber").value
    
    let subscriberInfo = []
    let subscriberInfo2 ={nameEl, emailEl ,numberEl}
    subscriberInfo.push(subscriberInfo2)
    let subscriberDetail = localStorage.setItem("Subscriber Infomation", JSON.stringify(userinfo))
    console.log(subscriberDetail)
}
