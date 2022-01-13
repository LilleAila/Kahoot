(() => {
    // Initialize
  })();
  
  document.querySelector(".app").addEventListener("submit", () => {
    window.location.href =
      "./results.html?query=" + document.querySelector(".input").value;
  });
  