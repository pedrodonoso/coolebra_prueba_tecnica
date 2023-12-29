import data from "../../../../database/react_data.json";
import { Data } from "../data";

function getProducts(): Array<Data> {
  return data.data;
}

const coolebraServices = {
  getProducts,
};

export default coolebraServices;
