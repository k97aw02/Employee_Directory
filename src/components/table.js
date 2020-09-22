function renderTableData() {
    return this.state.employees.map((employee, index) => {
       const { id, first_name, last_name, email, phone, postion, department, location } = employee //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{first_name}</td>
             <td>{last_name}</td>
             <td>{email}</td>
             <td>{phone}</td>
             <td>{postion}</td>
             <td>{department}</td>
             <td>{location}</td>
             <td><button onClick={() => props.removeEmployee(index)}>Delete</button></td>
          </tr>
       );
    });
 };

 render() {
    return (
       <div>
          <h1 id='title'>Employee Directory Table</h1>
          <table id='employees'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 };

 function renderTableHeader() {
   let header = Object.keys(this.state.students[0])
   return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
   });
};

render() {
   return (
      <div>
         <h1 id='title'>React Dynamic Table</h1>
         <table id='students'>
            <tbody>
               <tr>{this.renderTableHeader()}</tr>
               {this.renderTableData()}
            </tbody>
         </table>
      </div>
   )
}