const proObj=JSON.parse( localStorage.getItem('obj'))
console.log(proObj)
document.getElementById('img').setAttribute("src",proObj.img)
document.getElementById('name').textContent=proObj.name
document.getElementById('price').textContent=proObj.price




const btn=document.getElementById('add-btn')
const btnPlus=document.getElementById('inc')
const btnDes=document.getElementById('des')
btnPlus.addEventListener("click",()=>{
    let count=document.getElementById("count").value
    document.getElementById("count").value=parseInt(count)+1
})
btnDes.addEventListener("click",()=>{
    let count=document.getElementById("count").value
    count>=1 && (document.getElementById("count").value=parseInt(count)-1)
})

btn.addEventListener("click",()=>{
    const sugarPer=document.querySelector('input[name="supc"]:checked')?.value;
    const icePer=document.querySelector('input[name="icepc"]:checked')?.value;
    const topping=checkedValue = document.querySelector('input[name="topping"]:checked')?.value;
    let count=document.getElementById("count").value
    let list=localStorage.getItem("proInfo")
    if(!list) {
        list=JSON.stringify({icePer,sugarPer,topping,count,
            name:proObj.name,img:proObj.img,price:proObj.price})
        }
    else {
        console.log(list)
        list=list +'|'+JSON.stringify({icePer,sugarPer,topping,count,
            name:proObj.name,img:proObj.img,price:proObj.price})
    }
    console.log(typeof(list))
    localStorage.setItem("proInfo",list)
    window.location.replace("Menutrasua.html")
})

