import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
import { increment, decrement, addUser, removeUser } from './Actions';
import { useRef } from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
    from 'react-router-dom';

//const App = () => {
//    const userRef = useRef(null);
//    const counterStore = useSelector(state => state.counterReducer);
//    const users = useSelector(state => state.UserReducer);
//    const dispatch = useDispatch();

//    const handleSubmit = (e) => {
//        e.preventDefault();

//        dispatch(addUser(userRef.current.value));
//        userRef.current.value = "";
//    }

//    return (
//        <>
//            <h2>Counter</h2>
//            <button onClick={() => dispatch(increment())}>+</button>
//            {counterStore}
//            <button onClick={() => dispatch(decrement())}>-</button>
//            <form onSubmit={handleSubmit}>
//                <input type="text" placeholder="userName" ref={userRef} />
//            </form>
//            <ul>
//                {
//                    users.map((item, index) => (
//                        <li key={index}>{item.name}<button onClick={() => dispatch(removeUser(index))}>x</button></li>
//                        ))
//                }
//            </ul>
//        </>
//    )
//}

class App extends Component {

    constructor(props) {
        super(props);

        this.products = [{
            Id: 0,
            Name: 'Oneplus',
            Quantity: 50,
            Price: 90000
        },
        {
            Id: 1,
            Name: 'Iphone',
            Quantity: 50,
            Price: 90000
        }];
    }

    state = {
        items: [],
        item: '',
        id: uuid(),
        editItem: false,
        name: "",
        pass:""
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item: this.state.item,
            id: this.state.id
        }

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            id: uuid(),
            item: "",
            editItem: false
        });
    };

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item: this.state.item,
            id: this.state.id
        }
    };

    handleDelete = (id) => {
        const selectedItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: selectedItems
        });
    };

    clearList = () => {
        this.setState({
            items: [],
            id: uuid(),
            item: '',
            editItem: false
        })
    }

    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const seletedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items: filteredItems,
            item: seletedItem.item,
            editItem: true,
            id: id
        });
    }

    render() {
        const { dispatch, counterStore } = this.props;
        return (
            <div className="container">
                <ul>
                    <Router>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <div className="navbar-brand">Product Management</div>
                                </div>
                                <ul className="nav nav-bar-nav">                                
                        <li className="mx-2"><Link to="/Product">Product</Link></li>
                        <li className="mx-2"><Link to="/Todo">Todo</Link></li>
                        <li className="mx-2"><Link to="/">Login</Link></li>
                                </ul>
                            </div>
                        </nav>
                        <Switch>
                            <Route exact path="/">
                                <Login name={this.state.name} pass={this.state.pass} handleLoginSubmit={this.handleLoginSubmit} />
                            </Route>
                            <Route exact path="/Product">
                                <ProductList products={this.products} />
                            </Route>
                            <Route exact path="/Todo">
                                <div className="row">
                                    <div className="col-10 mx-auto col-sm-8 mt-4">
                                        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
                                        <TodoList items={this.state.items} handleDelete={this.handleDelete} clearList={this.clearList} handleEdit={this.handleEdit} />
                                    </div>
                                </div>
                            </Route>
                        </Switch>
                    </Router>
                </ul>
            </div>
        )
    }
}

export default App;
