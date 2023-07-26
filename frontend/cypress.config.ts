import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
	projectId: "p8en1z",
	env: {
		CLOUDFRONT_URL: process.env.CLOUDFRONT_URL,
		API_URL: process.env.PUBLIC_VISITOR_COUNT_API,
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
