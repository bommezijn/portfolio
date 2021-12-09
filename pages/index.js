import react from "react";
import { FiInstagram, FiAperture, FiInfo } from "react-icons/fi";

export default function Home() {
  return (
    <main className='font-mono flex flex-col items-center justify-center min-h-screen'>
      <nav>
        <ul>
          <NavItem name='test' icon={FiInstagram} />
        </ul>
      </nav>
    </main>
  );
}

const NavItem = ({ name, icon }) => {
  return (
    <>
      <li>
        <a href='' className='flex'>
          {react.createElement(icon)}
          <span className='ml-2'>{name}</span>
        </a>
      </li>
    </>
  );
};
