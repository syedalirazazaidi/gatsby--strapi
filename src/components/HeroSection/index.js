import React from "react"
import { Button } from "../ButtonElement"
import "./Herosection.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function HeroSection() {
  return (
    <div className="hero-container">
      <StaticImage
        src="../../images/CAIQ-logo.svg"
        alt="Compare-auto-insurance-quotes.com"
        style={{ width: "180px", height: "60px", margin: "55px 300px" }}
      />
      <div style={{ margin: "0 auto" }}>
        <h1
          style={{
            width: "100%",
            maxWidth: "630px",
            // fontWeight: "500px",
            fontSize: "52px",

            textAlign: "center",
          }}
        >
          The Best Auto Insurance Quotes,<b> Rated for You</b>
        </h1>
        <div className="hero-btns">
          <Link to="https://ipexcar.com/">
            {" "}
            <Button>
              GET QUOTES <b>&#62;</b>{" "}
            </Button>
          </Link>
        </div>
        <h2 style={{ marginLeft: "50px" }}>
          Save on <span style={{ color: "blue" }}>Top Companies.</span> Compare
          in 2 Minutes!
        </h2>
      </div>
    </div>
  )
}

export default HeroSection
