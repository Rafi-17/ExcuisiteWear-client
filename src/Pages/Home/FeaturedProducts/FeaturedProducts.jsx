import { useEffect, useState } from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFeatured(data.filter(product=>product.category==='featured'))
        })
    },[])
    return (
        <div>
            <h2 className="text-center">Featured Products</h2>
            <h3>{featured.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    featured.map((product,idx)=><FeaturedProduct key={idx} product={product}></FeaturedProduct>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;