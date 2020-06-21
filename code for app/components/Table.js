import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeContext } from './EmployeeContext.js';
function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }


function Table() {
    const [url] = useState("https://randomuser.me/api/?results=100")
    const { sortFunc } = useGet(url);
    const { displayedEmployees} = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td>Image</td>
                    <td onClick={() => sortFunc("name")}><Button>Name</Button></td>
                    <td>Phone</td>
                    <td>E-mail</td>
                    <td>DOB</td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td><img src={employee.picture.large} alt="Employee"></img></td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{formatDate(employee.dob.date)}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;