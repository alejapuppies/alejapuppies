import axios from "axios"
import http from "../../Server/http-common"
import firebase from "firebase"

const API_URL = "https://alejapuppiesback.herokuapp.com"

class UserService{

    getUserData(){
        return http.get("user");
    }

    findUserByName(name){
        return axios.get(`${API_URL}/findUserByName`,{
            params:{
                name: name
            }
        })
    }

    findUserById(id){
        return firebase.database().ref('/users/' + id).once("value");
    }

    findUserByEmail(email){
        return firebase.database().ref("users");
    }

    addUser(data){
        return axios.post(`${API_URL}/addUser`, data);
    }
}

export default new UserService();