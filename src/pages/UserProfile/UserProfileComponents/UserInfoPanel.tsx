import userImg from "../../../assets/UserProfile.png";

export function UserInfoPanel() {
  return (
    <section className="w-[846px] flex flex-col bg-white shadow-[0px_2px_50px_0px_#A9DEF93D] rounded-[10px] pt-[37px]  px-[20px]">
      <section className="flex items-center gap-[18px] pb-[29px] border-b border-black w-full">
        <img src={userImg} alt="user img" className="w-[78px] h-[83.02px]" />
        <div className="flex flex-col gap-[16px]">
          <p className="text-[16px] tracking-0 leading-[100%] font-semibold text-Black">
            Tony Stark
            <span className="opacity-50 text-[15.6px] font-normal pl-4">
              @tony_stark_3000
            </span>
          </p>
          <p className=" tracking-0 leading-[100%] text-[15.6px] font-normal text-Black">
            Cognitive Person | Enthusiastic scientist | Worked on 300.....
          </p>
        </div>
      </section>

      <section className="flex justify-between  py-[23px]">
        <div className="flex gap-[41px]">
          <button className="w-[163px] h-[40px] rounded-[8px] bg-SkyBlue shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-[15px] leading-[100%] tracking-0 font-bold">
            Add Friend
          </button>
          <button className="w-[163px] h-[40px] rounded-[8px] bg-LightGray shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-[15px] leading-[100%] tracking-0 font-bold">
            Message
          </button>
        </div>

        <div className="flex  gap-[24px] ">

          <div className="flex flex-col   leading-[100%] h-[52px] justify-between ">
            <p className="font-bold text-[24px] tracking-0 text-CharcoalBlue">
              12
            </p>
            <p className="text-SteelBlueGray font-normal text-[12px] tracking-[-0.4%]">
              Posts
            </p>
          </div>

          <div className="flex flex-col justify-between gap-[8px] leading-[100%]">
            <p className="font-bold text-[24px] tracking-0 text-CharcoalBlue">
              207
            </p>
            <p className="text-SteelBlueGray font-normal text-[12px] tracking-[-0.4%]">
              Followers
            </p>
          </div>
          <div className="flex flex-col justify-between gap-[8px] leading-[100%]">
            <p className="font-bold text-[24px] tracking-0 text-CharcoalBlue">
              64
            </p>
            <p className="text-SteelBlueGray font-normal text-[12px] tracking-[-0.4%]">
              Following
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
