import { assets } from '../../assets/assets'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>BANGLABHOZ</h1>
                    {/* <img src={assets.logo} alt="" /> */}
                    <p>Indulge in a culinary journey like no other! At BANGLABHOZ, we believe that food is not just fuel but an experience that delights the senses. Whether youre craving comfort classics or gourmet creations, our menu has been carefully crafted to bring you the freshest ingredients and boldest flavors. From farm to table, we strive to serve you quality dishes that nourish both body and soul. Thank you for dining with us—where every bite tells a story!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>Delivary</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH WITH ME</h2>
                    <ul>
                        <li>91+ 7878787878</li>
                        <li>yoyofogss@gmail.com</li>
                        <li>https://github.com/trishaamandal</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='copywrite'>Copywrite 2024 Trisha Mandal- All Right Reserved</p>
        </div>
    )
}
export default Footer