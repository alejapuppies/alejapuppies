import http from "../../Server/http-common"

class FormService{
    addMedicalConsulting(data){
        http.post("/addMedicalConsulting", data);
    }
}

export default new FormService();