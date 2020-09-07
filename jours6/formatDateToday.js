
var today = new Date();
 var day = today.getDate() + "";
 var month = (today.getMonth() + 1) + "";
 var year = today.getFullYear() + "";

function formatDateToday(){

day = checkZero(day);
month = checkZero(month);
year = checkZero(year);

console.log(day + "/" + month + "/" + year);

function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}
}

formatDateToday();

// format date authentique jj/mm/aaaa