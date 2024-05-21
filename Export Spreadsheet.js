function onOpen(e){
  SpreadsheetApp.getUi()
  .createMenu('Automation')
  .addItem("Export Test Results",'Export1',)
  .addItem('Clear by Range','clearDropDownsbyRange')
  .addToUi();

}
function Export1(){
 var ui = SpreadsheetApp.getUi()
 var response = ui.alert( "Confirm" ,"Are you sure you want to Continue?", ui.ButtonSet.YES_NO_CANCEL )

  if (response == ui.Button.YES){
    exportTemplate()
    //posttestToSlack()
  } else{
    return
  }
}

function exportTemplate(){
  var drivelocation = DriveApp.getFolderById(private);
  DriveApp.getFileById(private).makeCopy("Export of Template",drivelocation);
}

function clearDropDownsbyRange(){
  var ui1 = SpreadsheetApp.getUi();
  var response = ui1.alert( "Confirm" ,"Are you sure you want to Continue?", ui1.ButtonSet.YES_NO_CANCEL )

  if (response == ui1.Button.YES){
    clearData()
    Logger.log(clearData)

  } else{
    return
  }
}
