<script>
    //Importing Bar class from the vue-chartjs wrapper
    import { Bar, mixins } from 'vue-chartjs'

    //Exporting this so it can be used in other components
    export default {
        extends: Bar,
        mixins: [mixins.reactiveProp],
        props: ['chartData'],
        data () {
            return {
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted () {
            //renderChart function renders the chart with the datacollection and options object.
            this.renderChart(this.chartData, this.options)
        }
    }
</script>
