import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {

    const [isActive, setIsActive] = useState("")

    const handleIsActive = (status) => {
        setIsActive(status)
    }

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start items-center ">
        <div className="dropdown">
        
          <div tabIndex={0} role="button" className="btn text-2xl lg:hidden">
            <RxHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="text-base text-secondary/70 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => handleIsActive("Home")} className={isActive === "Home" && "underline underline-offset-4"}>
            <a>Home</a>
          </li>
          <li onClick={() => handleIsActive("Recipes")} className={isActive === "Recipes" && "underline underline-offset-4"}>
            <a>Recipes</a>
          </li>
          <li onClick={() => handleIsActive("About")} className={isActive === "About" && "underline underline-offset-4"}>
            <a>About</a>
          </li>
          <li onClick={() => handleIsActive("Search")} className={isActive === "Search" && "underline underline-offset-4"}>
            <a>Search</a>
          </li>
          </ul>
        </div>
        <a className="hidden hover:bg-transparent h-auto p-4 lg:block btn btn-ghost text-[32px] font-bold">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-secondary/70 text-base">
          <li onClick={() => handleIsActive("Home")} className={isActive === "Home" && "underline underline-offset-4"}>
            <a>Home</a>
          </li>
          <li onClick={() => handleIsActive("Recipes")} className={isActive === "Recipes" && "underline underline-offset-4"}>
            <a>Recipes</a>
          </li>
          <li onClick={() => handleIsActive("About")} className={isActive === "About" && "underline underline-offset-4"}>
            <a>About</a>
          </li>
          <li onClick={() => handleIsActive("Search")} className={isActive === "Search" && "underline underline-offset-4"}>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <label className="input rounded-3xl input-bordered flex items-center gap-2">
          <p className="text-2xl text-secondary/60"><IoSearchOutline /></p>
          <input type="text" className="grow text-secondary/60 font-medium" placeholder="Search" />
        </label>
        <button className="btn h-auto bg-primary rounded-[50%] text-3xl p-3">
          {" "}
          <RxAvatar />
        </button>
      </div>
    </nav>
  );
}
