import React, { useState } from 'react';
import hamburgerMenu from '../assets/hamburgerMenu.svg';
import close from '../assets/close.svg';
function Navbar() {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1240px] max-w-[600px] m-auto border w-full h-full flex justify-between items-center'>
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

            <div className='md:hidden' onClick={handleClick}>
            <img src={toggle?close:hamburgerMenu}></img>
            </div>
        </div>

        <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
            <ul>
                <li className='p-4 hover:bg-gray-100'>Home</li>
                <li className='p-4 hover:bg-gray-100'>About</li>
                <li className='p-4 hover:bg-gray-100'>Platform</li>
                <li className='p-4 hover:bg-gray-100'>Pricing</li>
                <div className='flex flex-col my-4 gap-4'>
                    <button className='border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                        <img src = "https://logowik.com/content/uploads/images/803_lock.jpg " className='w-[30px]'/>
                        Login
                    </button>
                    <button className='px-8 py-5 rounded-md bg-[#20B486]  text-white font-bold'>Sign Up for Free</button>

                </div>
            </ul>
        </div>

    </div>
  );
}

export default Navbar;