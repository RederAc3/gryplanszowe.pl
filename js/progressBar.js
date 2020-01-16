const progressBar = document.querySelector(".progress-bar");

const progress = () => {
  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolledHeight = document.documentElement.scrollTop;
  const scrolledPercent = (scrolledHeight / pageHeight) * 100 + "%";
  setTimeout(() => {
    progressBar.style.width = scrolledPercent;
  }, 200);
};
document.addEventListener("scroll", progress);
