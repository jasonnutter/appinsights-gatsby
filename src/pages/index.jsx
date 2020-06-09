import React from "react"

import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { globalHistory } from "@reach/router";

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: "",
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: { history: globalHistory }
        }
    }
});

appInsights.loadAppInsights();

const App = () => <div>Hello world!</div>

export default withAITracking(reactPlugin, App); 
