import PropTypes from 'prop-types';

function UserGreeting(props)
{
    
             if(props.isloggedIn){
                  return <h2 className="Welcome">Welcome<br></br>{props.username}</h2>
             }else{
                return <h2 className="loginbck">Please log in to continue</h2>
             } 
}
UserGreeting.proptypes = {
   isloggedIn: PropTypes.bool,
   username: PropTypes.string,
}

UserGreeting.defaultProps = {
   isloggedIn: "false",
   username: "Guest",
}

export default UserGreeting