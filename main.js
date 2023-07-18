import "./style.css";

const COLOR_PALETTE = {
  "#9b5de5": "Medium Purple",
  "#f15bb5": "Hot Pink",
  "#fee440": "Gorse",
  "#00bbf9": "Deep Sky Blue",
  "#00f5d4": "Bright Turquoise",
};

Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
});

const colorPickerSelect = document.querySelector("#color-picker");
Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
  colorPickerSelect.append(option);
});

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};
addOptionsToColorPicker();

const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const colorName = document.querySelector("#color-name");
    colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorName.innerText = COLOR_PALETTE[newColor];
    });
    };
    addOptionsToColorPicker();
    addEventListenerToColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";


