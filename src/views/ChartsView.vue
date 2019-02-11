<template>
  <div>
    <h1>Markets High-Bar Chart</h1>
    <p>Using Wrappers for Chart.js</p>
    <p v-if="loading"><strong>Loading data, please wait...</strong></p>
    <bar-chart v-else :chart-data="datacollection"></bar-chart>
  </div>
</template>

<script>
  import BarChart from '@/components/BarChart'

  export default {
    name: 'highcharts',
    components: { BarChart },
    data() {
      return {
        loading: false
      }
    },
    computed: {
      datacollection () {
        let marketsData = this.$store.state.markets;
        return {
          labels: marketsData.map(item => item.mip.name + " (" + item.mip.code + ")"),
          datasets: [
            {
              label: 'Brief',
              backgroundColor: '#f87979',
              data: marketsData.map(item => item.briefNetSpendInEuro)
            },
            {
              label: 'Proposal',
              backgroundColor: '#5bf8bf',
              data: marketsData.map(item => item.proposalSpendInEuro)
            },
            {
              label: 'Postlog Spend',
              backgroundColor: '#ebe',
              data: marketsData.map(item => item.postNetSpendInEuro)
            }
          ]
        }
      }
    },
    mounted () {
      this.loading = true
      this.$store.dispatch('fetchMarkets')
              .then(() => this.loading = false)
    }
  }
</script>
