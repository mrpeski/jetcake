import firebase from "./config";
import * as React from 'react';

const db = firebase.firestore();
class Service {
    static async signIn({email, password}) {
        return firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(handleSignIn);
                // .finally(handleError);
    }
    static async checkEmail(email){
        return db.collection("users").get().then((querySnapshot) => {
            var BreakException = {};
            try {
                querySnapshot.forEach((doc) => {
                    if(doc.data().email === email){
                        throw BreakException;
                    }
                    return false;
                });
            } catch(e){
                console.log(true, e)
                return true;
            }
            
        });
    }
    static async signUp(payload) {
        const exists = await Service.checkEmail(payload.email);
        if(!exists){
            db.collection("users").add(payload).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        } else {
            console.log('exists');
        }
    }
}

const handleError = (error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
}

const handleSignIn = (data) => {
    var user = firebase.auth().currentUser;
    console.log(data, user);
}

const handleSignUp = (data) => {
    console.log(data);
    // redirect to profile page
}

export default Service;