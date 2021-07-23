import { shallowMount, createLocalVue } from '@vue/test-utils'
import TestVuexComponent from '.././components/TestVuexComponent.vue'
import Vuex from 'vuex'


const localVue = createLocalVue()

localVue.use(Vuex)

describe('Action from testComponents', () => {
    let actions
    let store

    beforeEach(()=>{
        actions = {
            addData: jest.fn()
        }

        store = new Vuex.Store({
            actions
        })
    })

    it('run action win onSave', async() => {
        const wrapper = shallowMount(TestVuexComponent, { store, localVue })

        const testInput = wrapper.find('input')
        testInput.element.value = "123"
        testInput.trigger('input')

        const btn = wrapper.find('button')
        btn.trigger('click')
        
        expect(actions.addData).toHaveBeenCalled()

    })
})
