const bank = [20,50,100,500]
const coin = [1,2,5,10]

let ReceiveMoney = (totalPrice,cashFromcust) => {
    let cashback= cashFromcust - totalPrice;
    let banktouse ={a:[]};
    if(cashFromcust<totalPrice){
        console.log("เอาเงินมาเพิ่มไอโง่");

    }
    while(cashback > 0){
    if(cashback >= 500){
        banktouse.a.push(bank[3])
        cashback -= 500
        
    }
    else if(cashback >=100){
       banktouse.a.push(bank[2])
        cashback -= 100
        
    }
    else if(cashback >=50){
        banktouse.a.push(bank[1])
        cashback -= 50
       
    }
    else if(cashback >=20){
        banktouse.a.push(bank[0])
        cashback -= 20
        
    }
    else if(cashback >=10){
        banktouse.a.push(coin[3])
        cashback -= 10
        
        
    }
    else if(cashback >=5){
        banktouse.a.push(coin[2])
        cashback -= 5
        
    }
    else if(cashback >=2){
        banktouse.a.push(coin[1])
        cashback -= 2
        
    }
    else if(cashback >=1){
        banktouse.a.push(coin[0])
        cashback -= 1
        
    }
   }
return banktouse
    }
  
console.log(ReceiveMoney(199,1000));