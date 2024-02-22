import { useEffect, useState } from "react";

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
        </div>
    );
};

export default FeaturedProducts;