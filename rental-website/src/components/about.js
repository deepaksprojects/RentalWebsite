import React from 'react'
export default function About(props) {
    const data = [
        {
          image: "/images/AboutUs1.png",
          heading: "Chapter I",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
        },
        {
          image: "/images/AboutsUs2.png",
          heading: "Chapter II",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
        },
        {
          image: "/images/AboutsUs3.png",
          heading: "Chapter III",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
        },
        {
          image: "/images/AboutsUs4.png",
          heading: "Chapter VI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
        },
      ];
  return (
    <>
    <div className="About" ref={props.about}>
          <h1>About Us</h1>
          <p>Allow us to tell you a short story...</p>
          <div className="About-content">
            {data.map((item, index) => {
              return (
                <div>
                  <img src={item.image} alt="" />
                  <div className="About-description">
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
  )
}
