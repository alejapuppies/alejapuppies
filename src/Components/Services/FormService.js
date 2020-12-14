import http from "../../Server/http-common"

class FormService{
    addMedicalConsulting(data){
        return http.post("/addMedicalConsulting", data);
    }
}

export default new FormService();