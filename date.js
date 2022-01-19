module.exports.getDate = getDate;

function getDate(){
    
    var today  = new Date();
    
    var options = {  
        day:"numeric",
        month:"long",
        year:"numeric" };
       
       var currentday = today.toLocaleDateString("en-US", options);

       return currentday;
}
module.exports.getDay = getDay;
function getDay(){
    
    var today  = new Date();
    
    var options = {  
       weekday:"long"
    };
       
       var currentday = today.toLocaleDateString("en-US", options);

       return currentday;
}

console.log(module);