import { UserInfoPanel } from "./UserProfileComponents/UserInfoPanel";
import { UserDetails } from "./UserProfileComponents/UserDetails";
import Header from "../../ui/Header";
<<<<<<< HEAD
import { Posts } from "./UserProfileComponents/Posts";
=======
>>>>>>> e858aa5 (feat: add UserDetails component with gallery preview)

export function UserProfile() {
  return (
    <main >
<<<<<<< HEAD
      <Header isMenuOpen={false} setIsMenuOpen={function (_isOpen: boolean): void {
        throw new Error("Function not implemented.");
      } } />
      <div className="bg-IceBlue font-sora  flex flex-col items-center py-[13px] px-[8px] lg:p-[40px] gap-[23px] lg:gap-[40px]">
        <UserInfoPanel />
        <UserDetails />
        <Posts/>
=======
      <Header />
      <div className="bg-IceBlue font-sora  flex flex-col items-center pt-[13px] px-[8px] lg:p-[40px] gap-[23px] lg:gap-[40px]">
        <UserInfoPanel />
        <UserDetails />
>>>>>>> e858aa5 (feat: add UserDetails component with gallery preview)
      </div>
    </main>
  );
}
