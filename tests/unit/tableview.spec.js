import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { createLocalVue, shallowMount } from "@vue/test-utils"
import TableView from "@/views/TableView.vue"
import { toCurrency } from "../../src/lib/filter"
import client from "./../../src/api/mock/index.js"

// Create a temporary Vue instance
const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);
localVue.filter('toCurrency', toCurrency);

describe('TableView.vue', () => {

  // Create a temporary store & router
  let store; let router;

  beforeEach(() => {
     store = new Vuex.Store({
         state: {
             markets:
                 [{ "mip": { "id": 259, "name": "Abu Dhabi Media", "code": "ADM" },
                     "status": "Approved",
                     "briefNetSpendInEuro": 14000,
                     "postNetSpendInEuro": 0,
                     "proposalSpendInEuro": 10465
                 }]
         },
         mutations: {
             setMarkets(state, markets) {
                 state.markets = markets
             }
         },
         actions: {
             fetchMarkets({ commit }) {
                 return client.fetchMarkets()
                     .then(markets => commit('setMarkets', markets))
             }
         }
     });
     router =  new VueRouter({ routes: [ { path: "/table", name: 'table' } ]  });
  });

  it('renders a data table using a Vuex store', () => {
    const wrapper = shallowMount(TableView, { localVue, store });
    expect(wrapper.contains('table')).toBe(true);
  });

  it('renders Table view via routing', () => {
      const wrapper = shallowMount(TableView, { localVue, store, router });

      router.push("/table");
      expect(wrapper.find(TableView).exists()).toBe(true);
  })

});
