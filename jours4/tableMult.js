

function tableMult(num){

    var num = process.argv[2];

if (num > 0) {


    for ( var i = 1 ; i <= 10; i++) {
     
        result = num * i;
        console.log(num + " * " + i + " = " + result);
    
        }

}else {

    console.log("error");
}



}tableMult();

/* resultat attendu

1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30

*/