import { navData, storeData } from "./lib/data";

export type storeDataType = typeof storeData[number] 
export type storeTitleType = typeof storeData[number]['title']
export type navDataType = (typeof navData)[number]["name"] | "Detail";
export type CartProductType = {
  product: Partial<storeDataType>;
  size: "S" | "M" | "L";
  quantity: number;
};
