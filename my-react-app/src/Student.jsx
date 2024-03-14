function Student(props){
      // <div>
        //     <p>Name: {props.name}</p>
        //     <p>Age: {props.age}</p>
        //     <p>Student: {props.isStudent ? "Yes": "No"}</p>
        //     </div>

        //Conditional rendering
            // if(props.isLoggedIn){
            //     return <h2>Welcome {props.username}</h2>
            // }
            // else{
            //     return <h2>Please login to continue</h2>
            // }

            return(props.isLoggedIn ?
                 <h2>Welcome to {props.username}</h2>:
                 <h2>Please login to continue</h2>)
}

export default Student