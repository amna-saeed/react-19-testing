import { useState } from "react"

export default function Colors(){
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
    const handleRed = (e)=>{
        setR(e.target.value)
        console.log(e.target.value)
    }
    const handleGreen = (e)=>{
        setG(e.target.value)
        console.log(e.target.value)
    }
    const handleBlue = (e)=>{
        setB(e.target.value)
        console.log(e.target.value)
    }
    const save = ()=>{
        console.log("save");
        localStorage.setItem("colors",JSON.stringify({r,g,b}));
    }

     

    return(
        <>
            <div style={{margin: '30px'}}>
                <div style={{backgroundColor: 'rgb('+r+', '+g+', '+b+')', width: '200px', height: '200px'}}></div>
                <br />
                <label for="">Red</label>
                <input type="range" min={0} max={255} onChange={handleRed} value={r} />
                <label for="">Green</label>
                <input type="range" min={0} max={255} onChange={handleGreen} value={g} />
                <label for="">Blue</label>
                <input type="range" min={0} max={255} onChange={handleBlue} value={b} />
                <button onClick={save}>save</button>
            </div>
            
        </>
    )
}