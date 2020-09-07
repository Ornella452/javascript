var prompt = require('prompt');

var properties = [
  {
    name: 'username',
    validator: /^[a-z0-9-]+$/gi,
    warning: 'error',
  },
  {
    name: 'password', ///replace ********
    validator : /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z\s\-\,\.]{6,}$/,
    hidden: true,
    warning: 'error',
    replace: "*",



    /* /^
 (?=.*\d)          // should contain at least one digit
 (?=.*[a-z])       // should contain at least one lower case
 (?=.*[A-Z])       // should contain at least one upper case
 [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
$/*/


  },
  {
    name: 'Email',
    //validator: /^[a-z0-9-]+$/gi,
    // hidden: true
  }
];


prompt.start();

prompt.get(properties, function (err, result) {




  if(err){
    return this.value("erreur");

  }else{
    console.log("ok");
  }

 /* if (err) { return onErr(err); }
  console.log('  name: ' + result.username);
  console.log('  password: ' + result.password);
  console.log('  Email: ' + result.Email);*/


});


/*
function onErr(err) {
  console.log(err);
  return 1;
};*/