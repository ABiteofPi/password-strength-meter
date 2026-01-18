import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/',
          component: { template: '<div>This page is under construction</div>' },
        },
      ],
    })

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.isReady()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('This page is under construction')
  })
})
