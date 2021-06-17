import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees } from '../redux/actions/employeeActions';

import axios from 'axios';

const EmployeeList = () => {
  const employees = useSelector((state) => state.allEmployees.employees)
  const dispatch = useDispatch()

  const fetchEmpDetails = async () => {
    const response = await
      axios.get("https://jsonplaceholder.typicode.com/users").
        catch((err) => { console.log(err); })
    dispatch(setEmployees(response.data));
  }

  React.useEffect(() => {
    fetchEmpDetails();
  }, [])

  // console.log(employees, 'finaApiData');

  const finalApiData = employees && employees ? employees : []

  const apiList = finalApiData.map((item, index) => {
    return (<li key={index}>
      <span>{item && item.name ? item.name : ''}</span>
      <span>{item && item.username ? item.username : ''}</span>
      <span>{item && item.email ? item.email : ''}</span>
      <span>{item && item.phone ? item.phone : ''}</span>
    </li>)
  })

  return (
    <ul className="api-data">{apiList}</ul>
  )
}

export default EmployeeList