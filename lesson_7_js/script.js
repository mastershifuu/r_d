const fs = require('fs');

fs.readFile('test-data/spaces.json', 'utf8', (err, data) => {

    const response = JSON.parse(data);
    response.folders.forEach(folder => {
        if (folder.lists && Array.isArray(folder.lists)) {
            folder.lists.forEach(list => {
                console.log("List ID:", list.id);
            });

            folder.lists.forEach(list => {
                if (list.name.toLowerCase().startsWith("test")) {
                    console.log(`Space Name: ${list.space.name}, Space ID: ${list.space.id}`);
                }
            });
        }
    });
});
