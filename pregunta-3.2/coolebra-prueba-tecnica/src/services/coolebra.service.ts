import data from "../../../../database/react_data.json";
import { Data } from "../interfaces/data";

function getProducts(): Array<Data> {
  return data.data;
}

const coolebraServices = {
  getProducts,
};

export default coolebraServices;
