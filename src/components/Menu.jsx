import { foodItems } from "./Menu/Foods/foodItems";
import Foods from "./Menu/Foods/Foods";
import RiceMeal from "./Menu/Rice Meal/RiceMeal";
import { ricemealItems } from "./Menu/Rice Meal/ricemealItems";
import { coffeeItems } from "./Menu/Coffee/coffeeItems";
import Coffee from "./Menu/Coffee/Coffee";
import Soda from "./Menu/Soda/Soda";
import { sodaItems } from "./Menu/Soda/sodaItems";
import NonCoffee from "./Menu/Non Coffee/NonCoffee";
import { noncoffeeItems } from "./Menu/Non Coffee/noncoffeeItems";
import ShortOrder from "./Menu/Short Order/ShortOrder";
import { shortorderItems } from "./Menu/Short Order/shortorderItems";
import Soup from "./Menu/Soup/Soup";
import { soupItems } from "./Menu/Soup/soupItems";
import Lomi from "./Menu/Lomi/Lomi";
import { lomiItems } from "./Menu/Lomi/lomiItems";
import Pasta from "./Menu/Pasta/Pasta";
import { pastaItems } from "./Menu/Pasta/pastaItems";
import Pastry from "./Menu/Pastry/Pastry";
import { pastryItems } from "./Menu/Pastry/pastryItems";

export default function Menu({ category, search = "" }) {

  const filterBySearch = (items) =>
    items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCoffeeItems = category === "Coffee" ? filterBySearch(coffeeItems) : [];
  const filteredNonCoffeeItems = category === "Non Coffee" ? filterBySearch(noncoffeeItems) : [];
  const filteredFoodItems = category === "Foods" ? filterBySearch(foodItems) : [];
  const filteredRiceMealItems = category === "Rice Meal" ? filterBySearch(ricemealItems) : [];
  const filteredShortOrderItems = category === "Short Order" ? filterBySearch(shortorderItems) : [];
  const filteredSoupItems = category === "Soup" ? filterBySearch(soupItems) : [];
  const filteredSodaItems = category === "Soda" ? filterBySearch(sodaItems) : [];
  const filteredLomiItems = category === "Lomi" ? filterBySearch(lomiItems) : [];
  const filteredPastaItems = category === "Pasta" ? filterBySearch(pastaItems) : [];
  const filteredPastryItems = category === "Pastry" ? filterBySearch(pastryItems) : [];

  const totalResults = 
    filteredCoffeeItems.length +
    filteredNonCoffeeItems.length +
    filteredFoodItems.length +
    filteredRiceMealItems.length +
    filteredShortOrderItems.length +
    filteredSoupItems.length +
    filteredSodaItems.length +
    filteredLomiItems.length +
    filteredPastaItems.length +
    filteredPastryItems.length;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCoffeeItems.map((coffee, index) => <Coffee key={index} coffee={coffee} />)}
        {filteredNonCoffeeItems.map((noncoffee, index) => <NonCoffee key={index} noncoffee={noncoffee} />)}
        {filteredFoodItems.map((food, index) => <Foods key={index} food={food} />)}
        {filteredRiceMealItems.map((ricemeal, index) => <RiceMeal key={index} ricemeal={ricemeal} />)}
        {filteredShortOrderItems.map((shortorder, index) => <ShortOrder key={index} shortorder={shortorder} />)}
        {filteredSoupItems.map((soup, index) => <Soup key={index} soup={soup} />)}
        {filteredSodaItems.map((soda, index) => <Soda key={index} soda={soda} />)}
        {filteredLomiItems.map((lomi, index) => <Lomi key={index} lomi={lomi} />)}
        {filteredPastaItems.map((pasta, index) => <Pasta key={index} pasta={pasta} />)}
        {filteredPastryItems.map((pastry, index) => <Pastry key={index} pastry={pastry} />)}

        {/* Show a message if nothing matches */}
        {totalResults === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              {search.trim() !== "" 
                ? `No items found matching "${search}"`
                : "No items available in this category"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}