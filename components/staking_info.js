function getInfoData(userID) {

    let jURL = "/modules/omcStaking_income_get.php";
    let params = { userID: userID }


    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;


    var obj = $.parseJSON(retData);
    var amount = 23000;
    var deposit_period = parseInt(obj[0].deposit_period);

    var dayYear = 365;

    var ratio;
    switch (deposit_period) {
        case 4: ratio = 0.3; break;
        case 8: ratio = 0.6; break;
        case 12: ratio = 1; break;
    }
    let calcRatio = ratio * 100;

    let total_balance = obj.length * amount;
    let earned = amount * ratio;
    let earnedDay = earned / dayYear;

    $("#total_balance").html(addComma(total_balance));
    $("#account").html(obj.length);
    $("#contract_month").html(deposit_period + "m / " + calcRatio + "%");
    $("#earned").html(earned + " omc");
    $("#earnedDay").html(earnedDay.toFixed(3) + " omc");

    //return chkID_retValue;
}

