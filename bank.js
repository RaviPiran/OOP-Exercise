class Bank{
    constructor(bankID,name,location){
this.bankID=bankID;
this.name=name;
this.location=location;
}


getname(){
    return this.name
}

getbankID(){
    return this.bankID
}

}

const h1 = new Bank(1011,"HNB","Atchchuvely");
console.log(h1);