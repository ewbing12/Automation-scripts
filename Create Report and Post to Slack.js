 function postuptestToSlack(){
  var webhooktestUrl = "Private"
  var webhookUrl = "Private" 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Overview');
  var reportsheet = ss.getSheetByName('Report Sheet');
  var total_cell = sheet.getRange('C6');
  var cells_values = total_cell.getValues();
  var total_num = Number(cells_values).toFixed(2);
  var pass_cell = sheet.getRange('C7');
  var pass_values = pass_cell.getValues();
  var pass_num = Number(pass_values).toFixed(2);
  var fail_cell = sheet.getRange('C8');
  var fail_values = fail_cell.getValues();
  var fail_num = Number(fail_values).toFixed(2);
  var keydate2 = reportsheet.getRange('C2').getValues();
  var qainit2 = reportsheet.getRange("D2").getValues();
  var keyfoc2 = reportsheet.getRange('E2').getValues();
  var regress2 = reportsheet.getRange('G2').getValues();
  var block2 = reportsheet.getRange("J2").getValues();
  

  var payload = {
    "channel" : "#ws-solitaire",
    "username" : "QA EOD Report",
    "blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `*Key Dates*:\n ${keydate2} \n\n *QA Initiative*:\n ${qainit2} \n\n  *Key Focus*:\n ${keyfoc2} \n\n *Bug Written*:\n <Private|Link to Filter>\n\n *Bugs Regressed:*\n ${regress2} \n\n <Private|*Link to Regression Sheet*>\n\n *Test Percentage*:\n Total Percentage: ${total_num}% \n Pass Percentage: ${pass_num}% \n Fail Percentage: ${fail_num}% \n\n *Blockers:*\n ${block2}`
			}
		},
    ]
  };
 
 
  var options = {
  "method" : "post",
  "Content-type" : "application/json",
  "payload" : JSON.stringify(payload)
  
  };

  return UrlFetchApp.fetch(webhookUrl,options)
 }
function sendtoSlack(e){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var reportsheet = ss.getSheetByName('Report Sheet');
  var cell = e.range.getValue();
  var row = e.range.getRow();
  var col = e.range.getColumn();
  var testbuttcol = 3
  var testbuttrow = 12

  if (row == testbuttrow && col == testbuttcol && cell == true && reportsheet.getSheetName()){
      postuptestToSlack()
    
  }
}