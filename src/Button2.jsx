//Clcik events: An interaction when a user clicks on a specific element.
//we can respond to clicks by passing
// a callback to the on click event handler

function Button2()
{
    const handleClick = (e) => e.target.textContent = "OUCH!";
    return (<button onClick={(e) => handleClick(e)}>Click me </button>);
}

export default Button2