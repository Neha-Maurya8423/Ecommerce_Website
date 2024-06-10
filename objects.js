const  mysym=Symbol("key1");
console.log(typeof(mysym));
const justuse={
    name:"neha",
    email:"neha@gmail.com",
    age:10,
    loction:"gprakhpur",
    [mysym]:"mykye1",
    
}
justuse.greeting=function(){
console.log(`Hello js user ${this.name}`);
};

console.log(justuse.greeting());
// console.log(justuse["email"]);
// console.log(justuse[mysym]);
// console.log(typeof(justuse[mysym]));

// console.log(justuse);

//combine two objects-------------------
const obj1={
    name:"neha maurya",
    location:"gorakhpur"
};

const obj2={
    email:"neha@gmail.com",
    Number:8423096588
};
// const obj3=Object.assign({},obj1,obj2);
//spread method
const obj3={...obj1,...obj2};
console.log(obj3);


