const fs = require('fs');

fs.readFile('test-data/spaces.json', 'utf8', (err, data) => {

    const jsonData = JSON.parse(data);
    jsonData.folders.forEach(folder => {
        if (folder.lists && Array.isArray(folder.lists)) {
            folder.lists.forEach(list => {
                console.log("List ID:", list.id);
            });

            folder.lists.forEach(list => {
                if (list.name.startsWith("test")) {
                    console.log(`List Name: ${list.space.name}, List ID: ${list.space.id}`);
                }
            });
        }
    });
});
