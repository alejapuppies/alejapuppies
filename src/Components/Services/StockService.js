import firebase from "firebase"

class StockService{

    addProduct(data){
        return firebase.database().ref("/stock/"+data.name).set(data);
    }

    removeProductByName(name){
        return firebase.database().ref("/stock/" + name).remove();
    }

    findProductByName(name){
        return firebase.database().ref("/stock/" + name).once("value");
    } 

    getStock(){
        return firebase.database().ref("/stock/");
    }

    setStock(data){
        data.forEach(element => {
            firebase.database().ref("/stock/"+element.name).set(element);
        });
    }

    clearStock(){
        return firebase.database().ref("/stock/").remove();
    }

}

export default new StockService();