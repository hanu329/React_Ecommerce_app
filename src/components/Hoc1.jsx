import { forwardRef } from "react"

  export const Hoc=()=>{
    return (
        <div>
            {/* <Demo2 /> */}
            <Hocr com={Demo}/>
            <Hocg com={Demo}/>
            <Hocg com={Demo1}/>
        </div>
    )
}

var st={
    color:"green",
    fontSize:"20px"
}

export const Hocg=(props)=>{
    return(
        <div style={st}>hoc page  {<props.com />} </div>
    )
}

export const Hocr=(props)=>{
    return(
        <div style={{color:'red'}}>hoc page  {<props.com  />} </div>
    )
}
 const Demo=()=>{
    return(
        <div>this is demo page</div>
    )
}
const Demo1=()=>{
    return(
        <div>this is demo1 page</div>
    )
}





    