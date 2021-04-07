
//주석 사라지나 테스트
// 주석!!!

const button=document.querySelector("button")!;

function clickHandler(message:string){
    // let userName="sara"; unusedparameters 조건. 글로벌 변수는 괜찮다.
    console.log("clicked! "+message);
}

button.addEventListener("click",clickHandler.bind(null,"welcome"));
