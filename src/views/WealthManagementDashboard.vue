<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-gradinent sticky-top">
      <header-logo />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="row container-filter">
          <div class="col-sm-12 col-md-3">
            <div class="text-center py-2 pb-3">
              <span class="text-white text-center">Donnée</span>
              <select class="custom-select custom-select-sm mt-1 text-center select-boxes1" style="" v-model="measure"
                @change="getMeasureSelector()">
                <option value="Asset Under Management" selected>Riz</option>
                <option value="Revenue">Mais</option>
                <option value="Revenue">Manioc</option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="text-center py-2 pb-3">
              <span class="text-white text-center">Province</span>
              <select class="custom-select custom-select-sm mt-1 text-center select-boxes1" style="" v-model="measure"
                @change="getMeasureSelector()">
                <option value="Asset Under Management" selected>Haut-Katanga</option>
                <option value="Revenue">Kasai</option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 ">
            <div class="text-center py-2">
              <span class="text-white text-center">Périodicité</span>
              <select class="custom-select custom-select-sm mt-1 text-center select-boxes2" style="" v-model="prior"
                @change="getPriorSelector()">
                <!-- <option selected="" value="Year">Year</option> -->
                <option value="Month">Mensuel</option>
                <option value="Quarter">Trimestriel</option>
                <option value="Year">Annuel</option>

              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 ">
            <div class="text-center py-2">
              <span class="text-white text-center">Période fin</span>
              <select v-if="prior == 'Month'" class="custom-select custom-select-sm mt-1 text-center select-boxes3"
                v-model="date" @change="getdateSelector()">
                <option value="1-1-2011">Jan-2023</option>
                <option value="2-1-2011">Fev-2023</option>
                <option value="3-1-2011">Mar-2023</option>
                <option value="4-1-2011">Apr-2023</option>
                <option value="5-1-2011">Mai-2023</option>
                <option value="6-1-2011">Juin-2013</option>

              </select>
              <select v-if="prior == 'Quarter'" class="custom-select custom-select-sm mt-1 text-center select-boxes3"
                v-model="date" @change="getdateSelector()">

                <option value="Q1-2011">Q1-2011</option>
                <option value="Q2-2011">Q2-2011</option>
                <option value="Q3-2011">Q3-2011</option>
                <option value="Q4-2011">Q4-2011</option>
                <option value="Q1-2012">Q1-2012</option>
                <option value="Q2-2012">Q2-2012</option>
                <option value="Q3-2012">Q3-2012</option>
                <option value="Q4-2012">Q4-2012</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid mt-4">
      <div class="row">
        <main class="main-content col-lg-12 col-md-12 col-sm-12 p-0">
          <div class="main-content-container container-fluid px-4">
            <div class="row">

              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <SmallStatsBlock stateblockname="Semis" :data="item" :measureFilterValues="measureFilterValues"
                  :prior="prior" :date="selectedDate" blockConfig="AUM" :filterApplied=filterApplied />
              </div>
              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <SmallStatsBlock stateblockname="Menages Agricoles" :data="item"
                  :measureFilterValues="measureFilterValues" :prior="prior" :date="selectedDate" blockConfig="Revenue"
                  :filterApplied=filterApplied />
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <SmallStatsBlock stateblockname="Suffisance alimentaire" :data="item"
                  :measureFilterValues="measureFilterValues" :prior="prior" :date="selectedDate" blockConfig="Sales"
                  :filterApplied=filterApplied />
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <SmallStatsBlock stateblockname="Production" :data="item" :measureFilterValues="measureFilterValues"
                  :prior="prior" :date="selectedDate" blockConfig="ACAT" :filterApplied=filterApplied />
              </div>
              <div class="col-lg col-md-4 col-sm-12 mb-4">
                <SmallStatsBlock stateblockname="Attaques" :data="item" :measureFilterValues="measureFilterValues"
                  :prior="prior" :date="selectedDate" blockConfig="FA" :filterApplied=filterApplied />
              </div>
            </div>
            <!-- End Small Stats Blocks -->
            <!-- Chart Area -->
            <div class="row">

              <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
                <div id="containerId" class="h-100">
                  <div class="card card-small">
                    <div class="card-body mt-0 pt-0">
                      <barChart></barChart>
                    </div>
                  </div>
                </div>

              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
                <div id="containerId" class="h-100">
                  <div class="card card-small">
                    <div class="card-body mt-0 pt-0">
                      <lineChart></lineChart>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div id="containerId" class="h-100">
                  <div class="card card-small">
                    <div class="card-body mt-0 pt-0">
                      <scatterChart></scatterChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Chart Area -->
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import HeaderLogo from "./widgets/logo";
//import RenderChart from "../components/RenderChart.vue";
import SmallStatsBlock from "../components/SmallStats.vue";
//import { baseUrl } from '../../vue.config';
import commonJs from "../util/common";
import barChart from "../components/charts/BarChart";
import lineChart from "../components/charts/LineChart";
import scatterChart from "../components/charts/ScatterChart";

export default {
  name: "WealthManagementDashboard",
  data() {
    return {
      filterApplied: '',
      isLoading: true,
      item: [],
      pageheaderdata: {
        pageName: "Dashboard",
        dashboardName: "Snia"
      },
      measure: "Asset Under Management",
      prior: "Month",
      date: "2-1-2011",
      selectedDate: '2-1-2011',
      measureFilterValues: {
        currentParam: "AUM",
        prevParam: "PreviousPeriodAUM"
      },
      statewiseMapConfig: {
        charttype: "usa",
        renderat: "chart-container-map",
        dataKey: "uniqueStates",
        filterElement: "State",
        yAxis: "States",
        xAxis: "Amount (In USD)",
        theme: "fusion",
        seriesname1: "Current Period",
        seriesname2: "Previous Period",
        minheight: "min-height:350px"
      },
      advisorwiseMapConfig: {
        charttype: "scrollcombidy2d",
        renderat: "chart-container-top-adv",
        dataKey: "uniqueAdvisors",
        filterElement: "Advisor",
        yAxis: "Advisors",
        xAxis: "Amount (In USD)",
        theme: "fusion",
        seriesname1: "Current Period",
        seriesname2: "Previous Period",
        minheight: "min-height:350px"
      },
      regionwiseMapConfig: {
        charttype: "overlappedBar2d",
        renderat: "chart-container-reg",
        dataKey: "uniqueRegions",
        filterElement: "Region",
        yAxis: "Regions",
        xAxis: "Amount (In USD)",
        theme: "fusion",
        seriesname1: "Current Period",
        seriesname2: "Previous Period",
        minheight: "min-height:304px"
      },
      regionwiseMonthlyMapConfig: {
        charttype: "msline",
        renderat: "chart-container-reg-monthly",
        dataKey: "uniqueRegions",
        filterElement: "Region",
        yAxis: "Regions",
        xAxis: "  ",
        theme: "fusion",
        seriesname1: "Current Period",
        seriesname2: "Previous Period",
        minheight: "min-height:304px"
      },
      productwiseMapConfig: {
        charttype: "overlappedBar2d",
        renderat: "chart-container-product",
        dataKey: "uniqueProduct",
        filterElement: "Product",
        yAxis: "Products",
        xAxis: "Amount (In USD)",
        theme: "fusion",
        seriesname1: "Current Period",
        seriesname2: "Previous Period",
        minheight: "min-height:304px"
      },
      quarterDate: {
        Q1: 3,
        Q2: 6,
        Q3: 9,
        Q4: 12
      },
      lastSelectedDate: '2-1-2011',
      currentMesure: "Feb'11",
      previousMeasure: "Jan'11",
    };
  },

  computed: {
    hasFilter() {
      return this.$store.state.filterData && this.$store.state.filterData.data.value;
    }
  },

  watch: {
    hasFilter() {
      this.setFilter();
    }
  },

  components: {
    SmallStatsBlock,
    PageHeader,
    HeaderLogo,
    barChart,
    lineChart,
    scatterChart
  },

  methods: {
    setFilter() {
      this.filterApplied = this.hasFilter;
    },
    getMeasureSelector() {
      this.measure = this.measure;

      if (this.measure === "Asset Under Management") {
        this.measureFilterValues.currentParam = "AUM";
      }
      if (this.measure === "Revenue") {
        this.measureFilterValues.currentParam = "Revenue";
      }
      if (this.measure === "Sales") {
        this.measureFilterValues.currentParam = "Sales";
      }
      if (this.measure === "ACATS") {
        this.measureFilterValues.currentParam = "ACAT";
      }
      if (this.measure === "FAS") {
        this.measureFilterValues.currentParam = "FA";
      }
      if (this.measure === "New Net Money") {
        this.measureFilterValues.currentParam = "NewNetMoney";
      }
    },

    getdateSelector() {
      this.date = this.date;
      this.prior = this.prior;
      if (this.prior === "Month") {
        this.date = this.date;
        this.selectedDate = this.date;
        const prevdate = commonJs.getDate("getPreviousDate", this.date);
        this.previousMeasure = commonJs.getDate('changedDateFormatForTooltip', prevdate);
        this.currentMesure = commonJs.getDate('changedDateFormatForTooltip', this.selectedDate);
      } else {
        const dateArray = this.date.split("-");
        this.selectedDate = `${this.quarterDate[dateArray[0]]}-1-${dateArray[1]}`;
        this.getPreviousQuarter(this.date);
        this.currentMesure = this.date.replace("-", " ");
      }
    },

    getPreviousQuarter(date) {
      const dateArray = this.date.split("-");
      const quarterCount = date.substr(1, 1) * 1;
      let getPreviousQuarter;
      if (quarterCount === 1) {
        const year = dateArray[1] - 1;
        const quarter = 'Q4 ';
        getPreviousQuarter = quarter + year;
      } else {
        const year = dateArray[1];
        const quarter = quarterCount - 1;
        getPreviousQuarter = `Q${quarter} ${year}`;
      }
      this.previousMeasure = getPreviousQuarter;
    },

    getPriorSelector() {
      this.prior = this.prior;
      if (this.prior === "Month") {
        this.date = this.lastSelectedDate;
        const prevdate = commonJs.getDate("getPreviousDate", this.date);
        this.previousMeasure = commonJs.getDate('changedDateFormatForTooltip', prevdate);
        this.currentMesure = commonJs.getDate('changedDateFormatForTooltip', this.lastSelectedDate);
      } else {
        this.lastSelectedDate = this.date;
        const dateArray = this.date.split("-");
        let quarter;
        let month;
        for (month in this.quarterDate) {
          if (dateArray[0] <= this.quarterDate[month]) {
            quarter = month;
            break;
          }
        }
        this.selectedDate = `${this.quarterDate[month]}-1-${dateArray[2]}`;
        this.date = `${quarter}-${dateArray[2]}`;
        this.currentMesure = `${quarter} ${dateArray[2]}`;
        this.getPreviousQuarter(this.date)
      }
    }

  }
};
</script>


