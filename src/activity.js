
import React   from 'react';
import decode from 'jwt-decode';
import HOST_URL from './proxy';




class Activity extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:"",
            isloading:true,
            hasError:false
        }



    }
     checkAuth=()=>{
        let token=localStorage.getItem('token');
        let refreshToken=localStorage.getItem('refreshToken');

        if(!token || !refreshToken){
            return false;
        }
        try {
            let{exp}=decode(refreshToken);
            if(exp< new Date().getTime()){
                return false;
            }
            
        } catch (error) {
            return false;
        }



        return true;


    }

    componentDidMount(){
        document.getElementsByTagName("title")[0].innerHTML = "Activity";

        const header={
            "Content-Type":"application/json"
        }
           fetch(HOST_URL+"/activity",{
            method:"POST"
            ,header})
          .then(res=>this.setState({isloading:false,message:res.status}))
          .catch(err=>this.setState({hasError:true,message:err.message}));

          console.log(this.state.message);

    }

    componentDidCatch(error, info) {
        // If error is catched then this function will be exectued
            console.log(error);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }


    render(){
    
        
    
      return   <>
        <h1>Activity</h1>
        <h2>{this.state.isloading?"Loading....":this.state.message}</h2>
        
        </>
    }
}

export default Activity;