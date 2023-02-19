import React from 'react';
import searchIcon from '../../../../images/search_icon.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
                <h2 className='text-xl3'>Headphone</h2>
                <p className='text-sm'>For the top band</p>
            </div>
            <div className='col-span-8'>
               <div className='search_div'>
                <img className='masterkey_searchIcon' src={searchIcon} alt="" />
                    <input type="text" className='masterkey_search' placeholder='Search Product'/>
                    <img className='masterkey_searchIcon' src={searchIcon} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Header;