const btn_opcoes_navbar = document.querySelector("#btn_opcoes_navbar");
const aba_opcoes_navbar = document.querySelector(".aba_opcoes_navbar");

btn_opcoes_navbar.addEventListener("click", () => {
  const icone = btn_opcoes_navbar.querySelector("i");

  //Para aparecer o bloco de opções do navbar
  aba_opcoes_navbar.classList.toggle("visivel");

  //Para mudar o icone de acordo com a visibilidade das opções do navbar
  icone.classList.toggle("fa-bars");
  icone.classList.toggle("fa-caret-down");

  //Para animar o icone, deixar mais bonito no resultado final
  icone.classList.remove("animar_icone");

  void icone.offsetWidth;

  icone.classList.add("animar_icone");
});

function criarGrafico(id, tipo, ) {
  
    return new Chart(document.getElementById(id), {

    type: "line",

    data: {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: dados,
        borderWidth: 2,
        fill: true,
        borderColor: "rgb(0, 98, 255)",
        backgroundColor: "rgba(149, 190, 255, 0.42)",
        pointRadius: 1.5,
        pointBackgroundColor: "rgb(0, 63, 163)",
        pointBorderColor: "rgb(0, 63, 163)",
        tension: 0.3,
      },
    ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      animation: {
        duration: 1000,
        easing: "easeOutBounce",
      },

      plugins: {
        title: {
          display: true,
          text: "Finanças",
          color: "white",
        },

        legend: {
          display: false,
        },
      },

      scales: {
        x: {
          ticks: {
            color: "white",

            font: {
              weight: "bold",
            },
          },

          grid: {
            color: "rgba(0, 62, 163, 0)",
          },
        },

        y: {
          ticks: {
            color: "white",

            font: {
              weight: "bold",
            },
          },

          grid: {
            color: "rgba(0, 62, 163, 0)",
          },
        },
      },
    },
  });
}

//configurações gerais dos gráficos utilizados nos códigos
const configuracoesGrafico = {};



  

