import type { Preview } from "@storybook/react";
import '../../src/app/styles/index.scss';
import '../../src/app/styles/themes/dark.scss';
import '../../src/app/styles/themes/light.scss';
import React from "react";
import { BrowserRouter } from "react-router-dom";


const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="App light">
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ]
  
};


export default preview;
