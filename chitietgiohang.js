let listProducts=[]
const productTemplate=(imgSrc,sugarPercent,icePercent,price,nameProduct,number,topping)=>{
    return `
    <tr class="spaceUnder">
        <td>
            <div><img class="imgsp" src=${imgSrc}></div>
        </td>
        <td >
            <p style="text-align: left; font-family: url('font/Fahkwang-Regular.ttf');">
                <b>${nameProduct}</b><br/><br/>
                ${price} đồng<br/>
                ${sugarPercent}% đường, ${icePercent}% đá, ${topping}<br/>
                Số lượng: ${number}
            </p>   
        </td>
        <td style="vertical-align: top;">
            <button class="btnXoa"  style="border: none; background-color: #EAAA75;" onclick="xoa(this)">Xóa</button>
        </td>
    </tr>
    `
}
const productObject=(imgSrc,nameProduct,price,sugarPercent,icePercent,number,topping)=>{
    return {
    imgSrc,
    nameProduct,
    price,
    sugarPercent,
    icePercent,
    number,
    topping
    }
} 
let pro1=productObject("Image/sourcesp/Mon_noi_bat/tra-man-hat-sen.png",
                        "Trà mận hạt sen",
                        "40.000đ",
                        30,
                        50,
                        1
                        )
                        
let pro2=productObject(
    "Image/sourcesp/Mon_noi_bat/Royal-Pearl-Milk-Coffee.png",
    "Royal Pearl Milk Coffee",
    "40.000đ",
    30,
    50,
    1
)

const tableProduct=document.querySelector("#table-prod")
let listHTML=[]

const list = localStorage.getItem("proInfo")?.split('|')
console.log(list)
list?.forEach((ind)=>{
    const pro=JSON.parse(ind)
    pro.price=(parseInt(pro.price)
                +parseInt(pro.topping.split(':')[1]))
                *parseInt(pro.count)
    const prod=productObject(pro.img,
        pro.name,
        pro.price,
        pro.sugarPer,
        pro.icePer,
        pro.count,
        pro.topping.split(':')[0])
    listProducts.push(prod)
})
listProducts?.forEach((prod)=>
{
    listHTML+= productTemplate(prod.imgSrc,
        prod.sugarPercent,
        prod.icePercent,
        prod.price,
        prod.nameProduct,
        prod.number,
        prod.topping)
})
tableProduct.innerHTML=listHTML

const btnClear=document.getElementById('clear')
btnClear.addEventListener("click",()=>{
    localStorage.clear()
    window.location.reload()
})
function xoa(x) {
    var tr = x.parentElement.parentElement;
    tr.remove();
}