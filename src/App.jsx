import UserGreeting from './UserGreeting.jsx'
import Button from './Button.jsx'
import Header from './header.jsx'
import Footer from './Footer.jsx'
function App(){

    return(

        <>
          
          <Header></Header>
          <Footer></Footer>
          <Button></Button>
           <UserGreeting isloggedIn={true} username="SHAILY"/>
        
        </>
    );
}

export default App
