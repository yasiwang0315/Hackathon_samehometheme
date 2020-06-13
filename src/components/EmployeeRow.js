import React from "react";
import API from "../utils/API";

const columns = [
  { id: 1, label: "image" },
  { id: 2, label: "name" },
  { id: 4, label: "email" },
  { id: 3, label: "phone" },
  { id: 5, label: "DOB" }
];

class EmployeeRow extends React.Component {
  state = {
    employees: [],
    search: ""
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getRandomUser()
      .then(res => {
        // console.log(res.data.results);
        this.setState({ employees: res.data.results });
      })
      .catch(err => console.log(err));
  };

  updateSearch = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <br />
        <input
          className="input"
          placeholder="Search Here"
          type="text"
          onChange={this.updateSearch.bind(this)}
          name="search"
          value={this.state.search}
        ></input>
        <br />
        <table className="table">
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.id}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.employees
              .filter(emp =>
                (emp.name.first + " " + emp.name.last)
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              )
              .map(emp => {
                return (
                  //included key equal to each person's SSN so I wouldn't get the "each child should have unique 'key' prop" error
                  //SSN is a unique identifier
                  <tr key={emp.id.value}>
                    <td>
                      <img src={emp.picture.thumbnail}></img>
                    </td>
                    <td>{emp.name.first + " " + emp.name.last}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.dob.date.substring(0, 10)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeRow;
