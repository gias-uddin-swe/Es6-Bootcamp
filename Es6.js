//টেমপ্লেট স্ট্রিং

const result = `amar shonar bangla   
ami tomai valobashi
chirodin tomar akash tomar batash`; //মাল্টিলাইন  কোনো কোনকেট ছাড়াই

console.log(result);

const name = "Gias";

const output = `my name is ${name} Uddin`; //টেমপ্লেট  স্ট্রিং  দিয়ে ডাইনামিক স্ট্রিং
console.log(output);

//Arrow  Function  লিখার নিয়ম

function sum(num1, num2) {
  // console.log(arguments)
  return num1 + num2;
}
const result = sum(10, 20);
console.log(result);

const sum = (num1, num2) => {
  // console.log(arguments)
  return num1 + num2;
};
const result = sum(10, 20);
console.log(result);

const sum = (num1, num2) => num1 + num2; //এক লাইনে অ্যারো function
console.log(sum(10, 20));

//স্প্রেড অপারেটর  কিভাবে লিখবো ...

const numbers = [1, 22, 52, 36, 41, 89, 101, 56];

const result = Math.max(...numbers); //Math.max() কিন্তু এরে এর উপর কাজ করে না
console.log(result);

// কিভাবে একটা array  এর প্রতিটা এলিমেন্ট কে কপি করে নতুন এরে তে রাখা যাই

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [...numbers]; //তিনটা ডট দিয়েই array এর এলিমেন্ট  গুলা কে কপি করা যাই

// ডিষ্ট্রাচারিং  লাইফ ইজি করে দেওয়া জিনিস

const [best, faltu] = [10, 50]; //এরে ডিষ্ট্রাচারিং
console.log(best);

const name = ["gias", "uddin"];
const [firstName, lastName] = name;
console.log(lastName);

//অবজেক্ট ডিষ্ট্রাচারিং

// const company = {
//   name: "google",
//   ceo: "Sundar Pichai",
//   ceoSalary: 2500,

//   friends: [
//     {
//       name: "salam",
//       age: 13,
//     },
//     "borkot",
//     "shofik",
//     "jobbar",
//   ],
// };

const apple = {
    productName: "apple",
    price: 100,
    ceo: {
      name: "steevkaku",
      age: 56,
      girlfriend: { name: "ghosheti begum", age: 23 },
    },
  };
  
  const wife = apple.ceo.girlfriend;
  const steevkakuAge = apple.ceo.age;
  
  const { name, age } = apple.ceo.girlfriend;
  
  const name = apple.productName;
console.log(steevkakuAge)
  

// ম্যাপ কি ?  কিভাবে  কাজ করে ?


// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে 
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে। 
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

const numbers = [1, 2, 4, 6, 5, 10];

function sum(x) {
  return x * x;
}
const result = numbers.map(
  (x = function (x) {
    return x * x;
  })
);
// console.log(result);

// ম্যাপ এ যেভাবে  ভিতরে ভিতরে  লুপ চলে  

const numbers = [1, 2, 4, 6, 5, 10];
const newArray = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = sum(element);
  newArray.push(result);
}

console.log(newArray)


// এক লাইনেই  ম্যাপ করে   ফেলা 
const output = numbers.map(x => x * x);
console.log(output)


//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে ততখুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |

const products = [
    {id:1,name:"apple",price:500,color:"golden"},
    {id:2,name:"xiaomi",price:124,color:"black"},
    {id:3,name:"samsung",price:200,color:"black"},
    {id:4,name:"samsung2",price:200,color:"black"},
    {id:5,name:"lenovo",price:300,color:"pink"},
    {id:6,name:"xiaomi",price:100,color:"pink"},
    {id:7,name:"lenovo",price:300,color:"pink"},
]

const output = products.filter(pd => pd.name == "lenovo");
console.log(output)


// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া 
const output = products.filter(pd => pd.color !== "pink");
console.log(output)


// filter with three arguments

const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2.filter(function (element,index,arr) {
    console.log(index);
    console.log(arr)
    return element > 2;
})
console.log(result)


// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে

const output = products.find(pd => pd.color == "black");
console.log(output)

//একটা মজার ব্যাপার হলো ভিতরে  ভিতরে সবাই লুপ ই  চালাচ্ছে 












  


