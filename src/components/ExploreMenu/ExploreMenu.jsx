import './explore.css'
import propTypes from 'prop-types'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Foods Menu</h1>
            <p className='explore-menu-text'>Discover Our Delicious Menu! Dive into a world of flavors with our mouth-watering dishes, crafted to satisfy every craving. From savory starters to indulgent desserts, our menu offers something for everyone. Explore our diverse selection of meals, made with the freshest ingredients and inspired by cuisines from around the globe. Ready to treat your taste buds? Browse our menu and order your favorites today—each bite is a step closer to food heaven!</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-items">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
ExploreMenu.propTypes = {
    category: propTypes.string.isRequired,
    setCategory: propTypes.func.isRequired
};


export default ExploreMenu