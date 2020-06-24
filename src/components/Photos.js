import React from "react"

const Photos = () => {
  return (
    <div>
      <section className="sections">photography</section>
      <div className="photography">
        <p>
          I bought my first camera a year and a half ago. The following works
          are the result of my self-study. I work with Canon 550d camera and
          Yongnuo 35mm lens.
        </p>
        <div className="photocontainer">
          <div className="photos">
            <div className="photoitem1"></div>
            <div className="photoitem1"></div>
            <div className="photoitem1"></div>
          </div>
          <div className="photos">
            {" "}
            <div className="photoitem2"></div>
            <div className="photoitem2"></div>
            <div className="photoitem2"></div>
          </div>
          <div className="photos">
            {" "}
            <div className="photoitem"></div>
            <div className="photoitem"></div>
            <div className="photoitem"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
