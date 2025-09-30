import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
	const todos = formatTodosForAI(board);
	console.log("Fomrmatted todos to send -- ", todos);

	const res = await fetch("api/generateSummary", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({ todos })
	});

	// const GPTdata = await res.json();
	// const { content } = GPTdata;
	const content = "GPT is summarising your tasks for the day...";

	return content;
};

export default fetchSuggestion;
