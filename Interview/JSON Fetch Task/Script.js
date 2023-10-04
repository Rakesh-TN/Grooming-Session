const getdata=async()=>{
    let fetchinfo = await fetch("https://fakestoreapi.com/products")
    let result = await fetchinfo.json()
    console.log(result)
    let output = ""
    
    result.map((index,value)=>{
        output +="<div class='card ' style='width: 288px'>"+
        "<img src="+index.image+" class='card-img-top' alt='No Image'/>"+
        "<p class='text-secondary'>"+index.category+"</p>"+
        "<h4 class='text-black'>"+index.title+"</h4>"+
        "<p class='text-danger'>"+index.price+"</p></div>"
    })
    document.querySelector("#outCome").innerHTML = output
}