import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	// todos in the body of the POST request
	const { todos } = await request.json();
	console.log(todos);

	// // communicate with openAI
	// const response = await openai.createChatCompletion({
	// 	model: "gpt-3.5-turbo",
	// 	// "messages": [{ "role": "user", "content": "Say this is a test!" }],
	// 	// "temperature": 0.7
	// 	temperature: 0.8,
	// 	n: 1,
	// 	stream: false,
	// 	messages: [
	// 		{
	// 			role: 'system',
	// 			content: `When responding, welcome the use always as Mr.Dhaval and say welcome to the Todo App! Limit the response to 200 characters`
	// 		}, {
	// 			role: 'user',
	// 			content: `Hi there, provide a summar of the following todos. Count how many todos are in each category such as To do, in  progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`
	// 		}
	// 	]
	// });

	// const { data } = response;

	// try {
	const data = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		temperature: 0.8,
		n: 1,
		stream: false,
		messages: [
			{
				role: 'system',
				content: `When responding, welcome the use always as Mr.Dhaval and say welcome to the Todo App! Limit the response to 200 characters`
			}, {
				role: 'user',
				content: `Hi there, provide a summar of the following todos. Count how many todos are in each category such as To do, in  progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`
			}
		]
	});
	console.log('data123', data);

	console.log('Data is: ', data);
	console.log(data.choices[0].message);

	return NextResponse.json(data.choices[0].message);
	// } catch (error: any) {
	// 	return NextResponse.json(error.error.message);
	// }
}