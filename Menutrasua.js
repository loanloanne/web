// menu js
const obj=(name,price,src)=>{
    return {name,price,src}
}
var x
const handleAddPro=(e)=>{
    console.log(e)
    const parentNode= e.parentNode.parentNode.parentNode
    const img=parentNode.querySelectorAll('img')[0].src
    const name=parentNode.querySelectorAll('.product_cat')[0].textContent
    const price=parentNode.querySelectorAll('.product-pri')[0].textContent
    localStorage.setItem("obj",JSON.stringify({img:img,name:name,price:price}))
    window.location.replace("Themvaogiohang.html")

}
const listPros= document.querySelectorAll('.btn-add')
listPros?.forEach((elm)=>{
    elm.addEventListener("click",(e)=>{
        handleAddPro(e.target)
    })
})