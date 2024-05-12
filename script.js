let names=['danny','joe','sarah','felix']

// toString()
let stringNames = names.toString(); // Convert array to string
console.log("toString():", stringNames) // Answer: danny,joe,sarah,felix

// join()
let strNames=names.join() // Join array elements into a string separated by commas
console.log("join():", strNames) // Answer: danny,joe,sarah,felix

let strNames1=names.join('*') // Join array elements into a string separated by specified delimiter
console.log("join('*'):", strNames1) // Answer: danny*joe*sarah*felix

// concat()
let names2=['john','jean']
let arrjoined = names.concat(names2) // Concatenate two arrays
console.log("concat():", arrjoined) // Answer:  ['danny', 'joe', 'sarah', 'felix', 'john', 'jean']

let arrjoined2 = names2.concat(names) // Concatenate two arrays
console.log("concat():", arrjoined2) // Answer:  ['john', 'jean', 'danny', 'joe', 'sarah', 'felix']

let names3 = ['papa','mama']
let arrjoined3 = names.concat(names3,names2) // Concatenate multiple arrays
console.log("concat() multiple arrays:", arrjoined3 ) // Answer:  ['danny', 'joe', 'sarah', 'felix', 'papa', 'mama', 'john', 'jean']

// splice ()
let newNames = names.splice(1) // Remove elements from an array and returns the removed elements
console.log("splice(1):", newNames) // Answer:  ['joe', 'sarah', 'felix']
console.log("names:", names) // Answer:  ['danny]

let names4 = ['jean','john','pap','pacy']
console.log("names4:", names4) // ['jean','john','pap','pacy']
let newNames4 = names4.splice(2,1) // Remove elements from an array and returns the removed elements
console.log("splice(2,1):", newNames4) // Answer: (1) ['pap']

// TO avoid changing of original array  do copy as
namesCopy = [...names] // and play with namesCopy

// replace element in array
let names5 = ['jean','john','pap','pacy']
console.log("names5:", names5) //['jean','john','pap','pacy']
let newNames5 = names5.splice(1,2,'felix','pi') // Remove elements from an array and/or add new elements
console.log("splice(1,2,'felix','pi'):", newNames5) // Answer:  ['john', 'pap'] 
console.log("names5:", names5) // Answer:  ['jean', 'felix', 'pi', 'pacy']

//slice() this doesn't change the original array 
let food = ['potato','vegetable','fruit','meat']
console.log("food:", food) // food: ['potato','vegetable','fruit','meat']
let foodSlice = food.slice(1,3) // Extracts a section of an array and returns a new array
console.log("slice(1,3):", foodSlice) // Answer:  ['vegetable', 'fruit']
console.log("food:", food) // Answer:  ['potato', 'vegetable', 'fruit', 'meat']

// indexof() this return first of index of element
let fruitIndex = food.indexOf('fruit') // Find the index of a specified item in an array
console.log("indexOf('fruit'):", fruitIndex) // Answer: 2

//flat()
let numb = [1,2,3,4,[5,6],7];
console.log("numb:", numb) //[1,2,3,4,Array(2),7];
numbFlat = numb.flat() // Flattens nested arrays up to a specified depth
console.log("flat():", numbFlat) // Answer:  [1, 2, 3, 4, 5, 6, 7]

let numb1 = [1,2,3,4,[5,6,[9,11]],7];
console.log("numb1:", numb1) // [1,2,3,4,Array(3),7];
let numb1Flat = numb1.flat() // Flattens nested arrays up to a specified depth
console.log("flat():", numb1Flat) // Answer:  [1, 2, 3, 4, 5, 6, Array(2), 7]

let numb2Flat = numb1.flat(2) // Flattens nested arrays up to a specified depth
console.log("flat(2):", numb2Flat) // Answer:  [1, 2, 3, 4, 5, 6, 9, 11, 7]

// high order method

// forEach() it loop on each element of array
let number = [1,2,3,4,5,6,7,8,9]
number.forEach((n)=>{ n = n**2; console.log(n)}) // Execute a provided function once for each array element answer: [1,4,9,16,25,36,49,64,81]

// map()
console.log("number:", number) // number : [1,2,3,4,5,6,7,8,9]
let numberMap = number.map(n=>n**3) // Creates a new array populated with the results of calling a provided function on every element in the calling array
console.log("map():", numberMap) //answer : [1, 8, 27, 64, 125, 216, 343, 512, 729]

// filter
let posts=[
   { title: 'post 1', author:'Dan'},
   { title: 'post 2', author:'Dan'},
   { title: 'post 3', author:'sarah'},
];

let dansposts = posts.filter((p=>p.author ==='Dan')) // Creates a new array with all elements that pass the test implemented by the provided function
console.log("filter():", dansposts) // answer : { title: 'post 1', author:'Dan'} { title: 'post 2', author:'Dan'},


//reduce
let nums =[1,2,3,4,5,6]
let total =nums.reduce((total,currentval)=>total+currentval); // Executes a reducer function on each element of the array, resulting in a single output value
console.log("reduce():", total) // answer : 21
let total1 =nums.reduce((total,currentval)=>total+currentval,10);// 10 is initial 
console.log("reduce() with initial value:", total1) // answer : 31

//max  and min using reduce
let marks=[20,10,70,19,4,7,90,36]
console.log("marks:", marks) // marks:[20,10,70,19,4,7,90,36]
let marksMax = marks.reduce((a,b)=> Math.max(a,b),-Infinity) // Find the maximum value in an array
console.log("reduce() max:", marksMax) //answer: 90

let marksMin = marks.reduce((a,b)=> Math.min(a,b),+Infinity) // Find the minimum value in an array
console.log("reduce() min:", marksMin) //answer: 4

// some() If one of array element  is true it returns true
let marksSame = marks.some((n)=> n ===70); // Check if at least one element in the array satisfies the condition
console.log("some():", marksSame) //answer: true

// every() this is true if all element is true
let marksEvery = marks.every((n) => n > 10 ) // Check if all elements in the array satisfy the condition
console.log("every():", marksEvery) //answer: false

//findIndex()
let stock = [
  {item: 'hot sauce', quantity:12},
  {item: 'ketchup', quantity:32},
  {item: 'mayo', quantity:9},
]

let mayo = stock.findIndex((s)=>s.item==='mayo') // Find the index of the first element that satisfies the provided testing function
console.log("findIndex():", mayo) //answer: 2

//sort()
let naam =['danny','suzan','anna','felix']
console.log("naam:", naam) //naam: ['danny','suzan','anna','felix']
let naamSort= naam.sort(); // Sorts the elements of an array in place and returns the sorted array
console.log("sort():", naamSort) // answer : ['anna', 'danny', 'felix', 'suzan']

let nu=[1,8,5,7,3]
console.log("nu:", nu) // nu:[1,8,5,7,3]
nuSort=nu.sort() // Sorts the elements of an array in place and returns the sorted array
console.log("sort():", nuSort) //this is for single digit number answer:[1,3,5,7,8]

let nu1=[1,28,15,7,3,68]
console.log("nu1:", nu1) // nu1=[1,28,15,7,3,68]
nuSort1=nu1.sort((a,b)=>a-b) // Sorts the elements of an array in place and returns the sorted array
console.log("sort() ascending:", nuSort1) //this is for number of more that one digit(general one) answer: [1,3,7,15,28,68]
