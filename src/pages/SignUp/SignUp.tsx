import { useState } from "react";
import Logo from "../../assets/TrendishLogo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [DOB, SetDOB] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <section className="w-full text-[15px]">
      <div className="px-6 mt-6 flex justify-center items-center flex-col w-full gap-4">
        <img src={Logo} className="w-[150px]" />
        <div className="font-sora font-light">
          <span className="text-LightBlue font-semibold">
            Welcome to Trendish!
          </span>
          <p>Where Every Moment Goes Viral!</p>
          <p>Sign Up to explore the latest trends.</p>
        </div>

        {/*Form Section */}

        <div className="font-light text-[14px] grid grid-cols-2 gap-5 w-full">
          <div>
            <p>First Name</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p>Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Unique name"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p>Date of Birth</p>
            <input
              type="text"
              value={DOB}
              onChange={(e) => SetDOB(e.target.value)}
              placeholder="DOB"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exmaple@gmail.com"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
            />
          </div>

          <br />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-LightBlue w-[342px] h-[42px] rounded-[8px] text-[14px] text-white">
            Sign up
          </button>
        </div>
        {/* sign in Link */}
        <div className="mt-5 text-[14px] font-light">
          <div className="flex justify-center items-center">
            <p>
              You have an account?{" "}
              <Link
                to="/trendish/login/"
                className="text-blue-600 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
