import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import './index.css';
import App from './App';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [ process.env.REACT_APP_SYNC_SERVER_ADDRESS ],
      beforeNavigate: context => {
        return {
          ...context,
          name: window.location.pathname.replace(/[A-Z0-9]{6}$/, '/'),
        }
      }
    }),
  ],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)