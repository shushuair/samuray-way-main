import React from 'react';

function Redd(props:any) {
   debugger
   console.log("Redd rendering");
   return (
   <div>
     <ReddTitle title={props.titleValue}/>
     <ReddBody />  
     </div>
   );  
 }
 
 function ReddTitle(props:any) {
   debugger
   console.log("ReddTitle rendering");
   return <h3> -- {props.title} -- </h3>;
 }
 
 function ReddBody() {
   console.log("ReddBody rendering");
   return (<ul>
   <li>1</li>
   <li>2</li>
   <li>3</li>
 </ul>)
 }

 export default Redd;