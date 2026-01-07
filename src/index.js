import "./styles.css";
import webpackImage from "./webpack.png";

const img = document.createElement("img");
img.src = webpackImage;
img.alt = "Webpack logo";

document.getElementById("root").appendChild(img);