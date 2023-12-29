import json

with open('../database/data.json') as f:
   data = json.load(f)

print(data)