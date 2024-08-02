import React from "react";  
import { Cursor, useTypewriter } from 'react-simple-typewriter'
function Form(){
const [text] = useTypewriter({
        words: ['Contact Me'],
        loop: {},
        typeSpeed: 70,
        deleteSpeed: 50
    });
    return(
        <div className="container-md contact">
            <div className="">
                <div className='p-3'><span style={{color:'blue',}}>_</span> <span id="skill">{ }{text}</span><Cursor />
                </div>
            </div>
        </div>
)
}
export default Form;