
export class Firebase {

    constructor(){

        this.init();

    }

    init(){
        
        const firebaseConfig = {
            apiKey: "AIzaSyD9lD8mo7Wvfm-WJgaiWzGSuirIHvQHbek",
            authDomain: "whatsapp-clone-c7c53.firebaseapp.com",
            projectId: "whatsapp-clone-c7c53",
            storageBucket: "gs://whatsapp-clone-c7c53.appspot.com",
            messagingSenderId: "952773955718",
            appId: "1:952773955718:web:45037ae26d9dee53a8c107"          
        };

        if(!window._initializedFirebase){
            firebase.initializeApp(firebaseConfig);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            })

            window._initializedFirebase = true;

        }
          
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){
        return firebase.storage();
    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider()

            //let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            })
            .catch(err=>{
                f(err);
            })

        });


    }
    

}