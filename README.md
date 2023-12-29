# coolebra_prueba_tecnica

# Preguntas

![Alt text](image.png)

1. Mediante una query SQL, obtener los productos indicando su último menor precio activo, EAN, SKU y su mercado (market).
2. Teniendo en cuenta el modelo de la imagen 1, describa con palabras un proceso que tenga que ser ejecutado cada cierto tiempo (automatización) y que obtenga información “relevante” diferente a la pedida en la pregunta 1.
3. Basándose en los datos obtenidos en la respuesta de la pregunta 1
   1. Escribir una función en Python que recorra los datos y agrupe los productos mediante su Ean en el siguiente diccionario
   
    ```json
    {
        “Ean”: {
                “nombre producto (asumir que los productos con mismo Ean tienen el mismo nombre)”,
                “datos de la query”: [ 
                    “listado de los datos que vienen en la query”, 
                ],
                “cantidad de markets diferentes”,
                “rango de precios (Mayor precio - Menor precio)”
        },
    }
    ```
   2. El diccionario anterior debe ser recorrido mediante React, en donde se debe crear componentes HTML que contendrán el nombre del producto, el rango de precios y en cuántos mercados diferentes se encuentra. Poner un input en donde se puede filtrar los productos que se ven por su nombre y utilizando hooks (useEffect) hacer que los productos que no se deben ver vayan desapareciendo 1 a 1 cada segundo.

- Consideraciones:
  - No es necesario que el HTML tenga CSS o algún tipo de estilo.
  - El arreglo de diccionarios puede estar definido como constante dentro de React y su data debe ser inventada, al menos 3 Eans diferentes.
  - Al cargar la página se debe poder ver el HTML creado
  - Diagrama sobre precios de los productos. SKU es un valor único que lo relaciona con el mercado, Ean es un identificador único que lo provee el proveedor del producto a nivel mercado. Un producto en diferentes mercados puede tener el mismo Ean, pero diferente SKU.


```json
    {
        "Ean": {
                "productName": "PROD_01",
                "data": [
                    {
                        "lastLowestPrice" : 2300,
                        "SKU": 123,
                        "marketID": 23,
                        "marketName": "MERC_01"
                    },
                    {
                        "lastLowestPrice" : 2400,
                        "SKU": 342,
                        "marketID": 297,
                        "marketName": "MERC_02"
                    },
                    {
                        "lastLowestPrice" : 1300,
                        "SKU": 344,
                        "marketID": 395,
                        "marketName": "MERC_03"
                    },
                    {
                        "lastLowestPrice" : 2570,
                        "SKU": 656,
                        "marketID": 575,
                        "marketName": "MERC_04"
                    }
                ],
                "marketCount": 20,
                "priceRange": 4300
        },
    }
    ```