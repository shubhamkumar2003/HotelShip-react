// is LoggedIn
export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if (data != null){
        return true;
    
    }
    else{
        return false;
    }
}


// do Login
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()

}

//do log out 
export const doLogOut=(next)=>{
    localStorage.removeItem("data")
    next()
}
//get currentuUser
export const getCurrentUser=()=>{
    if (isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else{
        return undefined
    }
}