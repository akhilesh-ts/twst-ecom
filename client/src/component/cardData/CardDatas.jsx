// import React, { useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { IoBagAddOutline } from "react-icons/io5";
// import category from "../../asset/category.png";
// import men from "../../asset/men.jpg";
// import { Link } from "react-router-dom";

// const CardDatas = ({key,product}) => {
//     console.log('new product',product);
    
//     const [changePhoto, setChangePhoto] = useState(false);

//     return (
//       <>
//         {/* <Link to="/details/1/Alto_White_Pique_Polo"> */}
//         <Link to={`/details/${product._id}`}>
//           <div
//             className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group cursor-pointer"
//             onMouseEnter={() => setChangePhoto(true)}
//             onMouseLeave={() => setChangePhoto(false)}
//           >
//             <div className="relative">
//               <img
//                 // src={changePhoto ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}` : (product?.image[1] ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[1]}` : `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}`)}
//                 src={changePhoto?men:category}
//                 alt="Product"
//                 className="w-full h-74 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
//               />
//               <div className="absolute top-2 left-2 bg-red-950 text-white px-2 py-1 rounded text-xs font-semibold">
//                 {`${Math.ceil(product?.discount || 0)}% OFF`}
//               </div>
  
//               <button className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer">
//                 <CiHeart className="bg- hover:text-red-500" size={18} />
//               </button>
  
//               <button className="flex items-center gap-3 md:gap-1 lg:gap-3  absolute left-1/2 bottom-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white text-black py-3 px-3  md:py-2 md:px-2  lg:py-3 lg:px-3 text-sm font-thin">
//                 <IoBagAddOutline /> ADD TO BAG
//               </button>
//             </div>
  
//             <div className="p-4 flex flex-col gap-2">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-sm font-light text-gray-800">
//                 {product?.name}
//                 </h2>
//                 <p className="text-lg font-light text-gray-800">₹{product?.sale_rate}</p>
//               </div>
//               <div className="flex items-center justify-between ">
//                 <p className="text-xs text-red-500">{product?.category?.name}</p>
//                 <p className=" font-light text-gray-300 text-sm line-through">
//                 ₹{product?.price}
//                 </p>
//               </div>
  
//               {/* <div className="flex items-center justify-between mt-2">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-5 h-5 bg-gray-800 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-gray-400 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-brown-600 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-green-500 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-yellow-500 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-blue-500 border border-gray-300"></div>
  
//                   <p className="text-xs text-gray-500 ml-2">more..</p>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </Link>
//       </>
//     );
//   };

// export default CardDatas

import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
// import category from "../../asset/category.png";
import men from "../../asset/men.jpg";
import coat from "../../asset/coat.png";
import { Link } from "react-router-dom";

const CardDatas = ({ key, product }) => {
  console.log("new product", product);

  const [changePhoto, setChangePhoto] = useState(false);

  return (
    <>
      <Link to={`/details/${product._id}`}>
        <div
          className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group cursor-pointer"
          onMouseEnter={() => setChangePhoto(true)}
          onMouseLeave={() => setChangePhoto(false)}
        >
          <div className="relative h-96 w-full">
            <img
              src={changePhoto ? men : coat}
              alt="Product"
              className="w-full h-full object-cover lg:object-fill transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-red-950 text-white px-2 py-1 rounded text-xs font-semibold">
              {`${Math.ceil(product?.discount || 0)}% OFF`}
            </div>

            <button className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer">
              <CiHeart className="hover:text-red-500" size={18} />
            </button>

            <button className="flex items-center gap-3 md:gap-1 lg:gap-3 absolute left-1/2 bottom-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white text-black py-3 px-3 md:py-2 md:px-2 lg:py-3 lg:px-3 text-sm font-thin">
              <IoBagAddOutline /> ADD TO BAG
            </button>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-light text-gray-800">
                {product?.name}
              </h2>
              <p className="text-lg font-light text-gray-800">
                ₹{product?.sale_rate}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-red-500">{product?.category?.name}</p>
              <p className="font-light text-gray-300 text-sm line-through">
                ₹{product?.price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardDatas;


