import React, { useEffect, useState } from "react";

function Toast(props) {
    let message = props.message;
    let duration = props.duration;
    if(duration===undefined){
        duration=3
    }
    let [isShow, setIsShow] = React.useState(true);
    let [counter,setCounter]=useState(0)
    useEffect(() => {
     let interval=  setInterval(()=>{
           setCounter(counter+1)
        },1000)
        if(counter==duration){
            setIsShow(false)
            setCounter(0)
            clearInterval(interval)
        }
        return ()=>{
            setIsShow(false)
            setCounter(0)
            clearInterval(interval)
        }
    },[counter])
    let style={
        mainContainer:{
            position:'fixed',
            bottom:'25px',
            zIndex:'9999',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            opactiy:'1',
            transition:'all 1s ease-in-out',

        },
        toastContent:{
            position:'relative',
            color:'white',
            fontWeight:'bold',
            textAlign:'center',
            backgroundColor:'green',
            padding:'10px',
            borderRadius:'2px',
            transition:'all 1s ease-in-out',

        },
        dmainContainer:{
            position:'fixed',
            bottom:'0',
            right:'0',
            zIndex:'9999',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            opactiy:'0',
            transition:'all 1s ease-in-out',

        },
    }
    if(!isShow){
        return <div className="toast" style={style.dmainContainer}></div>
    }
    console.log(isShow);
    return <>
        <div className="toast" style={style.mainContainer}>
            <div className="toast-content" style={style.toastContent}>
                {message}
            </div>
        </div>
    </>

}
export default Toast

