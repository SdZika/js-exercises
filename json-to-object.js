

   //   for(let value of data){
    //       for (let key in value) {
    //          if (key === "annotations") {
    //             if(typeof value[key] === "object")
    //                  for (let j in value[key]) {
    //                 console.log(`key: ${j}, value: ${value[key][j]}`);
    //             }
    //         } else {
    //             console.log(`key: ${key}, value: ${value[key]}`)
    //         }
    //     }
    // }

    async function fetchJSON() {
      try {
        const response = await fetch('mydata.json'); // Fetching mydata.json from the same folder
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json(); // Parsing JSON data
        return data; // Return the parsed JSON data
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null; // Return null if there's an error
      }
    }
    
    // Function to process the JSON data
    async function processData() {
      const data = await fetchJSON();
      if (data) {
        console.log('Fetched JSON data:', data);
    
        // Accessing and logging each record in the 'data' array
        data.data.forEach(record => {
          console.log(`Year: ${record.Year}, Population: ${record.Population}`);
        });
    
        // Accessing and logging the source information
        const source = data.source[0];
        console.log('Source Name:', source.annotations.source_name);
        console.log('Source Description:', source.annotations.source_description);
        console.log('Dataset Name:', source.annotations.dataset_name);
        console.log('Dataset Link:', source.annotations.dataset_link);
      }
    }
    
    // Call the function to fetch and process the JSON data
    processData();
    

