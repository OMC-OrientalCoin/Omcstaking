function income_data(divID, state, _feild, _clause) {
  let jURL = "./modules/income_get.php";
  let data = getData(jURL);
  let obj = $.parseJSON(data);

  let tmpList = "";
  tmpList +=
    "<div  style='width: calc(100% - 10px);display: block; background-color: #e7e7e7;  padding:8px;'>";
  tmpList +=
    "    <div class='' style='width:15%; display: inline-block; border-right: 1px solid #838383; text-align:center;  text-align:center;'> recDate </div>";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center; '>userID </div> ";
  tmpList +=
    "    <div class='' style='width:13%; display: inline-block; border-right: 1px solid #838383; text-align:center; '>amount </div> ";
  tmpList +=
    "    <div class='' style='width:20%; display: inline-block; border-right: 1px solid #838383; text-align:center; '> confirmState</div> ";
  //tmpList += "    <div class='' style='width:15%; display: inline-block; border-right: 1px solid #838383; text-align:center; '> confirmDate </div> ";
  tmpList += "    <div class='' style='width:16%; display: inline-block;  border-right: 1px solid #838383; text-align:center;'> 입급확인 </div> ";
  tmpList += "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center; '> staking 신청일</div> ";
   tmpList += "    <div class='' style='width:10%; display: inline-block;   text-align:center; '> 비고 </div> ";
  tmpList += "</div>";
  for (var i in obj) {
    let confirmState = "-";
    let confirmDate = "-";
    let stakingOnDate = "-";

    let recDate = obj[i].recDate;
    recDate = recDate.substring(0, 10);

    if (obj[i].confirmState > 0) {
      confirmState = "승인 (" + obj[i].confirmDate+")";
    } else {
      confirmState = "-";

    }


      if (obj[i].stakingOnDate != null) {

      stakingOnDate = obj[i].stakingOnDate;
    } else {
      stakingOnDate = "-";

    }


    tmpList +=
      "<div  style='width: calc(100% - 10px);display: block; border-bottom: 1px solid #c9c9c9; padding:4px; margin:4px 0px;  font-size: 14px;'>";
    tmpList +=      "    <div class=''  style='width:3%;  display: inline-block; border-right: 1px solid #838383; text-align:center; '>";
    tmpList +=      "        <input type='checkbox' name='cboBox' id='cb_" +      obj[i].idx +      "' class='cboBox' value='" +      obj[i].idx +      "' />";
    tmpList += "    </div>";
    tmpList +=      "    <div class='' style='width:12%;  display: inline-block; border-right: 1px solid #838383; text-align:center; '>" +      recDate +      "</div>";
    tmpList +=      "    <div class='' style=' width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center; '>" +      obj[i].userID +      "</div> ";
    tmpList +=      "    <div class='' style='width: calc(13% - 12px); padding-right : 10px; display: inline-block; border-right: 1px solid #838383; text-align: right; '>" +     obj[i].remittance_amount +      "</div> ";
    tmpList +=      "    <div class='' style=' width:20%;display: inline-block; border-right: 1px solid #838383; text-align:center; '>" +      confirmState +      "</div> ";
    tmpList +=      "    <div class='' style='width:16%; display: inline-block; text-align:center; border-right: 1px solid #838383;'>  ";
    tmpList +=      "        <div id='c_" +      obj[i].idx +      "_" +      obj[i].userID +   "' class='clsConfirm' style=' width:80px; height: 22px;  text-align:center; display: inline-block;   border : 1px solid #838383; background-color: #dfdfdf;'> 확인  </div> ";
    tmpList +=      "        <div id='d_" +      obj[i].idx +      "_" +      obj[i].userID +      "' class='clsDelete' style=' width:80px; height: 22px;  text-align:center; display: inline-block; margin-left: 6px; border : 1px solid #838383; background-color: #dfdfdf;'> 삭제  </div> ";
    tmpList += "</div>";
    // tmpList += "    <div class='' style=' width:15%;display: inline-block; border-right: 1px solid #838383; text-align:center; '>" + confirmDate + "</div> ";
    tmpList +=      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center; '> " + stakingOnDate + "</div> ";
    tmpList +=      "    <div class='' style='width:10%; display: inline-block;   text-align:center; '> -</div> ";

    tmpList += "</div>";
  }

  $("#" + divID).html(tmpList);
}

function outcome_data(divID, state, _feild, _clause) {
  let jURL = "./modules/outcome_get.php";

  let data = getData(jURL);
  let obj = $.parseJSON(data);

  let tmpList = "";
  tmpList +=
    "<div  style='width: calc(100% - 18px);display: block; background-color: #e7e7e7;  padding:8px; text-align:center;'>";
  tmpList +=
    "    <div class='' style='width:12%; display: inline-block; border-right: 1px solid #838383;'> recDate </div>";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383;'>userID </div> ";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383;'> balance </div> ";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383;'> amount </div> ";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383;'> state </div> ";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383;'> confirmDate </div> ";
  tmpList +=
    "    <div class='' style='width:20%; display: inline-block; border-right: 1px solid #838383;'> remarks </div> ";
  tmpList +=
    "    <div class='' style='width: 7%; display: inline-block; text-align:center;'>  관리 </div>";
  tmpList += "</div>";

  for (var i in obj) {
    let confirmState = "-";
    let confirmDate = "-";
    let confirmManager = "-";
    let recDate = obj[i].recDate;

    recDate = recDate.substring(0, 10);

    if (obj[i].confirmState > 0) {
      confirmState = "승인";
      confirmDate = obj[i].confirmDate;
      confirmManager = obj[i].confirmManager;
    } else {
      confirmState = "-";
      confirmDate = "-";
      confirmManager = "-";
    }

    tmpList +=
      "<div  style='width: calc(100% - 10px);display: block; border-bottom: 1px solid #c9c9c9; padding:8px;'>";
    tmpList +=
      "    <div class=''  style='width:3%;  display: inline-block; border-right: 1px solid #838383; text-align:center; '>";
    tmpList +=
      "        <input type='checkbox' name='cboBox' id='cb_" +
      obj[i].idx +
      "' class='cboBox' value='" +
      obj[i].idx +
      "' />";
    tmpList += "    </div>";
    tmpList +=
      "    <div class='' style='width:12%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      recDate +
      "</div>";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].userID +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].balance +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].amount +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      confirmState +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      confirmDate +
      "</div> ";
    //tmpList += "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" + confirmManager + " </div> ";
    tmpList +=
      "    <div class='' style='width:20%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>&nbsp;</div> "; //
    tmpList +=
      "    <div class='' style='width:7%; display: inline-block; text-align:center;'>  ";
    tmpList +=
      "        <div id='c_" +
      obj[i].idx +
      "_" +
      obj[i].userID +
      "' class='clsOutcome' style=' width: 80px; height: 22px;  text-align:center; display:  block;  margin:0px auto; border : 1px solid #838383; background-color: #dfdfdf;'> 상세  </div> ";
    tmpList += "    </div>";
    tmpList += "</div>";
  }

  $("#" + divID).html(tmpList);
}

function member_data(divID, state, _feild, _clause) {
  let jURL = "./modules/member_get.php";

  let data = getData(jURL);
  let obj = $.parseJSON(data);

  let tmpList = "";
  tmpList +=
    "<div  style='width: calc(100% - 10px);display: block; background-color: #e7e7e7;  padding:8px;'>";
  // tmpList += "    <div class='' style=' width:11.5%;display: inline-block; border-right: 1px solid #838383; text-align:center; '>  Level  </div> ";
  tmpList +=
    "    <div class='' style=' width:15%;display: inline-block; border-right: 1px solid #838383; text-align:center; '>  ID  </div> ";
  tmpList +=
    "    <div class='' style='width:15%; display: inline-block; border-right: 1px solid #838383; text-align:center; '> Name  </div> ";
  tmpList +=
    "    <div class='' style=' width:20%;display: inline-block; border-right: 1px solid #838383; text-align:center; '> Email </div> ";
  tmpList +=
    "    <div class='' style=' width:10%;display: inline-block; border-right: 1px solid #838383; text-align:center; '> OMC 회원 </div> ";
  tmpList +=
    "    <div class='' style='width:13%; text-align:center; display: inline-block; border-right: 1px solid #838383;'>  recDate  </div>";
  tmpList +=
    "    <div class='' style='width:20%; text-align:center; display: inline-block; '>관리</div>";
  tmpList += "</div>";

  for (var i in obj) {
    let omcMemState = "-";
    let confirmDate = "-";
    let confirmManager = "-";
    let recDate = obj[i].recDate;
    recDate = recDate.substring(0, 10);

    if (obj[i].omcMemState > 0) {
      omcMemState = "OMC 회원";
      //     confirmDate = obj[i].confirmDate;
      //     confirmManager = obj[i].confirmManager;
    } else {
      omcMemState = "-";
      //     confirmDate = "-";
      //     confirmManager = "-";
    }

    tmpList +=
      "<div  style='width: calc(100% - 10px);display: block; border-bottom: 1px solid #c9c9c9; padding:8px;'>";
    //tmpList += "    <div class=''  style='width:3%;  display: inline-block; border-right: 1px solid #838383; text-align:center; '>";
    //tmpList += "        <input type='checkbox' name='cboBox' id='cb_" + obj[i].idx + "' class='cboBox' value='" + obj[i].idx + "' />";
    //tmpList += "    </div>";
    // tmpList += "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" + obj[i].userLevel + "</div> ";
    tmpList +=
      "    <div class='' style='width:15%; display: inline-block; border-right: 1px solid #838383;'>" +
      obj[i].userID +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:15%; display: inline-block; border-right: 1px solid #838383;'>" +
      obj[i].userName +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:20%; display: inline-block; border-right: 1px solid #838383;'>" +
      obj[i].userEmail +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;''>" +
      omcMemState +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:13%; display: inline-block; border-right: 1px solid #838383;text-align:center;''>" +
      recDate +
      "</div>";
    tmpList +=
      "    <div class='' style='width:20%; display: inline-block; text-align:center;'>  ";
    tmpList +=
      "        <div id='c_" +
      obj[i].idx +
      "_" +
      obj[i].userID +
      "' class='clsMember' style=' width:80px; height: 22px;  text-align:center; display: inline-block;   border : 1px solid #838383; background-color: #dfdfdf;'> 상세  </div> ";
    tmpList +=
      "        <div id='d_" +
      obj[i].idx +
      "_" +
      obj[i].userID +
      "' class='clsDelete' style=' width:80px; height: 22px;  text-align:center; display: inline-block; margin-left: 6px; border : 1px solid #838383; background-color: #dfdfdf;'> 삭제  </div> ";

    tmpList += "    </div>";
    tmpList += "</div>";
  }

  $("#" + divID).html(tmpList);
}

function staking_data(divID, state, _feild, _clause) {
  let jURL = "./modules/staking_get.php";

  let data = getData(jURL);
  let obj = $.parseJSON(data);

  let tmpList = "";
  tmpList +=
    "<div  style='width: calc(100% - 10px);display: block; background-color: #e7e7e7;  padding:8px;'>";
  tmpList +=
    "    <div class='' style='width: 10.5%; display: inline-block;text-align:center;border-right: 1px solid #838383; '>code </div> ";
  tmpList +=
    "    <div class='' style='width: 8%; display: inline-block;text-align:center;border-right: 1px solid #838383; '>userID </div> ";
  tmpList +=
    "    <div class='' style='width: 8%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>balance</div> ";
  tmpList +=
    "    <div class='' style='width:5%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>deposit</div> ";
  tmpList +=
    "    <div class='' style='width:4%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>period </div> ";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>deposit_date </div> ";
  tmpList +=
    "    <div class='' style='width:10%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>settlement_date</div> ";
  tmpList +=
    "    <div class='' style='width: 4%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>confirm </div> ";
  tmpList +=
    "    <div class='' style='width:8%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>confirmDate </div> ";
  tmpList +=
    "    <div class='' style='width:5%; display: inline-block;text-align:center; border-right: 1px solid #838383;'>manager  </div> ";
  tmpList +=
    "    <div class='' style='width:8%; display: inline-block; text-align:center; border-right: 1px solid #838383;'>recDate </div>";
  tmpList +=
    "    <div class='' style='width:12%; display: inline-block; text-align:center;'>관리</div>";
  tmpList += "</div>";

  for (var i in obj) {
    let confirmState = "-";
    let confirmDate = "-";
    let confirmManager = "-";
    let recDate = obj[i].recDate;
    recDate = recDate.substring(0, 10);
    let staking_code = obj[i].staking_code;

    if (obj[i].confirmState > 0) {
      confirmState = "승인";
      confirmDate = obj[i].confirmDate;
      confirmManager = obj[i].manager;
    } else {
      confirmState = "-";
      confirmDate = "-";
      confirmManager = "-";
    }

    tmpList +=
      "<div  style='width: calc(100% - 10px);display: block; border-bottom: 1px solid #c9c9c9; padding:8px;'>";
    tmpList +=
      "    <div class=''  style='width:2%;  display: inline-block; border-right: 1px solid #838383;'>";
    tmpList +=
      "        <input type='checkbox' name='cboBox' id='cb_" +
      obj[i].idx +
      "' class='cboBox' value='" +
      obj[i].idx +
      "' />";
    tmpList += "    </div>";
    tmpList +=
      "    <div class='' style='width: 8%; display: inline-block; border-right: 1px solid #838383;'>&nbsp; " +
      obj[i].staking_code +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:8%; display: inline-block; border-right: 1px solid #838383;'>" +
      obj[i].userID +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:8%; display: inline-block; border-right: 1px solid #838383; text-align:right; padding-right:4px;'>" +
      addComma(obj[i].balance) +
      " &nbsp;</div> ";
    tmpList +=
      "    <div class='' style='width: 5%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].deposit +
      "</div> ";
    tmpList +=
      "    <div class='' style='width: 4%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].deposit_period +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].deposit_date +
      "</div> ";
    tmpList +=
      "    <div class='' style='width:10%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      obj[i].settlement_date +
      "</div> ";
    tmpList +=
      "    <div class='' style='width: 4%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      confirmState +
      "</div> ";
    tmpList +=
      "    <div class='' style='width: 8%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      confirmDate +
      "</div> ";
    tmpList +=
      "    <div class='' style='width: 5%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      confirmManager +
      " </div> ";
    tmpList +=
      "    <div class='' style='width: 8%; display: inline-block; border-right: 1px solid #838383; text-align:center;'>" +
      recDate +
      "</div>";
    tmpList +=
      "    <div class='' style='width:12%; display: inline-block; text-align:center;'>  ";
    tmpList +=
      "        <div id='c_" +
      obj[i].idx +
      "_" +
      obj[i].userID +
      "' class='clsStaking' style=' width:80px; height: 22px;  text-align:center; display: inline-block;   border : 1px solid #838383; background-color: #dfdfdf;'> 상세  </div> ";
    tmpList +=
      "        <div id='d_" +
      staking_code.trim() +
      "' class='clsDelete' style=' width:80px; height: 22px;  text-align:center; display: inline-block; margin-left: 6px; border : 1px solid #838383; background-color: #dfdfdf;'> 삭제  </div> ";
    tmpList += "    </div>";
    tmpList += "</div>";
  }

  $("#" + divID).html(tmpList);
}

function getData(jURL) {
  let params = ""; // { userID: userID, userPW: userPW };
  var retData = $.ajax({
    type: "POST",
    url: jURL,
    data: params,
    async: false,
  }).responseText;

  return retData;
}

function deleteStaking(staking_code) {
  let jURL = "./modules/omcStaking_del.php";
  let params = { staking_code: staking_code };
  var retData = $.ajax({
    type: "POST",
    url: jURL,
    data: params,
    async: false,
  }).responseText;
  console.log(retData);
  return retData;
}

function deleteData(item, idx) {
  let jURL = "";

  switch (item) {
    case "I":
      jURL = "./modules/income_del.php";
      break;
    case "O":
      jURL = "./modules/outcome_del.php";
      break;
    case "M":
      jURL = "./modules/member_del.php";
      break;
  }

  let params = { item: item, idx: idx };
  var retData = $.ajax({
    type: "POST",
    url: jURL,
    data: params,
    async: false,
  }).responseText;
  console.log(retData + "|" + jURL + "|" + item + "|" + idx);
  return retData;
}

function getDataOne(jURL, params) {
  var retData = $.ajax({
    type: "POST",
    url: jURL,
    data: params,
    async: false,
  }).responseText;
  console.log("getDataOne--------->", retData);
  return retData;
}

function getManageData(userID, userPW) {
  let jURL = "./modules/chkLogin.php";
  let params = { userID: userID, userPW: userPW };

  var retData = $.ajax({
    type: "POST",
    url: jURL,
    data: params,
    async: false,
  }).responseText;

  console.log(
    "logetManageDatagin----------->",
    userID + "|" + userPW + "|retData " + retData
  );

  return parseInt(retData);
}
