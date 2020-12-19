import firebase from "firebase"

class AdminService{

    findAdminById(id){
        return firebase.database().ref("/admin/" + id).once("value");
    }

    findAdminByEmail(email){
        return firebase.database().ref("admin");
    }

    addAdmin(admin){
        return firebase.database().ref("/admin/" + admin.idCard).set({
            name:admin.name,
            email:admin.email,
            tel:admin.tel,
            rol:admin.rol
        });
    }
}

export default new AdminService();