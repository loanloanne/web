// menu js
const obj=(name,price,src)=>{
    return {name,price,src}
}
var x
const handleAddPro=(e)=>{
    console.log(e)
    let a="hi"
    localStorage.setItem("obj",a)
    window.location.replace("Themvaogiohang.html")

}
const listPros= document.querySelectorAll('.btn-add')
listPros?.forEach((elm)=>{
    elm.addEventListener("click",(e)=>{
        handleAddPro(e.target)
    })
})