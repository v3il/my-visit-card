import Vue from 'vue';
import LazyImage from './src/directives/LazyImage';

Vue.directive('lazy-image', LazyImage);

global.IntersectionObserver = class IntersectionObserver {
    constructor() {}

    observe() {
        return null;
    }

    unobserve() {
        return null;
    }
};
