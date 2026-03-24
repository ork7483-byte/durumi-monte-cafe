import React from 'react';
import { motion } from 'motion/react';
import LottieAnimation from './LottieAnimation';

const menuData = {
  coffeeTea: [
    { name: "Espresso", price: "4" },
    { name: "Cappuccino, Latte, Short Black, Flat White, Mocha, Hot Chocolate", price: "5.5/6" },
    { name: "Long Black/ Batched Brew", price: "5/5.5" },
    { name: "Dirty Chai", price: "6.5" },
    { name: "Hot Matcha", price: "6" },
    { name: "Macchiato, Piccolo", price: "4.5" },
    { name: "Add extra shot", price: "+1" },
    { name: "Add flavour", desc: "vanilla, caramel, hazelnut", price: "+0.5" },
    { name: "Alternate Milks", desc: "Almond, Soy, Oat, Lactose Free", price: "+0.5" },
    { name: "Iced Drinks", isHeader: true },
    { name: "Iced Latte", price: "6.5" },
    { name: "Iced Long Black", price: "6" },
    { name: "Iced Coffee / Iced Chocolate (cream & Ice cream)", price: "8.5" },
    { name: "Iced Matcha", desc: "add flavour strawberry, blueberry, mango +3", price: "8" },
    { name: "Tea", isHeader: true },
    { name: "Blueberry Sencha Green", price: "6" },
    { name: "Organic English Breakfast", price: "6" },
    { name: "Wild Earl Grey", price: "6" },
    { name: "Pure Peppermint", price: "6" },
    { name: "Alternate Milks", desc: "Almond, Soy, Oat, Lactose Free", price: "+0.5" },
  ],
  coldDrinks: [
    { name: "Smoothies", isHeader: true },
    { name: "Native bliss", desc: "boysenberry, strawberry, Illawarra plum jam, mango, coconut water", price: "12" },
    { name: "Protein buff", desc: "peanut butter, banana, oats, protein powder, espresso, almond milk", price: "12" },
    { name: "Pistacha", desc: "matcha, pistachio gelato, white chocolate, w/ milk of choice", price: "14" },
    { name: "Fresh juice of the day", price: "11" },
    { name: "Shakes", desc: "vanilla, chocolate, caramel", price: "7/12" },
    { name: "Monte cold pressed juices", isHeader: true },
    { name: "ANTIOX", desc: "apple, raspberry, passionfruit, rhubarb", price: "8" },
    { name: "Energies", desc: "pineapple, silverbeet, spinach, cos lettuce, lime, mint", price: "8" },
    { name: "Tropical Bliss", desc: "orange, mango, passionfruit, lucuma", price: "8" },
  ],
  softs: [
    { name: "Coke/ Coke No Sugar", price: "5" },
    { name: "Sprite", price: "5" },
    { name: "Still Mineral Water", price: "5" },
    { name: "Sparkling Mineral Water", price: "5" },
    { name: "Rok Kombucha Range", price: "7" },
  ],
  allDay: [
    { name: "Sourdough Toast", desc: "with cultured butter and choice of strawberry jam, marmalade, peanut butter or vegemite", tags: "V, VEO, GFO", price: "9" },
    { name: "Berry Cheesecake French Toast", desc: "baked french toast, whipped cheesecake, lemon biscuit crumb & marinated berries add bacon +5", tags: "V", price: "22" },
    { name: "Avocado & Goat cheese on sourdough", desc: "spring peas, fresh mint, wasabi dressing & sesame, whipped goats curd served on sourdough – add poached egg $4", tags: "VE, GFO", price: "22" },
    { name: "Eggs Your Way", desc: "free range Eggs, poached, fried or scrambled, served on buttered sourdough w/ crispy kale -add bacon $6 -add avo $5", tags: "GFO", price: "16" },
    { name: "Egg & Bacon Roll", desc: "double bacon, fried egg, swiss cheese, lettuce, tomato relish, aioli & hash brown", tags: "GFO", price: "19" },
    { name: "Smoked Salmon & Potato Rosti", desc: "salmon, crispy rosti’s, horseradish creme friache and pea shoot salad – add avocado $5", tags: "GFO", price: "25" },
    { name: "Chilli Scrambled Eggs", desc: "house made focaccia, herb salad & salsa macha -add merguez sausage $6 -add avo $5", tags: "GFO, V", price: "23" },
    { name: "Turkish Eggs", desc: "2 poached eggs w/dill yoghurt, turkish relish, dukkha & herb salad w/ sourdough", tags: "GFO", price: "23" },
    { name: "Ricotta and lemon pancakes", desc: "Blueberry compote, maple syrup – add bacon $6", tags: "V", price: "21" },
    { name: "Mushroom on Toast", desc: "roasted mushroom, goat cheese & green salsa on sourdough", price: "20" },
  ],
  sides: [
    { name: "Chips", price: "10" },
    { name: "Smoked Salmon", price: "6" },
    { name: "Black Forest Bacon", price: "6" },
    { name: "Pork Toulouse Sausage", price: "6" },
    { name: "Hash Brown", price: "5" },
    { name: "Halloumi", price: "5" },
    { name: "Avocado", price: "5" },
    { name: "Egg (Poached or Fried)", price: "4" },
    { name: "Roasted Mushroom", price: "5" },
    { name: "Roasted Tomato", price: "5" },
  ],
  kids: [
    { name: "Bacon & Egg Roll", price: "14" },
    { name: "French Toast", price: "14" },
  ]
};

function MenuList({ title, items, delay = 0 }: { title: string, items: any[], delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl uppercase mb-8 font-medium">{title}</h2>
      <ul className="flex flex-col gap-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-start">
            {item.isHeader ? (
              <h3 className="text-lg uppercase mt-4 font-medium">{item.name}</h3>
            ) : (
              <>
                <div className="pr-4">
                  <h3 className="text-base md:text-lg uppercase font-medium">{item.name}</h3>
                  {item.desc && <p className="text-sm mt-1 max-w-[40ch] opacity-80">{item.desc}</p>}
                  {item.tags && <p className="text-xs mt-1 opacity-60">{item.tags}</p>}
                </div>
                <div className="text-base md:text-lg shrink-0">{item.price}</div>
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function MenuSection() {
  return (
    <section className="border-b-2 border-monte-orange py-16 md:py-32">
      <div className="max-w-[125rem] mx-auto px-4 lg:px-10">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <MenuList title="Coffee & Tea" items={menuData.coffeeTea} delay={0} />
          <MenuList title="Cold Drinks" items={menuData.coldDrinks} delay={0.2} />
          <MenuList title="Softs" items={menuData.softs} delay={0.4} />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 mt-16 md:mt-32">
          <div className="lg:col-span-8">
            <MenuList title="All Day Menu" items={menuData.allDay} delay={0} />
            <MenuList title="Kids" items={menuData.kids} delay={0.2} />
          </div>
          <div className="lg:col-span-4">
            <MenuList title="Sides" items={menuData.sides} delay={0.2} />
          </div>
        </div>

        {/* Coffee Cup Lottie - bottom right */}
        <div className="flex justify-end mt-8">
          <LottieAnimation path="/lottie/coffee-cup.json" className="w-[120px] h-[100px] md:w-[163px] md:h-[130px]" />
        </div>

      </div>
    </section>
  );
}
