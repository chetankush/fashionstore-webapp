import React, { useEffect, useState } from 'react'
import './searchpage.scss'
import './productpage.scss'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProductItem from '../components/ProductCard';

export const generateStars = (rating) => {
    const roundedRating = Math.round(rating);
    const filledStars = roundedRating;
    const emptyStars = 5 - filledStars;

    return (
        <>
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} className="rating-star text-yellow-400">★</span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="rating-star text-gray-400">☆</span>
            ))}
        </>
    );
};


const ProductPage = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStars, setSelectedStars] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleCloseFilters = () => {
        setShowFilters(false);
    };

    const handleToggleLike = (index) => {
        setLikedProducts((prevLikedProducts) => {
            const newLikedProducts = [...prevLikedProducts];
            newLikedProducts[index] = !newLikedProducts[index];
            return newLikedProducts;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                let filteredData = response.data;



                // Apply search filter
                if (searchQuery.trim() !== '') {
                  const searchRegex = new RegExp(searchQuery, 'i');
                  filteredData = filteredData.filter(product =>
                    searchRegex.test(product.title)
                  );
                }


                if (selectedCategories.length > 0) {
                    filteredData = filteredData.filter(product =>
                        selectedCategories.includes(product.category)
                    );
                }





                if (selectedPriceRanges.length > 0) {
                    filteredData = filteredData.filter(product =>
                        selectedPriceRanges.some(range =>
                            checkPriceRange(product.price + 500, range)
                        )
                    );
                }

 
                if (selectedStars.length > 0) {
                    const roundedSelectedStars = selectedStars.map(rating => Math.round(rating));
                    filteredData = filteredData.filter(product =>
                        roundedSelectedStars.includes(Math.round(product.rating.rate))
                    );
                }
                setData(filteredData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [searchQuery, selectedCategories, selectedPriceRanges, selectedStars]);

    const handleCheckboxChange = category => {
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(c => c !== category)
                : [...prevCategories, category]
        );
    };

    const handleCheckboxChangePrices = (range, type) => {
        setSelectedPriceRanges(prevRanges =>
            prevRanges.includes(range)
                ? prevRanges.filter(item => item !== range)
                : [...prevRanges, range]
        );
    };

    const handleCheckboxChangeStars = (rating) => {
        setSelectedStars(prevStars =>
            prevStars.includes(rating)
                ? prevStars.filter(item => item !== rating)
                : [...prevStars, rating]
        );
    };

    const checkPriceRange = (price, range) => {
        const [min, max] = range.split(' To ');

        if (max) {
            return price >= parseInt(min, 10) && price <= parseInt(max, 10);
        } else {
            return price <= parseInt(min, 10);
        }
    };

    return (
        <div className="productpage__container">
            <div className="sticky-header">
                <div className="header-content">

                    <div className='searchboxproductpage'>
                        <div className="searchbox__main">
                        <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="inputfield__searchbox__product"
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                            <button className="searchbox__icon">
                                <SearchIcon fontSize="large" />
                            </button>
                        </div>
                    </div>

                    <img src="https://assets-global.website-files.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp" alt="zevi_logo" />

                </div>
            </div>
            <div className="mobile__filters__sidebar">
                Search Results...
                <div className="filterbutton" onClick={handleToggleFilters}>
                    Filters
                    <KeyboardArrowDownIcon />
                </div>

                {showFilters && (
                    <div className={`filter-sidebar ${showFilters ? 'show' : ''}`}>


                        <div className="mobile__filters">
                            <div>
                                <div className="brand-section">
                                    <div className="Filterssmallscreenheading">Filters</div>
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
                                <div className="price-range-section">
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
                                <div className="ratings-section">
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
                            </div>
                            <button className="close-button" onClick={handleCloseFilters}>
                                Close
                            </button>
                        </div>

                    </div>
                )}
            </div>
            <div className="flex-container">
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
                        <KeyboardArrowDownIcon  className="sidebardowns"/>
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
                        <KeyboardArrowDownIcon  className="sidebardowns"/>
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
                         <KeyboardArrowDownIcon  className="sidebardowns"/>
                         </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="grid-container">
                        {loading && (<div><p>Loading products...</p></div>)}
                        {data.map((product, index) => (
                            <ProductItem
                            key={product.id}
                            product={product}
                            index={index}
                            likedProducts={likedProducts}
                            handleToggleLike={handleToggleLike}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
