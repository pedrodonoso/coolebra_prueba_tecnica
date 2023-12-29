import { EAN } from "../interfaces/data";

export const Card: React.FC<{ data: EAN }> = ({ data }) => {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-l font-bold  text-gray-900 dark:text-white">
        {data.productName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Rango de precios : <b>{data.priceRange}</b>
      </p>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        Cantidad de Markets: <b>{data.marketCount}</b>
      </p>
    </a>
  );
};
