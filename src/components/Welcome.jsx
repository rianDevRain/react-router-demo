


export function Welcome(props){
   if (props.name) {
       return (
           <div>
               <h1>Welcome, {props.name}</h1>
               <h3>Please type your name in the address bar</h3>
               <h4>example <code>http://localhost:3000/welcome/yournamehere</code> </h4>
           </div>
       )
   }
    return(
        
        <div>
            <h1>Welcome, {props.match.params.name}  </h1>
            
        </div>
    );
}