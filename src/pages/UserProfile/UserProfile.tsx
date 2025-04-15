import { UserInfoPanel } from "./UserProfileComponents/UserInfoPanel";
import { UserDetails } from "./UserProfileComponents/UserDetails";
import { Posts } from "./UserProfileComponents/Posts";

export function UserProfile() {
  return (
    <main >
    
      <div className="bg-IceBlue font-sora  flex flex-col items-center py-[13px] px-[8px] lg:p-[40px] gap-[23px] lg:gap-[40px]">
        <UserInfoPanel />
        <UserDetails />
        <Posts/>
      </div>
    </main>
  );
}
