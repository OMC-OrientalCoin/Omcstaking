
function chkOmcMember(userID, userPW) {

    let jURL = "/modules/chkOMCMember.php";
    let params = { userID: userID, userPW: userPW };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;

    return retData;

}