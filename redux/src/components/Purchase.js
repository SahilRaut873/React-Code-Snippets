import { useSelector,useDispatch } from "react-redux";
const Purchase=()=>{
    const products= useSelector(state=>state.products);
    const dispatch = useDispatch();
    const purchaseHandler=(e)=>{
        let pName = e.target.options[e.target.selectedIndex].text;
        let price = e.target.value;
        let obj = {pName,price};
        dispatch({type:'PURCHASE',payLoad:obj});
    }
    return(
        <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr/>
            <select onChange={(e)=>purchaseHandler(e)}>
            {
             products.map((product,index)=>{
            return(
            <option value={product.price} key={index}>
              {product.pName} - ${product.price}
            </option>
          )})
        }
            </select>
        </div>
    )
}
export default Purchase;












/*
import { Component } from "react";
import {connect} from 'react-redux';

class PurchaseCl extends Component{
    
    render(){
        return(
            <div className="customDiv">
            <h3>Purchase-Class Component</h3>
            <hr/>
                <select>
                {
                 this.props.products.map((product,index)=>{
                return(
                <option value={product.price} key={index}>
                  {product.pName} - ${product.price}
                </option>
              )})
            }
                </select>
            </div>
    
        )
    }
}
const mapStateToProps=(state)=>{
   return{
       products:state.products
   }
}
const mapDispatchToProps=(dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps)(PurchaseCl);
*/ 