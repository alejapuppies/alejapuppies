import axios from "axios"
import http from "../../Server/http-common"
import firebase from "firebase"

const API_URL = "https://alejapuppiesback.herokuapp.com"

class UserService{

    user = {}
    isRegistered = false;

    getUserData(){
        return this.user;
    }

    setUser(newUser){
        this.user = newUser;
    }

    findUserByName(name){
        return axios.get(`${API_URL}/findUserByName`,{
            params:{
                name: name
            }
        })
    }

    isRegistered(email){
        this.findUserByEmail(email)
        .on("child_added", function(snapshot) {
            if(snapshot.child("email").val() == email){
                this.isRegistered = true;
                console.log("existe");
            }
        });;

        return this.isRegistered;
    }

    findUserById(id){
        return firebase.database().ref('/users/' + id).once("value");
    }

    findUserByEmail(email){
        return firebase.database().ref("users");
    }

    addUser(data){
        return firebase.database().ref("/users/" + data.idCard).set(data);
    }

    getAllUsers(){
        return firebase.database().ref("/users/");
    }
}

export default new UserService();