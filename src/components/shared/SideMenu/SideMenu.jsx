import React from 'react';
import './SideMenu.css'
import { NavLink } from 'react-router-dom';
import homeSvg from '../../../images/home.svg'
import exploreSvg from '../../../images/explore.svg'
import savedSvg from '../../../images/saved.svg'
import cartSvg from '../../../images/cart.svg'
import sellingSvg from '../../../images/selling.svg'
import profileSvg from '../../../images/profile.svg'
import historySvg from '../../../images/history.svg'
import contactSvg from '../../../images/contact.svg'
import settingSvg from '../../../images/setting.svg'
import plus from '../../../images/plus.svg'
import logo from '../../../images/logo.svg'

const SideMenu = () => {
    const navlinks=[
        {
            id:1,
            name:'Home',
            route:'/',
            icon:homeSvg
        },
        {
            id:2,
            name:'Explore',
            route:'/explore',
            icon:exploreSvg
        },
        {
            id:3,
            name:'Saved',
            route:'/saved',
            icon:savedSvg
        },
        {
            id:4,
            name:'Cart',
            route:'/cart',
            icon:cartSvg
        },
        {
            id:5,
            name:'Selling',
            route:'/selling',
            icon:sellingSvg
        },
        {
            id:6,
            name:'Profile',
            route:'/profile',
            icon:profileSvg
        },
        {
            id:7,
            name:'History',
            route:'/history',
            icon:historySvg
        },
        {
            id:8,
            name:'Contact us',
            route:'/contact',
            icon:contactSvg
        },
        {
            id:9,
            name:'Setting',
            route:'/setting',
            icon:settingSvg
        },
    ]
    return (
        <nav className='masterkey_nav'>
            <div className='masterkey_navmanue'>
                <div className='masterkey_logo flex justify-center'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='masterkey_list'>
                {
                    navlinks.map(singleRoute=> <li 
                        key={singleRoute.id} className='masterkey_list_item'>
                    <NavLink className="flex items-center" to={singleRoute.route}>
                        <img className='masterkey_list_item_img' src={singleRoute.icon} alt={singleRoute.name} />
                        <span className=' text-md'>{singleRoute.name}</span>
                    </NavLink>
                </li>
                )}
                </ul>
            </div>
            <div className='masterkey_frame'>
                <div className='masterkey_need_help_icon flex justify-center'>
                    <img src={plus} alt="plus" />
                </div>
                <h2 className='text-xl2 text-white'>Need Help</h2>
                <p className='text-sm text-white masterkey_p'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <button className='masterkey_customer_btn text-white font-800'>Customer Service</button>
            </div>
        </nav>
    );
};

export default SideMenu;