
function getCoinData_OMC(userID) {
    return new Promise((resolve, reject) => {
        let jURL = "https://omcwallet.net/m/module/get_MyWalletAddress.php";
        let params = { userID: userID }

        $.ajax({
            url: jURL,
            type: "POST",
            dataType: "json",
            data: params,
            success: (res) => {
                resolve(res);
            },
            error: (e) => {
                reject(e);
            }
        });
    });
}


function getCoinData_OMC_balance(walletAddr) {
    return new Promise((resolve, reject) => {
        let jURL = "https://omcapi.net/module/eth_getBalance.php";
        let params = { address: walletAddr }

        $.ajax({
            url: jURL,
            type: "POST",
            dataType: "json",
            data: params,
            success: (res) => {
                resolve(res);
            },
            error: (e) => {
                reject(e);
            }
        });
    });
}



function makeForm(divID, rsValue) {


    let _walletAddr = "";
    let _tmpForm = "";
    for (let i = 0; i < rsValue.length; i++) {
        let _balance = "0";
        _walletAddr = rsValue[i].walletAddress;

        getCoinData_OMC_balance(_walletAddr).then(function (resData) {
            console.log(resData)
            _balance = makeAmount(resData)
        });

        _tmpForm += "<div id='addr_" + _walletAddr + "_" + _balance + "' class='classWallet'  style='width:100%; height:22px;cursor:pointer;'>";
        _tmpForm += "   <div style='width:70%; display:inline-block;'>" + _walletAddr + "</div>";
        _tmpForm += "   <div id='omc_" + i + "_" + _balance + "'  style='width:20%; display:inline-block; text-align:right; background-color: #dadada; float:right; '> " + _balance + "</div>";
        _tmpForm += "</div>";

    }


    $("#" + divID).html(_tmpForm);

}

function makeAmount(rsValue) {

    return rsValue.result;
}