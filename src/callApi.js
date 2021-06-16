import React from 'react'
import axios from 'axios'

const CallApi = () => {

  const [apiData, setApiData] = React.useState([])

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => { setApiData(response.data) }
    );
  }, []);

  const finalApiData = apiData && apiData ? apiData : []

  const apiList = finalApiData.map((item, index) => {
    return (<li key={index}>
      <span>{item.name}</span>
      <span>{item.username}</span>
      <span>{item.email}</span>
      <span>{item.phone}</span>
    </li>)
  })

  return (<ul className="api-data">{apiList}</ul>)
}
export default CallApi