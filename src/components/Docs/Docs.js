import React, { useContext, useEffect } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import Certificate from "../Certificate/Certificate";
import "./Docs.css";

function Docs(props) {
  const translation = useContext(TranslationContext);

  const [isCertificateOpen, setCertificateOpen] = React.useState(false);
  const [certificateType, setCertificateType] = React.useState(null);


  function closeCertificate() {
    setCertificateOpen(false);
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeCertificate();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  return (
    <section className="Docs" ref={props.scrollRef}>
      <h2 className="Docs__title">{translation.certificates}: </h2>
      <section className="Docs__certificates">
        <Certificate
          type={"yandex"}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={setCertificateOpen}
          setCertificateType={setCertificateType}
          isCertificateOpen={isCertificateOpen}
        />
        <Certificate
          type={"epam"}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={setCertificateOpen}
          setCertificateType={setCertificateType}
          isCertificateOpen={isCertificateOpen}
        />
      </section>
      <section
        className={`Docs__popup ${
          isCertificateOpen && "Docs__popup_opened"
        }`}
      >
      <Certificate
        type={certificateType}
        isCertificateOpen={isCertificateOpen}
        screenWidth={props.screenWidth}
        lang={props.lang}
        setCertificateOpen={setCertificateOpen}
        setCertificateType={setCertificateType}
        closeCertificate={closeCertificate}
      /></section>
    </section>
  );
}

export default Docs;
