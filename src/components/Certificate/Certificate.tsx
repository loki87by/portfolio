import React, { useState, useEffect, ReactElement, MouseEvent } from "react";
import { CertificateProps } from "../../utils/types";
import certificateRu from "../../media/Акулич.pdf";
import certificateEn from "../../media/20202WD00196.pdf";
import epamCertificate from "../../media/ds8jpv3n.pdf";
import close from "../../images/close.png";
import "./Certificate.css";

function Certificate(props: CertificateProps): ReactElement {
  const [source, setSource] = useState<string | null>(null);
  const [certifyWidth, setCertifyWidth] = useState(props.screenWidth * 0.43);
  const [certifyHeight, setCertifyHeight] = useState(props.screenWidth * 0.43);
  const [certifyZoom, setCertifyZoom] = useState(props.screenWidth / 27.5);

  useEffect(() => {
    if (props.type === "yandex") {
      if (props.lang === "ru") {
        setSource(certificateRu);
      }

      if (props.lang === "en") {
        setSource(certificateEn);
      }
    }

    if (props.type === "epam") {
      setSource(epamCertificate);
    }
  }, [props.type, props.lang]);

  useEffect(() => {
    if (!props.isCertificateOpen) {
      if (window.innerWidth < 555) {
        setCertifyZoom(window.innerWidth / 5);
        setCertifyWidth(window.innerWidth * 0.86);
        setCertifyHeight(window.innerWidth * 0.58);
      } else {
        setCertifyZoom(window.innerWidth / 29);
        setCertifyWidth(window.innerWidth * 0.42);
        setCertifyHeight(window.innerWidth * 0.29);
      }
    } else {
      if (props.type === "yandex") {
        setCertifyZoom(window.innerWidth / 18);
      }

      if (props.type === "epam") {
        setCertifyZoom(window.innerWidth / 20);
      }
      setCertifyWidth(window.innerWidth * 0.9);
      setCertifyHeight(window.innerWidth);
    }
  }, [props.isCertificateOpen, props.type]);

  function openCertificate(e: MouseEvent) {
    const type = (e.target as HTMLElement).id.replace("-button", "");

    if (props.setCertificateType) {
      props.setCertificateType(type);
    }

    if (props.setCertificateOpen) {
      props.setCertificateOpen(true);
    }
  }

  return (
    <div
      className={
        props.isCertificateOpen ? "Certificate__opened" : "Certificate"
      }
    >
      {source !== null ? (
        props.isCertificateOpen ? (
          <div
            className="Certificate__close"
            id={`${props.type}-button`}
            onClick={props.closeCertificate}
          >
            <img alt="close" src={close} />
          </div>
        ) : (
          <div
            className="Certificate__open-button"
            id={`${props.type}-button`}
            onClick={openCertificate}
          ></div>
        )
      ) : (
        ""
      )}
      <iframe
        title="certify"
        id={
          props.isCertificateOpen
            ? `${props.type}-opened`
            : `${props.type}-mini`
        }
        allowTransparency={true}
        height={`${certifyHeight}px`}
        width={`${certifyWidth}px`}
        src={`${source}#zoom=${certifyZoom}`}
      ></iframe>
    </div>
  );
}

export default Certificate;
