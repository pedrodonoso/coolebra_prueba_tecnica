import { Data } from "../interfaces/data";

const DEFAULT_VALUE = "DEFAULT";

export const Dropdown: React.FC<{
  data: Array<Data>;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}> = ({ data, onChange }) => {
  return (
    <div className="pb-4 w-64">
      <select
        className="form-select"
        aria-label="filter"
        name="filter"
        defaultValue={DEFAULT_VALUE}
        onChange={onChange}
      >
        <option disabled value={DEFAULT_VALUE}>
          - Elija uno -
        </option>
        {data.map((item) => {
          return (
            <option value={item.Ean.productName} key={item.Ean.productName}>
              {item.Ean.productName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
