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
