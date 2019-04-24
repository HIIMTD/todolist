import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">inputhere</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref = {(input)=>{this.input = input}}

                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul ref = {(ul)=>{this.ul=ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (

                <TodoItem key={index} content={item} index={index}
                    deleteItem={this.handleItemDelete}
                />

            )
        })
    }

    handleInputChange() {
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),()=>{console.log(this.ul.querySelectorAll('div').length);});
        
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        });
        // this.setState({
        //     list: list
        // })
        // console.log(index);
    }
}

export default TodoList;