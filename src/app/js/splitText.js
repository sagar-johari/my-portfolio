"use strict";

export class SplitText {
  #options = {
    charClass: "aki__char",
    wordClass: "aki__word",
    lineClass: "aki__line",
    globalClass: "aki_wrapper",
    emptySpaceName: "__AKI__EMPTY__SPACE__",
  };

  #rawWords = [];
  words = [];
  lines = [];

  constructor(elementOrSelector) {
    this.init(elementOrSelector);

    this.target = null;
    this.textContent = null;
  }

  #isElement(obj) {
    try {
      return obj instanceof HTMLElement;
    } catch (e) {
      return (
        typeof obj === "object" &&
        obj.nodeType === 1 &&
        typeof obj.style === "object" &&
        typeof obj.ownerDocument === "object"
      );
    }
  }

  #createElement(tagname, content = "", htmlAttributes = {}, ...cssClasses) {
    const __element__ = document.createElement(tagname);
  
    // Add individual classes using classList.add for each class
    cssClasses.forEach(cssClass => {
      if (cssClass) { // Ensure the class is not undefined or empty
        __element__.classList.add(cssClass);
      }
    });
  
    __element__.innerHTML = content;
  
    for (const [key, value] of Object.entries(htmlAttributes)) {
      __element__.setAttribute(key, value);
    }
  
    return __element__;
  }
  
  #splitWords() {
    const textWords = this.textContent.split(/\s+/);

    textWords.forEach((word) => {
      const wordDiv = this.#createElement(
        "div",
        word,
        {
          style: "position:relative; display:inline-block;",
        },
        `${this.#options.globalClass}`,
        `${this.#options.wordClass}`
      );

      this.#rawWords.push(wordDiv);
      this.words.push(wordDiv);
    });
  }

  #splitLines() {
    let startIndex = 0;
    let lineArrays = [];

    const appendToLineArray = () => {
      lineArrays.forEach((lineArray) => {
        const lineDiv = this.#createElement(
          "div",
          "",
          {
            style: "position:relative; display:inline-block",
          },
          `${this.#options.globalClass}`,
          `${this.#options.lineClass}`,
        );

        lineArray.forEach((lineWord) => {
          lineDiv.append(lineWord);
          lineDiv.append(" ");
        });

        this.lines.push(lineDiv);
        this.target.append(lineDiv);
      });
    };

    this.words.reduce((oldOffsetTop, word, index) => {
      const currentOffsetTop = word.offsetTop;

      if (
        (oldOffsetTop !== currentOffsetTop && oldOffsetTop !== null) ||
        index === this.words.length - 1
      ) {
        const computedIndex =
          index === this.words.length - 1 ? index + 1 : index;
        const lineArray = this.words.slice(startIndex, computedIndex);
        lineArrays.push(lineArray);
        startIndex = index;
      }

      return currentOffsetTop;
    }, null);

    appendToLineArray();
  }

  #combineAll() {
    this.words.forEach((word) => {
      this.target.append(word);
      this.target.append(" ");
    });
    this.#splitLines();
  }

  #splitStart() {
    this.#splitWords();
    this.#combineAll();
  }

  #getTextContent() {
    this.textContent = this.target.textContent;
  }

  #clearContent(element) {
    element.innerHTML = "";
  }

  #logError(message) {
    console.error(`${message}`, "color:red", "color:inherit");
  }

  #logAndThrowError(message) {
    if (message.includes("%c")) {
      console.error(`${message}`, "color:red", "color:inherit");
    } else {
      console.error(`${message}`);
    }
    throw "SplitTextException! ⬆️";
  }

  init(elementOrSelector) {
    if (this.#isElement(elementOrSelector)) {
      this.target = elementOrSelector;
      this.#getTextContent();
    } else {
      if (elementOrSelector !== "") {
        const element = document.querySelector(`${elementOrSelector}`);
        if (element) {
          this.target = element;
          this.#getTextContent();
          // window.addEventListener("resize", () => resizeFunction(element))
        } else {
          this.#logAndThrowError(
            `can't found %c${elementOrSelector}%c in DOM tree!`
          );
        }
      } else {
        this.#logAndThrowError(
          `selector is empty! %cplease give a valid%c selector!`
        );
      }
    }

    this.#clearContent(this.target);
    this.#splitStart();
  }
}