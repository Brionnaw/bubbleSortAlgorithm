// bubble sort  alogirthm

var arr = [1,3,2] // collection of data(array)
// declare the variables to make global
// bubble sort compare two variables

// what is bubble sort.
//bubble sort, an alogirthm   that walks a collection of data and compare neighbors pairs and swap values if the neighbor on the right is greater than the neighbor on the left.
//why do we use bubblesort TO sort data in numerical order: to least greatest to

function bubble sort(arr){  // create a function called bubble sort and pass in the paramaters called 'arr'
  var i, j, lim; // i and j will  ; lim will be equal to lengh of the array

  lim = arr.length; // immediately we know lim eqaul 3

  // next create while loop (like if statement & for loop combined)
  while(lim --) {    //  in javascript 0 = false 1 or more  true  '--' equal decriment (lim will minus 1 )
    for(i=0, j=1; i < lim; i++, j++) {
      if (arr[i] > arr [j]){
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
  } return arr;
}
// bubblesort alogirthm
var arr = [1,3,2]
function bubblesort(arr){
  var i, j, lim; // var i, j represent my neighboor pairs and lim represent the number of times that loop through the function.
  lim = arr.length;
  while(lim -- ) { /// walk the array(while loop will run as long as the statement is true (greater than 1) to loop the length of the colllectcion and stop when the statement is false
      for(i=0, j=1; i < lim; i++, j++){ // compare the neighbor paids for loops has 3 parts. where the loops start, run this loops as long as i is less than lim and then how much to increment by each loop)
  if (arr[i] > arr [j]){ add conditional statements
        temp = arr[i]; , //[1,3,2] - storing [3]  arr[i]
        arr[i] = arr[j] // cloning the neighbor pair [1,2,2]
        arr[j] = temp; //swapping the number from 2-3 [1,2,3]
      }
      }
  }return arr;
}


console.log(bubblesort(arr))
