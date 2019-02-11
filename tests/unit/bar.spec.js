import Vue from 'vue'
import BarChart from '@/components/BarChart'

describe('BarChart', () => {

    let el;
    beforeEach(() => {
        el = document.createElement('div')
    })

    it('should render a canvas', () => {
        const vm = new Vue({
            render: function (createElement) {
                return createElement(BarChart)
            },
            components: { BarChart }
        }).$mount(el);

        expect(vm.$el.querySelector('#bar-chart')).toBeDefined();
        expect(vm.$el.querySelector('canvas')).toBeDefined();
        expect(vm.$el.querySelector('canvas')).not.toBe('null');
    })

})
