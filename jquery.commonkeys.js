/**
* @function $.fn.commonKeys
* @name jquery-common-keys
* @version 0.6.0
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc jQuery collection plugin that triggers events for common accessibility
* keys on keydown e.g. ENTER, SPACE, ESCAPE, ARROW KEYS
* @fires {object} enterKeyUp
* @fires {object} escapeKeyUp
* @fires {object} spaceKeyUp
* @fires {object} pageUpKeyUp
* @fires {object} pageDownKeyUp
* @fires {object} endKeyUp
* @fires {object} homeKeyUp
* @fires {object} leftArrowKeyUp
* @fires {object} upArrowKeyUp
* @fires {object} downArrowKeyUp
* @fires {object} rightArrowKeyUp
*/
(function($, window, document, undefined) {
    var pluginName = 'jquery-common-keys';

    var normalizeEvent = function(type, e) {
        return $.Event(type, {originalEvent: e});
    };

    $.fn.commonKeys = function commonKeys() {
        return this.each(function onEach() {
            // check element does not already have this plugin
            if (!$.data(this, pluginName)) {
                jQuery.data(this, pluginName, 'true');

                var $this = $(this);
                var keyCodes = $.fn.commonKeys.keyCodes;

                $this.commonKeyDown();

                var onKeyUp = function(e) {
                    switch (e.keyCode) {
                        case keyCodes.ENTER:
                            $this.trigger(normalizeEvent('enterKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.ESCAPE:
                            $this.trigger(normalizeEvent('escapeKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.SPACE:
                            $this.trigger(normalizeEvent('spaceKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEUP:
                            $this.trigger(normalizeEvent('pageUpKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEDOWN:
                            $this.trigger(normalizeEvent('pageDownKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.END:
                            $this.trigger(normalizeEvent('endKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.HOME:
                            $this.trigger(normalizeEvent('homeKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.LEFTARROW:
                            $this.trigger(normalizeEvent('leftArrowKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.UPARROW:
                            $this.trigger(normalizeEvent('upArrowKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.RIGHTARROW:
                            $this.trigger(normalizeEvent('rightArrowKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.DOWNARROW:
                            $this.trigger(normalizeEvent('downArrowKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        /* istanbul ignore next */
                        default:
                            break;
                    }
                };

                $this.on('keyup', onKeyUp);
            }
        });
    };

    $.fn.commonKeys.keyCodes = {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFTARROW: 37,
        UPARROW: 38,
        RIGHTARROW: 39,
        DOWNARROW: 40
    };
}(jQuery, window, document));
