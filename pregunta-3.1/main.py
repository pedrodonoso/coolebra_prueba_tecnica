import json
from itertools import groupby


class CoolebraAPI:
    data = None
    result = None

    def __init__(self):
        self._x = None

    def run(self):
        with open("../database/python_result.json") as f:
            result = json.load(f)
            self.data = result["data"]

    def groupByEan(self):
        getKey = lambda x: x["EAN"]

        dataList = []
        for key, grup in groupby(self.data, key=getKey):
            grup = list(grup)
            productName = grup[0]["productName"]
            priceList = [item["lastLowestPrice"] for item in grup]
            priceRange = max(priceList) - min(priceList)
            marketList = [item["marketName"] for item in grup]
            marketCount = len(set(marketList))

            productList = [
                {
                    attribute: item[attribute]
                    for attribute in ["lastLowestPrice", "SKU", "marketName"]
                }
                for item in grup
            ]

            item = {
                key: {
                    "productName": productName,
                    "data": productList,
                    "marketCount": marketCount,
                    "priceRange": priceRange,
                }
            }
            dataList.append(item)
        self.result = dataList


if __name__ == "__main__":
    coolebra = CoolebraAPI()
    coolebra.run()
    print("Datos obtenidos de json: ", coolebra.data)
    coolebra.groupByEan()
    print("Datos resultado: ", coolebra.result)
