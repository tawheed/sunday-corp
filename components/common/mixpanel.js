let actions = {
  track: (name) => {
    if(typeof window !== "undefined" &&
    window.mixpanel) {
      console.log("[lib] Logging Mixpanel Event: ", name);
      window.mixpanel.track(name);
    }
    else {
      console.log("Mixpanel not loaded");
    }
  },
};

export let Mixpanel = actions;
