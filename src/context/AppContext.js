import React from "react";

// Create a new context for the app
export const AppContext = React.createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
