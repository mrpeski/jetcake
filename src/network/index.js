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
        let photo = payload.photo;
        delete payload.photo;

        var promise = firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
        // If there is any error stop the process.
        promise.catch(function (error) {
            var errorCode = error.code;
            console.log(`GOT ERROR: ` + errorCode)
            if (errorCode == 'auth/weak-password') return // password to weak. Minimal 6 characters
            if (errorCode == 'auth/email-already-in-use') return // Return a email already in use error
            });

            // When no errors create the account
            promise.then(function () {
                var userUid = firebase.auth().currentUser.uid;
                var db = firebase.firestore();
                db.collection('users').doc(userUid).set(payload)
                Service.uploadPhoto(userUid, photo);
            });
    }

    static async uploadPhoto(userUid, file) {
        let storageRef = firebase.storage().ref();
        let ref = storageRef.child(`${userUid}.jpg`);
       
        return ref.put(file).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
        });
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