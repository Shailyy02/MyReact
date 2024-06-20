function UserGreeting(props)
{
    
             if(props.isloggedIn){
                  return <h2>Welcome<br></br>{props.username}</h2>
             }else{
                return <h2>Please log in to continue</h2>
             } 

             


    
}
export default UserGreeting