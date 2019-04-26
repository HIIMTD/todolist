import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Input, Button, List } from 'antd';
import store from './store/index';




class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        // console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <div>
                    <Input value={this.state.inputValue}
                        placeholder='todoinfo'
                        style={{ width: 300, marginRight: 10 }}
                        onChange={this.handleInputChange} />
                    <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <List
                    style={{ marginTop: 10, width: 300 }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick(){
        const action = {
            type: "add_todo_item"

        };
        store.dispatch(action);
    }
}


export default TodoList;