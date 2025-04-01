import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import Header from "../../ui/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import Main from "../../ui/Main";

function Homepage() {
  const [user, setUser] = useState<string | null>(null);
  const [logout, setLogout] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docSnap = await getDoc(doc(db, "users", currentUser.uid));
        setUser(docSnap.data()?.firstName);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLogout(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Main />

      <div>
        {/* testing if auth works temp code ! */}
        <p>{user ? user : "no user"}</p>
        <button onClick={handleLogout}>log out</button>
        <p>
          {logout == true &&
            "Successfully logged out! redirecting you to login page..."}
        </p>
      </div>
    </>
  );
}

export default Homepage;
