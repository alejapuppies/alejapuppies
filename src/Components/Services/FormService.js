import http from "../../Server/http-common"
import firebase from "firebase"

class FormService{
    addMedicalConsulting(data){
        return firebase.database().ref("/medicalForms").push(data);
    }
}

export default new FormService();