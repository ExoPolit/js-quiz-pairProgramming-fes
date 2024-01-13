import { signOut } from "firebase/auth";

function logout() {
    signOut(auth);
    setUser({});
    console.log("logged out");
}