import { Navbar } from './Navbar';

import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className='bg-red-500 flex place-content-between items-center p'>
      <img src={logo} alt="Logo" />

      <Navbar />
    </header>
  );
}