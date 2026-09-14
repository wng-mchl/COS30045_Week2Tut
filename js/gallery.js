(function () {
    const charts = [
        { src: "../images/Q1_BarChart.png", title: "", placeholder: "" },
        { src: "../images/Q1_PieChart.png", title: "", placeholder: "" },
        { src: "../images/Q2_BarChart.png", title: "", placeholder: "" },
        { src: "../images/Q3_BarChart.png", title: "", placeholder: "" },
        { src: "../images/Q4_BarChart.png", title: "", placeholder: "" },
        { src: "../images/Q5_ScatterPlot.png", title: "", placeholder: "" },
        { src: "../images/Q6_ScatterPlot.png", title: "", placeholder: "" },
        { src: "../images/Q7_BarChart.png", title: "", placeholder: "" },
        { src: "../images/Q7_BoxPlot.png", title: "", placeholder: "" },
    ];

    const container = document.getElementById("gallery");

    charts.forEach((chart) => {
        const figure = document.createElement("figure");
        figure.className = "chart-card";

        const title = document.createElement("h3");
        title.textContent = chart.title;
        const img = document.createElement("img");
        img.src = chart.src
        img.placeholder = chart.placeholder;

        const figcaption = document.createElement("figurecaption");
        figcaption.textContent = chart.caption;

        figure.appendChild(title);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        container.appendChild(figure);
    })
})();