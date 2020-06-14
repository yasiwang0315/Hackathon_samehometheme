import React, { useState, useEffect } from "react";

import axios from 'axios';

function Search() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('react');

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
            if (!ignore) setData(result.data);
        }

        fetchData();
        return () => { ignore = true; }
    }, [query]);

    return (
        <>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Search;



// import React from "react";
// import API from "./API";
//
// const columns = [
//     { id: 1, label: "image" },
//     { id: 2, label: "name" },
//     { id: 4, label: "email" },
//     { id: 3, label: "phone" },
//     { id: 5, label: "DOB" }
// ];
//
// class Search extends React.Component {
//     state = {
//         employees: [],
//         search: ""
//     };
//
//     componentDidMount() {
//         this.getUser();
//     }
//
//     getUser = () => {
//         API.getRandomUser()
//             .then(res => {
//                 // console.log(res.data.results);
//                 this.setState({ employees: res.data.results });
//             })
//             .catch(err => console.log(err));
//     };
//
//     updateSearch = event => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     };
//
//     render() {
//         return (
//             <div>
//                 <br />
//                 <input
//                     className="input"
//                     placeholder="Search Here"
//                     type="text"
//                     onChange={this.updateSearch.bind(this)}
//                     name="search"
//                     value={this.state.search}
//                 ></input>
//                 <br />
//                 <table className="table">
//                     <thead>
//                     <tr>
//                         {columns.map(column => (
//                             <th key={column.id}>{column.label}</th>
//                         ))}
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.employees
//                         .filter(emp =>
//                             (emp.name.first + " " + emp.name.last)
//                                 .toLowerCase()
//                                 .includes(this.state.search.toLowerCase())
//                         )
//                         .map(emp => {
//                             return (
//                                 //included key equal to each person's SSN so I wouldn't get the "each child should have unique 'key' prop" error
//                                 //SSN is a unique identifier
//                                 <tr key={emp.id.value}>
//                                     <td>
//                                         <img src={emp.picture.thumbnail}></img>
//                                     </td>
//                                     <td>{emp.name.first + " " + emp.name.last}</td>
//                                     <td>{emp.email}</td>
//                                     <td>{emp.phone}</td>
//                                     <td>{emp.dob.date.substring(0, 10)}</td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
//
// export default Search;
