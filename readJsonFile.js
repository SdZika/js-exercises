const fs = require('fs');
const path = require('path');

// Get the path to the JSON file
const filePath = path.join(__dirname, 'data.json');

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log('JSON data:', jsonData);

        // Log specific values from the object
        sourceArray = jsonData.source;
        for(let value of sourceArray){
            
            for (let key in value) {
                
                if (key === "annotations") {
                    if(typeof value[key] === "object")
                    
                    for (let j in value[key]) {
                        console.log(`key: ${j}, value: ${value[key][j]}`);
                    }
                } else {
                    console.log(`key: ${key}, value: ${value[key]}`)
                }
            }
        }
    } catch (err) {
        console.error('Error parsing JSON', err);
    }
});
