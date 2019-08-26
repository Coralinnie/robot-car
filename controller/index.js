let isDirectionActive = false;
let directionalInterval = null;

function hideStopDialog() {
  const stopContainer = document.getElementById("stopWindow");
  if (
    stopContainer.style.visibility == "visible" ||
    stopContainer.style.visibility == ""
  ) {
    return (stopContainer.style.visibility = "hidden");
  }
  stopContainer.style.visibility = "visible";
}

function turnDirectionLightsOn(dir) {
  clearInterval(directionalInterval);
  clearDirectional();
  const directional = document.getElementById(dir);
  const border = dir == "arrow-left" ? "borderRight" : "borderLeft";

  if (!isDirectionActive) {
    directionalInterval = setInterval(() => {
      if (
        directional.style[border] == "" ||
        directional.style[border] == "15px solid rgba(255, 187, 0, 0.4)"
      ) {
        console.log(`${dir} APAGADO`);
        directional.style[border] = "15px solid rgb(255, 187, 0)";
      } else {
        console.log("${dir}  PRENDIDO");
        directional.style[border] = "15px solid rgba(255, 187, 0, 0.4)";
      }
    }, 300);
  } else {
    directional.style[border] = "15px solid rgba(255, 187, 0, 0.4)";
    clearInterval(directionalInterval);
  }
}

function clearDirectional() {
  const left = document.getElementById("arrow-left");
  const right = document.getElementById("arrow-right");
  left.style.borderRight = "15px solid rgba(255, 187, 0, 0.4)";
  right.style.borderLeft = "15px solid rgba(255, 187, 0, 0.4)";
}
