import dynamic from "next/dynamic";

import Board from "@/components/Board";
// import Header from "@/components/Header";
const Header = dynamic(() => import('@/components/Header'));

export default function Home() {
	return (
		<main>
			{/* Header */}
			<Header />

			{/* Board */}
			<Board />
		</main>
	);
}
