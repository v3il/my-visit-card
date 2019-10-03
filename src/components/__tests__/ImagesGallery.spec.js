import { mount } from '@vue/test-utils';

import ImagesGallery from '../ImagesGallery.vue';

describe('ImagesGallery', () => {
    it('Correctly renders small previews', () => {
        const imagesNames = [
            'test1.png',
            'test2.png',
            'test3.png',
        ];

        const wrapper = mount(ImagesGallery, {
            propsData: { imagesNames }
        });

        expect(wrapper.findAll('.gallery__preview-link').length).toBe(3);
    });
});