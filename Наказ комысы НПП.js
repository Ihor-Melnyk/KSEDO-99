function onBeforeCardSave(){

    EdocsApi.setAttributeValue({code: 'Accountant', value: '40762332', text: null});

}

function onTaskExecuteRegistration(routeStage) {
  debugger;
  if (routeStage.executionResult == "executed") {
    EdocsApi.setAttributeValue({
      code: "NumberOrder",
      value: EdocsApi.getAttributeValue("RegNumber").value,
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "DateOrder",
      value: EdocsApi.getAttributeValue("RegDate").value,
      text: null,
    });
    setDateSTR("RegDate", "RegDateText");
  }
}

function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function onChangeApproval() {
  var employeeId = EdocsApi.getAttributeValue("Approval")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue(
        "ApprovalNameI",
        data.nameSurname.trim().split(" ")[0] || ""
      );
      setAttrValue(
        "ApprovalNameF",
        data.nameSurname.trim().split(" ")[length - 1] || ""
      );
      setAttrValue("ApprovalPosition", data.positionName || "");
      setAttrValue("ApprovalEmail", data.email || "");
    }
  } else {
    setAttrValue("ApprovalNameI", "");
    setAttrValue("ApprovalNameF", "");
    setAttrValue("ApprovalPosition", "");
    setAttrValue("ApprovalEmail", "");
  }
}

function onChangeAddReview() {
  var employeeId = EdocsApi.getAttributeValue("AddReview")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue(
        "AddReviewNameI",
        data.nameSurname.trim().split(" ")[0] || ""
      );
      setAttrValue(
        "AddReviewNameF",
        data.nameSurname.trim().split(" ")[length - 1] || ""
      );
      setAttrValue("AddReviewPosition", data.positionName || "");
      setAttrValue("AddReviewEmail", data.email || "");
    }
  } else {
    setAttrValue("AddReviewNameI", "");
    setAttrValue("AddReviewNameF", "");
    setAttrValue("AddReviewPosition", "");
    setAttrValue("AddReviewEmail", "");
  }
}

function onChangeAddApprovers() {
  var employeeId = EdocsApi.getAttributeValue("AddApprovers")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue(
        "AddApproversNameI",
        data.nameSurname.trim().split(" ")[0] || ""
      );
      setAttrValue(
        "AddApproversNameF",
        data.nameSurname.trim().split(" ")[length - 1] || ""
      );
      setAttrValue("AddApproversPosition", data.positionName || "");
      setAttrValue("AddApproversEmail", data.email || "");
    }
  } else {
    setAttrValue("AddApproversNameI", "");
    setAttrValue("AddApproversNameF", "");
    setAttrValue("AddApproversPosition", "");
    setAttrValue("AddApproversEmail", "");
  }
}

function onChangeReview() {
  var employeeId = EdocsApi.getAttributeValue("Review")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue("ReviewNameI", data.nameSurname.trim().split(" ")[0] || "");
      setAttrValue(
        "ReviewNameF",
        data.nameSurname.trim().split(" ")[length - 1] || ""
      );
      setAttrValue("ReviewPosition", data.positionName || "");
      setAttrValue("ReviewEmail", data.email || "");
    }
  } else {
    setAttrValue("ReviewNameI", "");
    setAttrValue("ReviewNameF", "");
    setAttrValue("ReviewPosition", "");
    setAttrValue("ReviewEmail", "");
  }
}

function onCardInitialize(){
 setRegDateText();
}

function setSTRDates(){
debugger
    setDateSTR('RegDate', 'RegDateText');
    
}
function setDateSTR(DateCODE, TXTcode){
debugger
    var Date = EdocsApi.getAttributeValue(DateCODE).value;
    var txt = null;
    if(Date)
        txt = moment(Date).format('DD.MM.YYYY');        
    if(txt != EdocsApi.getAttributeValue(TXTcode).value)
        EdocsApi.setAttributeValue({code: TXTcode, value: txt, text: null});
}

function setRegDateText(){
       if(EdocsApi.getAttributeValue('RegDate').value && !EdocsApi.getAttributeValue('RegDateText').value){
        setDateSTR('RegDate', 'RegDateText');
    }
}

