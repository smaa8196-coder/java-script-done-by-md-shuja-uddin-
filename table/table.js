// let t=document.body.firstElementChild.firstElementChild;

// console.log(t);
// console.log(t.rows);
// console.log(t.tHead);
// console.log(t.tFooter);
// console.log(t.tBodies);
// console.log(t.rows[0].rowsIndex);

24/07/2026

// let java=document.getElementById("igrtdt");
// java.style.background="lightgrey";

//     //   matches

// let java=document.getElementById("para");

// console.log(para.matches("#para"));


        //    closest

// let java=document.getElementById("para");
// console.log(para.closest("#para"));

           //INSERTION

// let a=document.getElementbyTagName('body')[0]

// // a.innerHTML=a.innerHTML+'<h1>hello world</h1>';

//                //method 2

// body.innerHTML='<h1 >hello world!</h1>';

// a.appendChild(body);

       //INSERT ADJACENT HTML/TEXT/ELEMENT

// first.insertAdjacentHTML('beforebegin','<p class="para">hi i am beforebegin</p>');
// first.insertAdjacentHTML('beforeend','<p class="para">hi i am beforeend</p>');
// first.insertAdjacentHTML('afterbegin','<p class="para">hi i am afterbegin</p>');
// first.insertAdjacentHTML('afterend','<p class="para">hi i am afterend</p>');
// //first.remove()


     //CLASS NAME AND CLASS LIST

// first.class="text-black red";
// first.className="text-black red";
// first.classList
// first.classList.remove("red");
// first.classList.append("red");
// first.classList.add("red");
// first.classList.toggle("red");
// first.classList.contains("red"); 


          //SET TIMEOUT 


// alert("hello");
// let a=setTimeOut(function(){
//         alert(" I am insideo of settime")
// },5000);
// console.(a);


// const sum=(a,b)=>{
//         console.log("yes i am running")
//         a+b
// }

// setTimeout(sum,1000,1,2);

// //       TIME INTERVAL

// set interval(function(){
//         alert("set interval")
// },3000);


// set time out

// setTimeout(function(){
//         console.log("hillo I am console");
// },5000);

// setTimeout(function(){
//         alert("Hillo I am alert!");
// },10000);


    //SET TIME OUT

//1.Print "Hello" after 2 seconds.

// setTimeout(function(){
//         alert("Hello");
// },2000);


//2.Show an alert "Good Morning" after 4 seconds.

// setTimeout(function(){
//         alert("Good Morning");
// },4000);

//3.Change the text "Please Wait..." to "Done!" after 5 seconds.

// setTimeout(function(){
//         document.getElementById("first").innerHTML="done";
// },5000)

// 4. Welcome Message
// Change "Welcome" to "Hello, User!" after 3 seconds.

// setTimeout(function(){
//         document.getElementById("well").innerHTML="Hello,User!";
// },3000);

// 5. Background Color
// Change the page background from white to light blue after 5 seconds.

// setTimeout(function(){
//         document.body.style.backgroundColor="lightblue";
// },5000);

// 6. Text Color
// Change the heading color from black to green after 2 seconds.

// setTimeout(function(){
//         document.getElementById("well").style.color="green";
// },2000);

// 7. Font Size
// Increase the heading font size after 3 seconds.

// setTimeout(function(){
//         document.getElementById("well").style.fontSize="50px"
// },3000);


// 8. Hide a Paragraph
// Hide a paragraph after 5 seconds.

// setTimeout(function(){
//         document.getElementById("paragraph").style.display="none";
// },5000);

// 9. Show a Hidden Message
// Keep a message hidden at first, then show it after 4 seconds.

// setTimeout(function(){
//         document.getElementById("message").style.display="block"
// },4000);

// 10. Change an Image
// Display image1.jpg, then change it to image2.jpg after 3 seconds.

// setTimeout(function(){
//        document.getElementById("image1").src=("images (2).jpg");
// },3000);

// 11. Disable a Button
// Disable a button after 5 seconds.

// setTimeout(function(){
//         document.getElementById("butto").style.display=("none");
// },5000);

// 12. Enable a Button
// Keep a button disabled initially, then enable it after 4 seconds.

// setTimeout(function(){
//         document.getElementById("button23").style.display="block";
// },4000);

// 13. Countdown Start
// Show "Starting in...", then after 3 seconds, change it to "Go!"

// setTimeout(function(){
//         document.getElementById("parfy").innerHTML="Go!"
// },3000);

// 14. Thank You Message
// After clicking a button, display "Thank You!" after 2 seconds.

// function changeText(){
//     setTimeout(function(){
//         document.getElementById("butto").innerHTML="Thank You!";
//    },2000);
// }

// 15. Change Multiple Texts
// After 5 seconds, change both a heading and a paragraph.

// setTimeout(function(){
//         document.getElementById("parfy").innerHTML="hillo";
//         document.getElementById("first").innerHTML="done";
//         document.getElementById("well").innerHTML="Hello,User!";
//         document.getElementById("message").innerHTML="Thank You!";
// },5000);


// 18. Form Submitted
// After clicking Submit, change the text to "Form Submitted Successfully!" after 3 seconds.

// function changeText(){
// setTimeout(function(){
//         document.getElementById("submit").innerHTML="Form Submitted Successfully!";
// },3000);
// }


// 19. Auto Close Message
// Display "Saved Successfully!", then hide it after 5 seconds.

// setTimeout(function(){
//         document.getElementById("paraere").style.display="block";
// },1000);

// setTimeout(function(){
//         document.getElementById("paraere").style.display="none";
// },5000);


// 20. Traffic Light

// Show:

// 🔴 Red
// After 3 seconds → 🟡 Yellow
// After another 3 seconds → 🟢 Green


//   setTimeout(function(){
//         document.getElementById("red").style.display="none";
// } ,3000);
// setTimeout(function(){
//         document.getElementById("yellow").style.display="block";
// } ,3000);
// setTimeout(function(){
//         document.getElementById("yellow").style.display="none";
// } ,6000);

// setTimeout(function(){
//         document.getElementById("green").style.display="block";
// } ,6000);




        //       setinterval

// let number=1;

// setInterval(function(){
//         document.getElementById("reytd").innerHTML=number;
//         number++;
// },1000);

// 1. Digital Clock
// Display the current time and update it every second.

// setInterval(function(){
//         let time=new Date();
//         let hours =time.getHours();
//         let minutes=time.getMinutes();
//         let seconds=time.getSeconds();

//         document.getElementById("clock").innerHTML=
//         hours+":"+minutes+":"+seconds;
// },1000);


// 3. Reverse Counter
// Start from 10 and count down to 0 every second.

// let number=10;
// setInterval(function(){
//         document.getElementById("reytd").innerHTML=number
//         number--;
// },1000);



// 5. Background Color Changer
// Change the page background color every 2 seconds.

// setInterval(function(){
//         document.body.style.backgroundColor="yellow";
// },2000);
// setInterval(function(){
//         document.body.style.backgroundColor="red";
// },4000);setInterval(function(){
//         document.body.style.backgroundColor="green";
// },6000);

// 6. Heading Color Changer
// Change the heading color every second.

// setInterval(function(){
//         document.getElementById("heading").style.color="red";
// },1000);

// setInterval(function(){
//         document.getElementById("heading").style.color="yellow";
// },2000);
// setInterval(function(){
//         document.getElementById("heading").style.color="blue";
// },3000);
// setInterval(function(){
//         document.getElementById("heading").style.color="green";
// },4000);
// setInterval(function(){
//         document.getElementById("heading").style.color="grey";
// },5000);


// 7. Image Slideshow
// Automatically change images every 3 seconds.

// let image=[
//         "images (2).jpg",
//         "images (3).jpg",
//         "images (4).jpg"
// ];

// let index=0;

// setInterval(function(){
//         document.getElementById("sider").src=image[index];
//         index++;
//         if(index=== image.length){
//                 index=0;
//         }
// },3000);

// 9. Loading Animation

// Display:

// Loading.
// Loading..
// Loading...
// Loading....

// Repeat continuously.
//  let i =.;

// setInterval(function(){
//         document.getElementById("loading").innerHTML=i;

//         if(i=1;i<=10;i++);
// },1000);


 //promise

// 1. Simple Promise
// Create a Promise that resolves after 3 seconds with the message:
// "Hello World"

// let hillo= new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Hello World");
//         },3000);
// });

// hillo.then(function(result){
//         console.log(result);
// })



// 2. Loading Message
// // Show "Loading..." and after 2 seconds resolve with "Data Loaded".

// let load=new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Data Loaded");
//         },2000);
// });

// load.then(function(result){
//         document.getElementById("load").innerHTML=result;
// })



// 3. Login Simulation
// Create a Promise that waits 3 seconds and then resolves with:
// "Login Successful"


// let login = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Login Successful");
//         },3000);
// })

// login.then(function(result){
//         console.log(result);
// })

// 4. Payment Simulation

// Wait 5 seconds and resolve with:
// "Payment Successful"

// let pay = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Payment Succefull");
//         },5000);
// });

// pay.then(function(result){
//         console.log(result);
// })

// 5. Download Simulation

// Show "Downloading..." and after 4 seconds resolve with:
// "Download Complete"

// let down = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Download Complete");
//         },4000);
// })

// down.then(function(hillo){
//         document.getElementById("downn").innerHTML=hillo;
// // })

// 6. OTP Verification

// Resolve after 3 seconds with:
// "OTP Verified"

// let reso = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("OTP Verified");
//         },3000);
// })

// reso.then(function(resc){
//         console.log(resc);
// })



// 7. User Registration
// Resolve after 2 seconds with:
// "Registration Successful"


// let reso = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Registration Successful");
//         },2000);
// })

// reso.then(function(resc){
//         console.log(resc);
// })


// 11. Promise with User Input
// Ask the user for a name and resolve with:
// "Welcome, Name"

// let name=prompt("Enter your name")
// let mane = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve(name);
//         },2000);
// })

// mane.then(function(result){
//         console.log(result);
// })


// 12. Even or Odd
// Resolve if the number is even.
// Reject if the number is odd.

// let num = Number(prompt("Enter a number"));
// let numbe = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(num %2===0){
//                         resolve("Even");
//                 }else{
//                         reject("odd");
//                 }
//         },3000);
// })

// numbe.then(function(result){
//         console.log(result);
// })

// numbe.catch(function(error){
//         console.log(error);
// })



// 13. Age Checker
// Resolve if age is 18 or above.
// Reject if under 18.

// let age = Number(prompt("Enter your age"));
// let agge = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(age<18){
//                         reject("Age Is Invalid");

//                 }else{
//                         resolve("You Can Vote");
//                 }
//         },3000);
// })

// agge.then(function(result){
//         console.log(result);
// })

// agge.catch(function(error){
//         console.log(error)
// })



// 14. Password Checker
// Resolve if the password is correct.
// Reject if it is incorrect.


// let password = prompt("Enter Your Password");
// let passs = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(password === "shujauddin"){
//                         resolve("Password Is Correct");
//                 }else{
//                         reject("Password Is Wrong")
//                 }
//         },3000);
// })

// passs.then(function(result){
//         console.log(result);
// })

// passs.catch(function(error){
//         console.log(error);
// })




// 15. Marks Checker
// Resolve if marks are 35 or above.
// Reject if below 35.

// let marks = prompt("Enter Your Marks");
// let mas = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(marks<35){
//                         reject("FAIL")
//                 }else{
//                         resolve("PASS");
//                 }
//         },2500);
// })

// mas.then(function(result){
//         console.log(result);
// })

// mas.catch(function(error){
//         console.log(error);
// })


// 16. ATM Withdrawal
// Resolve if balance is sufficient.
// Reject if there are insufficient funds.


// console.log("Balance In Your Account Are Rs 2000");

// let balance = Number(prompt("Enter Your Amount"));
// let bal = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(balance>2000){
//                         reject("insufficient funds")
//                 }else{
//                         resolve("balance is sufficien")
//                 }
//         },3500);
// })

// bal.then(function(result){
//         console.log(result);
// })

// bal.catch(function(error){
//         console.log(error)
// })


// 18. Dice Game
// Generate a random number from 1 to 6.
// Resolve if it is 6.
// Reject otherwise.



// let pare = Number(prompt("Enter a Number"))
// let ran = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(pare<6){
//                         reject("Reject");
//                 }else{
//                         resolve("accepted");
//                 }
//         },3000);
// })

// ran.then(function(result){
//         console.log(result)
// })

// ran.catch(function(error){
//         console.log(error);
// })


// 19. Coin Toss
// Resolve for Heads.
// Reject for Tails.

// let pare = prompt("Enter Head or Tails");
// let ran = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                   let coin = Math.random() < 0.5 ? "Heads" : "Tails";

//                 if(pare=== "Tails"){
//                         reject("Tails");
//                 }else{
//                         resolve("Head");
//                 }
//         },3000);
// })

// ran.then(function(result){
//         console.log(result)
// })

// ran.catch(function(error){
//         console.log(error);
// })


// 17. Internet Connection
// Randomly resolve:
// "Connected"
// or reject:
// "No Internet"


// let int = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 let inter = Math.random() <0.5 ? "Connected" : "No Internet";
                
//                 if(int === "Connected"){
//                         resolve("Connected");
//                 }else{
//                         reject("No Internet")
//                 }
//         },2000);
// })

// int.then(function(result){
//         console.log(result);
// })
// int.catch(function(result2){
//         console.log(result2);
// })


//24. Restaurant Food Order

// let ord = prompt("place your order")
// let order = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 if(ord === "pizza"|| ord === "cake"){
//                         resolve("you can place order of pizza or cake");
//                 }else{
//                         reject("sorry we didn have that food item");
//                 }
//         },2000);
// })

// order.then(function(result){
//         console.log(result);
// })
// order.catch(function(error){
//         console.log(error);
// })




      //06-08-2026 //JavaScript Promise Chaining Projects

// 1. Student Admission Process
// Step 1: Fill Form
// Step 2: Verify Documents
// Step 3: Admission Confirmed


// alert(" Student Admission Process")
// let student = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Step 1: Fill Form")
//         },3000);
// });

// student
// .then(function(result1){
//         console.log(result1);
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("Step 2: Verify Documents")
//                 },2000);
//         });
// })
// .then(function(result2){
//         console.log(result2);
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("Step 3: Admission Confirmed")
//                 },2000);
//         });
// })
// .then(function(result3){
//         console.log(result3);
// });


// // 2. Food Order
// // Order Received
// // Food Preparing
// // Food Ready
// // Delivered

// let food = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Order Received");
//         },3000);
// })
// food
// .then(function(result){
//         console.log(result);
//         return new Promise(function(resolve,reject){
//                 setTimeout(function(){
//                         resolve("Food Preparing")
//                 },3000);
//         })
// })
// .then(function(result1){
//         console.log(result1);
//         return new Promise(function(resolve,reject){
//                 setTimeout(function(){
//                         resolve("Food Ready");
//                 },2500);
//         })
// })
// .then(function(result2){
//         console.log(result2);
//         return new Promise(function(resolve,reject){
//                 setTimeout(function(){
//                         resolve("Delivered");
//                 },3000);
//         })
// })
// .then(function(result23){
//         console.log(result23);
// })


// 3. Online Shopping
// Product Selected
// Payment Successful
// Order Packed
// Order Shipped
// Delivered

// let online = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Product Selected");
//         },3000);
// })
// online
// .then(function(res){
//         console.log(res);
//         return new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Payment Successful");
//         },3000);
//    })
// })
// .then(function(ress){
//         console.log(ress);
//         return new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Order Packed");
//         },3000);
//    })
// })
// .then(function(rese){
//         console.log(rese);
//         return new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Order Shipped");
//         },3000);
//    })
// })
// .then(function(resg){
//         console.log(resg);
//         return new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Delivered");
//         },3000);
//    })
// })
// .then(function(rest){
//         console.log(rest);
// })

                 //Promise.all

// 1. Student Results

// Fetch marks for:

// Math
// Science
// English


// Display all results after every Promise finishes.


// let marks1 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 reject("Math");
//         },3000);
// })
// let marks2 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 reject("Science");
//         },3000);
// })
// let marks3 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 reject("English");
//         },3000);
// })
// Promise.all([marks1,marks2,marks3])
// .catch(function(error){
//         console.log(error);
// })



// 2. Download Three Files

// Download:

// File 1
// File 2
// File 3

// Show "All Files Downloaded" only when all downloads are complete.

// let file1 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("file1");
//         },3000);
// })
// let file2 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("file2");
//         },6000);
// })
// let file3 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("file3");
//         },10000);
// })

// Promise.all([file1,file2,file3])

// .then(function(result){
//         console.log(result);
//         document.getElementById("downn").innerHTML=
//         result[0]
//         result[1]
//         result[2];
// })


// 3. Image Loader

// Load:

// Image 1
// Image 2
// Image 3

// Display "All Images Loaded" after all are loaded.

// let image1=new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("images (2).jpg")
//         },3400);
// })
// let image2=new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("images (3).jpg")
//         },4000);
// })
// let image3=new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("images (4).jpg")
//         },5000);
// })
// Promise.all([image1,image2,image3])
// .then(function(result){
//         document.getElementById("img1").src=result[0];
//         document.getElementById("img2").src=result[1];
//         document.getElementById("img3").src=result[2];

//         console.log(result);
// })




//Promise.race()

// Car Racing Game

// let car1 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("car1");
//         },3000);
// })
// let car2 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("car2");
//         },5000);
// })
// let car3 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve("car3");
//         },10000);
// })

// Promise.race([car1,car2,car3])

// .then(function(result){
//         console.log(result);
// })


//🏃 Running Competition

// let runner1 = new Promise (function(resolve,reject){
//         setTimeout(function(){
//                 resolve("runner1")
//         },3000);
// })
// let runner2 = new Promise (function(resolve,reject){
//         setTimeout(function(){
//                 resolve("runner2")
//         },6000);
// })
// let runner3 = new Promise (function(resolve,reject){
//         setTimeout(function(){
//                 resolve("runner3")
//         },9000);
// })

// Promise.race([runner1,runner2,runner3])

// .then(function(result){
//         console.log(result);
// })


         //async / await


// function loadData(){
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("loadedData")
//                 },3000);
//         })
// }
// async function start(){
//         console.log("loading....");
//         let result = await loadData();
//         console.log(result);
// }
// start();


// Login System

// Check login
// Wait 2 seconds
// Show "Login Successful"

// function system(){
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("Login Successfu");
//                 },2000);
//         })
// }
// async function ssyten (){
//         console.log("Check login");
//         let result = await system();
//         console.log(result);
// }
// ssyten();

// Food Order

// Order Received
// Food Preparing
// Food Ready
// Delivered

// function st1(){
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("Order Received")
//                 },3000);
//         })
// }
// function st2(){
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve(" Food Preparing")
//                 },4000);
//         })
// }
// function st3(){
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("Food Ready")
//                 },5000);
//         })
// }
// function st4(){
//         return new Promise(function(resolve){
//                 setTimeout(function(){
//                         resolve("Delivered")
//                 },6000);
//         })
// }
// async function staa(){
//         let sta1 = await st1()
//          console.log(sta1)

//         let sta2 = await st2()
//         console.log(sta2)

//          let sta3 = await st3()
//                 console.log(sta3)

//         let sta4 = await st4()
//          console.log(sta4)
// }
// staa();

// OTP Verification

// Sending OTP...
// OTP Sent
// OTP Verified

// function otp1(){
//         return new Promise(function(resolve){
//         setTimeout(function(){
//         resolve("Sending OTP...");
//         },3000);
//     })     
// }
// function otp2(){
//         return new Promise(function(resolve){
//         setTimeout(function(){
//         resolve("OTP Sent");
//         },6000);
//     })     
// }
// function otp3(){
//         return new Promise(function(resolve){
//         setTimeout(function(){
//         resolve("OTP Verified");
//         },9000);
//     })     
// }

// async function oit(){
//         let step1 = await otp1();
//         document.getElementById("1").innerHTML=(step1)
//         let step2 = await otp2();
//         document.getElementById("2").innerHTML=(step2)
//         let step3 = await otp3();
//         document.getElementById("3").innerHTML=(step3)
// }
// oit();

    //ATTACHMENT OF MULTIPLE HANDELERS TO PROMISE
          //Student Result

// let shanza = new Promise (function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Your are PASS")
//         },3000);
// })
// shanza.then(function(result){
//         document.getElementById("1").innerHTML="shanza :"+result;
// })
// shanza.then(function(result){
//         document.getElementById("2").innerHTML="salala :"+result;
// })
// shanza.then(function(result){
//         document.getElementById("3").innerHTML="barkas :"+result;
// })


//      //Login System

// let system = new Promise (function(resolve,reject){
//         setTimeout(function(){
//                 resolve("Login System")
//         },10000);
// })
// system.then(function(result){
//         document.getElementById("1").innerHTML="Mobile:"+result;
// })
// system.then(function(result){
//         document.getElementById("2").innerHTML="Computer:"+result;
// })
// system.then(function(result){
//         document.getElementById("3").innerHTML="TV:"+result;
// })
// system.then(function(result){
//         document.getElementById("4").innerHTML="PC:"+result;
// })



     //try

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));

// try {

//     if (num2 === 0) {
//         throw "❌ Cannot divide by zero";
//     }

//     let result = num1 / num2;

//     console.log("Result:", result);

// }
// catch (error) {

//     console.log(error);

// }

// Login System ⭐

// Enter username and password.
// Wrong username/password → show error.
// Correct details → "Login Successful".

// let password=prompt("Enter your password");
// try{
//         if(password==="shuja uddin"){
//                 console.log("login successfully")
//         }else{
//                 console.log("wrong password");
//         }
// }
// catch(error){
//         console.log(error);
// }

// async function get(){
//         try{
//             let responces =await fetch(
//                  "https://jsonplaceholder.typicode.com/users/1"
//             );
//             let data = await  responces.json(); 
            
//             document.getElementById("result").innerHTML=`
//             <h1>${data.name}</h1>
//             <p>${data.email}</p>
//             <p>${data.phone}</p>
//             <p>${data.website}</p>
//             `;
//         }catch(rst){
//                 document.getElementById("result").innerHTML=`
//                 samething get wrong`;
//                 console.log(rst);

//         }
// }
// document.getElementById("btn").addEventListener("click",get);

let  icon = document.getElementById("icon");

icon.onclick=function(){
        document.body.classList.toggle("darkmood");
        if(document.body.classList.contains("darkmood")){
                icon.src="free-sun-icon-3337-thumb.png";
        }else{
                icon.src="moon-xe6g06624midi64rxge06d.webp";
        }

}