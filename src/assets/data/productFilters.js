export default [
  {
    id: "filter-1",
    type: "priceRange",
    title: "price",
    values: {
      startingPrice: 0,
      endingPrice: 300,
    },
  },
  {
    id: "filter-2",
    type: "colorCheckbox",
    title: "colors",
    values: [
      {
        value: "red",
        colorCode: "#da4c4c",
      },
      {
        value: "orange",
        colorCode: "#ed9237",
      },
      {
        value: "yellow",
        colorCode: "#f9d94c",
      },
      {
        value: "green",
        colorCode: "#70d44e",
      },
      {
        value: "blue",
        colorCode: "#6ab7d0",
      },
      {
        value: "pink",
        colorCode: "#e687a5",
      },
      {
        value: "black",
        colorCode: "#1e1e1e",
      },
      {
        value: "white",
        colorCode: "#ededed",
      },
    ],
  },
];
