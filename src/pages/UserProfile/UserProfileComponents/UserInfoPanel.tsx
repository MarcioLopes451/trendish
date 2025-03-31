import { useState } from "react";
import userImg from "../../../assets/UserProfile.png";

// Define the types for user data
interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

interface UserData {
  name: string;
  username: string;
  bio: string;
  profileImage: string;
  stats: UserStats;
}

interface UserInfoPanelProps {
  userData?: UserData; 
}

export function UserInfoPanel({ userData }: UserInfoPanelProps) {
  const [isFriend, setIsFriend] = useState(false);

  // Fallback static data if userData is not provided
  const user: UserData = userData || {
    name: "Tony Stark",
    username: "@tony_stark_3000",
    bio: "Cognitive Person | Enthusiastic scientist | Worked on 300...",
    profileImage: userImg,
    stats: {
      posts: 12,
      followers: 207,
      following: 64,
    },
  };

  return (
    <section className="w-[846px] flex flex-col bg-white shadow-[0px_2px_50px_0px_#A9DEF93D] rounded-[10px] pt-[37px]  px-[20px]">
      {/* User Info */}
      <section className="flex items-center gap-[18px] pb-[29px] border-b border-black w-full">
        <img
          src={user.profileImage}
          alt="User profile"
          className="w-[78px] h-[83.02px]"
        />
        <div className="flex flex-col gap-[16px]">
          <p className="text-[16px] tracking-0 leading-[100%] font-semibold text-Black">
            {user.name}
            <span className="opacity-50 text-[15.6px] font-normal pl-4">
              {user.username}
            </span>
          </p>
          <p className=" tracking-0 leading-[100%] text-[15.6px] font-normal text-Black">
            {user.bio}
          </p>
        </div>
      </section>

      {/* Actions and Stats */}
      <section className="flex justify-between py-[23px]">
        <div className="flex gap-[41px]">
          <button
            className={`w-[163px] h-[40px] rounded-[8px] cursor-pointer bg-SkyBlue shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-[15px] leading-[100%] tracking-0 font-bold `}
            onClick={() => setIsFriend(!isFriend)}
          >
            {isFriend ? "Friend Added" : "Add Friend"}
          </button>
          <button className="w-[163px] h-[40px] rounded-[8px] cursor-pointer bg-LightGray shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-[15px] leading-[100%] tracking-0 font-bold">
            Message
          </button>
        </div>

        <div className="flex gap-[24px]">
          {[
            { label: "Posts", count: user.stats.posts },
            { label: "Followers", count: user.stats.followers },
            { label: "Following", count: user.stats.following },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center   leading-[100%] h-[52px]"
            >
              <p className="font-bold text-[24px] text-CharcoalBlue tracking-0 ">
                {item.count}
              </p>
              <p className="text-SteelBlueGray font-normal text-[12px] tracking-[-0.4%]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
