// Our labels along the x-axis
var years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
// For drawing the lines
//var africa = [86,114,106,106,107,111,133,221,783,2478];
//var asia = [282,350,411,502,635,809,947,1402,3700,5267];
//var europe = [168,170,178,190,203,276,408,547,675,734];
//var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
//var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: [14, 22, 34, 22, 30, 38, 45, 59, 85, 81, 1],
        label: "-1_sars cov_cov_sar_heart",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: [8, 10, 7, 8, 3, 3, 5, 9, 5, 6, 0],
        label: "0_cooper_game_punish_dilemma",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: [1, 0, 1, 2, 2, 3, 4, 10, 10, 14, 0],
        label: "1_extract_phenol_antioxid_content",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: [5, 2, 4, 4, 5, 3, 3, 3, 12, 4, 0],
        label: "2_ckd_creatinin_kidney_ckd patient",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: [4, 6, 5, 4, 3, 5, 3, 9, 2, 2, 0] ,
        label: "3_nemat_chiral_liquid cryst_defect",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});