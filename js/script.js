let arr=[1,2,3,4,5,6,7,8,9,10];
function sum(arr) {
 
  if (arr.length < 1){
    return 0;
  } 
    return arr.pop()+ sum(arr);
  }

console.log(sum([1,2,3,4,5,6,7,8,9,10]))

// За допомогою тернарного оператор
// function sum(arr) {
//     return (arr.length < 1) ? 0 : arr.pop() + sum(arr);
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10]))
  
//2 завдання

function deepCount(arr){
  let result=arr.length;

  for (const char of arr){
    if(Array.isArray(char)){
      result+=deepCount(char)
    }
  }

  return result
}

console.log(deepCount([[[[[1,2,3]]]]]))

//3 завдання

const employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },

    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },

    designer: [{name: 'Kate', salary: 1800}]
}
function sumSallarySum(){
    let sum = 0;

    return function sumSallary(obj){
        
        for(let key in obj){
            if(Array.isArray(obj[key])){
                obj[key].forEach(employee => sum += employee.salary);
            }else {
                sumSallary(obj[key]);
            }   
        }

        return sum;
    }
}
console.log(sumSallarySum()(employees))

// 4 завдання

let arr1=[2,16,7,3];
let arr2=[9,3,17,12,4,8];
let arr3=[6,11,16,15,11];

const newArray=[].concat(arr1,arr2,arr3);
let max=Math.max(...newArray)

console.log(max)