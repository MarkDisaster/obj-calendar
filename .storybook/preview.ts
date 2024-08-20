import type { Preview } from 'storybook-solidjs';

import '../src/storybook.css';

const preview: Preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export default preview;
