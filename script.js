function trocar() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./projeto/avatar-claro.png")
  } else {
    img.setAttribute("src", "./projeto/avatar.png")
  }
}
