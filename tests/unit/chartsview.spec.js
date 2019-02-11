import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {mount, createLocalVue, shallowMount} from "@vue/test-utils"
import ChartsView from "@/views/ChartsView.vue"
import client from './../../src/api/mock/index.js'

// Create a temporary Vue instance
const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);

describe('ChartsView.vue', () => {

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

/*
    it('renders a chart using a Vuex store', () => {
        const wrapper = mount(ChartsView, {
            localVue, store
        });
        expect(wrapper.contains('canvas')).toBe(true);
    }) */

    it('renders Chart view via routing', () => {
        const wrapper = shallowMount(ChartsView, { localVue, store, router });

        router.push("/highcharts");
        expect(wrapper.find(ChartsView).exists()).toBe(true);
    })

});
