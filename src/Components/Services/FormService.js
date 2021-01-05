import http from "../../Server/http-common"
import firebase from "firebase"

class FormService{
    addMedicalConsulting(data){
        return firebase.database().ref("/medicalForms").push(data);
    }

    addFirstConsulting(data){
        return firebase.database().ref("/firstConsultings/" + data.user.idCard).set(data);
    }
}

export default new FormService();