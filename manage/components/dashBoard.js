
function omcStaking_income_data(divID, state, _startDate, _endDate) {

    var getPath = "modules/";
    var getModule = "";

    switch (state) {
        case "I": getModule = "income_get.php"; break;
        case "O": getModule = "outcome_get.php"; break;
        case "A": getModule = "account_get.php"; break;
        case "M": getModule = "member_get.php"; break;
    }

    var jURL = getPath + getModule;
    var param = { state: state, _startDate: _startDate, _endDate: _endDate };

    $.ajax({
        type: "POST",
        async: true,
        url: jURL,
        data: param,
        cache: false,
        //dataType: "jsonp",
        success: function (data) {
            let tmpList = makeForm(data);
            $('#' + divID).html(tmpList);
        },
        error: function (e) {
            alert(" get data error ");
        }
    });
}//get_patient_diagnosis



function workplace_device_data(divID, workplace_idx) {
    alert("A")

    let tempList = "";
    var jURL = "modules/device_get.php";

    var param = { workplace_idx: workplace_idx };

    $.ajax({
        type: "POST",
        async: true,
        url: jURL,
        data: param,
        cache: false,
        //dataType: "jsonp",
        success: function (data) {



            let top = "";
            let recdate = "";
            let tmpList = "";
            let _parseJsonData = "";

            tmpList += "<div class='wrap' style='text-align: center;  background-color: #DADADA;' >";
            tmpList += "    <div id='' class='cell_inline_block cell_20'>Type</div>";
            tmpList += "    <div id='' class='cell_inline_block cell_20'>장비명</div>";
            tmpList += "    <div id='' class='cell_inline_block cell_20'>mac addr</div>";
            tmpList += "    <div id='' class='cell_inline_block cell_20'>등록자</div>";
            tmpList += "    <div id='' class='cell_inline_block cell_15' style='border-right:none;'>상태</div>";
            tmpList += "</div>";

            for (var i in obj) {
                let useState = "-";

                if (obj[i].useState > 0)
                    useState = "동작중";

                tmpList += "<div class='wrap' style='text-align: left;''  >";
                tmpList += "    <div id='' class='cell_inline_block cell_20'>" + obj[i].device_type + "</div>";
                tmpList += "    <div id='' class='cell_inline_block cell_20'>" + obj[i].device_name + "</div>";
                tmpList += "    <div id='' class='cell_inline_block cell_20'>" + obj[i].device_macaddr + "</div>";
                tmpList += "    <div id='' class='cell_inline_block cell_20'>" + obj[i].rec_date + "</div>";
                tmpList += "    <div id='' class='cell_inline_block cell_15'  style='border-right:none;'>" + useState + "</div>";
                tmpList += "</div>";

            }


            $('#' + divID).html(tmpList);

        },
        error: function (e) {
            alert(" get data error ");
        }
    });

}

function makeForm(data) {
    let obj = $.parseJSON(data);

    tmpList += "<div class='wrap' style='text-align: center;  background-color: #DADADA;' >";
    tmpList += "        <div class='cell_inline_block cell_15' >name </div> ";
    tmpList += "        <div class='cell_inline_block cell_20' >addr </div> ";
    tmpList += "        <div class='cell_inline_block cell_7' >manager </div> ";
    tmpList += "        <div class='cell_inline_block cell_7' >tel1 </div> ";
    tmpList += "        <div class='cell_inline_block cell_7' >tel2 </div> ";
    tmpList += "       <div class='cell_inline_block cell_7' >use </div> ";
    tmpList += "        <div class='cell_inline_block cell_12' >date </div>";
    tmpList += "        <div class='cell_inline_block cell_7'>장비</div>";
    tmpList += "        <div  class='cell_inline_block cell_7' style='border-right:none;'>장비등록</div>";
    tmpList += "</div>";

    for (var i in obj) {


        tmpList += "<div class='wrap' style='text-align: left;''  >";
        //  tmpList += "<div class='cell_inline_block cell_3'  style='float:left;'><input type='checkbox' name='cboBox' id='cb_" + obj[i].idx + "' class='cboBox' value='" + obj[i].idx + "' ></div>";                
        tmpList += "<div class='cell_inline_block cell_19' >" + obj[i].workplace_name + "</div> ";
        tmpList += "<div class='cell_inline_block cell_20' >" + obj[i].workplace_addr + "</div> ";
        tmpList += "<div class='cell_inline_block cell_7' >" + obj[i].workplace_manager + "</div> ";
        tmpList += "<div class='cell_inline_block cell_7' >" + obj[i].tel1 + "</div> ";
        tmpList += "<div class='cell_inline_block cell_7' >" + obj[i].tel2 + "</div> ";
        tmpList += "<div class='cell_inline_block cell_7' >" + obj[i].useState + "</div> ";
        tmpList += "<div class='cell_inline_block cell_12' style=' text-align:center;'>" + obj[i].rec_date + "</div>";
        tmpList += "<div id='v_" + obj[i].idx + "_" + obj[i].workplace_name + "' class='cell_inline_block cell_7 list' style='cursor: pointer; padding-left:3px; '>보기</div>";
        tmpList += "<div id='w_" + obj[i].idx + "_" + obj[i].workplace_name + "' class='cell_inline_block cell_7 dev' style=' cursor: pointer; border-right:none;'>등록</div>";
        tmpList += "</div>";

        tmpList += "<div class='wrap' style='display:none ;'  >"; //
        tmpList += "<div class='cell_inline_block cell_3'  style='float:left;'>&nbsp;</div>";
        tmpList += "<div class='cell_inline_block cell_70'>" + obj[i].remarks + "</div>";
        tmpList += "<div id=' ' class='cell_inline_block cell_7  '  > &nbsp;</div>";
        tmpList += "</div>";

    }
}