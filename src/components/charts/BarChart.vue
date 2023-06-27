<template>
  <div id="chart">
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  data(){
    return{
      series: [{
        name: 'Semis',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Recoltes',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Semis vs Recoltes',
          align: 'left'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Mars', 'Juin', 'Sept', 'Dec', 'Juin', 'Juil', 'Aout', 'Oct'],
        },
        yaxis: {
          title: {
            text: 'valeur'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
             // return "$ " + val + " thousands"
            }
          }
        }
      },

    }
  }
}
</script>

<style scoped>

</style>