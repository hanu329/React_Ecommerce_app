
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userStatus } from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import { productDetails } from "../reduxtk/slices/productSlice"
import { faCartShopping ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import '../../ulities/css/nav.css'
 import { useState, useEffect,useContext } from "react"
 import { DataContext } from "../context/DataContext"
 
export const Nav=({relProd})=>{
  const [title, setTitle]= useState([])
  const [inputText, setInputText]= useState("")
  const [f2, setF2]=useState(1)
  const {f,handleF}=useContext(DataContext)


 const dispatch = useDispatch()
 const navigate=useNavigate()

    let prod=useSelector((state)=>state.product.prod)
 let sts=useSelector((state)=>state.user.status)
 let cart=useSelector((state)=>state.product.cart)
 let user=useSelector((state)=>state.user.userDetail)

//  const relProd=(v)=>{
//   console.log(v)
//  }

 const getFilterData=()=>{
   let data= prod.filter((el)=>{

     return el.title.toLowerCase().includes(inputText)
   })
  
   setTitle(data)
   
 }
 relProd(title)
 

  const handleInput=(e)=>{
      setInputText(e.target.value)
  }
  useEffect(()=>{
   
    getFilterData()

      
 
  },[inputText])

  const handleNavClick=(i)=>{

   let data= prod.filter((el)=>el.id==i)
   dispatch(productDetails(data[0]))
  // setF2(2)
   setInputText('') 
   navigate('/productDetails')
  }
 //new comment to check in new branch

  let elem=title.map((el)=>{{
    return <div key={el.id} onClick={()=>handleNavClick(el.id)}>{el.title}</div>
  }})
  
  const logOut =()=>{
     
       dispatch(userStatus(false))
  }
//bhosadiwale isiliye bulwate ho akele rhne ke liye taki paresan kr sako harami
const handleChange=()=>{
   let el=document.querySelector('select')
  
   if(el.value=='logout'){
    logOut()

   }else if(el.value=='prof'){
   
    navigate('/userprofile')
   }
  
}

  let c=0;
  for(let i in cart){
    if(cart[i]>0){
      c+=cart[i]
    }
  }


  // return (
  //   <div>
  //     <nav className="bg-light">
  //       <div className="container mx-auto flex items-center justify-between p-4">
  //         <a href="#" className="navbar-brand">
  //           <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" className="icon_nav" style={{ height: '50px', width: '70px' }} />
  //         </a>
  //         <button className="navbar-toggler lg:hidden" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul className="navbar-nav mr-auto">
  //             <li className="nav-item active">
  //               <input type="text" value={inputText} onChange={(e) => handleInput(e)} className="border p-2" />
  //               <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon ml-2" />
  //             </li>
  //             <li className="nav-item active">
  //               <Link to='/' className="m-2 text-decoration-none">Products</Link>
  //               <Link to='/product/cart' className="m-2 text-decoration-none" onClick={() => {
  //                 if (sts === false) {
  //                   alert("Didn't log in");
  //                 }
  //               }}>
  //                 <FontAwesomeIcon icon={faCartShopping} />
  //                 <span className="pl-1">{c}</span>
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               {sts ? (
  //                 <div className="btn-group bg-info" role="group" aria-label="Button group with nested dropdown">
  //                   <button type="button" className="btn btn-success">{user.username}</button>
  //                   <div className="btn-group">
  //                     <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
  //                     <div className="dropdown-menu">
  //                       <a className="dropdown-item" href="#">{user.username}</a>
  //                       <Link to={"/userprofile"} className="dropdown-item">Profile</Link>
  //                       <Link to={"/"} onClick={() => logOut()} className="dropdown-item">LogOut</Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <span>
  //                   <Link to='/register' className="m-2 text-decoration-none">Register</Link>
  //                   <Link to='/login' className="m-2 text-decoration-none">Log in</Link>
  //                 </span>
  //               )}
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //     <div className="pos">{elem.length > 7 || f !== 0 ? '' : elem}</div>
  //   </div>
  // );
  //               }  
        
    return <div >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" href="#">
    <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='50px' width='70px' className='icon_nav' />
     </a> */}
     <h2 style={{marginRight:"20px"}}>EWR</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
      <input type="text" style={{borderRadius:"20px", maxWidth:"400px", border:"1px solid teal", paddingLeft:"10px 5px"}} value={inputText}  onChange={(e)=>{ 
        handleInput(e) 
       
        }}  /><FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/> 
      </li>
      <li className="nav-item active">
      <Link to='/'  style={{margin:"10px",textDecoration:"none"}}>Products</Link>
        <Link to='/product/cart' style={{margin:"10px",textDecoration:"none"}} onClick={()=>{
         // console.log(sts)
          if(sts==false){
          
            alert("didn't logged in")           
          }
        }}><FontAwesomeIcon icon={faCartShopping} />
          <span style={{paddingLeft:"5px"}}>{c}</span>
        
        </Link> </li>
   

      <li className="nav-item" > 
        {sts? <div style={{position:"relative",left:"650px",background:"red"}} className="btn-group bg-info" role="group" aria-label="Button group with nested dropdown" bis_skin_checked="1">
  <button type="button" className="btn btn-success">{user.username}</button>
  <div className="btn-group" role="group" bis_skin_checked="1">
    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" bis_skin_checked="1">
      <a className="dropdown-item" href="#">{user.username}</a>
       <Link to={"/userprofile"} className="dropdown-item">Profile</Link>   
       <Link to={"/"}  onClick={()=>logOut()} className="dropdown-item">LogOut</Link> 
    </div>
  </div>
</div>:<span> <Link to='/register'  style={{margin:"10px",textDecoration:"none"}}>Register</Link>
        <Link to='/login' style={{margin:"10px",textDecoration:"none"}} >Log in</Link></span>}
     
      </li>
    </ul>
   
   
  </div>
</nav>

    <div className="pos" >{elem.length>7 || f!=0?'':elem}</div> 
    </div>
}

