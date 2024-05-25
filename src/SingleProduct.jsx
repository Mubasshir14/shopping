

const SingleProduct = ({pd, handleCart}) => {
    // console.log(handleCart);
    const {title, description, image, price} = pd;
    return (
        <div>
            <div className="card">
                <img className='card-img' src={image} alt="" />
                <h3>{title.slice(0,25)}</h3>
                <p>{description}</p>
                <div className="card-footer">
                    <h3>USD ${price}</h3>
                    <button onClick={() => handleCart(pd)} className='add-btn'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;