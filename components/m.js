 
function getManageData(userID, userPW) {

    let jURL = "./modules/chkLogin.php";
    let params = { userID: userID, userPW: userPW };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;

    console.log("logetManageDatagin----------->", userID + "|" + userPW + "|retData " + retData)


    return parseInt(retData);
}