import { useState, useEffect } from 'react';
import ProfilePic from '../../assets/profilePhoto.png';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, updatePassword, verifyBeforeUpdateEmail } from "firebase/auth";
import { auth, db } from '../../../config/firebase';

type UserData  = {
    firstName: string;
    lastName:string;
    username:string;
    dob:string;
    email:string;
    password:string;
}

export default function Settings() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [DOB, SetDOB] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<UserData | null>(null);
    const [edit,setEdit] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
            setEmail(currentUser.email || "")
            const docSnap = await getDoc(doc(db, "users", currentUser.uid));
            setUser(docSnap.data() as UserData);
          }
        });
    
        return () => unsubscribe();
      }, []);

      const updateUserData = async () => {
        if (!auth.currentUser?.uid) return;
      
        try {
          const updates: Partial<UserData> = {};
          
          
          if (firstName.trim()) updates.firstName = firstName;
          if (lastName.trim()) updates.lastName = lastName;
          if (username.trim()) updates.username = username;
          if (DOB.trim()) updates.dob = DOB;
      
          if (Object.keys(updates).length > 0) {
            const userDoc = doc(db, "users", auth.currentUser.uid);
            await updateDoc(userDoc, updates);
            
            setUser(prev => (prev ? { ...prev, ...updates } : null));
            
            if (updates.firstName) setFirstName("");
            if (updates.lastName) setLastName("");
            if (updates.username) setUsername("");
            if (updates.dob) SetDOB("");
          }
      
          setEdit(false);
        } catch (error) {
          console.error("Update failed:", error);
        }
      };

      const updateUserEmail = async (pass:string) => {
        if(!email.trim() || !auth.currentUser) return ;
        try {
            const credential = EmailAuthProvider.credential(auth.currentUser.email!,pass)
            await reauthenticateWithCredential(auth.currentUser, credential);
          
            await verifyBeforeUpdateEmail(auth.currentUser, email.trim());
            alert("Verification email sent! Please check your new email address.");
        }
        catch(error) {
            console.error(error)
        }
      }

      const updateUserPassword = async () => {
        if(!password.trim() || !auth.currentUser) return;
        try {
            await updatePassword(auth.currentUser, password.trim());
            setPassword("");
        } catch(error) {
            console.error(error)
        }
      }

    return (
        <section className='w-full bg-IceBlue min-h-screen font-sora'>
            <div className="flex justify-center items-center pt-10">
                <div className="bg-white mx-[13px] w-full rounded-[10px] pb-10">
                    <div className="flex justify-center items-start flex-col gap-5 px-[10px] pt-[10px]">
                        <div className='flex justify-between items-center w-full md:px-[30px]'>
                            <div className='flex justify-between items-center gap-2 '>
                                <img src={ProfilePic} className='w-[40px] rounded-2xl md:w-[70px]' />
                                <div className='flex items-start flex-col gap-2 font-light'>
                                    <p className='text-[13px] font-semibold md:text-[18px]'>{user?.firstName}</p>
                                    <p className='text-[12px] opacity-50 md:text-[15px]'>{email}</p>
                                </div>
                            </div>
                            <button className='text-[13px] bg-SkyBlue w-[77px] h-[28px] rounded-[8px] font-semibold md:w-[120px] md:h-[40px]' onClick={() => setEdit(true)}>Edit</button>
                        </div>
                        <div className="mt-5 font-regular text-[12px] flex justify-around items-center flex-wrap gap-4 md:text-[14px] lg:text-[16px] xl:justify-between xl:px-[28px] ">
                            <div>
                                <p>First Name</p>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="John"
                                    disabled={edit === false}
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
                                    md:w-[250px] md:h-[55px] md:placeholder:text-[14px] lg:w-[400px] lg:placeholder:text-[16px] xl:w-[500px]"
                                />
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Doe"
                                    disabled={edit === false}
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
                                    md:w-[250px] md:h-[55px] md:placeholder:text-[14px]  lg:w-[400px] lg:placeholder:text-[16px] xl:w-[500px]"
                                />
                            </div>
                            <div>
                                <p>Username</p>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Unique name"
                                    disabled={edit === false}
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
                                    md:w-[250px] md:h-[55px] md:placeholder:text-[14px] lg:w-[400px] lg:placeholder:text-[16px] xl:w-[500px]"
                                />
                            </div>
                            <div>
                                <p>Date of Birth</p>
                                <input
                                    type="text"
                                    value={DOB}
                                    onChange={(e) => SetDOB(e.target.value)}
                                    placeholder="01/01/2000"
                                    disabled={edit === false}
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
                                    md:w-[250px] md:h-[55px] md:placeholder:text-[14px] lg:w-[400px] lg:placeholder:text-[16px] xl:w-[500px]"
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="exmaple@gmail.com"
                                    disabled={edit === false}
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
                                    md:w-[250px] md:h-[55px] md:placeholder:text-[14px] lg:w-[400px] lg:placeholder:text-[16px] xl:w-[500px]"
                                />
                            </div>
                            <div>
                                <p>Password</p>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="At least 8 characters"
                                    disabled={edit === false}
                                    className="bg-Seasalt w-[140px] h-[42px] rounded-[8px] text-[15px] px-[15px] mt-[8px] placeholder:text-[12px]
                                    md:w-[250px] md:h-[55px] md:placeholder:text-[14px] lg:w-[400px] lg:placeholder:text-[16px] xl:w-[500px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 lg:justify-start lg:px-[50px]">
                        <button className="bg-[#D9E6FF] w-[121px] h-[30px] rounded-[8px] text-[14px] font-light text-Azure md:w-[246px] md:h-[46px] lg:text-[16px] lg:w-[240px]" 
                        onClick={() =>  {updateUserData(); updateUserEmail(password); updateUserPassword()}}>
                            Save Changes
                        </button>
                        </div>
                </div>
            </div>
        </section>
    )
}
