import React,{useState} from 'react'
import './App.css';
function Tooltip({text , children}){
    const [isVisible , setIsVisible]=useState(false);

    return(
        <div className='Tooltip'
        onMouseEnter={()=>setIsVisible(true)}
        onMouseLeave={()=>setIsVisible(false)}
        >
            {children}
            {isVisible&& <span className='tooltiptext'>{text}</span>}
        </div>
    )
}
export default Tooltip;