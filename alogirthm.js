// bubble sort  alogirthm

var arr = [1,3,2] // collection of data(array)
// declare the variables to make global
// bubble sort compare two variables

// what is bubble sort.
//bubble sort, an alogirthm that walks a collection of data and compare neighbors pairs and swap values if the neighbor on the right is greater than the neighbor on the left.


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
  var i, j, lim;
  lim = arr.length;
  while(lim -- ) {
      for(i=0, j=1; i < lim; i++, j++){
  if (arr[i] > arr [j]){
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      }
      }
  }return arr;
}


console.log(bubblesort(arr))
