import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const [productInfo, setProductInfo] = useState({name: "", price: "", url: ""})
  const onChangeFunction = (e) => {
    if(e.target.name === "url"){
        setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
    }else{
        setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  };


  const buttonFunc = () => {
    dispatch(createDataFunc({productInfo, id: data.length + 1}))
    dispatch(modalFunc())
  };


  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunction(e)}
      />
      <Input
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunction(e)}
      />
      <Input
        type={"file"}
        placeholder={"Resim Seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunction(e)}
      />
      <Button btnText={"Ürün oluştur"} onClick={buttonFunc} />
    </>
  );

  return (
    <div>
        <div className="flex items-center flex-wrap">
            {
                data?.map((dt,i) => (
                    <ProductCard key={i} dt={dt} />
                ))
            }
        </div>
      {modal && (
        <Modal
          title={"Ürün Oluştur"}
          content={contentModal}
        />
      )}
    </div>
  );
};

export default Product;
