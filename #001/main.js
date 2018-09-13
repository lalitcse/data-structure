/*

1 :- The reverse() method reverses the order of the elements in an array.

2 :- The join() method joins the elements of an array into a string, and returns the string.

     The elements will be separated by a specified separator. The default separator is comma (,).


*/


function main(){
    var arr = [1, 4, 3, 2];
    var rword = arr.reverse().join(' ');
    console.log(rword);
  }
  main(); 