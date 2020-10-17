import axios from "axios"

const API_URL = "http://localhost:8080"

class UserService{

    getUserData(){
        return axios.get(`${API_URL}/user`);
    }

    findUserByName(name){
        return axios.get(`${API_URL}/findUserByName`,{
            params:{
                name: name
            }
        })
    }

    addUser(data){
        return axios.post(`${API_URL}/addUser`, data);
    }
}

export default new UserService();