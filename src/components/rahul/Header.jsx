'use client'
import { useState } from "react"

const Header =(props)=>{
    let a = 10
    const [isShow, setIsShow] = useState(false)
    const fruits = ["Apple", "Mango", "Banana"]
    fruits.map((fruit,index)=>console.log(fruit))
    const handleButtonClick=()=>{
        console.log("user clicked the button")
    }
    const greet =()=>{console.log("hello user")}

    return(<div>Hello, {props.name}. I am header component,
    i am from {props.place}.
    <h3>Some fruits are :- </h3>
    <ul>
        {
            fruits.map((fruit)=>{
                return (
                    <li key={fruit} >{fruit}</li>
                );
            })
        }
    </ul>
    {
        a ==10 ? <p>a is 10</p> : <p>a is not 10</p>
    }
    <button onClick={handleButtonClick}>
        click
        </button>
     </div>)
}

export default Header