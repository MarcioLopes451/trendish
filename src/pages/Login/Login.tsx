import { useState } from "react";
import Logo from "../../assets/TrendishLogo.png";
import GoogleLogo from "../../assets/2993685_brand_brands_google_logo_logos_icon.png";
import FacebookLogo from "../../assets/5296499_fb_facebook_facebook logo_icon.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <section className="w-full text-[15px]">
      <div className="px-6 mt-6 flex justify-center items-center flex-col w-full gap-4">
        <img src={Logo} className="w-[150px]" />
        <div className="font-sora font-light">
          <span className="text-lightBlue font-semibold">Stay Trendish!</span>
          <p>Where Every Moment Goes Viral!</p>
          <p>Sign in to explore the latest trends.</p>
        </div>

        {/*Form Section */}

        <div className="font-light text-[14px]">
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@email.com"
            className="bg-whiteBlue w-[342px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
          />
          <p className="mt-[8px]">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className="bg-whiteBlue w-[342px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]"
          />
          <br />
          <div className="flex justify-end items-end mt-5">
            <p>Forgot Password?</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="bg-lightBlue w-[342px] h-[42px] rounded-[8px] text-[14px] text-white">
              Sign in
            </button>
          </div>
          <div className="mt-5">
            <div className="flex justify-center items-center flex-col gap-5">
              <p>Or Sign in with</p>
              <div className="flex justify-center items-center gap-5">
                <button className="bg-whiteBlue w-[163px] h-[42px] rounded-[8px] text-[14px] border border-[#D4D7E3]">
                  <div className="flex justify-center items-center gap-3">
                    <img src={GoogleLogo} className="w-[20px]" />
                    <p>Google</p>
                  </div>
                </button>
                <button className="bg-whiteBlue w-[163px] h-[42px] rounded-[8px] text-[14px] border border-[#D4D7E3]">
                  <div className="flex justify-center items-center gap-3">
                    <img src={FacebookLogo} className="w-[20px]" />
                    <p>Facebook</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-5 text-[14px] font-light">
          <div className="flex justify-center items-center">
            <p>
              Don't you have an account?{" "}
              <Link
                to="/trendish/signup/"
                className="text-blue-600 font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
