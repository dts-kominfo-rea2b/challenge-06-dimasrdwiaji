// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
let splittedArr = [];

function bacaData(fnCallback) {
  let fileList = [file1, file2, file3];
  for (const element of fileList) {
    fs.readFile(element, 'utf-8', (err, data) => {
      if (err) {
        return console.log(`Error : ` + err);
      } else {
        const parsedData = JSON.parse(data);
        if (parsedData.message !== undefined) {
          let splittedData = parsedData.message.split(' ');
          const lastWord = splittedData[1];
          fnCallback(err, lastWord);
      
        // Condition for JSON file like data2.json
        } else if (parsedData[0].message !== undefined) {
          let splittedData = parsedData[0].message.split(' ');
          const lastWord = splittedData[1];
          fnCallback(err, lastWord);
      
        // Condition for JSON file like data3.json
        } else if (parsedData[0]['data'].message !== undefined) {
          let splittedData = parsedData[0]['data'].message.split(' ');
          const lastWord = splittedData[1];
          fnCallback(err, lastWord);
        }

        function fnCallback(err, secondWord) {
          if (err) {
            return console.log(`Error : ` + err);
          } else {
            splittedArr.push(secondWord);
            console.log(splittedArr);
          }
        }
      }
    })
  }
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
