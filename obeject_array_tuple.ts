const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];//튜플, 길이 제한
}={
    name:'sara',
    age:30,
    hobbies:["Sports","Cooking"],
    role:[2,"author"]
};
person.role.push("admin");//에러가 나지 않는다. push는 타입스크립트가 캐치못해서 주의해야한다.

// person.role=[0,"admin","user"];//이 에러는 잡힌다.
// console.log(person.name);//person:object라고 지정하면 에러가 난다 < 좀 더 구체적인 타입을 알려줘야됨

