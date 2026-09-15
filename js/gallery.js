(function () {
  // Data for every chart: what image to show, its title, and its caption/explanation.
  const charts = [
    { src: "images/Q1_BarChart.png", title: "Screen Technologies Currently Available in Australia", caption: "Bar Chart for Question 1" },
    { src: "images/Q1_PieChart.png", title: "Percentages of Screen Technologies Currently Available in Australia", caption: "Pie Chart for Question 1" },
    { src: "images/Q2_BarChart.png", title: "Frequency of Screen Sizes", caption: "Bar Chart for Question 2" },
    { src: "images/Q3_BarChart.png", title: "Number of Models Per Brand", caption: "Bar Chart for Question 3" },
    { src: "images/Q4_BarChart.png", title: "Average Power Consumption per Screen Technology", caption: "Bar Chart for Question 4" },
    { src: "images/Q5_ScatterPlot.png", title: "Screen Size against Average Power Consumption", caption: "Scatter Plot for Question 5" },
    { src: "images/Q6_ScatterPlot.png", title: "Screen Size against Star Rating", caption: "Scatter Plot for Question 6" },
    { src: "images/Q7_BarChart.png", title: "Average Power Consumption per Brand", caption: "Bar Chart for Question 7" },
    { src: "images/Q7_BoxPlot.png", title: "Average Power Consumption per Brand", caption: "Box Plot for Question 7" },
  ];

  // The ONE container both views get built into. Whichever view is active,
  // the other view's elements don't exist in the DOM at all.
  const container = document.getElementById("view-container");
  const gridBtn = document.getElementById("grid-view-btn");
  const carouselBtn = document.getElementById("carousel-view-btn");

  // Which chart the carousel is currently showing.
  let currentIndex = 0;

  // Clears the container and fills it with the grid: one <figure>
  // (title + image + caption) per chart, all shown at once.
  function buildGridView() {
    container.innerHTML = ""; // wipe out whatever view was there before

    const grid = document.createElement("div");
    grid.className = "chart-grid";

    charts.forEach((chart) => {
      const figure = document.createElement("figure");
      figure.className = "chart-card";

      const title = document.createElement("h3");
      title.textContent = chart.title;

      const img = document.createElement("img");
      img.src = chart.src;
      img.alt = chart.title;

      const figcaption = document.createElement("figcaption");
      figcaption.textContent = chart.caption;

      figure.appendChild(title);
      figure.appendChild(img);
      figure.appendChild(figcaption);
      grid.appendChild(figure);
    });

    container.appendChild(grid);
  }

  // Clears the container and fills it with the carousel: just the single
  // chart at charts[currentIndex], plus prev/next buttons.
  function buildCarouselView() {
    container.innerHTML = ""; // wipe out whatever view was there before

    const chart = charts[currentIndex];

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    const title = document.createElement("h3");
    title.textContent = chart.title;

    const main = document.createElement("div");
    main.className = "carousel-main";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "←"; // left arrow
    prevBtn.setAttribute("aria-label", "Previous chart");
    prevBtn.addEventListener("click", () => {
      // % wraps the index back into range: "previous" from 0 loops to the last chart.
      currentIndex = (currentIndex - 1 + charts.length) % charts.length;
      buildCarouselView(); // rebuild the whole view at the new index
    });

    const img = document.createElement("img");
    img.src = chart.src;
    img.alt = chart.title;

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "→"; // right arrow
    nextBtn.setAttribute("aria-label", "Next chart");
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % charts.length;
      buildCarouselView();
    });

    main.appendChild(prevBtn);
    main.appendChild(img);
    main.appendChild(nextBtn);

    const caption = document.createElement("p");
    caption.textContent = chart.caption;

    const counter = document.createElement("p");
    counter.className = "muted";
    counter.textContent = `${currentIndex + 1} / ${charts.length}`;

    carousel.appendChild(title);
    carousel.appendChild(main);
    carousel.appendChild(caption);
    carousel.appendChild(counter);

    container.appendChild(carousel);
  }

  function showGridView() {
    gridBtn.classList.add("active");
    carouselBtn.classList.remove("active");
    buildGridView();
  }

  function showCarouselView() {
    carouselBtn.classList.add("active");
    gridBtn.classList.remove("active");
    buildCarouselView();
  }

  gridBtn.addEventListener("click", showGridView);
  carouselBtn.addEventListener("click", showCarouselView);

  // Grid is the default view on page load.
  buildGridView();
})();
