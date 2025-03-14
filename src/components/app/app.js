import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Viktor S.", salary: 1200, increase: false, rise: true, id: 1},
                {name: "John S.", salary: 3000, increase: true, rise: false, id: 2},
                {name: "Carl D.", salary: 2500, increase: false, rise: false, id: 3}
            ],
            term: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        if (!name || !salary) return;

        const newEmploee = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };
        this.maxID++;

        this.setState(({data}) => ({
                data: [...data, newEmploee]
            })
        )
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }));
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }));
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter((item) => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees}
                increased={increased}/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeeList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeeAddForm
                    onAddEmployee={this.addEmployee}/>
            </div>
        )
    }
}

export default App;