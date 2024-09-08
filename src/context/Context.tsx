import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Context = () => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);
  return (
    <div>Context</div>
  )
}

export default Context