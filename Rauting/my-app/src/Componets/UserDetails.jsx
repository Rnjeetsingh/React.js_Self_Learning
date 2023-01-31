import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const {userId} = useParams();

    const [data,setData] = useState({})
  
    useEffect(() =>{
      async function getData(){
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`)
        const res = await get.json()
        setData(res[0]);
  
      }
      getData();
    },[])


  return (
    <div>
     <div>
     <h3>{data.id}</h3>
     <img src={data.imageUrl} />
     <h3>{data.firstName}</h3>
     <h3>{data.lastName}</h3>
     <h3>{data.email}</h3>
     <h3>{data.contactNumber}</h3>
     <h3>{data.age}</h3>
     <h3>{data.dob}</h3>
     <h3>{data.salary}</h3>
     <h3>{data.address}</h3>
     </div>
    </div>
  )
}

export default UserDetails
