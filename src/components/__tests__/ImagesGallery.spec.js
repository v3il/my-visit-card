import { shallowMount } from '@vue/test-utils';

import ImagesGallery from '../ImagesGallery.vue';

describe('ImagesGallery', () => {
    it('Correctly renders small previews', () => {
        const imagesNames = ['test1.png', 'test2.png', 'test3.png'];

        const wrapper = shallowMount(ImagesGallery, {
            propsData: { imagesNames }
        });

        const previewsLink = wrapper.findAll('.gallery__preview-link');

        expect(previewsLink.length).toBe(imagesNames.length);

        for (let i = 0; i < previewsLink.length; i++) {
            const item = previewsLink.at(i);

            expect(item.is('a')).toBe(true);
            expect(item.find('.gallery__preview-image').exists()).toBe(true);
        }
    });

    it('Opens overlay when clicking on small preview', () => {
        const imagesNames = ['test1.png', 'test2.png', 'test3.png'];

        const wrapper = shallowMount(ImagesGallery, {
            propsData: { imagesNames }
        });

        const previewLink = wrapper.find('.gallery__preview-link');

        previewLink.trigger('click');

        expect(wrapper.vm.overlayShown).toBe(true);
        expect(wrapper.find('.gallery__overlay').isVisible()).toBe(true);
    });

    it('Closes overlay when clicking on it', () => {
        const imagesNames = ['test1.png', 'test2.png', 'test3.png'];

        const wrapper = shallowMount(ImagesGallery, {
            propsData: { imagesNames }
        });

        const previewLink = wrapper.find('.gallery__preview-link');

        wrapper.vm.images.forEach(item => {
            item.loaded = true;
        });

        previewLink.trigger('click');

        wrapper.find('.gallery__overlay-image-wrap').trigger('click');

        expect(wrapper.vm.overlayShown).toBe(false);
        expect(wrapper.find('.gallery__overlay').isVisible()).toBe(false);
    });
});
