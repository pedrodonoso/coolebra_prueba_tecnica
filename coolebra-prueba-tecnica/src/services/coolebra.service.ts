import data from "../../../database/data.json";
import { Data } from "../data";

function getProducts(): Array<Data> {
  return data;
}

const coolebraServices = {
  getProducts,
};

export default coolebraServices;
