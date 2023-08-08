import React, { useEffect } from "react";
import { CODE } from "../../utils/consts.js";
import "./Code.css";

function Code(props) {
  let tabCounter = 0;
  let afterImport = false;
  let multiplyImport = false;
  let isString = false;
  let isGreen = false;
  let openBracket = false;
  let announce = false;
  let lastLine = false;
  let result = false;
  let end = " ";
  let lastAfterPunkt = undefined;
  const usedWords = ["Math"];
  const usedFunctions = ["getMonth", "getDay", "married", "birthChild"];
  const consts = [];
  const pinkKeywords =
    "await|break|case|continue|default|do|else|export|for|from|if|import|in|of|package|return|switch|throw|try|while|with|yield|catch|finally".split(
      "|"
    );
  const blueKeywords =
    "async|class|const|constructor|debugger|delete|enum|extends|function|get|implements|instanceof|interface|let|new|null|private|protected|public|set|static|super|this|typeof|var|void|undefined".split(
      "|"
    );
  const preGreenKeywords =
    "class|enum|extends|implements|instanceof|interface|new|private|protected|public|static|void".split(
      "|"
    );

  useEffect(() => {
    const lines = document.querySelectorAll(".Code__line");
    Array.from(lines).forEach((item) => {
      const max = item.offsetWidth;
      const children = Array.from(item.children);

      if (max < props.width * 0.86 - props.scrollbarWidth) {
        let current = 0;
        let maxWidth = false;
        let spaceCounter = 0;
        children.forEach((el) => {
          if (el.children[0].classList.contains("Code__line-tab")) {
            spaceCounter += 1;
          }

          if (!maxWidth) {
            if (current + el.offsetWidth < max) {
              current += el.offsetWidth;
            } else {
              item.setAttribute("style", "display: flex; flex-wrap: wrap");
              el.setAttribute(
                "style",
                `margin-left: ${(spaceCounter + 1) * 0.75}vmax`
              );
              maxWidth = true;
            }
          } else {
            el.setAttribute(
              "style",
              `margin-left: ${(spaceCounter + 2) * 0.75}vmax`
            );
          }
        });
      } else {
        item.removeAttribute("style");
        children.forEach((el) => {
          el.removeAttribute("style");
        });
      }
    });
  }, [props.scrollbarWidth, props.width]);

  function pointsChecker(keyword) {
    if (keyword === ".") {
      return <span>{`${keyword}`}</span>;
    } else {
      const arr = keyword.split(".");
      lastAfterPunkt = arr[arr.length - 1];
      return arr.map((item, index) => {
        if (index === 0) {
          end = "";
          return <span key={index}>{wordChecker(item)}</span>;
        } else {
          usedWords.push(item.replace("]", "").replace(";", ""));
          return (
            <span key={index}>
              {wordChecker(".")}
              {wordChecker(item)}
            </span>
          );
        }
      });
    }
  }

  function importChecker(keyword) {
    if (keyword === "{") {
      multiplyImport = true;

      return <span>{`${keyword}${end}`}</span>;
    } else if (keyword === "}") {
      multiplyImport = false;
      afterImport = false;

      return <span>{`${keyword}${end}`}</span>;
    } else {
      if (!multiplyImport) {
        afterImport = false;
      }
      usedWords.push(keyword.replace(",", ""));

      return <span style={{ color: "skyblue" }}>{`${keyword}${end}`}</span>;
    }
  }

  function openBracketChecker(keyword) {
    if (keyword === "(" || keyword === "((") {
      openBracket = true;

      return <span>{`${keyword}`}</span>;
    }
    let arr = keyword.split("(");
    let bracket = "(";

    if (keyword.includes("((")) {
      arr = keyword.split("((");
      bracket = "((";
    }

    for (let i = 0; i < arr.length; i += 2) {
      if (
        !pinkKeywords.includes(arr[i]) &&
        !blueKeywords.includes(arr[i]) &&
        !usedWords.includes(arr[i])
      ) {
        usedFunctions.push(arr[i]);
      }
    }
    end = "";

    return arr.map((item, index) => {
      if (index === 0) {
        return <span key={index}>{wordChecker(item)}</span>;
      } else {
        return (
          <span key={index}>
            {wordChecker(bracket)}
            {wordChecker(item)}
          </span>
        );
      }
    });
  }

  function closeBracketChecker(keyword) {
    if (keyword === ")") {
      openBracket = false;
      end = " ";
      return <span>)</span>;
    }
    const current = keyword.replace(")", "");
    return (
      <>
        {wordChecker(current)}
        {wordChecker(")")}
      </>
    );
  }

  function openSquareBracketChecker(keyword) {
    if (keyword === "[") {
      return <span>[</span>;
    }
    const arr = keyword.split("[");
    end = "";

    return (
      <>
        {wordChecker(arr[0])}
        {wordChecker("[")}
        {wordChecker(arr[1])}
      </>
    );
  }

  function closeSquareBracketChecker(keyword) {
    if (keyword === "]") {
      return <span>]</span>;
    }
    const arr = keyword.split("]");
    end = "";

    return (
      <>
        {wordChecker(arr[0])}
        {wordChecker("]")}
        {wordChecker(arr[1])}
      </>
    );
  }

  function semicolonChecker(keyword) {
    end = "";

    return (
      <>
        {wordChecker(keyword.replace(";", ""))}
        <span>;</span>
      </>
    );
  }

  function commaChecker(keyword) {
    return (
      <>
        {wordChecker(keyword.replace(",", ""))}
        <span>, </span>
      </>
    );
  }

  function greenWordsChecker(keyword) {
    isGreen = false;
    const spans = document.querySelectorAll("span");
    Array.from(spans).forEach((span) => {
      if (span.textContent === `${keyword}${end}`) {
        span.style.color = "#33b579";
      }
    });

    return <span style={{ color: "#33b579" }}>{`${keyword}${end}`}</span>;
  }

  function wordChecker(word) {
    if (result) {
      result = false;

      return <a href="/#">{wordChecker(word)}</a>;
    }

    if (+word === word - 1 + 1 && word !== " " && word !== "") {
      return <span style={{ color: "#a8e9a8" }}>{`${word}${end}`}</span>;
    }

    if (word === "=>") {
      return <span style={{ color: "#31a0ff" }}>{`${end}${word}${end}`}</span>;
    }

    if (word === "===") {
      return <span style={{ color: "#fff" }}>{`${end}${word}${end}`}</span>;
    }

    if (word === "import") {
      afterImport = true;

      return <span style={{ color: "#dd7dc9" }}>{`${word}${end}`}</span>;
    }

    if (word === "tab") {
      return <span className="Code__line-tab">{` `}</span>;
    }

    if (word === lastAfterPunkt) {
      end = " ";
    }

    if (
      word === "." ||
      (word.includes(".") &&
        word[0] !== "." &&
        word[0] !== "'" &&
        word[0] !== '"' &&
        word[0] !== "\\`")
    ) {
      return pointsChecker(word);
    }

    if (afterImport) {
      return importChecker(word);
    }

    if (preGreenKeywords.includes(word)) {
      isGreen = true;
    }

    if (openBracket && word !== ")") {
      usedWords.push(word);
    }

    if (word.includes("(")) {
      return openBracketChecker(word);
    }

    if (word.includes("[")) {
      return openSquareBracketChecker(word);
    }

    if (word.includes("]")) {
      return closeSquareBracketChecker(word);
    }

    if (word[word.length - 1] === ";") {
      return semicolonChecker(word);
    }

    if (word[word.length - 1] === ",") {
      return commaChecker(word);
    }

    if (word.includes(")")) {
      return closeBracketChecker(word);
    }

    if (word[0] === '"' || word[0] === "'" || word[0] === "\\`") {
      isString = true;
    }

    if (
      word[word.length - 1] === '"' ||
      word[word.length - 1] === "'" ||
      word[word.length - 1] === "\\`"
    ) {
      isString = false;

      return <span style={{ color: "#db7354" }}>{`${word}${end}`}</span>;
    }

    if (isString) {
      return <span style={{ color: "#db7354" }}>{`${word}${end}`}</span>;
    }

    if (pinkKeywords.includes(word)) {
      return <span style={{ color: "#dd7dc9" }}>{`${word}${end}`}</span>;
    }

    if (blueKeywords.includes(word)) {
      if (word === "const" || word === "let") {
        announce = true;
      }

      return <span style={{ color: "#2688c1" }}>{`${word}${end}`}</span>;
    }

    if (isGreen) {
      return greenWordsChecker(word);
    }

    if (consts.includes(word)) {
      return <span style={{ color: "#31a0ff" }}>{`${word}${end}`}</span>;
    }

    if (usedFunctions.includes(word)) {
      return <span style={{ color: "#d8d994" }}>{`${word}${end}`}</span>;
    }

    if (usedWords.includes(word)) {
      return <span style={{ color: "skyblue" }}>{`${word}${end}`}</span>;
    }

    if (announce) {
      announce = false;
      consts.push(word);

      return <span style={{ color: "#31a0ff" }}>{`${word}${end}`}</span>;
    }

    return <span>{`${word}${end}`}</span>;
  }

  function lineChecker(line) {
    let arr = line.split(" ");

    for (let i = 0; i < tabCounter; i++) {
      arr.unshift("tab");
    }
    arr.forEach((element, index) => {
      end = " ";

      if (element.includes("{")) {
        tabCounter += 1;
      }

      if (element.includes("}")) {
        tabCounter -= 1;

        if (arr[index - 1] === "tab") {
          arr.splice(index - 1, 1);
        }
      }
    });

    return arr.map((element, index) => {
      if (lastLine && index === arr.length - 1) {
        result = true;
      }

      return <span key={index}>{wordChecker(element)}</span>;
    });
  }

  function splitCode(code) {
    let arr = code.split("\n");
    arr.forEach((element, index) => {
      if (element.length > 100) {
        let parts = element.split(" { ");
        const start = parts[0].split(" ");
        start.push("{");
        let tmp = parts[1].split(" } ");
        const center = tmp[0].split(" ");
        const finish = tmp[1].split(" ");
        finish.unshift("}");
        arr.splice(index, 1, start.join(" "), ...center, finish.join(" "));
      }
    });

    return arr.map((element, index) => {
      if (index === arr.length - 1) {
        lastLine = true;
      }

      return (
        <div key={index} className="Code__line">
          {lineChecker(element)}
        </div>
      );
    });
  }

  let html = <div className="Code">{splitCode(CODE)}</div>;

  return <>{html}</>;
}

export default Code;
