import firebase from "firebase"

class StockService{

    addProduct(data){
        return firebase.database().ref("/stock/"+data.name).set(data);
    }

    getStock(){
        return firebase.database().ref("/stock/");
    }

}

export default new StockService();