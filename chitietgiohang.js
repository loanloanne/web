let listProducts=[]
const productTemplate=(imgSrc,sugarPercent,icePercent,price,nameProduct,number)=>{
    return `
    <tr class="spaceUnder">
        <td>
            <div><img class="imgsp" src=${imgSrc}></div>
        </td>
        <td >
            <p style="text-align: left; font-family: url('font/Fahkwang-Regular.ttf');">
                <b>${nameProduct}</b><br/><br/>
                ${price}<br/>
                ${sugarPercent}% đường, ${icePercent}% đá, trân châu đen<br/>
                Số lượng: ${number}
            </p>   
        </td>
        <td style="vertical-align: top;">
            <button class="btnXoa"  style="border: none; background-color: #EAAA75;" onclick="xoa(this)">Xóa</button>
        </td>
    </tr>
    `
}
const productObject=(imgSrc,nameProduct,price,sugarPercent,icePercent,number)=>{
    return {
    imgSrc,
    nameProduct,
    price,
    sugarPercent,
    icePercent,
    number
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
listProducts.push(pro1)
listProducts.push(pro2)

const tableProduct=document.querySelector("#table-prod")
let listHTML=[]
listProducts.forEach((prod)=>
{
    listHTML+= productTemplate(prod.imgSrc,
        prod.sugarPercent,
        prod.icePercent,
        prod.price,
        prod.nameProduct,
        prod.number)
})
tableProduct.innerHTML=listHTML


// menu js
// const obj=(name,price,src)=>{
//     return {name,price,src}
// }
// const handleAddPro=(this)=>{
//     console.log(this)
// }
// const listPros= document.querySelectorAll('.product-item')
// listPros.forEach((elm)=>{
//     elm.addEventListener("onclick",(this)=>{
//         handleAddPro(this)
//     })
// })