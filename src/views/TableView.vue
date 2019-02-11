<template>
    <div>
        <h1>Markets data table</h1>
        <p>Sticky headers & First column</p>
        <p v-if="loading"><strong>Loading data, please wait...</strong></p>
        <div v-else class="table_container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Market</th>
                        <th>MIP name</th>
                        <th>Status</th>
                        <th>Brief budget</th>
                        <th>Proposal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in markets" v-bind:key="item.mip.id">
                        <th>{{ item.mip.id }}</th>
                        <td>{{ item.mip.code }}</td>
                        <td>{{ item.mip.name }}</td>
                        <td>{{ item.status }}</td>
                        <td>{{ item.briefNetSpendInEuro | toCurrency }}</td>
                        <td>{{ item.proposalSpendInEuro | toCurrency }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false
            }
        },
        computed: {
            markets () {
                return this.$store.state.markets
            }
        },
        mounted () {
            this.loading = true;
            this.$store.dispatch('fetchMarkets')
                .then(() => this.loading = false)
        }
    }

</script>

<style scoped>
    .table_container {
        max-width: 400px;
        max-height: 250px;
        overflow: auto;
        position: relative;
        margin: 0 auto;
    }

    table {
        position: relative;
        border-collapse: collapse;
    }
    td, th { padding: 0.5em; }

    thead th {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: #000;
        color: #FFF;
    }

    tbody th {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        background: #FFF;
        border-right: 1px solid #CCC
    }

    thead th:first-child {
        left: 0;
        z-index: 1;
    }
</style>
