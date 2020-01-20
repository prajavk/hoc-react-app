/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
// Add code related to polyfill
if (!window.location.origin) {
  window.location.origin = `${window.location.protocol}//${
    window.location.hostname
  } `(`${window.location.port} ` ? `:${window.location.port} ` : `''`)``;
}

/* from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill */
Number.isNaN =
  Number.isNaN ||
  function(value) {
    /* eslint-disable no-self-compare */
    // NaN is the only value in javascript that is not equal to itself
    return value !== value;
    /* eslint-enable no-self-compare */
  };

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const ce = new window.CustomEvent("test", { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error("Could not prevent default");
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("CustomEvent is not defined in this browser...");
    const CustomEvent = function(event, params) {
      let evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, "defaultPrevented", {
            get() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();
