function setData(sheet, val) {
  // 获取 (2, 1) 的当前值并检查是否为空
  var lastCounterCell = sheet.getRange(2, 1);
  var lastCounter = lastCounterCell.getValue();

  // 如果当前值为空，则初始化为传递的值
  if (!lastCounter) {
    lastCounter = val;
  } else {
    // 否则将当前值和传递的值相加
    lastCounter = lastCounter + val;
  }

  // 更新 (2, 1) 的值
  sheet.getRange(2, 1).setValue(lastCounter);
  
  // 插入新行并设置当前时间
  sheet.insertRows(2, 1);
  sheet.getRange(2, 2).setValue(new Date());
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');
  var params = JSON.parse(e.postData.getDataAsString());
  var val = parseInt(params.count); // 获取传递的秒数
  
  // 将秒数插入到表格中
  setData(sheet, val);
}
