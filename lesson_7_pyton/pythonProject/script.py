import json

with open('spaces.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for folder in data['folders']:
    lists = folder.get('lists', [])

    for lst in lists:
        print(f"List ID: {lst['id']}")

    for lst in lists:
        if lst['name'].lower().startswith("test"):
            space_name = lst['space']['name']
            space_id = lst['space']['id']
            print(f"Space Name: {space_name}, Space ID: {space_id}")
