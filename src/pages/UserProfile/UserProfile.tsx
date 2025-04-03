import { UserInfoPanel } from "./UserProfileComponents/UserInfoPanel";
import { UserDetails } from "./UserProfileComponents/UserDetails";
import Header from "../../ui/Header";

export function UserProfile() {
  return (
    <main >
      <Header />
      <div className="bg-IceBlue font-sora  flex flex-col items-center pt-[13px] px-[8px] lg:p-[40px] gap-[23px] lg:gap-[40px]">
        <UserInfoPanel />
        <UserDetails />
      </div>
    </main>
  );
}
