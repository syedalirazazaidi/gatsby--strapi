import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Main() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-1px",
        backgroundColor: "#b6d6f8",
        height: "200px",
      }}
    >
      <StaticImage
        src="../images/car-hero.svg"
        alt="Compare-auto-insurance-quotes.com"
        width={550}
        style={{ position: "absolute", bottom: 40, left: 240 }}
      />
      <StaticImage
        src="../images/people-hero.svg"
        alt="Compare-auto-insurance-quotes.com"
        width={310}
        style={{ position: "absolute", bottom: 10, right: 350 }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", margin: "60px" }}>
          <StaticImage
            src="../images/check-icon.svg"
            alt="Compare-auto-insurance-quotes.com"
            style={{ width: "50px" }}
          />
          <h4>
            Rates from
            <br /> $22/Month*
          </h4>{" "}
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "60px" }}>
          <StaticImage
            src="../images/check-icon.svg"
            alt="Compare-auto-insurance-quotes.com"
            style={{ width: "50px" }}
            placeholder="sdasdsad"
          />
          <h4>
            Top
            <br /> Companies
          </h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "60px" }}>
          <StaticImage
            src="../images/check-icon.svg"
            alt="Compare-auto-insurance-quotes.com"
            style={{ width: "50px" }}
          />
          <h4> Shop Side-by-Side</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "60px" }}>
          <StaticImage
            src="../images/check-icon.svg"
            alt="Compare-auto-insurance-quotes.com"
            style={{ width: "50px" }}
          />
          <h4>Safe & Secure Site</h4>
        </div>
      </div>
    </div>
  )
}

export default Main
