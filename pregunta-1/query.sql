-- tables
CREATE TABLE market (
    marketID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    EAN INT PRIMARY KEY,
    SKU INT NOT NULL,
    name VARCHAR(255) NOT NULL,
  	marketID INT NOT NULL,
  	FOREIGN KEY (marketID) REFERENCES market(marketID)
);

CREATE TABLE price (
    priceID INT AUTO_INCREMENT PRIMARY KEY,
    normal_price INT NOT NULL,
    discount_price INT NOT NULL,
  	active INT NOT NULL,
  	create_date DATE NOT NULL,
  	productEAN INT NOT NULL,
  	FOREIGN KEY (productEAN) REFERENCES product(EAN)
);

-- query
SELECT
    product.EAN,
    product.SKU,
    product.name AS product_name,
    product.name AS market_name,
    price.normal_price AS normal_price,
    price.create_date AS create_date
FROM
    product
    JOIN market m ON p.marketID = m.marketID
    JOIN price ON product.EAN = price.productEAN
    JOIN (
        SELECT
            productEAN,
            MAX(normal_price) AS max_normal_price,
            MAX(create_date) AS max_create_date
        FROM
            price
        WHERE
            active = 1
        GROUP BY
            productEAN
    ) latest_prices ON price.productEAN = latest_prices.productEAN AND price.normal_price = latest_prices.max_normal_price AND price.create_date = latest_prices.max_create_date
WHERE
    price.active = 1;