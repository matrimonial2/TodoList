import React, { Component } from 'react';
import TodoItem from "./TodoItem";


export default class TodoList extends Component{
    render() {
        const { items, handleDelete, handleEdit, clearList } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                    items.map(item => {
                        return (
                        <TodoItem
                                key={item.id}
                                title={item.item}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                            />)
                })
                }

                <button type="submit" onClick={clearList} className="btn btn-danger btn-block mt-2">Clear List</button>
            </ul>
            )
    }
}