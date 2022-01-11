function setInSessionAndLocalStorage(data){
    // sessionStorage.setItem("email",data.email)
    // sessionStorage.setItem("userId",data.userId)
    // sessionStorage.setItem("username",data.username)
    // sessionStorage.setItem("pswd",data.pswd)
    // sessionStorage.setItem("verified",data.verified)
    localStorage.setItem("email",data.email)
    localStorage.setItem("username",data.username)
    localStorage.setItem("pswd",data.pswd)
    localStorage.setItem("userId",data.userId)
    localStorage.setItem("verified",data.verified)
}



export  default setInSessionAndLocalStorage
 

