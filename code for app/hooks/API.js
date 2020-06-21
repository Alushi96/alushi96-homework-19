import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                setEmployees(response.data.results)
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    },[setDisplayedEmployees, setEmployees, url])

    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunc}
}
