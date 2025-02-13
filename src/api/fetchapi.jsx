import axios from "axios";

export const allProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.error("fetching error api", error);
  }
};

export const product = async (id) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const products = res.data;
    return products;
  } catch (error) {
    console.error("fetching error api", error);
  }
};
// import React from 'react'
// import { useEffect,useState } from 'react';
// import axios from "axios";
// import * as ReactBootstrap from "react-bootstrap";

// function Fetchapi({setdata}) {

//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchapi = async () => {
//           setLoading(true);
//           try {
//             const res = await axios.get("https://fakestoreapi.com/products");
//             {setdata(res.data)};
//           } catch (error) {
//             console.error("fetching error api", error);
//           } finally {
//             setLoading(false);
//           }
//         };

//         fetchapi();
//       }, []);

//       if (loading) {
//           return (
//             <div className="text-center py-10">
//               <ReactBootstrap.Spinner animation="border" />
//             </div>
//           );
//         }

//   return (
//     <div>

//     </div>
//   )
// }

// export default Fetchapi
