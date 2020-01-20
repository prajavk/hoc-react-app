/* eslint-disable no-console */
/*
 * Call once at begining to ensure your app can safely call console.log()
 * and console.dir(),even on legacy browsers that don't support it.You may not get useful logging on those browsers,
 * but at least you won't generate errors.
 * @params debugModeON if 'true', console object will be enabled, (keep 'false' in production)
 */

export function handleConsole(showConsole) {
  const debugModeON = showConsole || false;

  const methods = [
    "assert",
    "clear",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeLog",
    "timeEnd",
    "timeStamp",
    "trace",
    "warn"
  ];
  if (!window.console || typeof window.console === "undefined") {
    /* define it if object doesn't exist */
    window.console = window.console || {};
  }

  /* condition check for console.log object */
  if (!window.console.log || typeof window.console.log === "undefined") {
    window.console.log = function() {};
  } else {
    /* case: debugModeON = true */
    if (!debugModeON) {
      window.console = window.console || {};
      window.console.log = function() {}; // check this
      let length = methods.length;
      let method;
      while (length--) {
        method = methods[length];
        window.console[method] = function() {};
      }
    }
  }

  /* condition check for console.dir object */
  if (!window.console.dir || typeof window.console.dir === "undefined") {
    window.console.dir = function() {};
  } else {
    if (!debugModeON) {
      window.console = window.console || {};
      window.console.dir = function() {};
    }
  }
}

/* this fun used to test console handling */
export function testConsole() {
  console.log("console log here");
  console.info("console info here");
  console.warn("console warn here");
  console.error("console error msg");
  console.time("console time");
  console.group("start group here");
  const obj = {
    name: "console"
  };
  console.table(obj);
  console.dir(obj);
  console.groupEnd();
  console.timeEnd("Total time");
}
