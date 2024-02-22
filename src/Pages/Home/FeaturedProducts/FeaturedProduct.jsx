
const FeaturedProduct = ({product}) => {
    const {image, name, type, price} = product;
    return (
        <div className="bg-lime-100 px-2 py-4">
            <img className="w-[500px] h-[300px] rounded-md" src={image} alt="" />
            <div>
                <div className="flex gap-6">
                    <p className="flex-1">Type: {type}</p>
                    <p>{price}</p>
                </div>
                <h2 className="text-xl font-bold min-h-16">{name}</h2>
            </div>
            <button className="w-full bg-slate-700 text-white text-lg font-bold rounded-md py-2 mt-2">Details</button>
        </div>
    );
};

export default FeaturedProduct;