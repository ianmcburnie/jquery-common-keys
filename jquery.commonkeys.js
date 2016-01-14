/**
* @function $.fn.commonKeys
* @name jquery-common-keys
* @version 0.3.4
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc jQuery collection plugin that triggers events for common accessibility
* keys e.g. ENTER, SPACE, ESCAPE, ARROW KEYS.
* @fires {object} enter.commonKeyDown
* @fires {object} escape.commonKeyDown
* @fires {object} space.commonKeyDown
* @fires {object} pageup.commonKeyDown
* @fires {object} pagedown.commonKeyDown
* @fires {object} end.commonKeyDown
* @fires {object} home.commonKeyDown
* @fires {object} leftarrow.commonKeyDown
* @fires {object} uparrow.commonKeyDown
* @fires {object} downarrow.commonKeyDown
* @fires {object} rightarrow.commonKeyDown
*/
(function ($, window, document, undefined) {

    var pluginName = 'jquery-common-keys';

    var normalizeEvent = function(type, e) {
        return $.Event(type, { originalEvent: e });
    };

    $.fn.commonKeys = function commonKeys() {

        return this.each(function onEach() {

            // check element does not already have this plugin
            if (!$.data(this, pluginName)) {

                jQuery.data(this, pluginName, 'true');

                var $this = $(this),
                    keyCodes = $.fn.commonKeys.keyCodes;

                var onKeyDown = function(e) {
                    switch(e.keyCode) {
                        case keyCodes.ENTER:
                            $this.trigger(normalizeEvent('enter.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.ESCAPE:
                            $this.trigger(normalizeEvent('escape.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.SPACE:
                            $this.trigger(normalizeEvent('space.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEUP:
                            $this.trigger(normalizeEvent('pageup.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEDOWN:
                            $this.trigger(normalizeEvent('pagedown.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.END:
                            $this.trigger(normalizeEvent('end.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.HOME:
                            $this.trigger(normalizeEvent('home.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.LEFTARROW:
                            $this.trigger(normalizeEvent('leftarrow.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.UPARROW:
                            $this.trigger(normalizeEvent('uparrow.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.RIGHTARROW:
                            $this.trigger(normalizeEvent('rightarrow.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.DOWNARROW:
                            $this.trigger(normalizeEvent('downarrow.commonKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        /* istanbul ignore next */
                        default:
                            break;
                    }
                };

                var onKeyUp = function(e) {
                    switch(e.keyCode) {
                        case keyCodes.ENTER:
                            $this.trigger(normalizeEvent('enter.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.ESCAPE:
                            $this.trigger(normalizeEvent('escape.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.SPACE:
                            $this.trigger(normalizeEvent('space.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEUP:
                            $this.trigger(normalizeEvent('pageup.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEDOWN:
                            $this.trigger(normalizeEvent('pagedown.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.END:
                            $this.trigger(normalizeEvent('end.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.HOME:
                            $this.trigger(normalizeEvent('home.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.LEFTARROW:
                            $this.trigger(normalizeEvent('leftarrow.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.UPARROW:
                            $this.trigger(normalizeEvent('uparrow.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.RIGHTARROW:
                            $this.trigger(normalizeEvent('rightarrow.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.DOWNARROW:
                            $this.trigger(normalizeEvent('downarrow.commonKeyUp', e));
                            /* istanbul ignore next */
                            break;
                        /* istanbul ignore next */
                        default:
                            break;
                    }
                };

                $this.on('keydown', onKeyDown);
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
