import axios from "axios"
import http from "../../Server/http-common"

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

    async findUserById(idCard){
        return await axios.get(`${API_URL}/findUserById`,{
            params:{
                id: idCard
            }
        });
    }

    addUser(data){
        return axios.post(`${API_URL}/addUser`, data);
    }
}

export default new UserService();