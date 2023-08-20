import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const myNav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li><a href='#about'>About</a></li> */}
      <li>
        <a href="#projects">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      {/* <li><a href='#blog'>Blog</a></li> */}
    </>
  );
  return (
    <div class="navbar bg-primary lg:bg-primary  text-white lg:text-white px-10 md:px-20 font-bold font-serif text-xl">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {myNav}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          T
        </Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{myNav}</ul>
      </div>
    </div>

    // <div>
    // <div class="drawer drawer-end lg:h-16">
    //     <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    //     <div class="drawer-content flex flex-col">
    //         {/* <!-- Navbar --> */}
    //         <div class="w-full navbar bg-base-300">
    //             <div class="flex-none lg:hidden">
    //                 <label for="my-drawer-3" class="btn btn-square btn-ghost">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    //                 </label>
    //             </div>
    //             <div class="flex-1 px-2 mx-2">Navbar Title</div>
    //             <div class="flex-none hidden lg:block">
    //                 <ul class="menu menu-horizontal">
    //                     {/* <!-- Navbar menu content here --> */}
    //                     <li><a>Navbar Item 1</a></li>
    //                     {myNav}
    //                     <li><a>Navbar Item 2</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         {/* <!-- Page content here --> */}
    //         {/* Content */}
    //     </div>
    //     <div class="drawer-side">
    //         <label for="my-drawer-3" class="drawer-overlay"></label>
    //         <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
    //             {/* <!-- Sidebar content here --> */}
    //             <li><a>Sidebar Item 1</a></li>
    //             <li><a>Sidebar Item 2</a></li>

    //         </ul>

    //     </div>
    // </div>
    // </div>
  );
};

export default Header;
