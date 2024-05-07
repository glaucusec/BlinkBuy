import React, { useContext } from "react";
import FilterSubHeading from "./FilterSubHeading";
import ColorButton from "../../../components/buttons/ColorButton";
import { QueryContext } from "../../../context/QueryContext";

let colors = [
  {
    id: "#1",
    labelText: "Aloe Green",
    query: "aloe-green",
    hexCode: "#cfd2b2",
  },
  {
    id: "#2",
    labelText: "Apricot Crush",
    query: "apricot-crush",
    hexCode: "#c57240",
  },
  {
    id: "#3",
    labelText: "Aqua Gray",
    query: "aqua-gray",
    hexCode: "#92998b",
  },
  {
    id: "#4",
    labelText: "Artic Wolf",
    query: "artic-wolf",
    hexCode: "#ddd3c9",
  },
  {
    id: "#5",
    labelText: "Astro Dust",
    query: "astro-dust",
    hexCode: "#b44141",
  },
  {
    id: "#6",
    labelText: "Avocado",
    query: "avocado",
    hexCode: "#62653a",
  },
  {
    id: "#7",
    labelText: "Baby Leaf",
    query: "baby-leaf",
    hexCode: "#737436",
  },
  {
    id: "#8",
    labelText: "Black",
    query: "black",
    hexCode: "#000000",
  },
  {
    id: "#9",
    labelText: "Blush",
    query: "blush",
    hexCode: "#f0cfc3",
  },
  {
    id: "#10",
    labelText: "Cannoli",
    query: "cannoli",
    hexCode: "#f2f0e3",
  },
  {
    id: "#11",
    labelText: "Charcoal Melange",
    query: "charcoal-melange",
    hexCode: "#6e6d74",
  },
  {
    id: "#12",
    labelText: "Circular Gray",
    query: "circular-gray",
    hexCode: "#b6b6b6",
  },
  {
    id: "#13",
    labelText: "Charcoal Melange",
    query: "charcoal-melange",
    hexCode: "#6e6d74",
  },
  {
    id: "#14",
    labelText: "Circus Blue",
    query: "circus-blue",
    hexCode: "#a3e7fd",
  },
  {
    id: "#15",
    labelText: "Cranberry Juice",
    query: "cranberry-juice",
    hexCode: "#52111b",
  },
  {
    id: "#16",
    labelText: "Dark Oak",
    query: "dark-oak",
    hexCode: "#181812",
  },
  {
    id: "#18",
    labelText: "Digital Lavander",
    query: "digital-lavender",
    hexCode: "#c4afca",
  },
];

function FilterColor() {
  const { queryParamsChangeHandler, isChecked } = useContext(QueryContext);
  return (
    <div className="filter-color py-4 border-b border-b-gray-200">
      <FilterSubHeading heading={"Color"} />
      <div className="filter-color-list-wrapper max-h-60 overflow-y-scroll no-scrollbar">
        <ul className="filter-color-list grid md:grid-cols-3 lg:grid-cols-4">
          {colors.map((color) => (
            <li
              key={color.id}
              className="filter-color-item flex flex-col items-center"
            >
              <ColorButton
                labelText={color.labelText}
                hexCode={color.hexCode}
                checked={isChecked("colors", color.query)}
                onChange={() => queryParamsChangeHandler("colors", color.query)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterColor;
