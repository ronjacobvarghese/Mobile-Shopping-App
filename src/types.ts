import { navData, storeData } from "./lib/data";

export type storeDataType = typeof storeData[number] 
export type navDataType = (typeof navData)[number]["name"];
