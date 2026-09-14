(function () {
const charts = [
    { src: "../images/Q1_BarChart.png", placeholder: ""},
    { src: "../images/Q1_PieChart.png", placeholder: ""},
    { src: "../images/Q2_BarChart.png", placeholder: ""},
    { src: "../images/Q3_BarChart.png", placeholder: ""},
    { src: "../images/Q4_BarChart.png", placeholder: ""},
    { src: "../images/Q5_ScatterPlot.png", placeholder: ""},
    { src: "../images/Q6_ScatterPlot.png", placeholder: ""},
    { src: "../images/Q7_BarChart.png", placeholder: ""},
    { src: "../images/Q7_BoxPlot.png", placeholder: ""},
];

const constainer = document.getElementById("gallery");

charts.forEach((chart) => {
    const figure = document.createElement("figure");
    figure.className ="chart-card";

    const img = document.createElement("img");
    img.src = chart.src
    img.placeholder = chart.placeholder;

    const figcaption = document.createElement("figurecaption");
    figcaption.textContent = chart.caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    constainer.appendChild(figure);
})
})();