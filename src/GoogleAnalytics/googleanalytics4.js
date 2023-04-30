import ReactGA4 from "react-ga4";

let initializeCount = 0;
const InitializeGoogleAnalytics = () => {
  // console.log("initializeCount is " + initializeCount)
  // Initialize GA4 - Add your measurement ID
  if(initializeCount === 0) {
    ReactGA4.initialize("G-LSK948K905");
    ReactGA4.event({category: "User Activity", action: "Initialization", label: window.location.pathname });
    // console.log("GA INITIALIZED");
  }
  initializeCount++;
};

const TrackGoogleAnalyticsEvent = (
  category,
  action,
  label
) => {
  // console.log("GA event:", category, ":", action, ":", label);
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

const TrackGoogleAnalyticsPageView = (page) => {
  ReactGA4.send(page);
}

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent, TrackGoogleAnalyticsPageView };