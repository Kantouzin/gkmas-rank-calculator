import * as fs from 'fs';
import 'date-utils';

const info = {
  lastUpdateDate: Date.today().toFormat('YYYY-MM-DD')
};

fs.writeFileSync('src/json/info.json', JSON.stringify(info, null, 0));
