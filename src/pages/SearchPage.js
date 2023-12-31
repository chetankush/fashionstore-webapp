import React,{useState} from 'react'
import './searchpage.scss'
import SearchBar from '../components/SearchBar'

import { NavLink } from 'react-router-dom'

// const itemList = [
//     'Striped shirt dress',
//     'Satin shirts',
//     'Denim jumpsuit',
//     'Leather dresses',
//     'Solid tshirts',
// ];

const SearchPage = () => {

    const [showContainer, setShowContainer] = useState(false);

    const handleSearchClick = () => {
      setShowContainer(!showContainer);
    };

    return (
        <div>

            <header className='header__for__searchpage'>
                <img src="https://assets-global.website-files.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp" alt="zevi_logo" />
            </header>
            <div className="searchbar__container" onClick={handleSearchClick}>
                <SearchBar />
            </div>
            {showContainer && (
            <div className="container">
                <div className="content">
                    <h2 className="heading">Latest Trends</h2>
                    <div className="image-container">
                        <NavLink className="link" to="/productpage">
                            <div className="image-item">
                                <img
                                    alt="Shirt with puffed sleeves"
                                    className="image"
                                    src="/puffedsleeves.jpg"
                                />
                                <span className="text">Shirt with puffed sleeves</span>
                            </div>
                        </NavLink>
                        <NavLink className="link" to="/productpage">
                        <div className="image-item">
                            <img
                                alt="Linen jumpsuit"
                                className="image"
                                src="/linenjumpsuit.jpg"
                            />
                            <span className="text">Linen jumpsuit</span>
                        </div>
                        </NavLink>
                        <NavLink className="link" to="/productpage">
                        <div className="image-item">
                            <img
                                alt="White formal suit"
                                className="image"
                                src="/whiteformalsuit.jpg"
                            />
                            <span className="text">White formal suit</span>
                        </div>
                        </NavLink>
                        <NavLink className="link" to="/productpage">
                        <div className="image-item">
                            <img
                                alt="Pattern dresses"
                                className="image"
                                src="/patterns.jpg"
                            />
                            <span className="text">Pattern dresses</span>
                        </div>
                        </NavLink>
                        <NavLink className="link" to="/productpage">
                        <div className="image-item">
                            <img
                                alt="Leather shirt dress"
                                className="image"
                                src="/leatherjacket.jpg"
                            />
                            <span className="text">Leather shirt dress</span>
                        </div>
                        </NavLink>
                    </div>
                    <h2 className="heading">Popular suggestions</h2>
                    <ul className="suggestions">
                        <li className="text">Striped shirt dress</li>
                        <li className="text">Satin shirts</li>
                        <li className="text">Denim jumpsuit</li>
                        <li className="text">Leather dresses</li>
                        <li className="text">Solid tshirts</li>
                    </ul>
                </div>
            </div>
            )}


        </div>
    )
}

export default SearchPage
