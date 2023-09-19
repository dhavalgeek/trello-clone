// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
// 	// organization: "YOUR_ORG_ID",
// 	apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// // const response = await openai.listEngines();
// export default openai;

import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export default openai;