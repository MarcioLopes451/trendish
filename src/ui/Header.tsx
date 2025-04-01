import { useState } from "react";

import Button from "./Button";
import LinkTag from "./LinkTag";

import logoImg from "../assets/Rectangle 5.png";
import searchIcon from "../assets/search.png";
import BurgerMenuIcon from "../assets/burgerMenu.png";
import profileImg from "../assets/profilePhoto.png";
import profileIcon from "../assets/user-octagon.png";
import friendsIcon from "../assets/people.png";
import settingIcon from "../assets/setting-2.png";
import logOutIcon from "../assets/status-up.png";

// MARGIN IN THE X IS 16PX AND MT IS 32PX

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleSearch() {
    console.log("Dummy for now to hide typescript error");
  }

  return (
    <header className="flex relative bg-LightBlue items-center justify-between px-6 py-8">
      <button className="h-8 w-8" aria-label="Go to homepage">
        <img src={logoImg} alt="Trendish Logo" />
      </button>
      <div className="flex items-center gap-6">
        <Button
          onclick={handleSearch}
          img={searchIcon}
          ariaLabel="Search people"
          alt="Search Icon"
        />
        <Button
          onclick={() => setIsMenuOpen(true)}
          img={BurgerMenuIcon}
          ariaLabel="Click to Open Menu"
          alt=""
        />
      </div>

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50"></div>
          <div className="fixed text-black inset-y-0 font-sora right-0 w-[52.8%] px-6 bg-white overflow-scroll">
            <img
              className="mt-10 mx-auto"
              src={profileImg}
              alt="Steve Rogers"
            />
            <h2 className="mt-3.5  leading-6 text-center font-semibold text-xl">
              Steve Rogers
            </h2>

            <h2 className="mt-7  font-normal text-LightRed leading-5  text-base ">
              Explore panel
            </h2>

            <LinkTag
              danger={false}
              img={profileIcon}
              linkTo="/profile"
              title="Profile"
            />
            <LinkTag
              danger={false}
              img={friendsIcon}
              linkTo="*"
              title="Find friends"
            />

            <h2 className="mt-9 text-LightRed font-normal leading-5">
              Settings
            </h2>

            <LinkTag
              danger={false}
              img={settingIcon}
              linkTo="*"
              title="Settings"
            />

            <LinkTag
              danger={true}
              img={logOutIcon}
              linkTo="*"
              title="Log out"
            />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
