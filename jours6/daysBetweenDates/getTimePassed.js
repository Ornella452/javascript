
module.exports = {

    getTimePassed : function(date1, date2) {


        var date1 = String(process.argv[2]);
        var date2 = String(process.argv[3]);
       
        var startTime = new Date(date1);
        var endTime = new Date(date2);
        var timeDiff = endTime.getTime() - startTime.getTime();


        var minDiff = timeDiff / 60 / 1000; //in minutes
        var hDiff = timeDiff / 3600 / 1000; //in hours
        
        var hours = Math.floor(hDiff);
        var minutes = minDiff - 60 * hours;
        
        
        timeDiff /= 1000;
        var jours = Math.floor(timeDiff / 86400);



        return "Days passed: " + jours + " and  minutes passed : " + minutes;

    }



};
/*


node index.js "December 27, 1987 11:20:00" "December 28, 1987 11:20:00"
devrait retourner

Days passed: 1, minutes passed: 0

*/ 
