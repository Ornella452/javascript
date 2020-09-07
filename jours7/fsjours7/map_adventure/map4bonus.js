var arr = [1,2,3,4]
var arr2 = arr.map(function isEven(elem){

    if (elem % 2 == 0){
        return true;
    }else{
        return false;
    }

})

console.log(arr2);// pour récuperer les nombres pair du tableau