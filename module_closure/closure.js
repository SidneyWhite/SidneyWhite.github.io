
// function rudyTimer() {
//     var name = "Rudy!"; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert (name); // displayName() uses variable declared in the parent function    
//     }
//     displayName();    
// }

var rudyTimer = (() =>{
    var msg = "Rudy!";
    function delayMsg2(){
        alert(msg);
    }
    return delayMsg2;
})();

// rudyTimer();

function Account(accountName, deposit){
    this.accountName = accountName;
    this.deposit = parseInt(deposit);
};


function createAccount (){
    AccountModule.createAccount();
};

var AccountModule = (function() {
    // All functions now have direct access to each other
    var accountInfoList = [];

    var createAccount = function(){
        var name = $("#name").val();
        var dep = $("#deposit").val();
        var account = new Account(name, dep);
        
        var txt = "";
        var found = false;
        // check if accnt is found
        accountInfoList.forEach((value, index, array)=>{
            if(array[index].accountName == name){
                found = true;
                array[index].deposit += parseInt(dep);
            }
        });

        if(!found){
            accountInfoList.push(account);
        }

        //
        accountInfoList.forEach((value, index, array)=>{
            txt += "AccountName: " + array[index].accountName + "    Balance: " + array[index].deposit + "\n";
        });

        $("#txtarea").val(txt);
    };

    // Return the object that is assigned to Module
    return {
        createAccount: createAccount
    };
}());