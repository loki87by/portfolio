import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  ReactElement,
} from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { AgeProps } from "../../utils/types";
import Hands from "../Hands/Hands";
import Preloader from "../Preloader/Preloader";
import "./Age.css";

function Age(props: AgeProps): ReactElement {
  const [yearsOld, setYearsOld] = useState(0);
  const [monthesOld, setMonthesOld] = useState(0);
  const [weeksOld, setWeeksOld] = useState(0);
  const [daysOld, setDaysOld] = useState(0);
  const [hoursOld, setHoursOld] = useState(0);
  const [minutesOld, setMinutesOld] = useState(0);
  const [secondsOld, setSecondsOld] = useState(0);

  const translation = useContext(TranslationContext);

  const intervalTime = 1000;
  const intervalRef = useRef(intervalTime);
  intervalRef.current = intervalTime;

  const digitCheker = (number: number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  useEffect(() => {
    function getTimeFromBirth() {
      const birthMonth = 1;
      const birthDay = 3;
      const birthYear = 1987;
      const now: Date = new Date();
      const birth: Date = new Date(
        `${digitCheker(birthMonth)} ${digitCheker(birthDay)} ${birthYear}`
      );
      let res = now.getMilliseconds() - birth.getMilliseconds();
      let countdown = res / (365 * 24 * 60 * 60 * 1000);
      const years = Math.floor(countdown);
      setYearsOld(years);
      const lastBirthYear = new Date(
        `${digitCheker(birthMonth)} ${digitCheker(birthDay)} ${
          birthYear + years
        }`
      );
      res = now.getMilliseconds() - lastBirthYear.getMilliseconds();
      countdown = res / (24 * 60 * 60 * 1000);
      const monthes = Math.floor(countdown / 30.42);
      setMonthesOld(monthes);
      const lastBirthMouth = new Date(
        `${birthMonth + monthes} ${digitCheker(birthDay)} ${birthYear + years}`
      );
      res = now.getMilliseconds() - lastBirthMouth.getMilliseconds();
      countdown = res / (7 * 24 * 60 * 60 * 1000);
      const weeks = Math.floor(countdown);
      setWeeksOld(weeks);
      const lastBirthWeek = new Date(
        `${birthMonth + monthes} ${birthDay + weeks * 7} ${birthYear + years}`
      );
      res = now.getMilliseconds() - lastBirthWeek.getMilliseconds();
      countdown = res / (24 * 60 * 60 * 1000);
      const days = Math.floor(countdown);
      setDaysOld(days);
      const lastBirthDay = new Date(
        `${now.toString().split(" ")[1]} ${now.toString().split(" ")[2]} ${
          birthYear + years
        }`
      );
      res = now.getMilliseconds() - lastBirthDay.getMilliseconds();
      countdown = res / (60 * 60 * 1000);
      const hours = Math.floor(countdown);
      setHoursOld(hours);
      const lastBirthHour = new Date(
        `${now.toString().split(" ")[1]} ${now.toString().split(" ")[2]}, ${
          birthYear + years
        } ${digitCheker(hours)}:00:00`
      );
      res = now.getMilliseconds() - lastBirthHour.getMilliseconds();
      countdown = res / (60 * 1000);
      const mins = Math.floor(countdown);
      setMinutesOld(mins);
      const lastBirthMin = new Date(
        `${now.toString().split(" ")[1]} ${now.toString().split(" ")[2]}, ${
          birthYear + years
        } ${digitCheker(hours)}:${digitCheker(mins)}:00`
      );
      res = now.getMilliseconds() - lastBirthMin.getMilliseconds();
      countdown = res / 1000;
      const secs = Math.floor(countdown);
      setSecondsOld(secs);
    }
    intervalRef.current = intervalTime;
    const timer = setInterval(getTimeFromBirth, intervalRef.current);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Age">
      <section className="Age__section">
        <h4>
          {translation?.years}
          {":"}
        </h4>
        {props.binary ? (
          props.images.fingers && props.images.fingers.length > 11 ? (
            <Hands number={yearsOld} images={props.images} />
          ) : (
            <Preloader />
          )
        ) : (
          <h3>{yearsOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation?.mounthes}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={monthesOld} images={props.images} />
        ) : (
          <h3>{monthesOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation?.weeks}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={weeksOld} images={props.images} />
        ) : (
          <h3>{weeksOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation?.days}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={daysOld} images={props.images} />
        ) : (
          <h3>{daysOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation?.hours}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={hoursOld} images={props.images} />
        ) : (
          <h3>{hoursOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation?.minutes}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={minutesOld} images={props.images} />
        ) : (
          <h3>{minutesOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation?.seconds}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={secondsOld} images={props.images} />
        ) : (
          <h3>{secondsOld}</h3>
        )}
      </section>
    </div>
  );
}

export default Age;
