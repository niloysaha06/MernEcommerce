import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product?._id}`}
            className="card-img-top"
            alt={product?.name}
            height="500"
            width="350px"
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <h6>Name : {product?.name}</h6>
          <h6>Description : {product?.description}</h6>
          <h6>Price : {product?.price}</h6>
          <h6>Category : {product?.category?.name}</h6>
          <button className="btn btn-secondary">ADD TO CART</button>
        </div>
      </div>
      <div className="row">Similar Product</div>
    </Layout>
  );
};

export default ProductDetails;
