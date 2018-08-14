import $ from "jquery";

import PoppedElement from "./PoppedElement";


/** @type {String} Базовый CSS класс темы элементов тултипа */
const tooltipElementClass = "tooltip-element";


class Tooltip {
    constructor(tooltipOptions = {}) {
        let instance = this;

        tooltipOptions = $.extend(true, tooltipOptions, instance._getDefaultOptions());

        let poppedElement = instance.poppedElement = new PoppedElement(tooltipOptions);

        poppedElement.on("pe-show", function(targetElement) {
            let targetElementTitle = targetElement.attr("title");

            targetElement
                .attr("data-title-backup", targetElementTitle)
                .removeAttr("title");

            poppedElement.setContent(targetElementTitle);
        });


        poppedElement.on("pe-hide", function(lastTargetElement) {
            if(!lastTargetElement) {
                return;
            }

            let titleValue = lastTargetElement.attr("data-title-backup");

            lastTargetElement
                .attr("title", titleValue)
                .removeAttr("data-title-backup");
        });
    }


    hide() {
        let instance = this;
        instance.poppedElement.hide();
    }


    _getDefaultOptions() {
        return {
            appearance: {
                eventName: "hover",
                targetElementsSelectors: {
                    show: "[title][title!='']",
                    hide: "[data-title-backup]"
                },
                positions: ["top", "bottom"],
            },

            // behaviour: {
            //     themeClass: tooltipElementClass,
            // },
        }
    }
}

export default new Tooltip();