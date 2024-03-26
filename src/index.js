import fs from 'fs';
import path from 'path';

const parser = (filepath1, filepath2) => {       
  const obj1 = JSON.parse(fs.readFileSync(path.resolve(filepath1)));    
  const obj2 = JSON.parse(fs.readFileSync(path.resolve(filepath2)));
  const obj3 = compare(obj1, obj2);
  const str = JSON.stringifyAndSort(obj3);
  console.log(str);  
}

export default parser;