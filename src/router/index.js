import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Input from '@/components/Input_v-model'
import Checkbox from '@/components/Checkbox'
import Radio from '@/components/Radio'
import Select from '@/components/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
