import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {fetchProduct} from './reduxtk/slices/productSlice'
import { fetchUser } from './reduxtk/slices/userSlice'
import {Routes, Route, Link} from 'react-router-dom'
import {Nav} from './components/Nav' 
import {Footer} from './components/Footer' 
import { Product } from './components/Product'
import { ProductDetails } from './components/ProductDetails'
import { Cart } from './components/Cart'
import { Hoc } from './components/Hoc1'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { UserProfile } from './components/UserProfile'
import { Demo } from './components/Demo'
import { Pay } from './components/Pay'
import { Success } from './components/Success'



import axios from 'axios'

function App() {
  const [prod, setProd]=useState([])
const [dataChange, setDataChange] = useState(false)
const dispatch=useDispatch()


const fetchData =async ()=>{
  let data = await axios.get("/api/User/GU")
  let res = await JSON.parse(data.data)
 // setDataChange(dataChange?false:true)
}
let ref=useRef(null)
const relProd1=(v)=>{
console.log("")
   
}

const getD=(v)=>{
 
console.log("app",v)
  setProd(v)
     
  }

useEffect(()=>{
 //setProd(ref.current)
//fetchData();
//    const fetchProduct =async ()=>{
//     const res=await fetch('https://fakestoreapi.com/products')
//       const ans =await res.json()
//       dispatch(getProduct(ans))
//    }
// fetchProduct()
//dispatch(fetchUser())

dispatch(fetchProduct())
},[dataChange])
console.log("Prod", prod)
//console.log(prod.productDetails)
  return (
    <>
    <Nav relProd={relProd1} />
   
    <Routes>  
    <Route path='/' element={<Product />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/product/cart' element={<Cart />}></Route>
    <Route path='/productDetails' element={<ProductDetails prod1={prod} />}></Route>
    <Route path='/userprofile' element={<UserProfile />}></Route>
    <Route path='/success' element={<Success />}></Route>
    <Route path='/pay' element={<Pay />}></Route>
    </Routes>
  <Footer />
   
    </>
  )
}

export default App
