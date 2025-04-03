import { useReducer } from "react";

const initialSatate={count:0};

const reducer=(state,action)=>{
    switch(action.type){
        case "increase":
            return{count:state.count+1};
        case "decrease":
             return{count:state.count-1};
        default :
            return state;
    }

}
    
function UseReducer(){
    const [state,dispatch]=useReducer(reducer,initialSatate)
    function increaseCounter(){
        dispatch({type:"increase"});
    }
    function decreaseCounter(){
        dispatch({type:"decrease"});
    }
    return(
        <div>
            <h2>count:{state.count}</h2>
            <button onClick={increaseCounter}>Inccrase</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    );
}
export default UseReducer;