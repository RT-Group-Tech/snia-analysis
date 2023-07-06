<template>

  <div id="chart">
    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>

</template>

<script>
export default {
name: "LineChart",
  data()
  {
      return{
        series: [{
          name: '',
          data: [30, 40, 45, 50, 49, 45, 0, 9]
        }],
        chartOptions: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: 'Indice autosufisance alimentaire',
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
            title: {
              text: 'indice'
            },
          },
          xaxis: {
            type: 'datetime',
            categories: ['01/01/2023', '02/01/2023','03/01/2023','04/01/2023','05/01/2023','06/01/2023','07/01/2023','08/01/2023']
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
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