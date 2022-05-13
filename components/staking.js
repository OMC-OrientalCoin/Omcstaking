function login(userID, userPW) {

    //var kind = $(':radio[name="kind"]:checked').val(); 
    var params = { "userID": userID, "userPassword": userPW };

    var returnValue = $.ajax({
        type: "POST",
        url: "/khidi/module/login.php",
        data: params,
        async: false
    }).responseText;

    if (Number(returnValue) > 0) {
        $(location).attr('href', "/");
    } else {
        alert("Login Error\n로그인 정보를 확인하시거나 관리자에게 문의하여 주십시요.");
        return false;
    }
}//login()


function getTerm(setMonth) {

    let addYear = 0;

    if (setMonth > 12) {
        addYear++;
        setMonth = setMonth - 12;
    }

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + setMonth;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일

    let calcYear = year + addYear;
    let onDate = calcYear + "-" + month + "-" + date;

    return onDate;
}


function get_IncomeData_one(userID) {

    let jURL = "/modules/omcStaking_income_get_one.php";
    let params = { userID: userID };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;
    console.log("get_IncomeData_one------->", retData)
    return retData;
}



function get_StakingData_one(userID) {

    let jURL = "/modules/omcStaking_get_one.php";
    let params = { userID: userID };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;


    return retData;
}


function getStakingData(userID) {

    let jURL = "/modules/omcStaking_get.php";
    let params = { userID: userID };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;


    var obj = $.parseJSON(retData);

    return obj;
}


function getStakingReservationData(userID) {

    let jURL = "/modules/omcStaking_reservation_get.php";
    let params = { userID: userID };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;


    var obj = $.parseJSON(retData);

    return obj;
}

function reservationData(divID, userID) {

    var obj = getStakingReservationData(userID);
    var account = obj[0].account;
    let calcCoin = account * 23000;


    let tmpData = obj[0].deposit_period + "개월  " + account + "구좌    " + calcCoin + "OMC";
    $("#" + divID).html(tmpData);
    $("#reservAccount").val(calcCoin);

}


function incomeData(divID, userID) {


    let obj = getStakingIncomeData(userID);

    let remittance_amount = 0;

    if(obj.length>0){
        remittance_amount  = parseFloat(obj[0].remittance_amount); 


        console.log("remittance_amount------->", remittance_amount)
        $("#" + divID).html(addComma(remittance_amount) + " OMC");
        $("#amount").val(remittance_amount); 
        $("#confirmState").val(obj[0].confirmState);


        //return total_balance;
    }//
}

function getStakingIncomeData(userID) {

    let jURL = "/modules/omcStaking_income_get.php";
    let params = { userID: userID };
  
    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;

    console.log("getStakingIncomeData------->", retData)
    var obj = $.parseJSON(retData);
 
    return obj;
}


function getStakingInfo(divID, userID) {

    var obj = getStakingData(userID);

    var cntACC = obj.length;
    $("#div_staking_idx").html(cntACC + " 구좌 ");

    let _tmpForm = "";

    for (let i = 0, j = 1; i < obj.length; i++, j++) {


        var amount = 23000;
        var dayYear = 365;
        var deposit_period = parseInt(obj[i].deposit_period);



        var ratio;

        switch (deposit_period) {
            case 4: ratio = 0.3; break;
            case 8: ratio = 0.6; break;
            case 12: ratio = 1; break;
        }

        let calcRatio = ratio * 100;

        let total_balance = cntACC * amount;
        let earned = amount * ratio;
        let earnedDay = earned / dayYear;
        let sum = total_balance + earned;


        _tmpForm += "<div id='' class='cell_p_wrap' style='width:calc(90% - 26px); height:auto; font-size: 14px; margin: 12px auto;  background-color: #E6E6E6; padding:12px;'>";
        // _tmpForm += "   <div id='' class='cell_p_wrap' style='margin: 8px ;border-bottom: 1px solid #838383;'>";
        // _tmpForm += "           <input type='checkbox'  id='checkbox_" + i + "' class='cboBox' value='idx_" + obj[i].idx + "_" + i + "'/> 구좌선택";
        // _tmpForm += "   </div>";
        _tmpForm += "   <div id='' class='cell_p_wrap'>";
        _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:30%;'>   구좌 번호  </div>";
        _tmpForm += "       <div id='div_cr_balance' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + j + "</div>";
        _tmpForm += "   </div>";
        _tmpForm += "   <div id='' class='cell_p_wrap'>";
        _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:30%;'>   원금 수량  </div>";
        _tmpForm += "       <div id='div_cr_balance' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(total_balance) + " OMC </div>";
        _tmpForm += "   </div>";
        _tmpForm += "   <div id='' class='cell_p_wrap' >";
        _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:30%;'> 수탁 기간  </div>";
        _tmpForm += "       <div id='div_contract_period' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + obj[i].deposit_date + "</div>";
        _tmpForm += "   </div>";
        _tmpForm += "   <div id='' class='cell_p_wrap'>";
        _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:30%;'>   기 간  </div>";
        _tmpForm += "      <div id='div_cr_deposit_period' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + deposit_period + " 개월</div>";
        _tmpForm += "   </div>";
        _tmpForm += "   <div id='' class='cell_p_wrap'>";
        _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:30%;'>   이 율  </div>";
        _tmpForm += "       <div id='div_cr_earned' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(earned) + " OMC" + "</div>";
        _tmpForm += "   </div>";
        _tmpForm += "   ";
        _tmpForm += "   <div id='' class='cell_p_wrap' style='margin-top: 12px; font-weight: bold;'>";
        _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:24%;'>   합 계  </div>";
        _tmpForm += "       <div id='div_cr_total' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(sum) + " OMC" + "</div>";
        _tmpForm += "   </div>";
        _tmpForm += "   <input type='hidden'  id='totalAmount_" + i + "'  value='" + sum + "'/>";

        _tmpForm += "</div>";


    }//for

    $("#" + divID).html(_tmpForm);
}



function getStakingList(userID) {

    var retData = get_StakingData_one(userID);
    var obj = $.parseJSON(retData);

    var deposit = parseFloat(obj[0].deposit);
    var deposit_period = parseInt(obj[0].deposit_period);
    var settlement_date = parseInt(obj[0].settlement_date);

    var ratio = 0;

    switch (deposit_period) {
        case 4: ratio = 0.3; break;
        case 8: ratio = 0.6; break;
        case 12: ratio = 1; break;
    }

    let calcRatio = ratio * 100;
    let earned = calcEarnedFunc(deposit, ratio)

    let retObject = calcDayFunc(deposit, settlement_date, ratio);
    let elapsed_days = retObject.si_elapsed_days;

    let _earnedCalc = calcEarnedDayFunc(deposit, deposit_period, earned, elapsed_days);

    let sum = parseFloat(deposit) + parseFloat(_earnedCalc);




    let _tmpForm = "";
    _tmpForm += "<div id='' class='cell_p_wrap' style='width:calc(100% - 26px); height:auto; font-size: 14px; margin: 12px auto;  background-color: #E6E6E6; padding:12px;'>";

    // _tmpForm += "   <div id='' class='cell_p_wrap'>";
    // _tmpForm += "       <div id='' class='cell_30p_dib' style=' display: inline-block; width:30%;'>   구좌 번호  </div>";
    // _tmpForm += "       <div id='div_cr_balance' class='cell_70p_dib data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + j + "</div>";
    // _tmpForm += "   </div>";

    _tmpForm += "   <div id='' class='cell_p_wrap' >";
    _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'> 스테이킹 수량  </div>";
    _tmpForm += "       <div id='div_cr_balance' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(deposit) + " OMC </div>";
    _tmpForm += "   </div>";

    _tmpForm += "   <div id='' class='cell_p_wrap' >";
    _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'> 시작일  </div>";
    _tmpForm += "       <div id='div_contract_period' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + obj[0].settlement_date + "</div>";
    _tmpForm += "   </div>";
    _tmpForm += "   <div id='' class='cell_p_wrap' >";
    _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'> 종료일  </div>";
    _tmpForm += "       <div id='div_contract_period' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + obj[0].deposit_date + "</div>";
    _tmpForm += "   </div>";
    _tmpForm += "   <div id='' class='cell_p_wrap'>";
    _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'>   기 간  </div>";
    _tmpForm += "      <div id='div_cr_deposit_period' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + deposit_period + " 개월</div>";
    _tmpForm += "   </div>";
    _tmpForm += "   <div id='' class='cell_p_wrap'>";
    _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'>  약정 이율  </div>";
    _tmpForm += "       <div id='div_cr_earned' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(calcRatio) + "% / " + addComma(earned) + " OMC " + "</div>";
    _tmpForm += "   </div>";
    /*
        _tmpForm += "   <div id='' class='cell_p_wrap' style='  border-top: 1px solid #DADADA;'>";
        _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'>  현재 적립  </div>";
        _tmpForm += "       <div id='div_cr_earned' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(_earnedCalc) + " OMC" + "</div>";
        _tmpForm += "   </div>";
 
    _tmpForm += "   <div id='' class='cell_p_wrap' style='margin-top: 12px; font-weight: bold;'>";
    _tmpForm += "       <div id='' class='' style=' display: inline-block; width:30%;'>   합 계  </div>";
    _tmpForm += "       <div id='div_cr_total' class=' data_block' style='width: calc(70% - 22px); text-align:right; display: inline-block;'>" + addComma(sum) + " OMC" + "</div>";
    _tmpForm += "   </div>";
    */
    //_tmpForm += "   <input type='hidden'  id='totalAmount_" + i + "'  value='" + sum + "'/>";

    _tmpForm += "</div>";

    return _tmpForm;
}


function info_income(_userID) {

    let retData = get_IncomeData_one(_userID);
    obj = $.parseJSON(retData);
    let remittance_amount = obj[0].remittance_amount;
    $("#income_balance").html(addComma(remittance_amount) + " omc");
}

function info_staking(_userID) {


    var obj = new Object();
    let deposit = 0;
    let ratio = 0;
    let deposit_period = 0;
    let ratioCalc = 0;
    let balance = 0;
    let settlement_date = "-";
    let deposit_date = "-";
    let elapsed_days = "-";
    let earned = 0;
    let sum_earned = 0;
    let total_balance = 0;
    let recDate = null;

    let retData = get_StakingData_one(_userID);

    if (retData.length > 3) {

        obj = $.parseJSON(retData);

        deposit = obj[0].deposit;
        balance = obj[0].balance;
        deposit_period = obj[0].deposit_period;
        deposit_date = obj[0].deposit_date;
        settlement_date = obj[0].settlement_date;
        recDate = obj[0].recDate;
        switch (parseInt(deposit_period)) {
            case 4: ratio = 0.3; break;
            case 8: ratio = 0.6; break;
            case 12: ratio = 1; break;
            default: ratio = 0; break;
        }

        ratioCalc = ratio * 100;

        let retObject = calcDayFunc(balance, settlement_date, ratio);

        elapsed_days = retObject.si_elapsed_days;
        // earned = retObject.si_earned;

        earned = calcEarnedFunc(deposit, ratio)
        sum_earned = calcEarnedDayFunc(deposit, deposit_period, earned, elapsed_days);


    }

    $("#si_deposit_period").html(deposit_period + " m");
    $("#deposit_period_dp").val(deposit_period);

    $("#si_ratio").html(ratioCalc + " %");
    $("#ratio").val(ratio);
    $("#si_start_day").html(settlement_date);
    $("#si_end_day").html(deposit_date);
    $("#si_balance").html(balance);
    $("#si_deposit").val(deposit);
    $("#si_deposit_div").html(addComma(deposit));
    $("#si_earned_days").html(elapsed_days + " d");

    $("#deposit_day_dp").val(elapsed_days);
    $("#StakingRecTimeStamp").val(getTimeStamp(recDate));
    $("#secAccumulate").val("0.2894");
    $("#secAccumulate_100").val("0.3171");


    $("#si_earned").html(earned);
    $("#sum_earned").html(sum_earned);



    total_balance = parseFloat(deposit) + parseFloat(deposit * ratio);
    $("#total_balance").html(total_balance + " omc");

}//staking_info()



function calcDayFunc(balance, settlement_date, ratio) {
    let TimeStamp_deposit_date = new Date(settlement_date).getTime();
    let TimeStamp_today = new Date().getTime();

    let calcTime = TimeStamp_today - TimeStamp_deposit_date;
    let calcDay = Math.ceil(calcTime / (1000 * 60 * 60 * 24));
    let tmpData = balance / 365;

    let calc_earned = tmpData * calcDay;
//20220421
let term = 0;
let cRatio = 0;

ratio = parseInt(ratio);

switch(ratio)
{
    case 4 :  cRatio =  0.3 ; term = 120;   break;
    case 8 :  cRatio =  0.6 ; term = 240; break;
    case 12 : cRatio =    1 ; term = 365; break;
}


let dividend = balance * cRatio; //이자
    let elapsed_days  = term + calcDay - 1; //경과일

    let daily_amount  = dividend /  term;
    let hour_amount   =   daily_amount / 24 ;
    let minit_amount  =  hour_amount /  60  ;
    let sec_amount    =  minit_amount / 60;



//  si_earned: tmpData.toFixed(3),
    let retObject = {     // 객체
        sum_earned: calc_earned.toFixed(3),
        si_earned: daily_amount.toFixed(3),
        si_elapsed_days: calcDay
    };

    return retObject;

}


function calcEarnedFunc(deposit, ratio) {
    let earned = deposit * ratio;
    return earned;

}


function calcEarnedDayFunc(deposit, deposit_period, earned, elapsed_days) {

    let accumulate = Math.round(earned / elapsed_days) / 100;


    // console.log("-----------------", deposit + " | " + deposit_period + " | " + earned + " | " + elapsed_days + " |accumulate " + accumulate)
    return accumulate.toFixed(2);

}

function withdrawDataFunc(userID) {


    let retState = false;
    let _getData = get_StakingData_one(userID);

    var obj = $.parseJSON(_getData);
    let deposit = obj[0].deposit;
    console.log("getWithdrawState------->", deposit)

    let withdraw_date = obj[0].deposit_date;
    let today = getToday();
    let _withdrawTimeStamp = getTimeStamp(withdraw_date)
    let _todayTimeStamp = getTimeStamp(today)
    let calcTimeStamp = Math.floor(_withdrawTimeStamp - _todayTimeStamp);

    console.log("getWithdrawState------->", _withdrawTimeStamp + "-" + withdraw_date + "-" + _todayTimeStamp + "-" + today + "-" + calcTimeStamp)




    let arrWithdrawData = [deposit, withdraw_date, calcTimeStamp];

    return arrWithdrawData;

}

function getTimeStamp(date) {

    let timeStamp = Math.floor(new Date(date).getTime() / 1000)

    return timeStamp;
}


function getToday() {

    let addYear = 0;

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일 
    let onDate = year + "-" + month + "-" + date;

    return onDate;
}

function getTodayTime() {

    let addYear = 0;

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일 

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    let milliseconds = today.getMilliseconds(); // 밀리초


    let onDate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    return onDate;
}


function set_time_remaining(timeRemaining) {

    const second = Math.floor((timeRemaining / 1000) % 60);
    const minute = Math.floor((timeRemaining / 60) % 60);
    const hour = Math.floor(timeRemaining / 60 / 60) % 24;
    const day = Math.floor(timeRemaining / 60 / 60 / 24);

    // d-day 문자열 생성
    const dDayInfo = day + " day  -  " + hour + " : " + minute + " : " + second;

    return dDayInfo;
}

function todayF() {
    let today = new Date();
    return today.toLocaleString();
}


function calcTime(StakingRecTimeStamp) {
    var _nowTimeStamp = new Date().getTime() / 1000;
    // const date1 = new Date(2020, 6, 1, 0, 0, 0);
    // // 2020년 7월 1일 2시 30분 4초
    // const date2 = new Date(2020, 6, 1, 2, 30, 4);

    const elapsedMSec = _nowTimeStamp - StakingRecTimeStamp; // 9004000
    const elapsedSec = elapsedMSec / 1000; // 9004
    // const elapsedMin = elapsedMSec / 1000 / 60; // 150.0666...
    // const elapsedHour = elapsedMSec / 1000 / 60 / 60; // 2.501111...

    // document.writeln(elapsedMSec);
    // document.writeln(elapsedSec);
    // document.writeln(elapsedMin);
    // document.writeln(elapsedHour);

    return elapsedSec;

}

function accumulateDP(deposit, StakingRecTimeStamp, secAccumulate) {

    let _calcTime = calcTime(StakingRecTimeStamp)

    // let _calcTime = (24 * 60 * 60) * day;
    let calcValue = parseFloat(deposit) + parseFloat(_calcTime * secAccumulate);
    return calcValue;

}

function accumulate(day, secAccumulate) {
    //24 시간 / 일 × 60 분 / 시간 × 60 초 / 분
    let _calcTime = (24 * 60 * 60) * day;
    let calcValue = secAccumulate * _calcTime;
    return calcValue;

}

function calcEarned(accumulateVal, deposit) {
    let calcValue = accumulateVal - deposit;
    return calcValue;
}
