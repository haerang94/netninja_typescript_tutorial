//  unknown, never 타입

let userInput:unknown;
let userName:string;
userInput=5;
userInput="max";

// userName=userInput; // unknown인 경우 에러, any인 경우 가능
//unkown이 any보다는 좀 더 strict하다

if(typeof userInput==="string"){
    userName=userInput;
}

// never 타입
//  절대 아무것도 리턴하지 않는다
function generateError(message:string,code:number):never{
    throw{message:message,errorCode:code};
}

const result=generateError("An error occured",500);
// console.log(result); // 출력되지 않음 never



