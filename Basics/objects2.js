// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Butukuri",
            lastname: "Peri Reddy"
        }
    }
}

//we can form heirarchy like this an object inside an object which is inside another object
// and ..

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj5 = { obj1, obj2 }
//The shorthand syntax { obj1, obj2 } is equivalent to writing { obj1: obj1, obj2: obj2 }.
 
console.log(obj5)
const obj6 = Object.assign({}, obj1, obj2, obj4)

console.log(obj6);

const obj3 = {...obj1, ...obj2}
console.log(obj3);//to create new object with keys and values pairs from other objects
//both above methods does the same

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

 console.log(Object.keys(tinderUser)); // to get keys as an array
 console.log(Object.values(tinderUser)); // to get values as an array
 console.log(Object.entries(tinderUser)); // each key value pair as an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether an object
//contains a property or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// object de-structuring instead of using course.courseInstructor we can change it using 
//above 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
