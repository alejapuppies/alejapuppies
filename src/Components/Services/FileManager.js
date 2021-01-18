import firebase from "firebase"

class FileManager{

    uploadPicture(file, id, name){
        return firebase.storage().ref("/pets/").child(id).child(name).put(file);
    }

    getReferenceImg(url, id, name){
        return firebase.storage().ref(url).child(id).child(name);
    }

}

export default new FileManager();