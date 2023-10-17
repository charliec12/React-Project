import React,{useState} from "react";

function VmcForm(){
    const [initMem,setInitMem] = useState("8")
    const [maxMem, setMaxMem] = useState("")
    const [minMem, setMinMem] = useState("")
 
    const change= event =>{
        setInitMem(event.target.value)
    }

    const handleClick = (a)=>{
        setMinMem(1.5*a*1024)
        setMaxMem(3*a*1024)
    }

    return(
        <div>
            <form>
                <label>
                    PC Memory(GB) : 
                    <input type="text" 
                    onChange={change} value={initMem}/>
                </label>
                <input 
                className="calcButton" 
                type="button" 
                value="Calculate"
                    onClick={()=>handleClick(initMem)}
                /><br/>
                <div  className="init-size">
                <label>
                    Minimum Size: {minMem} MB
                </label>
                </div>
                
                <div className="max-size">
                <label>
                    Max Size: {maxMem} MB
                </label>
                </div>
                
            </form>
        </div>
    )
}

export default VmcForm;