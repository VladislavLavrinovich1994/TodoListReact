import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';
import TodoListTask   from './TodoListTask';

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                   <TodoListHeader/>
                   <TodoListTask/>
                   <TodoListFooter/>
                </div>
            </div>
        );
    }
}

export default App;

