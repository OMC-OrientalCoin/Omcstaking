function chkLogin(userID, userPW) {

    let jURL = "./modules/chkLogin.php";
    var params = { userID: userID, userPW: userPW };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;

    return retData;

}
