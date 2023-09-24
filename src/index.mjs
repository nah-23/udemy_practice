/**
 * const let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //val変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数上書き";

// // const変数は再宣言不可能
// var val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "hase",
//   age : "27"
// };

// console.log(val4);

// val4.name = "naho";
// val4.address = "sendai";

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];

// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "hase";
// const age = "27";

// // 「私の名前はhaseです。年齢は27歳です。」
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //　テンプレート文字列を使用
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name : "hase",
//   age : "27"
// };

// const {name, age} = myProfile;
// const message1 = (`私の名前は${name}です。年齢は${age}歳です。`);
// console.log(message1);

// const myProfile = ["hase", "27"];
// const message2 = (`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`);
// console.log(message2);

// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

// /**
//  * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
// sayHello("hase");

/**
 * スプレット構文 ...
 */

 // 配列の展開
//  const arr1 = [1, 2];
// //  console.log(arr1);
// //  console.log(...arr1);

//  const sumFunc = (num1, num2) => console.log(num1 + num2);
//  sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr4[0] = 100;
// console.log(arr8);

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterを使った処理
 */

 const nameArray = ["田中", "山田", "鈴木"];
//  for(let index = 0; index < nameArray.length; index++){
//    console.log(`${index + 1}番目は${nameArray[index]}です`);
//  }

//  const nameArray2 = nameArray.map((name) => {
//    return name;
//  });

// console.log(nameArray2); 

// nameArray.map((name, index) => console.log(`${index +1}番目は${name}です`));


// const numArray = [1, 2, 3, 4, 5];
// const newNumArray = numArray.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArray);

// const newNameArray = nameArray.map((name) => {
//   if(name === "鈴木"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// });
// console.log(newNameArray);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの場合 : 条件がfalseの場合
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString(num));

// const formattedNum = typeof num === "number" ? num.toLocaleString(num) : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) =>{
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です" ;
// };
// console.log(checkSum(10,200));

/**
 * 論理演算子のあれこれ
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }

// if(flag1 && flag2){
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

