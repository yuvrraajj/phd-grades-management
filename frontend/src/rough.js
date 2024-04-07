function adjust() {
  let innerWidth = window.innerWidth;
  if (innerWidth >= 1201) {
    if (fmactitleref.current) {
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "-30%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.fontSize = "75px";
      fmactitleref.current.style.transform = " translate(-50%,0%) scale(1)";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0px";
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0px";
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0px";
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.display = "flex";
      fmaclogoref.current.style.animation = "none";
      fmaclogoref.current.style.opacity = 1;
      fmaclogoref.current.style.top = "50%";
      fmaclogoref.current.style.left = "0%";
      fmaclogoref.current.style.transform = "translateY(-50%)";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  } else if (innerWidth >= 1001 && innerWidth <= 1201) {
    if (fmactitleref.current) {
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "-25%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.fontSize = "75px";
      fmactitleref.current.style.transform = " translate(-50%,0%) scale(1)";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0px";
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0px";
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0px";
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.animation = "none";
      fmaclogoref.current.style.opacity = 1;
      fmaclogoref.current.style.display = "flex";
      fmaclogoref.current.style.transform = "translateY(-50%)";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
      fmaclogoref.current.style.top = "50%";
      fmaclogoref.current.style.left = "0%";
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  } else if (innerWidth >= 970 && innerWidth <= 1001) {
    if (fmactitleref.current) {
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "-15%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.fontSize = "60px";
      fmactitleref.current.style.transform = " translate(-50%,0%) scale(1)";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0px";
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0px";
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0px";
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.animation = "none";
      fmaclogoref.current.style.opacity = 1;
      fmaclogoref.current.style.top = "50%";
      fmaclogoref.current.style.left = "0%";
      fmaclogoref.current.style.display = "flex";
      fmaclogoref.current.style.transform = "translateY(-50%)";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  } else if (innerWidth >= 800 && innerWidth <= 970) {
    if (fmactitleref.current) {
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "-15%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.fontSize = "50px";
      fmactitleref.current.style.transform = " translate(-50%,0%) scale(1)";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0px";
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0px";
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0px";
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.display = "none";
      fmaclogoref.current.style.opacity = 1;
      fmaclogoref.current.style.top = "50%";
      fmaclogoref.current.style.left = "0%";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  } else if (innerWidth >= 651 && innerWidth <= 800) {
    if (fmactitleref.current) {
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "-15%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.transform = " translate(-50%,0%) scale(1)";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.fontSize = "50px";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0px";
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0px";
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0px";
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.display = "none";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  } else if (innerWidth >= 551 && innerWidth < 651) {
    if (fmactitleref.current) {
      fmactitleref.current.style.fontSize = "35px";
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "30%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.transform = "translate(-52%,0%) scale(1.8)";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0.1px";
      disappearingtextref1.current.style.transform =
        "translate(-50%,0%) scale(0)";
      disappearingtextref1.current.style.opacity = 0;
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0.1px";
      disappearingtextref2.current.style.opacity = 0;
      disappearingtextref2.current.style.transform =
        "translate(-50%,0%) scale(0)";
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0.1px";
      disappearingtextref3.current.style.opacity = 0;
      disappearingtextref3.current.style.transform =
        "translate(-50%,0%) scale(0)";
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.animation = "none";
      fmaclogoref.current.style.left = "50%";
      fmaclogoref.current.style.top = "-5%";
      fmaclogoref.current.style.transform = "translateX(-50%)";
      fmaclogoref.current.style.opacity = 1;
      fmaclogoref.current.style.display = "flex";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  } else if (innerWidth <= 550) {
    if (fmactitleref.current) {
      fmactitleref.current.style.animation = "none";
      fmactitleref.current.style.top = "40%";
      fmactitleref.current.style.left = "50%";
      fmactitleref.current.style.opacity = 1;
      fmactitleref.current.style.fontSize = "23px";
      fmactitleref.current.style.transform = "translate(-52%,0%) scale(1.8)";
    }

    if (
      disappearingtextref1.current &&
      disappearingtextref2.current &&
      disappearingtextref3.current
    ) {
      disappearingtextref1.current.style.animation = "none";
      disappearingtextref1.current.style.fontSize = "0.1px";
      disappearingtextref1.current.style.opacity = 0;
      disappearingtextref2.current.style.animation = "none";
      disappearingtextref2.current.style.fontSize = "0.1px";
      disappearingtextref2.current.style.opacity = 0;
      disappearingtextref3.current.style.animation = "none";
      disappearingtextref3.current.style.fontSize = "0.1px";
      disappearingtextref3.current.style.opacity = 0;
    }
    if (
      highlighttextref1.current &&
      highlighttextref2.current &&
      highlighttextref3.current &&
      highlighttextref4.current
    ) {
      highlighttextref1.current.style.animation = "none";
      highlighttextref1.current.style.color = "red";
      highlighttextref2.current.style.animation = "none";
      highlighttextref2.current.style.color = "red";
      highlighttextref3.current.style.animation = "none";
      highlighttextref3.current.style.color = "red";
      highlighttextref4.current.style.animation = "none";
      highlighttextref4.current.style.color = "red";
    }

    if (fmaclogoref.current) {
      fmaclogoref.current.style.animation = "none";
      fmaclogoref.current.style.left = "50%";
      fmaclogoref.current.style.top = "-5%";
      fmaclogoref.current.style.transform = "translateX(-50%)";
      fmaclogoref.current.style.opacity = 1;
      fmaclogoref.current.style.display = "flex";
    }

    if (menubarref.current) {
      menubarref.current.style.animation = "none";
      menubarref.current.style.opacity = 1;
    }

    if (newsref.current) {
      newsref.current.style.animation = "none";
      newsref.current.style.transform = "scale(1)";
    }
    if (videoRef.current) videoRef.current.style.display = "none";

    if (dateref.current) {
      dateref.current.style.animation = "none";
      dateref.current.style.opacity = 1;
    }
  }

  if (currref.current) {
    changemenuoption(currref);
  }
}
