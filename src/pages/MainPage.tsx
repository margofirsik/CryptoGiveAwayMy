import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
const navigate = useNavigate();

const handleButtonClick = () => {
	navigate("/buyticket");
};


	return (
		<>
			<div
				className="mainPage"
				style={{
					zIndex: 99999,
					padding: "20px",
					color: "#fafafa",
				}}
			>
				<h1>🎉 Win 2000 USDT! 🎉</h1>
				<p>
					Take a chance and join our exciting draw for a chance to win 2000
					USDT! Each ticket increases your odds of winning. Here's how it works:
				</p>
				<ul style={{ lineHeight: "1.6" }}>
					<li>Buy unlimited tickets to maximize your chances.</li>
					<li>Payments accepted in USDT, BTC, and ETH.</li>
					<li>A winner will be drawn every 1000 tickets sold.</li>
				</ul>
				<p>
					Click the button below to purchase tickets and view the wallet address
					for your payment.
				</p>
				<h2>How to Participate:</h2>
				<ol style={{ lineHeight: "1.6" }}>
					<li>Purchase your tickets.</li>
					<li>
						Transfer the equivalent cryptocurrency to our designated wallet.
					</li>
				</ol>
				<p>
					For feedback and winner highlights, please leave your Instagram or
					Twitter handle in your application.
				</p>
				<p>Good luck! 🍀</p>
						<p style={{ color: "#fafafa60" }}>
					Disclaimer: Our company provides entertainment activities. We are not
					liable for any loss of funds.
				</p>
				<div className="backgroundBlur"></div>
				<div
					className="d-flex"
					style={{ width: "100%", justifyContent: "flex-end" }}
				>
					<button className="button mt-5" onClick={handleButtonClick}>
						Let's Start
					</button>
				</div>
			</div>
		</>
	);
};

export default MainPage;
