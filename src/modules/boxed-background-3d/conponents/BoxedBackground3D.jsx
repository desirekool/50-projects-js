import './../style.css';
import { useState } from 'react';

const BoxedBackground3D = () => {
    const [isBig, setIsBig] = useState(true);
    const handleClick = () => {
        setIsBig(!isBig);
    }

    return (
        <main>
            <button type="button" id="btn" className="magic" onClick={handleClick}>Magic 🎩</button>
            <div id="boxes" className={`boxes ${isBig ? 'big' : null}`}>
                {
                    [...Array(4)].map((x, i) => {
                        return [...Array(4)].map((y, j) => <div key={i * j} className='box' style={{backgroundPosition:`${-j * 125}px ${-i * 125}px`}}></div>
                        )
                    })
                }
            </div>
        </main>
        
    )
}

export default BoxedBackground3D;