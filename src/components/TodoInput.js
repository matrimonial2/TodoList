import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book" />
                            </div>
                        </div>
                        <input type="text"
                            value={item}
                            onChange={handleChange}
                            placeholder="Add a todo item" className="form-control text-capitalize text-center" />
                    </div>
                    <button type="submit" className={editItem ? 'btn btn-success btn-block mt-2' : 'btn btn-primary btn-block mt-2'}>
                        {editItem ? 'Edit an Item' : 'Add a Item'}</button>
                </form>
            </div>
        )
    }
}