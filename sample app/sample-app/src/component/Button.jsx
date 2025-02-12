// const Button = () => <button type="button" variant="container">Container</button>
// export default Button;
//import React  from "react";

import React,{useState} from 'react';


 export function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Add</button>
            <button  onMouseEnter={() => setCount(count-1)}>click</button>
            <button  onMouseLeave={() => setCount(count+1)}>onMouseLeave</button>
            <button  onMouseMove={() => setCount(count+1)}>onMouseMove</button>
            <button  onMouseDown={() => setCount(count-1)}>onMouseDown</button>
            <button  onMouseUp={() => setCount(count+1)}>onMouseUp</button>
        </div>
    );
 }

//  export default Counter;
 
// function Message(){
//     return(
//         <div> hello</div>
//     );
// }
//     export default Message;


export function MessageComp(props){
        return (
          <div id="container">
            <h2> Hello {props.name},{props.age}</h2>
          </div>
        );

      }

export function ClickHandler(){
        
      }