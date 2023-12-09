// テンプレート文字列

// const name = "ja";
// const age=32;

// // 従来の結合方法
// const message="私の名前は" + name + "です．年齢は" + age + "です";
// console.log(message);

// // テンプレート文字列を使用
// const message2 = `私の名前は${name}です．年齢は${age}です`;
// console.log(message2);

// アロー関数
// 従来
// function func(str){
//   return str;
// }
// const func=function(str){
//   return str;
// }
// console.log(func("funcです"));

// // アロー関数
// const func2=str=>str;
// // console.log(func2("func2です"));

// const func3=(val1,val2)=>{
//   return val1+val2;
// }
// console.log(func3(2,4));

// const func3=(num1,num2)=>({
//   hoge:num1,
//   huga:num2
// });
// console.log(func3(10,20));


// 分割代入
// const myprofile={
//   name:"jake",
//   age:31
// };

// const message1=`名前は${myprofile.name}です．年齢は${myprofile.age}です．`;
// console.log(message1);

// const {name,age} = myprofile;
// const message2 = `名前は${name}です．年齢は${age}です`;
// console.log(message2);

// const myprofile = ["jake", 31];
// // const message2 = `名前は${myprofile[0]}です．年齢は${myprofile[1]}です`;
// // console.log(message2);

// const [name, age] = myprofile;
// const message4 = `名前は${name}です．年齢は${age}です`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = "guest") => console.log(`こんにちは${name}さん!`);
// sayHello();

// const myprofile={
//   age:31
// };
// const {age,name="guest"}=myprofile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記法
// const name="jake";
// const age=31;

// // const myprofile={
// //   name:name,
// //   age:age,
// // }
// // console.log(myprofile);

// const myprofile={name, age}
// console.log(myprofile);

// スプレッド構文 ...

// 配列の展開
// const arr1=[1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(arr1[0], arr1[1]);
// sumfunc(...arr1);

// まとめる
// const arr2=[1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー，結合
// const arr4=[10,20];
// const arr5=[30,40];

// const arr6 = [...arr4];
// // console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理
const namearr=["田中", "山田", "じゃけん"];
// // for (let index = 0; index < namearr.length; index++) {
// //   console.log(namearr[index]);
// // }

// // const namearr2 = namearr.map((name)=> {
// //   return name;
// // });
// namearr.map((name, index)=>  console.log(`${index + 1}番目は${name}です`));
// // console.log(namearr2);

// const numarr = [1,2,3,4,5];
// const newnumarr = numarr.filter((num)=>{
//   return num % 2 ===1;
// });
// console.log(newnumarr);

const newNameArr = namearr.map((name)=>{
  if(name==="じゃけん"){
    return name;
  } else {
    return `${name}さん`;
  }
})
console.log(newNameArr);


