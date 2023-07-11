<template>
  <div id="chart">
    <apexchart type="scatter" height="550" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
name: "ScatterChart",
  data(){
    return{
      series: [{
        name: 'Semis',
        data: this.generateDayWiseTimeSeries(new Date('11 Feb 2022 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
        {
          name: 'Recoltes',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2022 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Attaques',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2022 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
      ],
      chartOptions: {
        chart: {
          height: 550,
          type: 'scatter',
          zoom: {
            type: 'xy'
          }
        },
        title: {
          text: 'Semis vs Recoltes vs Attaques',
          align: 'left'
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          max: 100
        }
      },

    }
  },
  methods:{
    generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        console.log("da:");
        console.log(y+" | "+x);

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    },
    updateChart() {
      let series = [
        {
          name: 'South',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'North',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 20
          })
        },

        {
          name: 'Central',
          data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 15
          })
        }
      ]

      this.series = series
    }
  }
}
</script>

<style scoped>

</style>