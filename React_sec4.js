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

const func3=(num1,num2)=>({
  hoge:num1,
  huga:num2
});
console.log(func3(10,20));
