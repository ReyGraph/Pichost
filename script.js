// Damn bro, Not gonna lie you are one hell of a copy pasta guy...
function createChart(element, data) {
    const config = {
      type: "bar",
      data: {
        labels: Object.keys(data)
          .slice(-365)
          .map((timestamp) => new Date(parseInt(timestamp) * 1000)),
        datasets: [
          {
            data: Object.values(data).slice(-365),
            backgroundColor: "red",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: (context) =>
                config.data.labels[context[0].dataIndex].toLocaleDateString("default", {
                  timeZone: "UTC",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }),
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
            grid: {
              display: false,
            },
            type: "time",
            time: {
              unit: "month",
            },
          },
          y: {
            title: {
              display: true,
              text: "Runs",
            },
            grid: {
              display: false,
            },
          },
        },
      },
    };
  
    return new Chart(element, config);
  }
  
  window.addEventListener("mousemove", (event) => {
    const x = -(window.innerWidth / 2 - event.clientX) / 30;
    const y = -(window.innerHeight / 2 - event.clientY) / 30;
    const iris = document.querySelector(".iris");
    iris.style.transform = `rotate(-45deg) translateX(${x}px) translateY(${y}px)`;
    for (element of iris.children) {
      element.style.transform = `translateX(${x * 0.2}px) translateY(${y * 0.2}px)`;
    }
  });
  