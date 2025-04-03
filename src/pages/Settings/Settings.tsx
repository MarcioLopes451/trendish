import { useState } from 'react';
import ProfilePic from '../../assets/profilePhoto.png';


export default function Settings() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [DOB, SetDOB] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <section className='w-full bg-IceBlue min-h-screen font-sora'>
            <div className="flex justify-center items-center pt-10">
                <div className="bg-white mx-[13px] w-full rounded-[10px] pb-10">
                    <div className="flex justify-center items-start flex-col gap-5 px-[10px] pt-[10px]">
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex justify-between items-center gap-2'>
                                <img src={ProfilePic} className='w-[40px] rounded-2xl' />
                                <div className='flex items-start flex-col gap-2 font-light'>
                                    <p className='text-[13px]'>Steve Rogers</p>
                                    <p className='text-[12px] opacity-50'>steverogers@gmail.com</p>
                                </div>
                            </div>
                            <button className='text-[13px] bg-SkyBlue w-[77px] h-[28px] rounded-[8px] font-semibold'>Edit</button>
                        </div>
                        <div className="font-regular text-[12px] flex justify-around items-center flex-wrap gap-4 lg:w-[500px] lg:text-[16px]">
                            <div>
                                <p>First Name</p>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="John"
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
              lg:w-[180px] lg:placeholder:text-[16px]"
                                />
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Doe"
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
              lg:w-[180px] lg:placeholder:text-[16px]"
                                />
                            </div>
                            <div>
                                <p>Username</p>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Unique name"
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
              lg:w-[180px] lg:placeholder:text-[16px]"
                                />
                            </div>
                            <div>
                                <p>Date of Birth</p>
                                <input
                                    type="text"
                                    value={DOB}
                                    onChange={(e) => SetDOB(e.target.value)}
                                    placeholder="01/01/2000"
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
               lg:w-[180px] lg:placeholder:text-[16px]"
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="exmaple@gmail.com"
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
              lg:w-[180px] lg:placeholder:text-[16px]"
                                />
                            </div>
                            <div>
                                <p>Password</p>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="At least 8 characters"
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
              lg:w-[180px] lg:placeholder:text-[16px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <button className="bg-[#D9E6FF] w-[121px] h-[30px] rounded-[8px] text-[14px] lg:text-[16px] lg:w-[440px] font-light text-Azure">
                            Sign up
                        </button>
                        </div>
                </div>
            </div>
        </section>
    )
}
