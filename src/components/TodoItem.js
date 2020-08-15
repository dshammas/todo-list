import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        } 
    }


    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p> 
                    <input style={inputStyle} type = "checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
                    {'  '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

//propTypes
TodoItem.prototypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const inputStyle = {
    padding: '10px 10px',
    margin: '2px 20px',
    cursor: 'pointer',
    display: 'absolute'
}

export default TodoItem;
