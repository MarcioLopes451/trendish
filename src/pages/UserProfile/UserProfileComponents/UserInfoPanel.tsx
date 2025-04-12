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
    <section className="w-full lg:w-[846px] flex flex-col bg-white shadow-[0px_2px_50px_0px_#A9DEF93D] rounded-[10px] pt-[12px] lg:pt-[37px] px-[6px] lg:px-[20px]">
      {/* User Info */}
      <section className="flex flex-row items-center gap-[9px] lg:gap-[18px] pb-[15px] lg:pb-[29px] border-b border-black w-full">
        <div className="w-[43px] h-[56px] overflow-hidden lg:w-[78px] lg:h-[83.02px] flex-shrink-0">
          <img
            src={user.profileImage}
            alt="User profile"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex flex-col gap-[5px] lg:gap-[16px]">
          <p className=" text-[12px] lg:text-[16px] tracking-0 leading-[100%] font-semibold text-Black flex flex-col gap-[8px] lg:flex-row">
            {user.name}
            <span className="opacity-50 lg:text-[15.6px] font-normal ">
              {user.username}
            </span>
          </p>
          <p className=" tracking-0 leading-[100%] text-[12px] lg:text-[15.6px] font-normal text-Black">
            {user.bio}
          </p>
        </div>
      </section>

      {/* Actions and Stats */}
      <section className="flex justify-between gap-[18px] pt-[8px] pb-[20px] lg:py-[23px]">
        <div className="flex flex-col lg:flex-row gap-[17px] lg:gap-[41px]">
          <button
            className={`w-[170px] h-[31px] lg:w-[163px] lg:h-[40px] rounded-[8px] cursor-pointer bg-SkyBlue shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-[13px] lg:text-[15px] leading-[100%] tracking-0 font-bold `}
            onClick={() => setIsFriend(!isFriend)}
          >
            {isFriend ? "Friend Added" : "Add Friend"}
          </button>
          <button className="w-[170px] h-[31px] lg:w-[163px] lg:h-[40px] rounded-[8px] cursor-pointer bg-LightGray shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-[13px] lg:text-[15px] leading-[100%] tracking-0 font-bold">
            Message
          </button>
        </div>

        <div className="flex gap-[6px] lg:gap-[24px]">
          {[
            { label: "Posts", count: user.stats.posts },
            { label: "Followers", count: user.stats.followers },
            { label: "Following", count: user.stats.following },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center   leading-[100%] h-[42px] lg:h-[52px] mt-[6px] lg:mt-0 "
            >
              <p className="font-bold text-[16px] lg:text-[24px] text-CharcoalBlue tracking-0 ">
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

   