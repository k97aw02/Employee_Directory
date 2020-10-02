import React, { Component } from 'react';
import Table from './components/Table';
import Header from './components/Nav_search';

class App extends Component {
  
    // Employee Data
    state = {
      employees: [
        {
          id: '01', 
          first_name: 'Eric',
          last_name: 'Sanchez',
          email: 'eric.sanchez@employee.com',
          phone: '512-858-4785',
          position: 'CEO',
          department: 'Executive',
          location: 'Austin HQ',
         },
         {
          id: '02', 
          first_name: 'Rita',
          last_name: 'OSullivan',
          email: 'rita.osullivan@employee.com',
          phone: '512-858-4787',
          position: 'Manager Human Resources',
          department: 'Human Resources',
          location: 'Austin HQ',
         },
         {
          id: '03', 
          first_name: 'Nicolas',
          last_name: 'Bonoicci',
          email: 'nicolas.bonoicci@employee.com',
          phone: '512-858-4790',
          position: 'Accouting Manager',
          department: 'Accounting',
          location: 'Austin HQ',
         },
         {
          id: '04', 
          first_name: 'Mark',
          last_name: 'Camarillo',
          email: 'mark.camarillo@employee.com',
          phone: '512-858-4799',
          position: 'Sales Manager',
          department: 'Sales',
          location: 'Round Rock Store',
         },
      ],
      
      searchEmployee: ''
     };

    
    handleSort = (index) => {
      console.log(index);

      
    }
    
    removeEmployee = (index) => {
      
      const { employees } = this.state;
      
      
      this.setState({
        
        employees: employees.filter((employee, i) => {
          return i !== index;
        }),
      });
    }

    
    handleInput = (e) => {
      
      this.setState({ searchEmployee: e.target.value })
    }
    

    render() {
     
      const { employees } = this.state;
      
      
      const filteredEmployees = this.state.employees.filter((employee) => {
        return employee.department.toLowerCase().includes(this.state.searchEmployee.toLowerCase())
      })

      return (
        <div className="container">
          <Header handleInput={this.handleInput}/>
          <Table employeeData={employees} removeEmployee={this.removeEmployee} filteredEmployees={filteredEmployees} />
        </div>
      );
    }
  }


  export default App;