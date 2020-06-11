import React, { Component } from 'react';

export default class ProductItem extends Component {
    render() {
        const { product } = this.props;
        console.log("product:" , product);
        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.company}</td>
            </tr>
        )
    }
}