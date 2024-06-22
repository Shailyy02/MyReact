//React hook = Special feature that allows functional components
//to use react features without writing class components.

//UseState() = A react that allows the creation of a stateful vairable
//And a setter function to update its value in the virtual 
// Dom


import React, {useState} from 'react';
function MyComponent()
{
    const [name,setName] = useState("Guest");
    const updateName = () => {
        setName("Shaily");
    }
    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>);
    
}

export default MyComponent