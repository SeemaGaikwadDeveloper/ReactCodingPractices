function Button(){
    let count = 0;

    // const handleClick = () => console.log("OUCH!");
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} You clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} Stop Clicking me!`);
        }
    }
    return(
        <button onClick={() => handleClick("Bunny")}>Click me </button>
    );

    }
export default Button