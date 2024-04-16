import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
function Home() {
    const [text] = useTypewriter({
        words: ['Deepak Singhal', 'Web Developer', 'Designer', 'Gamer'],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 50
    });
    return (
        <>
            <div className='homeBackground '>
                <div className='homeTitle '>
                    <p>Hello World!</p>
                    <p>I'm, { }{text}{ } <Cursor /> </p>    
                    <p>from India.</p>
                    <button type="button" className="btn btn-outline-discovery">Resume</button>
                </div>
            </div>
        </>
    )
}

export default Home