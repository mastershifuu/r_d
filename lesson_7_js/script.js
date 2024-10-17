const fs = require('fs');

// Читаємо JSON файл
fs.readFile('test-data/spaces.json', 'utf8', (err, data) => {

    const response = JSON.parse(data);
    response.folders.forEach(folder => {
        if (folder.lists && Array.isArray(folder.lists)) {
            // 1) Виведення всіх ID об'єктів "lists"
            folder.lists.forEach(list => {
                console.log("List ID:", list.id);
            });

            // 2) Виведення space.name та space.id для тих lists, де ім'я починається зі слова "test"
            folder.lists.forEach(list => {
                if (list.name.toLowerCase().startsWith("test")) {
                    console.log(`Space Name: ${list.space.name}, Space ID: ${list.space.id}`);
                }
            });
        }
    });
});
