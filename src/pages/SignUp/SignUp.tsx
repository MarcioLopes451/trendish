import { useState } from "react";
import Logo from "../../assets/TrendishLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import GroupImg from '../../assets/Group 1.png';

export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [DOB, SetDOB] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSignUp = async () => {
    setError(false);
    setMessage("");

    if (!firstName.trim()) {
      setFirstName("First name is required");
      setError(true);
      return;
    }
    if (!lastName.trim()) {
      setLastName("Last name is required");
      setError(true);
      return;
    }
    if (!username.trim()) {
      setUsername("Username is required");
      setError(true);
      return;
    }
    if (!DOB.trim()) {
      SetDOB("Date of Birth is required");
      setError(true);
      return;
    }
    if (!email.trim()) {
      setEmail("Email is required");
      setError(true);
      return;
    }
    if (!password.trim()) {
      setPassword("Password is required");
      setError(true);
      return;
    }

    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userAuth.user.uid), {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        username: username,
        dob: DOB,
        createdAt: new Date().toISOString(),
        uid: userAuth.user.uid,
      });
      setMessage("Sign up Successful! redirecting you to login page....");
      setError(false);
      setTimeout(() => {
        navigate("/login/");
      }, 3000);
    } catch (error) {
      console.log(error);
      setMessage("Error with signing up." + error);
      setError(true);
    }
  };

  return (
    <section className="w-full text-[15px]">
      <div className="px-6 mt-6 flex justify-between items-center gap-[50px] lg:px-[80px] lg:mt-10 xl:px-[200px] xl:mt-20">
        <img src={GroupImg} className="hidden md:w-[300px] md:block xl:w-[450px]" />
      <div className="flex justify-center items-center flex-col w-full gap-4">
        <img src={Logo} className="w-[150px]" />
        <div className="font-sora font-light lg:text-center lg:text-[18px]">
          <span className="text-LightBlue font-semibold">
            Welcome to Trendish!
          </span>
          <p>Where Every Moment Goes Viral!</p>
          <p>Sign Up to explore the latest trends.</p>
        </div>

        {/*Form Section */}

        <div className="font-light text-[14px] flex justify-around items-center flex-wrap gap-4 lg:w-[500px] lg:text-[16px]">
          <div>
            <p>First Name</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]
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
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]
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
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]
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
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]
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
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]
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
              className="bg-whiteBlue w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] border border-[#D4D7E3] placeholder:text-[14px]
              lg:w-[180px] lg:placeholder:text-[16px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div style={error === true ? { color: "red" } : { color: "black" }}>
            {message}
          </div>
          <button
            className="bg-LightBlue w-[342px] h-[42px] rounded-[8px] text-[14px] lg:text-[16px] lg:w-[440px]"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
        {/* sign in Link */}
        <div className="mt-5 text-[14px] font-light lg:text-[16px]">
          <div className="flex justify-center items-center">
            <p>
              You have an account?{" "}
              <Link to="/login/" className="text-blue-600 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
