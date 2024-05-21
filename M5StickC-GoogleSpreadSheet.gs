function setData(sheet, val) {
  // 获取 (2, 1) 的当前值
  var lastCounterCell = sheet.getRange(2, 1);
  var lastCounter = lastCounterCell.getValue();
  
  // 初始化 (2, 1) 的值为1，如果为空
  if (!lastCounter) {
    lastCounter = 1;
  } else {
    lastCounter = lastCounter + 1;
  }
  
  
  // 插入新行并设置值
  sheet.insertRows(2, 1);
  sheet.getRange(2, 1).setValue(lastCounter);
  sheet.getRange(2, 2).setValue(new Date());
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');
  var params = JSON.parse(e.postData.getDataAsString());
  var val = params.check;
  
  // 将值插入到表格中
  setData(sheet, val);
}
