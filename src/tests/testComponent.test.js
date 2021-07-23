import { mount } from  '@vue/test-utils'
import TestComponent from './TestComponent'

describe('TestComponent', ()=>{
    test("Test Content Component", ()=> {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })

        expect(wrapper.text()).toEqual(
            'The message is: Hello from test!'
        )

    });

    test("Test Content html", ()=> {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })

        expect(wrapper.html()).toEqual(
            'The message is: Hello from test!'
        )

    });

    test("Test Content toContain", ()=> {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })

        expect(wrapper.text()).toContain(
            'The message is: Hello from test!'
        )

    });
})