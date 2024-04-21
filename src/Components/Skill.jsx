import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Skill() {
    const [text] = useTypewriter({
        words: ['Skills'],
        loop: {},
        typeSpeed: 70,
        deleteSpeed: 50
    });
    return (
        <div>
            <div className='p-3'><span style={{color:'blue',}}>_</span> { }{text}<Cursor /></div>
        </div>
    )
}

export default Skill