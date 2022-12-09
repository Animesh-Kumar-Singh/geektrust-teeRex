import "./Cart.css"
import { useState,useEffect } from "react"
import Header from "./Header"
import { useSnackbar } from "notistack"
const Cart = ({checkoutData}) => {
     

    const { enqueueSnackbar }=useSnackbar();

    let newCheckOut = checkoutData.map((item)=>{
         let newItem = {...item,val:1};
         return newItem
        
    })
    console.log("newcheck",newCheckOut)

    const [arr, setArr] = useState([...newCheckOut])
    const [total,setTotal] = useState(0)
    console.log("arr",arr)

    const inc =(crd)=>{
        if(crd.val > crd.quantity){
            enqueueSnackbar("Limited items in stock",{variant:'error'})
            return;
        }
        setArr(arr => 
           arr.map((item)=>
           crd.id === item.id ? {...item, val: item.val + 1} : item
           ) 
            )

    }

    const dec =(crd)=>{
        if(crd.val === 1){
            let restData =arr.filter((itm) =>
            itm.id !== crd.id
        )

        setArr(restData)
        return;
        }
        setArr(arr => 
           arr.map((item)=>
           crd.id === item.id ? {...item, val:item.val - 1} : item
           ) 
            )
            
    }

    const handleDelete = (deleId)=>{
        let restData =arr.filter((itm) =>
            itm.id !== deleId
        )

        setArr(restData)
    }
    
    const totalAmt = (arr) => {
        let price = arr.map((itm)=>{
            return (itm.price * itm.val)
        })
        let totalPrice = price.reduce((acc,currentVal)=>{
            return acc + currentVal
        },0)
        setTotal(totalPrice)
    }
    

    useEffect(()=>{
        totalAmt(arr)
    },[arr])
    console.log("total",total)


    // console.log("checkoutData",checkoutData)
    return (
    <div>
        <Header />
        <div className="shopping-cart-icon"><h1>Shopping Cart</h1></div>
        <div className="filter-checkout">
           {arr.length>0 ? arr.map((cards,indx)=>{
            return <div key={cards.id} className="filter-checkout-cards">
            <div className="img"><img src={cards.imageURL} /></div>
            <div><h3>{cards.name}</h3><h3>Rs{cards.price}</h3></div>
            <div><span><button onClick={()=>inc(cards)}>+</button></span><span>{cards.val}</span> <button onClick={()=>dec(cards)}><span>-</span></button></div>
            <div><button onClick={()=>handleDelete(cards.id)}>Delete</button></div>
           </div>
           }): <h1>No Products in Cart</h1>}
           <div><h2>Total Amount  Rs{total} </h2></div>
        </div>
    </div>
    )
}

export default Cart