import { useSelector, useDispatch } from "react-redux"
import { addCart } from '../reduxtk/slices/productSlice'
import { productDetails } from '../reduxtk/slices/productSlice'
import '../../ulities/css/prodDetail.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react"

export const ProductDetails =({prod1})=>{
    const prod=useSelector((state)=>state.product.productDetails)
    let cart=useSelector((state)=>state.product.cart)

    const dispatch = useDispatch();
    const addToCart =(i)=>{  
        dispatch(addCart(i))
      }
      useEffect(()=>{
        //console.log("title1:", prod1)
     
      return ()=>{
        dispatch(productDetails(null))
      } },
      [])
      console.log( prod1)
    return <div>
   <div className="mainprodDetail col-lg-5">     
      <div className="advt"></div>
<div className="prodDetail"> 
     
      <div className="imgDiv"><img src={prod.image} alt="" height='100px' width='100px' /></div>
      <div className="titleDiv">
      <div className="ttl">{prod.title}</div>
       {/* <div className="priceRate"><span>price: {prod.price} $</span><span>rating: {prod.rating.rate} <FontAwesomeIcon icon={faStar} /> </span></div>
       */}
       <div className="cat">category: {prod.category}</div>
      
       <div className="des">{prod.description}</div>

       {cart[prod.id]>0? <div>  <button onClick={()=>addToCart(prod.id)} className="priceBtn">Add To Cart({cart[prod.id]})</button></div>:
        <div>  <button onClick={()=>addToCart(prod.id)} className="priceBtn">Add To Cart</button></div>}
      
      <div>  <button className="buyBtn">Buy Now</button></div> 

      </div>
      
    
    </div>

    </div> 
          {prod1.map((el)=>(
            <div>
              <div>{el.title}</div>
            </div>
          ))}
    </div>
    
    
}