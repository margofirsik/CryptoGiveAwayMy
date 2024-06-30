import React, { useEffect } from "react";
import shiba from "./shiba.svg";
import tron from "./tron.svg";
import dogecoin from "./dogecoin.svg";
import cardano from "./cardano.svg";
import toncoin from "./toncoin.svg";
import Header from "./components/Header";
import { Route, Routes,  } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BuyTicket from "./pages/BuyTicket";



const App: React.FC = () => {


	useEffect(() => {
		const delayAnimation = () => {
			const animatedEl = document.querySelectorAll(".pulse");
			animatedEl.forEach((el) => el.classList.remove("animated"));

			setTimeout(function () {
				animatedEl.forEach((el) => el.classList.add("animated"));
				setTimeout(delayAnimation, 1500);
			}, 6000);
		};

		delayAnimation();

		const bubbles = () => {
			const min_bubble_count = 10;
			const max_bubble_count = 15;
			// const min_bubble_size = 20;
			// const max_bubble_size = 30;

			const $bubbles = document.querySelector(".bubbles");

			if ($bubbles instanceof HTMLElement) {
				const bubbleCount =
					min_bubble_count +
					Math.floor(Math.random() * (max_bubble_count - min_bubble_count + 1));

				for (let i = 0; i < bubbleCount; i++) {
					const bubbleContainer = document.createElement("div");
					bubbleContainer.classList.add("bubble-container");
					const bubble = document.createElement("div");
					bubble.classList.add("bubble");
					bubbleContainer.appendChild(bubble);
					$bubbles.appendChild(bubbleContainer);
				}

				$bubbles
					.querySelectorAll(".bubble-container")
					.forEach((container: Element) => {
						const pos_top_rand = Math.floor(Math.random() * 101);
						const pos_bottom_rand = Math.floor(Math.random() * 101);
						const size_rand = Math.random() < 0.5 ? 20 : 30;
						const opacity_rand = Math.random() < 0.5 ? 0.06 : 0.12;
						const delay_rand = Math.floor(Math.random() * 16);

						if (container instanceof HTMLElement) {
							container.style.left = pos_bottom_rand + "%";
							container.style.top = pos_top_rand + "%";
							container.style.opacity = String(opacity_rand);
							container.style.webkitAnimationDelay = delay_rand + "s";
							container.style.animationDelay = delay_rand + "s";

							const bubble = container.querySelector(".bubble");
							if (bubble instanceof HTMLElement) {
								bubble.style.width = size_rand + "px";
								bubble.style.height = size_rand + "px";
							}
						}
					});
			}
		};

		bubbles();
	}, []);
	return (
		<div className="app-container">
			<Header />

			<div className="jumbotron">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/buyticket" element={<BuyTicket />} />
				</Routes>
				<div className="bubbles"></div>
				<div className="circle-container">
					<div className="center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							width="100%"
							height="100%"
							version="1.1"
							shapeRendering="geometricPrecision"
							textRendering="geometricPrecision"
							imageRendering="optimizeQuality"
							fillRule="evenodd"
							clipRule="evenodd"
							viewBox="0 0 4091.27 4091.73"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<g id="Layer_x0020_1">
								<metadata id="CorelCorpID_0Corel-Layer" />
								<g id="_1421344023328">
									<path
										fill="#F7931A"
										fillRule="nonzero"
										d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
									/>
									<path
										fill="white"
										fillRule="nonzero"
										d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
									/>
								</g>
							</g>
						</svg>
					</div>
					<div className="orbit" id="circle-1">
						<div className="circle-container-inner"></div>
					</div>
					<div className="orbit" id="circle-2">
						<div className="rotating-circle" id="blue">
							<span className="info">
								<svg
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 339.43 295.27"
								>
									<title>tether-usdt-logo</title>
									<path
										d="M62.15,1.45l-61.89,130a2.52,2.52,0,0,0,.54,2.94L167.95,294.56a2.55,2.55,0,0,0,3.53,0L338.63,134.4a2.52,2.52,0,0,0,.54-2.94l-61.89-130A2.5,2.5,0,0,0,275,0H64.45a2.5,2.5,0,0,0-2.3,1.45h0Z"
										fill="#50af95"
										fillRule="evenodd"
									/>
									<path
										d="M191.19,144.8v0c-1.2.09-7.4,0.46-21.23,0.46-11,0-18.81-.33-21.55-0.46v0c-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25,74.24-18.15v28.91c2.78,0.2,10.74.67,21.74,0.67,13.2,0,19.81-.55,21-0.66v-28.9c42.42,1.89,74.08,9.29,74.08,18.13s-31.65,16.24-74.08,18.12h0Zm0-39.25V79.68h59.2V40.23H89.21V79.68H148.4v25.86c-48.11,2.21-84.29,11.74-84.29,23.16s36.18,20.94,84.29,23.16v82.9h42.78V151.83c48-2.21,84.12-11.73,84.12-23.14s-36.09-20.93-84.12-23.15h0Zm0,0h0Z"
										fill="#fff"
										fillRule="evenodd"
									/>
								</svg>
							</span>
						</div>
						<div className="rotating-circle" id="orange">
							<span className="info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlSpace="preserve"
									width="100%"
									height="100%"
									version="1.1"
									shapeRendering="geometricPrecision"
									textRendering="geometricPrecision"
									imageRendering="optimizeQuality"
									fillRule="evenodd"
									clipRule="evenodd"
									viewBox="0 0 784.37 1277.39"
									xmlnsXlink="http://www.w3.org/1999/xlink"
								>
									<g id="Layer_x0020_1">
										<metadata id="CorelCorpID_0Corel-Layer" />
										<g id="_1421394342400">
											<g>
												<polygon
													fill="#343434"
													fillRule="nonzero"
													points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
												/>
												<polygon
													fill="#8C8C8C"
													fillRule="nonzero"
													points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
												/>
												<polygon
													fill="#3C3C3B"
													fillRule="nonzero"
													points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
												/>
												<polygon
													fill="#8C8C8C"
													fillRule="nonzero"
													points="392.07,1277.38 392.07,956.52 -0,724.89 "
												/>
												<polygon
													fill="#141414"
													fillRule="nonzero"
													points="392.07,882.29 784.13,650.54 392.07,472.33 "
												/>
												<polygon
													fill="#393939"
													fillRule="nonzero"
													points="0,650.54 392.07,882.29 392.07,472.33 "
												/>
											</g>
										</g>
									</g>
								</svg>
							</span>
						</div>
						<div className="rotating-circle" id="violet">
							<span className="info">
								<svg
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 397.7 311.7"
									style={{ background: "new 0 0 397.7 311.7" }}
									xmlSpace="preserve"
								>
									<style type="text/css">
										{`
                .st0{fill:url(#SVGID_1_);}
                .st1{fill:url(#SVGID_2_);}
                .st2{fill:url(#SVGID_3_);}
              `}
									</style>
									<linearGradient
										id="SVGID_1_"
										gradientUnits="userSpaceOnUse"
										x1="360.8791"
										y1="351.4553"
										x2="141.213"
										y2="-69.2936"
										gradientTransform="matrix(1 0 0 -1 0 314)"
									>
										<stop offset="0" style={{ stopColor: "#00FFA3" }} />
										<stop offset="1" style={{ stopColor: "#DC1FFF" }} />
									</linearGradient>
									<path
										className="st0"
										d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
              c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
									/>
									<linearGradient
										id="SVGID_2_"
										gradientUnits="userSpaceOnUse"
										x1="264.8291"
										y1="401.6014"
										x2="45.163"
										y2="-19.1475"
										gradientTransform="matrix(1 0 0 -1 0 314)"
									>
										<stop offset="0" style={{ stopColor: "#00FFA3" }} />
										<stop offset="1" style={{ stopColor: "#DC1FFF" }} />
									</linearGradient>
									<path
										className="st1"
										d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
									/>
									<linearGradient
										id="SVGID_3_"
										gradientUnits="userSpaceOnUse"
										x1="312.5484"
										y1="376.688"
										x2="92.8822"
										y2="-44.061"
										gradientTransform="matrix(1 0 0 -1 0 314)"
									>
										<stop offset="0" style={{ stopColor: "#00FFA3" }} />
										<stop offset="1" style={{ stopColor: "#DC1FFF" }} />
									</linearGradient>
									<path
										className="st2"
										d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
	c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div className="orbit" id="circle-3">
						<div className="rotating-circle" id="first">
							<img src={toncoin} alt="tone" />
						</div>
						<div className="rotating-circle" id="third">
							<img src={shiba} alt="shiba" />
						</div>
					</div>
					<div className="orbit" id="circle-4">
						<div className="rotating-circle" id="first">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 424">
								<defs>
									<style>{".cls-1{fill:#fafafa;}"}</style>
								</defs>
								<title>x</title>
								<g id="Layer_2" data-name="Layer 2">
									<g id="Layer_1-2" data-name="Layer 1">
										<path
											className="cls-1"
											d="M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z"
										/>
										<path
											className="cls-1"
											d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z"
										/>
									</g>
								</g>
							</svg>
						</div>
						<div className="rotating-circle" id="second">
							<img src={tron} alt="tron" />
						</div>
						<div className="rotating-circle" id="third">
							<img src={dogecoin} alt="doge" />
						</div>
						<div className="rotating-circle" id="fourth">
							<img src={cardano} alt="cardano" />
						</div>
					</div>
					<div className="orbit" id="circle-5">
						<div className="circle-container-inner">
							<div className="rotating-circle"></div>
						</div>
					</div>
					<div className="pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default App;
