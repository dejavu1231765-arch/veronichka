const fs = require('fs');
const path = require('path');
const saveFile = path.resolve(__dirname, 'saveData.json');

function saveProgress(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(saveFile, json, 'utf8');
  console.log('Данные сохранены в', saveFile);
}

const example = {
  date: new Date().toISOString(),
  currentStage: 1,
  answers: {
    stage1: '',
    stage2: '',
    stage3: ''
  }
};

saveProgress(example);
