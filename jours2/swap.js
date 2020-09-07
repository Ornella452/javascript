

var echange;
function swap(first, second) {

    echange = first;//25eeeee
    
    first = second;//30fffffff

    second = echange;//30

   return [first, second];
    
    
}console.log(swap(25, 30));
