import React, { useState, useEffect } from "react";
import usdtIcon from "../GroupUSDT.svg"; // Replace with actual paths to your cryptocurrency icons
import bitcoinIcon from "../Bitcoin.svg";
import ethIcon from "../GroupEthur.svg";
import QRCode from "qrcode.react"; // Import QRCode component

// Define types for props and state
interface BuyTicketProps {}

const BuyTicket: React.FC<BuyTicketProps> = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");
  const [ticketValueUSD, setTicketValueUSD] = useState<number>(2.99);
  const [ticketValueCrypto, setTicketValueCrypto] = useState<number | null>(
    null,
  );
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [walletNumber, setWalletNumber] = useState<string>("");
  const [btcPrice, setBtcPrice] = useState<number | null>(62000);
  const [ethPrice, setEthPrice] = useState<number | null>(3400);
  const [usdtPrice, setUsdtPrice] = useState<number | null>(1);
  const [socialAccount, setSocialAccount] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [prizeWallet, setPrizeWallet] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetch Bitcoin price
        const btcResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
        );
        const btcData = await btcResponse.json();
        setBtcPrice(btcData.bitcoin.usd);

        // Fetch Ethereum price
        const ethResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
        );
        const ethData = await ethResponse.json();
        setEthPrice(ethData.ethereum.usd);

        // Fetch USDT (Tether) price
        const usdtResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd",
        );
        const usdtData = await usdtResponse.json();
        setUsdtPrice(usdtData.tether.usd);
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
    };

    fetchPrices();
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleSelectCrypto = (crypto: string) => {
    setSelectedCrypto(crypto);
    setWalletNumber(
      crypto === "usdt"
        ? "TXqbwGEgKecuEezGFrjiFpjJEAR84Uytj2"
        : crypto === "eth"
          ? "0x2c84ec35809Cf923807ebFfbaD70D59f835CB0e0"
          : "bc1qp8yd0kast6thf3sptpqdf9mmpmju7xat9wmdvc",
    );

    const newTicketValueUSD = ticketCount * 2.99;
    setTicketValueUSD(newTicketValueUSD);

    if (crypto === "bitcoin") {
      setTicketValueCrypto(newTicketValueUSD / btcPrice!);
    } else if (crypto === "eth") {
      setTicketValueCrypto(newTicketValueUSD / ethPrice!);
    } else if (crypto === "usdt") {
      setTicketValueCrypto(newTicketValueUSD / usdtPrice!);
    }
  };

  const handleCopyWalletNumber = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(walletNumber)
        .then(() => {
          alert("Wallet number copied!");
        })
        .catch((error) => {
          console.error("Error copying wallet number:", error);
          // Fallback: Use a different method to copy, such as prompting the user to copy manually
          prompt("Copy the wallet number below:", walletNumber);
        });
    } else {
      // Fallback for browsers that do not support navigator.clipboard
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Check if it's an iOS device
        alert("Copy the wallet number below:\n" + walletNumber);
      } else {
        // For Android or other devices, provide instructions to copy manually
        prompt("Copy the wallet number below:", walletNumber);
      }
    }
  };

  const handleTicketCountChange = (delta: number) => {
    const newCount = Math.max(1, ticketCount + delta);
    setTicketCount(newCount);
    const newTicketValueUSD = newCount * 2.99;
    setTicketValueUSD(newTicketValueUSD);

    if (selectedCrypto === "bitcoin") {
      setTicketValueCrypto(newTicketValueUSD / btcPrice!);
    } else if (selectedCrypto === "eth") {
      setTicketValueCrypto(newTicketValueUSD / ethPrice!);
    } else if (selectedCrypto === "usdt") {
      setTicketValueCrypto(newTicketValueUSD / usdtPrice!);
    }
  };

  const getCryptoIcon = () => {
    switch (selectedCrypto) {
      case "bitcoin":
        return bitcoinIcon;
      case "eth":
        return ethIcon;
      case "usdt":
        return usdtIcon;
      default:
        return "";
    }
  };

  const handleSocialAccountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSocialAccount(event.target.value);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handlePrizeWalletChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPrizeWallet(event.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleLastStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setSelectedCrypto("");
    setTicketCount(1);
    setSocialAccount("");
    setNickname("");
    setPrizeWallet("");
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="buy-ticket-container">
      {currentStep === 1 && (
        <div>
          <h2>Step 1: Select Payment Method</h2>
          <div className="crypto-options">
            <div
              className={`crypto-option ${selectedCrypto === "usdt" ? "selected" : ""}`}
              onClick={() => {
                handleSelectCrypto("usdt");
                handleNextStep();
              }}
            >
              <img src={usdtIcon} alt="USDT" />
              <span>USDT {usdtPrice ? `$${usdtPrice.toFixed(2)}` : ""}</span>
            </div>
            <div
              className={`crypto-option ${selectedCrypto === "bitcoin" ? "selected" : ""}`}
              onClick={() => {
                handleSelectCrypto("bitcoin");
                handleNextStep();
              }}
            >
              <img src={bitcoinIcon} alt="Bitcoin" />
              <span>Bitcoin {btcPrice ? `$${btcPrice.toFixed(2)}` : ""}</span>
            </div>
            <div
              className={`crypto-option ${selectedCrypto === "eth" ? "selected" : ""}`}
              onClick={() => {
                handleSelectCrypto("eth");
                handleNextStep();
              }}
            >
              <img src={ethIcon} alt="Ethereum" />
              <span>Ethereum {ethPrice ? `$${ethPrice.toFixed(2)}` : ""}</span>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="mt-4">
          <h2>Step 2: Select Ticket Value</h2>
          <div className="d-flex justify-content-evenly align-items-center flex-column">
            <div className="ticket-count">
              <button
                className="ticket-button"
                onClick={() => handleTicketCountChange(-1)}
              >
                -
              </button>
              <span style={{ fontSize: "22px" }}>{ticketCount} Ticket(s)</span>
              <button
                className="ticket-button"
                onClick={() => handleTicketCountChange(1)}
              >
                +
              </button>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "-20px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  marginRight: "20px",
                }}
              >{`$${ticketValueUSD.toFixed(2)}`}</span>
              <span style={{ fontSize: "22px" }}>
                {selectedCrypto.toUpperCase()}{" "}
                {ticketValueCrypto !== null ? ticketValueCrypto.toFixed(6) : ""}
              </span>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h2 className="mt-4">
            Step 3: Coppy wallet or scan QR code to send the crypto you chose
          </h2>
          <div className="wallet-info">
            <div className="d-flex">
              <input value={walletNumber} />
              <button onClick={handleCopyWalletNumber}>
                Copy Wallet Number
              </button>
            </div>
            <span style={{ fontSize: "22px" }}>
              {selectedCrypto.toUpperCase()}{" "}
              {ticketValueCrypto !== null ? ticketValueCrypto.toFixed(6) : ""}
            </span>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "-20px",
              }}
              className="qr-code"
            >
              {/* Dynamic QR Code based on selected crypto */}
              <QRCode
                value={walletNumber}
                size={200}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                renderAs={"svg"}
                imageSettings={{
                  src: getCryptoIcon(),
                  x: undefined,
                  y: undefined,
                  height: 50,
                  width: 50,
                  excavate: true,
                }}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h2>Step 4: Provide Social Account, Nickname, and USDT Wallet</h2>
          <div className="user-info">
            <div className="input-group">
              <label htmlFor="social-account" className="mt-3">
                Social Account:(twitter, instagram...)
              </label>
              <input
                type="text"
                id="social-account"
                value={socialAccount}
                onChange={handleSocialAccountChange}
                className="user-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="nickname" className="mt-3">
                Nickname:
              </label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={handleNicknameChange}
                className="user-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="prize-wallet" className="mt-3">
                USDT Wallet to Get Prize:
              </label>
              <input
                type="text"
                id="prize-wallet"
                value={prizeWallet}
                onChange={handlePrizeWalletChange}
                className="user-input"
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div>
          <h1>Congratulattion</h1>
          <p>
            Immediately after receiving the payment, our administrators will
            confirm your participation in the drawing. It doesn't take more than
            30 minutes. All further news will be published on the website.
          </p>
          <p>Good luck!</p>
        </div>
      )}
      <div className="navigation-buttons d-flex justify-content-between mt-5">
        {currentStep > 1 && currentStep < 5 && (
          <button onClick={handlePreviousStep}>Previous Step</button>
        )}
        {currentStep > 1 && currentStep < 4 && (
          <button onClick={handleNextStep}>Next Step</button>
        )}
        {currentStep === 4 && (
          <button style={{ backgroundColor: "green" }} onClick={handleLastStep}>
            Confirm
          </button>
        )}
      </div>
      <div className="backdrop-blur"></div>
    </div>
  );
};

export default BuyTicket;
