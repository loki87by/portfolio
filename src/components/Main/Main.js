import React from "react";
import Resume from "../Resume/Resume";
import "./Main.css";

function Main(props) {
  React.useEffect(() => {
    const widget = document.createElement("weather-widget");
    document.body.appendChild(widget);
    const script = document.createElement("script");
    script.src = "https://myweatherwidget.netlify.app/main.js";
    script.async = true;
    script.onload = () => {
      window.MyApp.init(widget);
    };
    widget.appendChild(script);
  }, []);

  return (
    <section className="Main">
      <Resume
        isMobile={props.isMobile}
        lang={props.lang}
        images={props.images}
        imagesIsLoad={props.imagesIsLoad}
        scrollbarWidth={props.scrollbarWidth}
      />
      <weather-widget />
    </section>
  );
}

export default Main;
