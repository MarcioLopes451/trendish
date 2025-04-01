import { useEffect, useRef, useState } from "react";

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

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  function handleSearch() {
    console.log("Dummy for now to hide typescript error");
  }

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on "Escape" key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="bg-LightBlue relative flex items-center justify-between px-6 py-8">
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
          <div
            ref={menuRef}
            className="font-sora fixed inset-y-0 right-0 z-10 w-[52.8%] overflow-scroll bg-white px-6 text-black"
          >
            <img
              className="mx-auto mt-10"
              src={profileImg}
              alt="Steve Rogers"
            />
            <h2 className="mt-3.5 text-center text-xl leading-6 font-semibold">
              Steve Rogers
            </h2>

            <h2 className="text-LightRed mt-7 text-base leading-5 font-normal">
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

            <h2 className="text-LightRed mt-9 leading-5 font-normal">
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
