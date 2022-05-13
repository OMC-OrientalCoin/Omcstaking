function getNewsData(content_idx) {
    let jURL = "./modules/news_get.php"
    var params = { idx: content_idx };

    var retData = $.ajax({
        type: "POST",
        url: jURL,
        data: params,
        async: false
    }).responseText;
    return retData;

}//getNewslist


function news_list(divID) {
    let data = getNewsData("");
    makeForm(divID, data);
}//get_patient_diagnosis


function makeForm(divID, data) {
    let obj = $.parseJSON(data);

    let tmpList = "";
    for (var i in obj) {
        let confirmState = "-";
        let confirmDate = "-";
        let recDate = obj[i].recDate;
        recDate = recDate.substring(0, 10);

        //  tmpList += "<div class='cell_inline_block cell_3'  style='float:left;'><input type='checkbox' name='cboBox' id='cb_" + obj[i].idx + "' class='cboBox' value='" + obj[i].idx + "' ></div>";                
        tmpList += "<div id='idx_" + obj[i].idx + "' class='newslist' style='width: calc(100% - 20px); margin: 12px auto; padding:8px; background-color: #fff;'>";
        tmpList += "    <div class=' ' style='width:calc(100% - 10px);  padding:4px; font-size: 14px; font-weight:bold ; '>" + obj[i].subject + "</div> ";
        tmpList += "    <div idx_" + obj[i].idx + "_content' class='news_content content_overflow' style=''>" + obj[i].content + "</div> ";
        tmpList += "    <div class='' style='width:calc(100% - 10px); height:auto; margin:10px 0px; padding:4px; font-size: 12px;  '>" + recDate + "</div> ";
        tmpList += "</div>";
    }

    $('#' + divID).html(tmpList);

}


function news_content(divID, content_idx) {

    let data = getNewsData(content_idx);
    makeFormContent(divID, data);
}//get_patient_diagnosis


function makeFormContent(divID, data) {
    let obj = $.parseJSON(data);
    console.log(obj)
    let tmpList = "";

    let confirmState = "-";
    let confirmDate = "-";
    let recDate = obj[0].recDate;
    recDate = recDate.substring(0, 10);

    //  tmpList += "<div class='cell_inline_block cell_3'  style='float:left;'><input type='checkbox' name='cboBox' id='cb_" + obj[i].idx + "' class='cboBox' value='" + obj[i].idx + "' ></div>";                
    tmpList += "<div   class='newslist' style='width: calc(100% - 20px); margin: 12px auto; padding:8px; background-color: #fff;'>";
    tmpList += "    <div class=' ' style='width:calc(100% - 10px);  padding:4px; font-size: 14px; font-weight:bold ; '>" + obj[0].subject + "</div> ";
    tmpList += "    <div class='' style='width:calc(100% - 10px); height:auto; margin:10px 0px; padding:4px; font-size: 12px;  '>" + recDate + "</div> ";
    tmpList += "    <div   class='news_content' style='width:calc(100% - 10px); height:auto; margin:10px 0px; padding:4px; font-size: 12px;  '>" + obj[0].content + "</div> ";

    tmpList += "</div>";


    $('#' + divID).html(tmpList);

}

