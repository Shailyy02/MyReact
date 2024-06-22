import UserGreeting from './UserGreeting.jsx'
import Button from './Button.jsx'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Button2 from './Button2.jsx'
import MyComponent from './MyComponent.jsx'
function App(){

    return(

        <>
          
          <Header></Header>
          <Footer></Footer>
          <Button></Button>
        <UserGreeting isloggedIn={true} username="SHAILY"/>
        <Button2></Button2>
        <MyComponent/>
        </>
    );
}

export default App
