import React from "react";
import Resume from "../Resume/Resume";
import "./Main.css";

function Main(props) {
  const [isInitWidget, setInitWidget] = React.useState(false);

  React.useEffect(() => {
    const widget = document.createElement("weather-widget");
    widget.id = "weatherWidget";
    document.body.appendChild(widget);
    const script = document.createElement("script");
    script.src =
      "https://myweatherwidget.netlify.app/main.5b97e72ea5ec56747edc.js";
    script.async = true;
    script.onload = () => {
      window.MyApp.init(widget);
    };
    widget.appendChild(script);
    setInitWidget(true);
  }, []);

  React.useEffect(() => {
    const widget = document.getElementById("weatherWidget");
    widget.classList.add("hide-widget");
  }, [isInitWidget]);

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
