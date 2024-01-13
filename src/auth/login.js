import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/init.js';
import React from 'react';
import { useState, useEffect } from 'react';

// React.useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//     setLoading(false);
//     console.log(user);
//     if (user) {
//       setUser(user);
//     } else {
//       setUser(null);
//     }
// });
// }, []);

export default function Register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
}
