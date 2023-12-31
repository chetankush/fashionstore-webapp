import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { generateStars } from '../pages/ProductPage'; // Make sure to replace with the actual path

const Sidebar = ({
  selectedCategories,
  handleCheckboxChange,
  selectedPriceRanges,
  handleCheckboxChangePrices,
  handleCheckboxChangeStars,
}) => {
  return (
    <div className="sidebar">
      <div className="brand-section">
        <h1 className="searchresultheading">Search Results</h1>
        <div className="flexitems">
          <div className="flexcol">
            <h3 className="brand-heading font-semibold">CATEGORIES</h3>
            <div className="brand-options space-y-2">
              <label className="brand-option flex items-center space-x-2">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  checked={selectedCategories.includes("men's clothing")}
                  onChange={() => handleCheckboxChange("men's clothing")}
                />
                <span>Mens</span>
              </label>
              <label className="brand-option flex items-center space-x-2">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  checked={selectedCategories.includes('jewelery')}
                  onChange={() => handleCheckboxChange('jewelery')}
                />
                <span>Jewelery</span>
              </label>
            </div>
          </div>
          <KeyboardArrowDownIcon className="sidebardowns" />
        </div>
      </div>

      <div className="filter-separator"></div>

      <div className="price-range-section">
        <div className="flexitems">
          <div className="flexcol">
            <h3 className="price-range-heading font-semibold">PRICE RANGE</h3>
            <div className="price-range-options space-y-2">
              <label className="price-range-option flex items-center space-x-2">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  checked={selectedPriceRanges.includes('000 To 999')}
                  onChange={() => handleCheckboxChangePrices('000 To 999', 'price')}
                />
                <span>Under 999</span>
              </label>
              <label className="price-range-option flex items-center space-x-2">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  checked={selectedPriceRanges.includes('999 To 3000')}
                  onChange={() => handleCheckboxChangePrices('999 To 3000', 'price')}
                />
                <span>1000 To 3000</span>
              </label>
            </div>
          </div>
          <KeyboardArrowDownIcon className="sidebardowns" />
        </div>
      </div>

      <div className="filter-separator"></div>

      <div className="ratings-section">
        <div className="flexitems">
          <div className="flexcol">
            <h3 className="ratings-heading font-semibold">RATINGS</h3>
            <div className="ratings-options space-y-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <label key={rating} className="ratings-option flex items-center space-x-2">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    onChange={() => handleCheckboxChangeStars(rating)}
                  />
                  <span className="rating-star text-yellow-400">{generateStars(rating)}</span>
                </label>
              ))}
            </div>
          </div>
          <KeyboardArrowDownIcon className="sidebardowns" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
