import { expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Calc from '../components/Calc'

describe("Calculator input tests", () => {
    it('Test operand input value', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        expect(wrapper.vm.operand2).toBe(1)
    })


    it('Test method sum', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="+"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test method sub', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="-"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(0)
    })

    it('Test method mul', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')

        const methodMul = wrapper.find('button[name="*"]')
        methodMul.trigger('click')

        expect(wrapper.vm.result).toBe(6)
    })

    it('Test method div', () => {
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodDiv = wrapper.find('button[name="/"]')
        methodDiv.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })

    it('Test method inputNum1', async() => {
        const wrapper = mount(Calc)

        const inputNum = wrapper.find('input[name="vk"]')
        await inputNum.setChecked()

        const operch = wrapper.find('input[name="oper1"]')
        await operch.setChecked()

        const operand1 = wrapper.find('button[class="active_4"]')
        operand1.trigger('click')

        expect(wrapper.vm.operand1).toBe(3)

    })

    it('Test method inputNum2', async() => {
        const wrapper = mount(Calc)

        const inputNum = wrapper.find('input[name="vk"]')
        await inputNum.setChecked()

        const operch = wrapper.find('input[name="oper2"]')
        await operch.setChecked()

        const operand2 = wrapper.find('button[class="active_6"]')
        operand2.trigger('click')

        expect(wrapper.vm.operand2).toBe(5)

    })

    it('Test method eraseOne1', async() => {
        const wrapper = mount(Calc)

        const inputNum = wrapper.find('input[name="vk"]')
        await inputNum.setChecked()

        const operch = wrapper.find('input[name="oper1"]')
        await operch.setChecked()

        const operand1 = wrapper.find('button[class="active_4"]')
        operand1.trigger('click')
        operand1.trigger('click')

        const operandErase = wrapper.find('button[class="erase"]')
        operandErase.trigger('click')

        expect(wrapper.vm.operand1).toBe(3)

    })

    it('Test method eraseOne2', async() => {
        const wrapper = mount(Calc)

        const inputNum = wrapper.find('input[name="vk"]')
        await inputNum.setChecked()

        const operch = wrapper.find('input[name="oper2"]')
        await operch.setChecked()

        const operand1 = wrapper.find('button[class="active_6"]')
        operand1.trigger('click')
        operand1.trigger('click')

        const operandErase = wrapper.find('button[class="erase"]')
        operandErase.trigger('click')

        expect(wrapper.vm.operand2).toBe(5)

    })
})