export type StockPriceBoard = {
  fertilizers: number;
  seeds: number;
  machinery: number;
  foodProcessing: number;
  plantations: number;
  edibleOils: number;
  updatedAt: string;
  source: string;
};

export async function getStockPriceBoard(): Promise<StockPriceBoard> {
  return {
    fertilizers: 2009.6,
    seeds: 810.9,
    machinery: 2967.2,
    foodProcessing: 625.55,
    plantations: 318.6,
    edibleOils: 1419.4,
    updatedAt: "2026-04-08T15:30:00+05:30",
    source: "Latest stock snapshot"
  };
}
