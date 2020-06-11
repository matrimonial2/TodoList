import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import axios from 'axios';
import { connect } from 'react-redux';
import {addProduct} from '../Actions';
import {useRef} from 'react';
import {useDispatch} from 'react-redux';

   var data = {
    name: "raj",
    email: "raj@gmai.com",
    company: "company"
    }
    
 const ProductList = (props) => {
    var NameInput = useRef(null);
    var EmailInput = useRef(null);
    var CompanyInput = useRef(null);


        

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit", "enter");
        data = {
            name: NameInput.current.value,
            email: EmailInput.current.value,
            company: CompanyInput.current.value
        }
        console.log("handleSubmit data: ", data);
        props.AddProduct();
        NameInput.current.value="";
        EmailInput.current.value="";
        CompanyInput.current.value="";
        console.log("handleSubmit data: ", NameInput.current.value);
        
    }
        return (
            <div>
                <h3 className="text-capitalize text-center">Product List</h3>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="row">
                    <label className="control-label">Name: </label>&nbsp;
                    <input className="form-control col-sm-2" placeholder="Name" ref={NameInput} />&nbsp;&nbsp;
                    <label className="control-label">Email: </label>&nbsp;
                    <input className="form-control col-sm-2" placeholder="Email" ref={EmailInput} />&nbsp;&nbsp;
                    <label className="control-label">Company: </label>&nbsp;
                    <input className="form-control col-sm-2" placeholder="Company" ref={CompanyInput} />&nbsp;&nbsp;
                    <div className="form-group col-sm-2">
                    <button type="submit" className="btn btn-primary">AddProduct</button>
                    </div>
                    </div>
                </div>
                </form>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        
                        </tr>
                    </thead>
                    <tbody>                    
                        {
                            props.productStores.map((name, index) => {
                                return (
                                    <ProductItem key={index}
                                    product={name}
                                />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        productStores: state.ProductReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        AddProduct: () => dispatch(addProduct(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductList);