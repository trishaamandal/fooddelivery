import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import Fooddisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/Appdownload'
const Home = () => {
    const [category, setCategory] = useState("ALL")
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <Fooddisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home