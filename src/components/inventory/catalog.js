import { inventoryListings } from "../../data/inventoryData";

export const defaultInventoryFilters = {
  condition: "Used Cars",
  make: "Any Makes",
  model: "Any Models",
  priceRange: "Any Price",
  category: "All Body Types",
  fuel: "Any Fuel",
  inStockOnly: false,
};

export const matchesPriceRange = (price, priceRange) => {
  switch (priceRange) {
    case "Under $30k":
      return price < 30000;
    case "$30k - $50k":
      return price >= 30000 && price <= 50000;
    case "$50k+":
      return price > 50000;
    default:
      return true;
  }
};

export const getInventoryModelOptions = (make) => [
  defaultInventoryFilters.model,
  ...new Set(
    inventoryListings
      .filter(
        (vehicle) =>
          make === defaultInventoryFilters.make || vehicle.brand === make
      )
      .map((vehicle) => vehicle.model)
  ),
];

export const filterInventoryListings = (filters) =>
  inventoryListings.filter((vehicle) => {
    const matchesCondition =
      filters.condition === "All Cars" || vehicle.condition === filters.condition;
    const matchesMake =
      filters.make === defaultInventoryFilters.make || vehicle.brand === filters.make;
    const matchesModel =
      filters.model === defaultInventoryFilters.model || vehicle.model === filters.model;
    const matchesPrice = matchesPriceRange(vehicle.price, filters.priceRange);
    const matchesCategory =
      filters.category === defaultInventoryFilters.category ||
      vehicle.category === filters.category;
    const matchesFuel =
      filters.fuel === defaultInventoryFilters.fuel || vehicle.fuel === filters.fuel;
    const matchesStock = !filters.inStockOnly || vehicle.inStock;

    return (
      matchesCondition &&
      matchesMake &&
      matchesModel &&
      matchesPrice &&
      matchesCategory &&
      matchesFuel &&
      matchesStock
    );
  });

export const sortInventoryListings = (listings, sortBy) => {
  const nextListings = [...listings];

  switch (sortBy) {
    case "Lowest Price":
      return nextListings.sort((left, right) => left.price - right.price);
    case "Highest Price":
      return nextListings.sort((left, right) => right.price - left.price);
    case "Newest First":
      return nextListings.sort((left, right) => right.year - left.year);
    default:
      return nextListings;
  }
};
