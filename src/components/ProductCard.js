// components/ProductItem.js
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { generateStars } from '../pages/ProductPage';

const ProductItem = ({
    product,
    index,
    likedProducts,
    handleToggleLike,
   
}) => {
    return (
        <div key={product.id} className="product-item">
            <div className="product-image-container">
                <img
                    alt={product.title}
                    className="product-image"
                    height="200"
                    src={product.image}
                    width="200"
                  
                />

                <div className="like__button" onClick={() => handleToggleLike(index)}>
                    <div className={`fav__border ${likedProducts[index] ? 'hidden' : ''}`}>
                        <FavoriteBorderIcon />
                    </div>
                    <div className={`fav__button ${likedProducts[index] ? '' : 'hidden'}`}>
                        <FavoriteIcon />
                    </div>
                </div>
                <div className="hover-button">
                    View Product
                </div>
            </div>
            <h4 className="product-name mb-1">{product.title}</h4>
            <div className="flex__prices">
                <p className="product-price text-gray-500 line-through">Rs. {product.price + 1000}</p>
                <p className="product-price discounted-price mb-1">Rs.{product.price + 900 - 120}</p>
            </div>
            <div className="product-rating flex items-center">
                <span className="rating-star text-yellow-400"> {generateStars(product.rating.rate)}</span>
                <span className="rating-count text-sm text-gray-500 ml-2">({product.rating.count})</span>
            </div>
        </div>
    );
};

export default ProductItem;
