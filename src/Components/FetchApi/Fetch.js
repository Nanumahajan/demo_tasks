// import React from "react";
// import { useState, useEffect } from "react";
// const URL = "https://jsonplaceholder.typicode.com/users";

// const Fetch = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((resp) => setData(resp))
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(data);
//   return (
//     // <>
//     //   <h1>Data</h1>
//     //   <table>
//     //     <tbody>
//     //       <tr>
//     //         <td>ID</td>
//     //         <td>Name</td>
//     //         <td>Email</td>
//     //         <td>Address</td>
//     //       </tr>

//     //       {data?.map((element) => {
//     //         const { street, city, zipcode } = element.address;
//     //         console.log(element)
//     //         return
//     //             <>
//     //             <tr>
//     //           <td>{element.address}</td>
//     //         </tr></>
            
//     //         // <tr>
//     //         //   <td>{element.address}</td>
//     //         // </tr>;
//     //       })}
//     //       {/* {
//     //         return (<>
//     //             {data?.map((element) => {
//     //               const { street, city, zipcode } = element.address;
//     //               <tr>
//     //                 <td>{element.address}</td>
//     //               </tr>
//     //             })
//     //       } */}
//     //     </tbody>
//     //   </table>
//     // </>
//     // <>
//     // {
//     //     users.map((curUser) =>{
//     //         const {id, name, email} = curUser;
//     //         const {street, city, zipcode} =  curUser.address;
//     //         return (
//     //             <tr key={id}>
//     //                 <td>{id}</td>
//     //                 <td>{name}</td>
//     //                 <td>{email}</td>
//     //                 <td>
//     //                     {street},
//     //                     {city}{""},
//     //                     {zipcode}
//     //                 </td>
//     //             </tr>
//     //         )
//     //     })
//     // }
//     // </>

//   //   return (
//   //     <>
//   //       <table border="1">
//   //         {/* <thead>
//   //           <th>ID</th>
//   //           <th>Name</th>
//   //           <th>User-Name</th>
//   //           <th>Email</th>
//   //           <th>Phone</th>
//   //           <th>Address</th>
//   //           <th>Website</th>
//   //         </thead>
//   //         <tbody>
//   //           {data?.map((element) => {
//   //             return (
//   //               <>
//   //                 <tr>
//   //                   <td>{element.id}</td>
//   //                 </tr>
//   //                 <tr><td>
//   //                     {element.name}</td></tr>

//   //               </>
//   //             );
//   //           })}
//   //         </tbody> */}
//   //       </table>
//         <table border="1px solid black">
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>User-Name</td>
//             <td>Email</td>
//             <td>Website</td>
//             <td>phone</td>
//             <td>Address</td>
//           </tr>
//           {

//           return (
//             {data?.map((element) => {
//               // const {street, city, zipcode} = element.addres
//             })}
//           )
//         </table>

//   }
//     );
//   };

// export default Fetch;
