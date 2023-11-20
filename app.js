const 정답 = "APPLE";

let attempts = 0;
let index = 0;

function appStart() {
  const nextline = () => {
    attempts += 1;
    index = 0;
  };

  const handleEnterKey = () => {
    for (let i = 0; 1 < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const 입력한_글자 = block.textContent;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) block.style.background = "#6aaa64";
      else if (정답.includes(입력한_글자)) block.style.background = "#c9b458";
      else block.style.background = "#787C7E";
      block.style.color = "white";
    }

    nextline();
  };

  const handleKeydown = (event) => {
    const key = event.key.toUpperCase(); //toUpperCase 대문자로 변환해서 뽑아줌
    const keyCode = event.keyCode;
    const tihsBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );

    if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      tihsBlock.innerText = key;
      index += 1;
    }
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
