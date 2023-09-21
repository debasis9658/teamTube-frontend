import React from 'react';
import {hambergerMenu} from '../assets/hambergerMenu.svg';
function Navbar() {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='max-w-[1240px] m-auto border w-full h-full flex justify-between items-center'>
            <img src = "https://teamtubellc.com/images/sites/ttb/logo.png" className='h-[25px] w-[40px]' />

            <div className='hidden md:flex items-center'>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className='hidden md:flex'>
                <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                    <img src = "https://logowik.com/content/uploads/images/803_lock.jpg " className='w-[30px]'/>
                    Login
                </button>
                <button className='px-8 py-3 rounded-md bg-[#20B486]  text-white font-bold'>Sign Up for Free</button>
            </div>

            <div>
                <img src = {hambergerMenu} />
            </div>
        </div>


    </div>
  );
}

export default Navbar;