import firebase from "firebase";

export default {
    actions: {
        // eslint-disable-next-line no-unused-vars
        async login({dispatch, commit}, {email, password}) {
            // eslint-disable-next-line no-useless-catch
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
                // eslint-disable-next-line no-empty
            } catch (e) {
                throw e
            }
        }
    }
}