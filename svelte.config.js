import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
      prerender: {
        handleHttpError: ({ path, referrer, message }) => {
          // Ignore specific paths or handle differently
          if (path === '/') {
            return;
          }
          throw new Error(message);
        }
      }
    }
  };

export default {
    kit: {
        adapter: adapter({
            fallback: "200.html"
        }),
        prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/') {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		}
        // paths: {
        //     base: process.env.NODE_ENV === 'production' ? '/otternonesenses-co-za.github.io' : ''
        // },
    }
};
