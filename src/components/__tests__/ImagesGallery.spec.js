import { shallowMount } from '@vue/test-utils'

import ImagesGallery from '../ImagesGallery.vue'

describe('ImagesGallery', () => {
  it('Correctly renders small previews', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    const previewsLink = wrapper.findAll('.gallery__preview-link')

    expect(previewsLink.length).toBe(imagesNames.length)

    for (let i = 0; i < previewsLink.length; i++) {
      const item = previewsLink.at(i)

      expect(item.is('a')).toBe(true)
      expect(item.find('.gallery__preview-image').exists()).toBe(true)
    }
  })

  it('Opens overlay when click the small preview', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    const previewLink = wrapper.find('.gallery__preview-link')

    previewLink.trigger('click')

    expect(wrapper.vm.overlayShown).toBe(true)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(true)
  })

  it('Closes overlay when click on it', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    const previewLink = wrapper.find('.gallery__preview-link')

    wrapper.vm.images.forEach(item => {
      item.loaded = true
    })

    previewLink.trigger('click')

    wrapper.find('.gallery__overlay-image-wrap').trigger('click')

    expect(wrapper.vm.overlayShown).toBe(false)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false)
  })

  it('Closes the overlay when click the close overlay button', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    const previewLink = wrapper.find('.gallery__preview-link')

    previewLink.trigger('click')

    wrapper.find('.gallery__overlay-button-close').trigger('click')

    expect(wrapper.vm.overlayShown).toBe(false)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false)
  })

  it('Shows previous image when click the Go to prev image button', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    wrapper.vm.images.forEach(item => {
      item.loaded = true
    })

    wrapper.find('.gallery__preview-link').trigger('click')

    wrapper.find('.gallery__overlay-button-prev').trigger('click')

    expect(wrapper.vm.currentImageIndex).toBe(2)
    expect(
      wrapper
        .findAll('.gallery__overlay-image')
        .at(2)
        .isVisible()
    ).toBe(true)
  })

  it('Shows next image when click the Go to next image button', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    wrapper.vm.images.forEach(item => {
      item.loaded = true
    })

    wrapper.find('.gallery__preview-link').trigger('click')

    wrapper.find('.gallery__overlay-button-prev').trigger('click')

    expect(wrapper.vm.currentImageIndex).toBe(2)
    expect(
      wrapper
        .findAll('.gallery__overlay-image')
        .at(2)
        .isVisible()
    ).toBe(true)
  })

  it('Closes the overlay when hit the Esc button', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    wrapper.vm.images.forEach(item => {
      item.loaded = true
    })

    wrapper.find('.gallery__preview-link').trigger('click')

    const event = new KeyboardEvent('keydown', { which: 27 })
    window.dispatchEvent(event)

    expect(wrapper.vm.overlayShown).toBe(false)
    expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false)
  })

  it('Shows correct image in the overlay', () => {
    const imagesNames = ['test1.png', 'test2.png', 'test3.png']

    const wrapper = shallowMount(ImagesGallery, {
      propsData: { imagesNames }
    })

    wrapper.vm.images.forEach(item => {
      item.loaded = true
    })

    wrapper
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
