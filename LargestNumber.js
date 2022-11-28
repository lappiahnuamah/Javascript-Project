// // FOR THE LARGEST ELEMENT

// const Numbers = [10, 12, 13, 14, 7, 8];

// function largestElements(Numbers) {
// 	var largest = Numbers[0];
// 	for (let i=0; i < Numbers.length; i++) {
// 		var elements = Numbers [i];
// 		if (elements > largest ) {
// 			largest = elements;
// 		}
// 	}
//        return largest;
// }

// console.log(largestElements(Numbers))



// //Finding the Second Smallest Number
// // var elements = [ 12, 1 , 3, 4, 65, 8, 45, 2 ];

// function secondSmallest(elements){
//     var nCompare = 0;
//     var smallest = elements[0], smaller = elements[0];
//     for(var i = 1; i < elements.length; ++i) {
//         ++nCompare;
//         if(elements[i] < smaller) {
//             ++nCompare;
//             if(elements[i] < smallest) {
//                 smaller = smallest;
//                 smallest = elements[i];
//             }
//             else
//                 smaller = elements[i];
//         }
//     }
//     return smaller;
// }

// console.log(secondSmallest(Numbers))




// //The Smallest Number
// // const Numb = [10, 12, 13, 14, 7, 8]
// function smallestElements(Numbers) {
//         var smallest = Numbers[0];
//     	for (let i=0; i < Numbers.length; i++) {
//                 var elements = Numbers [i];
// 		if (elements < smallest ) {
//             smallest = elements;
// 		}
// 	}
//     return smallest;
// }

// console.log(smallestElements(Numbers))




// //Finding the Third Smallest Number
// // var elements = [ 12, 1 , 3, 4, 65, 8, 45];

// function thirdSmallest(elements){
//     var smallest = elements[0], secondsmall= elements[0], thirdsmall= elements[0];
//     for(var i = 1; i < elements.length; ++i) {
//         if(elements[i] < smallest){
//             thirdsmall = secondsmall;
//             secondsmall = smallest;
//             smallest = elements[i];
//         }else if (elements[i] < secondsmall){
//             thirdsmall = secondsmall;
//             secondsmall = elements[i];
//         }else if (elements[i] < thirdsmall) {
//             thirdsmall = elements[i]
//         }
//     }
//     return thirdsmall;
// }

// console.log(thirdSmallest(Numbers))





// //Finding the Third Largest Number
// // var elem = [ 12, 1 , 3, 4, 65, 8, 45];

// function thirdLargest(elements){
//     var largest = elements[0], secondslargest= elements[0], thirdlargest= elements[0];
//     for(var i = 1; i < elements.length; ++i) {
//         if(elements[i] >  largest){
//             thirdlargest = secondslargest;
//             secondslargest = largest;
//             largest = elements[i];
//         }else if (elements[i] > secondslargest){
//             thirdlargest = secondslargest;
//             secondslargest = elements[i];
//         }else if (elements[i] > thirdlargest) {
//             thirdlargest = elements[i]
//         }
//     }
//     return thirdlargest
// }

// console.log(thirdLargest(Numbers))


// //Finding the Second Largest Number
// // var elements = [ 12, 1 , 3, 4, 65, 8, 45, 2 ];

// function secondLargest(elements){
//     var nCompare = 0;
//     var largest = elements[0], secondlargest = elements[0];
//     for(var i = 1; i < elements.length; ++i) {
//         ++nCompare;
//         if(elements[i] > secondlargest) {
//             ++nCompare;
//             if(elements[i] > largest) {
//                 secondlargest = largest;
//                 largest = elements[i];
//             }
//             else
//                 secondlargest = elements[i];
//         }
//     }
//     return secondlargest;
// }

// console.log(secondLargest(Numbers))


// // NOTE IF THE PERSON WANTS TO USE THE SAME ARRAY TO RUN ALL THE FUNCTIONS THEN, I HAVE COMMENTTED ALL THE 
// // REST OF THE ARRAYS AND I AM USING ONLY THE `Numbers`




// // Javascript program to find the K’th
//     // Smallest/Largest Element in Unsorted Array
//     function count(nums, mid)
//     {
//     // function to calculate number of elements less than equal to mid
//             var cnt = 0;
              
//             for(var i = 0; i < nums.length; i++)
//                if(nums[i] <= mid)
//                   cnt++;
              
//             return cnt;
//     }
     
//     function  kthSmallest(nums,k){
//         var low = Number. MAX_VALUE;
//         var high = Number. MIN_VALUE;
//         // calculate minimum and maximum the array.
//         for(var i = 0; i < nums.length; i++)
//         {
//             low = Math.min(low, nums[i]);
//             high = Math.max(high, nums[i]);
//         }
//         // Our answer range lies between minimum and
//         // maximum element of the array on which Binary Search is Applied
//         while(low < high)
//         {
//             var mid = Math.floor(low + ((high - low) / 2));
//            /*if the count of number of elements in the array
//            less than equal to mid is less than k
//              then increase the number. Otherwise
//              decrement the number and try to find a better answer.
//            */
//             if(count(nums, mid) < k)
//                low = mid + 1;
                 
//             else
//                 high = mid;
//         }
          
//         return low;
//     }
     
//     var k = 3;
//     var nums = [1, 4, 5, 3, 19, 0];
//     console.log("K'th smallest element is " + kthSmallest(nums, k));



// var complete = [x,rest];
// console.log(complete);
// console.log(x);
// console.log(rest);



let complete = [20,40, 60, 180, 550];
var [x, ...rest] = complete;

const arr = [x];
for (let i = 0; i<rest.length; i++){
    let total = x + rest[i];
    arr.push(total);
    console.log(total)
}
console.log(arr)


function areEqual(array1, array2) {
  if (array1.length === array2.length) {
    return array1.some(element => {
      if (array2.includes(element)) {
        return true;
      }

      return false;
    });
  }

  return false;
}

console.log(areEqual(complete, arr)); // 👉️ true

