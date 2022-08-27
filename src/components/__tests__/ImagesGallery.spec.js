import { createLocalVue, shallowMount } from '@vue/test-utils'

import ImagesGallery from '../image/ImagesGallery.vue'

const IMAGES = ['test1.png', 'test2.png', 'test3.png']
const localVue = createLocalVue()

const createWrapper = () => {
  return shallowMount(ImagesGallery, {
    localVue,
    propsData: { imagesNames: IMAGES }
  })
}

describe('ImagesGallery', () => {
  it('Correctly renders small previews', () => {
    const wrapper = createWrapper()
    const previewsLink = wrapper.findAll('.gallery__preview-link')

    expect(previewsLink.length).toBe(IMAGES.length)

    for (let i = 0; i < previewsLink.length; i++) {
      const item = previewsLink.at(i)

      expect(item.element.tagName).toBe('A')
      expect(item.find('.gallery__preview-image').exists()).toBe(true)
    }
  })

  it('Opens overlay when click the small preview', async () => {
    const wrapper = createWrapper()
    const previewLink = wrapper.find('.gallery__preview-link')

    await previewLink.trigger('click')

    expect(wrapper.vm.overlayShown).toBe(true)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(true)
  })

  it('Closes overlay when click on it', () => {
    const wrapper = createWrapper()
    const previewLink = wrapper.find('.gallery__preview-link')

    previewLink.trigger('click')

    wrapper.find('.gallery__overlay-image-wrap').trigger('click')

    expect(wrapper.vm.overlayShown).toBe(false)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false)
  })

  it('Closes the overlay when click the close overlay button', async () => {
    const wrapper = createWrapper()
    const previewLink = wrapper.find('.gallery__preview-link')

    await previewLink.trigger('click')
    await wrapper.find('.gallery__overlay-button-close').trigger('click')

    expect(wrapper.vm.overlayShown).toBe(false)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false)
  })

  it('Shows previous image when click the Go to prev image button', async () => {
    const wrapper = createWrapper()

    await wrapper.find('.gallery__preview-link').trigger('click')
    await wrapper.find('.gallery__overlay-button-prev').trigger('click')

    expect(wrapper.vm.currentImageIndex).toBe(2)
    expect(
      wrapper
        .findAll('.gallery__overlay-image')
        .at(2)
        .isVisible()
    ).toBe(true)
  })

  it('Shows next image when click the Go to next image button', async () => {
    const wrapper = createWrapper()

    await wrapper.find('.gallery__preview-link').trigger('click')
    await wrapper.find('.gallery__overlay-button-prev').trigger('click')

    expect(wrapper.vm.currentImageIndex).toBe(2)
    expect(
      wrapper
        .findAll('.gallery__overlay-image')
        .at(2)
        .isVisible()
    ).toBe(true)
  })

  it('Closes the overlay when hit the Esc button', async () => {
    const wrapper = createWrapper()

    await wrapper.find('.gallery__preview-link').trigger('click')

    const event = new KeyboardEvent('keydown', { which: 27 })
    window.dispatchEvent(event)

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.overlayShown).toBe(false)
      expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false)
    })
  })

  it('Shows correct image in the overlay', async () => {
    const wrapper = createWrapper()

    await wrapper
      .findAll('.gallery__preview-link')
      .at(2)
      .trigger('click')

    expect(wrapper.vm.currentImageIndex).toBe(2)
    expect(
      wrapper
        .findAll('.gallery__overlay-image')
        .at(2)
        .isVisible()
    ).toBe(true)
  })
})
