import React from 'react';
import './Table.css'

const Table = (props) => {
    const { employeeData, removeEmployee, filteredEmployees } = props;
    const rows = props.filteredEmployees.map((row, index) => {
        return(<tr className="table-body" key={index}>
                    <td className="active-row">{row.id}</td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.position}</td>
                    <td>{row.department}</td>
                    <td>{row.location}</td>
                    <td>
                        <button onClick={() => props.removeEmployee(index)}>Delete</button>
                    </td>
                </tr>)
    } );
        return (
            <div className="employeeTable">
                <table className="content-table">
                    <thead className="header">
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Position</th>
                            <th><button onClick={() => props.handleSort("department")}>Department</button></th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                    
                </table> 
            </div> ); 
    }
export default Table;