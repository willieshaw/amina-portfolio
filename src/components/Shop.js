import React from 'react';
import './Shop.css';
import shopData from '../data/shopData'; // Import shop data

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-items">
        {shopData.map((item) => (
          <div key={item.id} className="shop-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            <div className="item-price">
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="purchase-link">
              <a href={item.purchaseLink} target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </div>

            <div className="item-image">
              {item.images && item.images.map((image, index) => (
                <img
                  key={index}
                  src={`/images/shop/${image}`}
                  alt={`${item.name} ${index + 1}`}
                  className="product-image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
