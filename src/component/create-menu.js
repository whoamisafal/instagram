import React from "react";
import { Link, NavLink } from "react-router-dom";



class CreatePostAndStroiesMenu extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(this.props);
    }



    render() {
        let style={
            menuStyle:{
                position:'relative',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                boxShadow:"0px 0px 5px #ccc",
                backgroundColor:"#fff",
                borderRadius:'5px',
                height:'35px',
                margin:'2px',
            
                width:'100px',
                cursor:'pointer',
                
            },
            navStyle:{
                position:'relative',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                marginTop:'10px',
                

            },
            linkStyle:{
                textDecoration:"none",
                textAlign:'center'
               
            }

            


        }

        return <>
            <nav style={style.navStyle}>
            <NavLink to="/create/__post__" style={style.linkStyle}>
                <div style={style.menuStyle}>
                   
                        <b style={{textAlign:'center',width:'100%',}}>Post</b>
                    
                </div>
                </NavLink>
                <NavLink to="/create/__story__" style={style.linkStyle}>
                <div style={style.menuStyle}>
        
                        <b>Stroy</b>
                  
                </div>
                </NavLink>

            </nav>

        </>
    }



}

export default CreatePostAndStroiesMenu