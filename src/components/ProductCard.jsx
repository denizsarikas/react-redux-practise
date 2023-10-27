/* eslint-disable react/prop-types */

import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux"; 
import { deleteDataFunc } from "../redux/dataSlice";
import { useState } from "react";

const ProductCard = ({ dt }) => { 

  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();


  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img className="w-full h-full rounded-md" src={dt?.productInfo.url} />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.productInfo.name}</div>
        <div>{dt?.productInfo.price}</div>
      </div>
      <div className="absolute top-0 right-2">
        <BsThreeDots onClick={() => setOpenEdit(!openEdit)} />
      </div>
      {
        openEdit && (
          <div className="bg-black border border-white text-white absolute top-5 right-2 p-2">
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))}>Sil</div>
          </div>
        )
      }
    </div>
  );
}

export default ProductCard;
