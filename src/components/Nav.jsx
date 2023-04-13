import React from 'react';
import logoUrl from '../assets/Esc-Logo-8bit-colour.png'

const Nav = (props) => {
  const { scene } = props;
  return (
    <div className='flex flex-row justify-between items-center bg-orange-500 text-neutral-100'>
      <img className='w-12 m-1' src={logoUrl} alt="logo" />
      <ul className='flex flex-row'>
        <li className='px-4'>{scene}/6</li>
        <li className='px-4'>Time Left: 60:00</li>
      </ul>
    </div>
  )
}

export default Nav;