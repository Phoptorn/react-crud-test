// import React, { useState } from "react"
// import './Users.css'

// const Users = () => {
//     const [data, setData] = useState({data: []})
//     const [isLoading, setLoading] = useState(false)
//     const [err, setErr] = useState('')

//     const handleClick = async () => {
//         setLoading(true)

//         try {
//             // const response = await fetch('https://reqres.in/api/users', {
//             const response = await fetch('https://localhost/FakeDB', {
//             // const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json'
//                 },
//             })

//             if (!response.ok) {
//                 throw new Error(`Error! status: ${response.status}`);
//             }

//             const result = await response.json()

//             console.log('result is: ', JSON.stringify(result, null, 4))

//             setData(result);
//         } catch (err) {
//           setErr(err.message);
//         } finally {
//           setLoading(false)
//         }
//       };

//       console.log(data)

//       return (
//         <div>
//             {err && <h2>{err}</h2>}
            
//             <button className="Button" onClick={handleClick}>Show data</button>

//             {isLoading && <h2>Loading...</h2>}

//             {data.data.map(person => {
//                 return (
//                     <div>
//                         <h2>{person.firstname}</h2>
//                         <h2>{person.first_name}</h2>
//                         <h2>{person.last_name}</h2>
//                         <br />
//                     </div>
//                 )
//             })}
//         </div>
//       )
//     }
        
//  export default Users;