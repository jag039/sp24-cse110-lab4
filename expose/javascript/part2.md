1. Line 12 will print i. i represented the iterations of the four loop which run exactly the same number of times as the size of the prices array.
2. Line 13 will print 150. This is because line 13 prints the discounted price of the last price in the prices array, this is because the discountedPrice will save that value as it will be the last iteration of the for loop. 
3. Line 14 will print 150. This is because finalPrice will save the information assigned to it in the last iteration of the for loop of the last item in prices. So the last item of prices is 300. First discounted price is calcualted which is 150, and then finalPrice attempts to round off discountedPrice, however it is allready rounded so finalPrice is assigned to 150.
4. The function will return discounted which will be an array equal to [50,100,150]. This is because the function goes through the prices array 1 item at a time and calcualtes what the price would be after applying the discount. Once the new price of the item is found it pushes it into a new array called discounted. So by the end of function discounted will contain all items of prices after the discount has been applied. 
5. Line 12 will cause an error. This is because the variable i was intialized using let, meaning i only has block scope within the for block. So when line 12 tries to print i, it does not have access to it causing an error. 
6. Line 13 will cause an error. This is because the variable discountedPrice was intialized using let, meaning discountedPrice has block scope within the for loop block. So when line 13 tries to print discountedPrice, it does not have access to it causing an error.
7. Line 14 will print 150. This is because the finalPrice variable was intialized using let meaning it is only accessisble within the block it was intialized. So because the for loop is within the block that finalPrice was intialized, actions taken wihtin the forloop are allowed to modify the finalPrice variable. And then finalPrice is equal to 150 because the same reasons listed in question 3.
8. The function will return [50,100,150]. This is because discounted is intialized using the let variable. This means it can only be accessed and modofied wihtin the block that it is intialized, and the for loop is wihtin that block so it sucessfully calcualtes the finalPrice of each item in prices and adds it to discounted. This allows discounted to be successfully retunred containing all the correct information. 
9. Line 11 will cause an error. This is because the variable i was intialized using let, meaning i only has block scope within the for block. So when line 12 tries to print i, it does not have access to it causing an error. 
10. Line 12 will print 3. This is because the length variable is intialized as a const meaning it cannot be modified, and it assigned to prices.length which is equal to 3 because there is 3 numbers in prices.
11. The function will return [50,100,150]. This is because even though discounted is be intialized as a const, because it is an array the elements wihtin the array can still be modified but discounted itself cannot be reasigned to a new array. This allows the for loop to calculate the correct discountedPrice of each element and push it to the discounted array. Also removing the finalPrice rounder does not change anything becuase the elemnts in prices are divisible by the discount.
12.  
     1. student.name
     2. student["Grad Year"]
     3. student.greeting()
     4. student["Favorite Teacher"].name
     5. student.courseLoad[0]
13.
     1. '3'+2 outputs 32 because it is treated as a string concatentation where '3' is a string and 2 is concatenated onto it
     2. '3'-2 outputs 1 because it is treated as an arithmetic operation due to the subration sign, so '3' is mapped to its intger value which is excalty the same as its string represntation making 3-2=1.
     3. 3 + null outputs 3 because it is treated as an arithmetic adition, and null is converted to a 0.
     4. '3' + null outputs 3null because it is treated as a string concatenation where '3' is a string and null is converted to a string 'null' to be concatenated
     5. true + 3 outputs 4 because it is treated a numeric addition where true represents a 1. so 1 + 3 = 4.
     6. false + null outputs 0 because it is treated as a numeric additoin where false represents 0 and null represents 0. So 0 + 0 = 0
     7. '3' + undefined is treated as a string concatenation where '3' is a string and undefined is converted to a string 'undefined' to be concatenated
     8. '3' - undefined outputs NaN. This is because it is treated as a numeric subtration and because you cannot subtract undefined from a number it outputs NaN or Not A Number.
14. 
    1. '2' > 1 outputs ture because one element in the comparison is a number so this causes the string '2' to be converted to a number. so 2>1 outputs true
    2. '2' < '12' outputs false because both elements are strings so a lexigraohic comparison is done, and because the first character 2 is greater then 1 it outputs false.
    3. 2 == '2' outputs true because one element in the comparison is a number so this causes the string to be converted to a number as well where 2==2 is true so true is outputed
    4. 2 === '2' outputs false because === is a strict equality operator which takes types into consideration. So a string and a number are not equal so false is outputted
    5. true == 2 outputs false because true is converted to a number for comaprison and 1==2 is false so false is outputted
    6. true === Boolean(2) outputs true. This is because the Boolean() function returns true for all non zero inputs, and true equals true so true is outputted
 15. the == operator jsut compares to elements but does automatic type conversions to make the comparison work best possible. The === operator is a string comparator which compares type as well as what is being compared and does not do automatic type conversions.
 16. See part2-question16.js
 17. So it looks like when you pass a callback function into the modifyArray array function, the modifyArray function can use the call back function within. So modify array first iterates through the elements of array ([1,2,3]), and for each element of that array passes to the callback function which is doSomething. This fuction takes that number and multiplies it by 2 and returns that value. so the first number in array is 1, it is passed into doSomething, 2 is returned and pushed to the newArr function. then the for loop iterates to the next value of array which is 2, passes it into doSomething which returns 4, and pushes that into newArr. Finally the for loop iterates to the last value 6, passes that into doSomething, returns 6, and pushes 6 into newArr. So the result of modifyArray([1,2,3], doSomething) returns [2,4,6].
 18. see part2-question18.js
 19. when we call printNums(), firs console.log(1) prints 1 immeditely. Then setTimeout(function () {console.log(2);},1000); schedules the function "console.log(2)" to run after 1000 milliseconds or 1 second, so 2 will be printed last. Then setTimeout(function () {console.log(3);},0); schedules 3 to be printed after 0 milliseconds, however the next line console.log(4) is instaneous and prints 4 before 3 is printed. This is because the setTimeout still schedules the console.log(3) after the rest of the JS script. So it prints 1 4 3 2.

