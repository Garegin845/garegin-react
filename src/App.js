import { useState } from 'react'
function App() {
    const [showHello,setShowHello]  = useState(false)  
     let helloDiv =<div></div>
     let hellodiv =<div></div>
let hello = <div></div>
if (showHello){

helloDiv = <div>Hello !!!</div>
hellodiv = <div onClick={() => setShowHello(false)}style={{ 
  width: 125 ,
  height: 125, 
padding: 20,
border:'1px solid black',                        
cursor: 'pointer'
}}><img src='https://cdn-icons-png.flaticon.com/128/2767/2767146.png'/>
</div>
} else {
  hello =  <div onClick={() => setShowHello(true)} style={{
    width: 125 ,
    height: 125, 
  padding: 20,
  border:'1px solid black',                        
  cursor: 'pointer'
}}> 
<  img src='https://cdn-icons-png.flaticon.com/128/709/709612.png'/></div>
}
return(
  <div>
    
                  {hellodiv}
                  
                
  
 
                  {helloDiv}{hello}</div>
)
}

export default App
