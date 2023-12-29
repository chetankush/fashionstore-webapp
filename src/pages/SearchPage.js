import React from 'react'
import './searchpage.scss'
import SearchBar from '../components/SearchBar'
import '../'

const itemList = [
    'Striped shirt dress',
    'Satin shirts',
    'Denim jumpsuit',
    'Leather dresses',
    'Solid tshirts',
];

const SearchPage = () => {
    return (
        <div>

            <header className='header__for__searchpage'>
                <img src="https://assets-global.website-files.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp" alt="zevi_logo" />
            </header>

            <div className="searchbar__container">
                <SearchBar />
            </div>

            <div className="suggestion__box">

                <div className="suggestions__inner__div">
                <h2 className="popular__suggestions">
                Latest Trends
                </h2>
                
                    <div className="latest__trends">
                        <div className="latest__trends">1</div>
                        <div className="latest__trends">2</div>
                        <div className="latest__trends">3</div>
                        <div className="latest__trends">4</div>
                        <div className="latest__trends">5</div>
                    </div>

                    <div>
                        <h2 className="popular__suggestions">
                            Popular suggestions
                        </h2>
                        <ul>
                            {itemList.map((item, index) => (
                                <li key={index} className="font-roboto text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default SearchPage
