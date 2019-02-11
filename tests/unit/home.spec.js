import VueRouter from 'vue-router'
import { mount, createLocalVue } from "@vue/test-utils"
import Home from '@/views/Home.vue'

// Create a temporary Vue instance
const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Home.vue', () => {

    it("renders Home view via routing", () => {
        const router = new VueRouter({ routes: [ { path: "/", name: 'home' } ]  });
        const wrapper = mount(Home, { localVue, router });

        router.push("/");

        expect(wrapper.find(Home).exists()).toBe(true);
    })

})
