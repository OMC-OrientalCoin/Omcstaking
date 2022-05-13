function addComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function isUseChkID(userID) {

    let chkID_retValue = false;

    if (!userID) {
        chkID_retValue = false;
    } else {
        chkID_retValue = Number(chkID(userID));
    }

    return chkID_retValue;
}


function validateEmail(params) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let retState = false;

    if (params.match(regex))
        retState = true;
    else
        retState = false;

    return retState;
}


function validatePhone(params) {
    var regex = /^\(?(\d{3})\)?[-\. ]?(\d{4})[-\. ]?(\d{4})$/;
    // /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    let retState = false;
    if (regex.test(params))
        retState = true;
    else
        retState = false;

    return retState;
}


function validatePassword(params) {
    var regex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";

    let retState = false;
    if (regex.test(params))
        retState = true;
    else
        retState = false;

    return retState;
}


function findUserInfo(userID, userPhone) {

    let jURL = "./modules/find_MemberData.php";
    var params = { userID: userID, userPhone: userPhone };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;

    return retData;

}


function logout(userID, userPhone) {

    let jURL = "./modules/chkLogout.php";
    var params = { userID: userID, userPhone: userPhone };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;

    return retData;

}