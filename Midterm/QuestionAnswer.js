let Question = [{qst:'1 + 1 ?',ans:2,choice:[1,2,3,4]},
{qst:'2 + 2 ?',ans:4,choice:[1,2,3,4]},
{qst:'3 + 3 ?',ans:6,choice:[3,6,8,10]},
{qst:'4 + 4 ?',ans:8,choice:[13,2,8,22]},
{qst:'5 + 5 ?',ans:10,choice:[10,4,32,43]}
]

let player = {id:1,name:"Nine",qstchoose:[Question[0],Question[2],Question[3]
],qstanswer:[Question[0].choice[1],Question[2].choice[1],Question[3].choice[3]],sumpoint:0}    
function getPoint (player){
    for(i=0;i<player.qstanswer.length;player.qstanswer[i++]){
    if(player.qstanswer[i]==player.qstchoose[i].ans){
        console.log("ถูกกก");
       player.sumpoint ++ ; 
    }
    else{console.log("Wrongggg"); }
}
  }


getPoint(player);
console.log(player);



