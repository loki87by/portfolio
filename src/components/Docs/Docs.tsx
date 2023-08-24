import React, { useContext, useEffect, useState, ReactElement } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { DocsProps } from "../../utils/types";
import Certificate from "../Certificate/Certificate";
import "./Docs.css";

function Docs(props: DocsProps): ReactElement {
  const translation = useContext(TranslationContext);

  const [isCertificateOpen, setCertificateOpen] = useState(false);
  const [certificateType, setCertificateType] = useState<string | null>(null);

  function closeCertificate() {
    setCertificateOpen(false);
  }

  function handleEscClose(e: KeyboardEvent) {
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
      <h2 className="Docs__title">{translation?.certificates}: </h2>
      <section className="Docs__certificates">
        <Certificate
          type={"yandex"}
          isMobile={props.isMobile}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={setCertificateOpen}
          setCertificateType={setCertificateType}
          isCertificateOpen={isCertificateOpen}
        />
        <Certificate
          isMobile={props.isMobile}
          type={"epam"}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={setCertificateOpen}
          setCertificateType={setCertificateType}
          isCertificateOpen={isCertificateOpen}
        />
      </section>
      <section
        className={`Docs__popup ${isCertificateOpen && "Docs__popup_opened"}`}
      >
        <Certificate
          type={certificateType}
          isMobile={props.isMobile}
          isCertificateOpen={isCertificateOpen}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={setCertificateOpen}
          setCertificateType={setCertificateType}
          closeCertificate={closeCertificate}
        />
      </section>
    </section>
  );
}

export default Docs;
