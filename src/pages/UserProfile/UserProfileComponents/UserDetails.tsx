import home from "@/assets/Home.svg";
import user from "@/assets/User.svg";
import Notification from "@/assets/Notification.svg";
import send from "@/assets/Send.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserDetails() {
  const [details, setDetails] = useState({
    city: "",
    workEducation: "",
    messages: "",
  });

  const [userUploadedImages, setUserUploadedImages] = useState<string[]>([]);

  // Handler for gallery navigation
  const navigate = useNavigate();
  const handleGalleryClick = () => {
    navigate("/gallery", {
      state: {
        images:
          userUploadedImages.length > 0
            ? userUploadedImages
            : placeholderImages,
      },
    });
  };

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Placeholder images (initially displayed)
  const placeholderImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://i.pinimg.com/474x/4d/8d/15/4d8d15619ac28a2281802a2ac6e31d70.jpg",
    "https://i.pinimg.com/474x/8e/1b/b7/8e1bb7c5b614ed8ec4c6d5603f7f9b88.jpg",
    "https://i.pinimg.com/474x/38/89/20/388920188248ce9bdbb84db3c69ac2ea.jpg",
    "https://wallpaperaccess.com/thumb/4167200.jpg",
    "https://wallpaperaccess.com/thumb/4269402.jpg",
    "https://images.unsplash.com/photo-1529336953128-a85760f58cb5",
    "https://images.unsplash.com/photo-1519735777090-ec97162dc266",
    "https://images.unsplash.com/photo-1520962922320-2038eebab146",
    "https://wallpaperaccess.com/thumb/4611447.jpg",
    "https://images.unsplash.com/photo-1503252947848-7338d3f92f31",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
    "https://wallpaperaccess.com/thumb/5272137.jpg",
    "https://wallpaperaccess.com/full/8736944.jpg",
    "https://wallpaperaccess.com/thumb/7028974.jpg",
    "https://wallpaperaccess.com/thumb/1178078.jpg",
    "https://wallpaperaccess.com/thumb/4190138.jpg",
    "https://i.pinimg.com/474x/d4/e3/11/d4e31131fa7e41b355afdef8e07fd12a.jpg",
    "https://i.pinimg.com/474x/88/95/48/88954816442b43e54ee4ed2dd227c477.jpg",
    "https://i.pinimg.com/474x/01/e5/d6/01e5d67a957723757e9285f7c637368c.jpg",
    "https://i.pinimg.com/474x/a2/54/3d/a2543d775486d86c6e6dd3833d81059d.jpg",
    "https://i.pinimg.com/474x/4f/be/11/4fbe11f791cf3c68dfa70285f8d61b9f.jpg",
    "https://i.pinimg.com/736x/ed/aa/d4/edaad410f9cb5721b45248f79366753b.jpg",
  ];

  // Determine displayed images
  const displayedImages =
    userUploadedImages.length > 0
      ? userUploadedImages.slice(0, 25)
      : placeholderImages.slice(0, 25);

  // Simulate user uploading images
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setUserUploadedImages((prev) => [...prev, ...newImages]);
    }
  };

  // Note: We'll add auth verification here later (e.g., currentUserId === profileOwnerId)
  const isOwner = true; // Temporary placeholder, set to true for testing owner features

  return (
    <section className="w-full lg:w-[846px] flex flex-col justify-between  lg:flex-row gap-[59px] bg-white shadow-[0px_2px_50px_0px_#A9DEF93D] rounded-[10px] py-[26px] lg:py-[37px] px-[7px] lg:px-[27px]">
      {/* Details */}
      <section>
        <h2 className="font-bold text-[13px] leading-[100%] tracking-0 text-black mb-[17px] lg:mb-[6px]">
          Details
        </h2>
        <div className="w-[323px] lg:w-[280px] h-[268px] lg:h-[258px] py-[31px] px-[22px] rounded-[10px] flex flex-col  bg-LightGray">
          <div className="flex items-center gap-[10px] border-b border-black w-[235px] h-[49px]">
            <img src={home} alt="home icon" className="w-[20px] h-[20px]" />
            <input
              name="city"
              value={details.city}
              onChange={handleInputChange}
              placeholder="City"
              className="outline-none placeholder:text-SteelBlueGray text-SteelBlueGray font-medium text-[14px] leading-[175%] tracking-0"
            />
          </div>
          <div className="flex items-center gap-[10px] border-b border-black w-[235px] h-[49px]">
            <img src={user} alt="user icon" className="w-[20px] h-[20px]" />
            <input
              name="workEducation"
              value={details.workEducation}
              onChange={handleInputChange}
              placeholder="Work/Education"
              className="outline-none placeholder:text-[#0C1024]  text-B900 font-medium text-[14px] leading-[175%] tracking-0"
            />
          </div>

          <div className="flex items-center gap-[10px] border-b border-black w-[235px] h-[49px]">
            <img src={send} alt="send icon" className="w-[20px] h-[20px]" />
            <input
              name="messages"
              value={details.messages}
              onChange={handleInputChange}
              placeholder="Messages"
              className="outline-none placeholder:text-SteelBlueGray text-SteelBlueGray font-medium text-[14px] leading-[175%] tracking-0"
            />
          </div>

          <div className="flex items-center gap-[10px] border-b border-transparent  w-[235px] h-[49px]">
            <img
              src={Notification}
              alt="bell icon"
              className="w-[20px] h-[20px]"
            />
            <button className="outline-none text-SteelBlueGray font-medium text-[14px] leading-[175%] tracking-0">
              See Tony’s About Info
            </button>
          </div>
        </div>
      </section>

      {/* photos  */}
      <section className="w-[323px]">
        <div className="flex justify-between  mb-[17px] lg:mb-[6px]">
          {isOwner ? (
            <label
              htmlFor="photo-upload-box"
              className="font-bold text-[13px] leading-[100%] tracking-0 text-black  cursor-pointer hover:text-gray-700 transition-colors"
            >
              Upload Photos
            </label>
          ) : (
            <h2 className="font-bold text-[13px] leading-[100%] tracking-0 text-black ">
              Photos
            </h2>
          )}
          <button
            onClick={handleGalleryClick}
            className="text-LightRed hover:text-red-700 transition-colors text-[10px] leading-[100%] tracking-0"
          >
            Click to see full gallery
          </button>
        </div>

        <div className="w-[323px] h-[323px] grid grid-cols-5 grid-rows-5  border-x-8 border-y-6 border-Black p-2 gap-2 bg-neutral-100">
          {isOwner && (
            <input
              id="photo-upload-box"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          )}

          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`User photo ${index + 1}`}
              className="w-full h-full  object-cover shadow-md"
            />
          ))}
          {displayedImages.length < 25 &&
            Array.from({ length: 25 - displayedImages.length }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  className="w-full h-full bg-gray-200 shadow-md"
                />
              )
            )}
        </div>
      </section>
    </section>
  );
}
