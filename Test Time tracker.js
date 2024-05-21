function timestampTest(e) {
addTimestamp(e);
}

function addTimestamp(e) {
  //Android Test Columns
  var startRow = 4;
  var taskBeginCol = (11)
  var taskEndCol = taskBeginCol + 1
  var resetTimeCol = taskBeginCol + 2
  var timeBeginCol = taskBeginCol + 3
  var timeEndCol = taskBeginCol + 4
//iOS Test Columns
  var startRow = 4;
  var taskBeginCol1 = (21)
  var taskEndCol1 = taskBeginCol1 + 1
  var resetTimeCol1 = taskBeginCol1 + 2
  var timeBeginCol1 = taskBeginCol1 + 3
  var timeEndCol1 = taskBeginCol1 + 4

//This code is the start of the script and is targeting the sheet that the user is actively editing.
  SpreadsheetApp:
  var row = e.range.getRow();
  var col = e.range.getColumn();
  var cell = e.range.getValue();
  var activeSheet = e.source.getActiveSheet()

//Android Script Starting Point
  if (col == taskBeginCol && row >= startRow && activeSheet.getName()){
    var currentDate = new Date();

    if(activeSheet.getRange(row,timeBeginCol).isBlank() && cell == true){
      activeSheet.getRange(row, timeBeginCol).setValue(currentDate);
    }
  
  }
  if (col == taskEndCol && row >= startRow && activeSheet.getName()){
    var currentDate = new Date();

    if(activeSheet.getRange(row,timeEndCol).isBlank() && cell == true){
      activeSheet.getRange(row, timeEndCol).setValue(currentDate);
    }
  }
  if (col == resetTimeCol && row >= startRow && activeSheet.getName()){
    if(cell == true){
      activeSheet.getRange(row,taskBeginCol).clearContent();
      activeSheet.getRange(row,taskEndCol).clearContent();
      activeSheet.getRange(row,timeBeginCol).clearContent();
      activeSheet.getRange(row,timeEndCol).clearContent();
      activeSheet.getRange(row,resetTimeCol).clearContent();

//Android Script Ending point
    }

  }
  //iOS Script Starting Point
    if (col == taskBeginCol1 && row >= startRow && activeSheet.getName()){
    var currentDate = new Date();

    if(activeSheet.getRange(row,timeBeginCol1).isBlank() && cell == true){
      activeSheet.getRange(row, timeBeginCol1).setValue(currentDate);
    }
  
  }
if (col == taskEndCol1 && row >= startRow && activeSheet.getName()){
    var currentDate = new Date();

    if(activeSheet.getRange(row,timeEndCol1).isBlank() && cell == true){
      activeSheet.getRange(row, timeEndCol1).setValue(currentDate);
    }
  }
  if (col == resetTimeCol1 && row >= startRow && activeSheet.getName()){
    if(cell == true){
      activeSheet.getRange(row,taskBeginCol1).clearContent();
      activeSheet.getRange(row,taskEndCol1).clearContent();
      activeSheet.getRange(row,timeBeginCol1).clearContent();
      activeSheet.getRange(row,timeEndCol1).clearContent();
      activeSheet.getRange(row,resetTimeCol1).clearContent();

//iOS Script Ending Point
    }

  }
}
//End of Script