import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
const Productpage=()=>{
    
    const {id} = useParams()
    const [product , setproduct] = useState([])
    const[loading , setLoading] = useState(false)

    useEffect(() => {
        getProduct();
      }, []);
    
      const getProduct = () => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
          setproduct(res.data);
          setLoading(false);
        });
      };

      const Loading =()=>{
          return(
              <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
            <Skeleton height={50} width={300}/>
            <Skeleton height={75} width={400}/>
            </div>
              </>
          )
      }

      const ShowProduct=()=>{
          return(
              <>
              <div className="col-md-6">
                  <img src={product.image} height="400px" width="400px"></img>
              </div>
              <div className="col-md-6">
                  <h4 className="text-uppercase text-black-50">
                      {product.category}
                  </h4>
                  <h1 className="display-5">{product.title}</h1>
                  <p className="lead fw-bolder">Rating : {product.rating  && product.rating.rate}
                  <i className="fa fa-star"></i>
                  </p>
                  <h3 className="display-6 fw-bold my-4"> $ {product.price}</h3>
                  <p className="lead">{product.description}</p>
                  <button className="btn btn-outline-dark">Add to cart</button>
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">Go to cart</NavLink>
                 
              </div>
              </>
          )
      }
       
    return (
        <>
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Productpage