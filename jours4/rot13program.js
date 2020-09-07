function rot13program(str) {

    var str = process.argv[2];
    var m = " ";

    for (var i = 0; i < str.length; i++) {

        var result = str[i].charCodeAt();


        if ((result >= 65 && result <= 77) || (result >= 97 && result <= 109)){
 
                m  +=  String.fromCharCode(result + 13);

        }else if((result >= 78 && result <= 90) || (result >= 110 && result <= 122)){

            m  +=  String.fromCharCode(result - 13);
            
        }
    } return m;

}console.log(rot13program());
/*
Resulatat attendu 

Input	Output
abc	nop
My horse is Amazing.	Zl ubefr vf Nznmvat.
AkjhZ zLKIJz , 23y	NxwuM mYXVWm , 23l

*/