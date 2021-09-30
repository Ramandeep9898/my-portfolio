function App() {
  const navBar = document.getElementById("nav");
  let isShowNavBar = false;
  function addBackGroundClass() {
    navBar.classList.add("navBackgroud");
  }
  function removeBackgroundClass() {
    navBar.classList.remove("navBackgroud");
  }
  function handleScroll() {
    const yAxis = window.scrollY;
    if (yAxis > 200 && !isShowNavBar) {
      console.log("t");
      isShowNavBar = true;
      return addBackGroundClass();
    }
    if (yAxis < 200 && isShowNavBar) {
      console.log("fs");

      isShowNavBar = false;
      removeBackgroundClass();
    }
  }
  function init() {
    console.log("hello");
    document.addEventListener("scroll", handleScroll);
  }
  return init;
}

const app = App();
app();
