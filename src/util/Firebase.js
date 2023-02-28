export class Firebase {

    constructor(){

        this.init();

    }

    init(){

        const firebaseConfig = {
            apiKey: "AIzaSyD9lD8mo7Wvfm-WJgaiWzGSuirIHvQHbek",
            authDomain: "whatsapp-clone-c7c53.firebaseapp.com",
            projectId: "whatsapp-clone-c7c53",
            storageBucket: "whatsapp-clone-c7c53.appspot.com",
            messagingSenderId: "952773955718",
            appId: "1:952773955718:web:45037ae26d9dee53a8c107"
          };

        if(!this._initialized){
            firebase.initializeApp(firebaseConfig);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            })

            this._initialized = true;

        }
          
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){
        return firebase.storage();
    }
    

}