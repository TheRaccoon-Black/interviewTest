export function Header() {
  return `
    <header>
      <div class="navbar">
        <h1 class="logo"><img id="logos" src="img/ojinozenin.png" alt="ojik's logo"> ojinozenin</h1>
        <nav>
          <a href="#home" class="nav-link" data-link="home">Home</a>
          <a href="#about" class="nav-link" data-link="about">About</a>
          <a href="#contact" class="nav-link" data-link="contact">Contact</a>
        </nav>
      </div>
    </header>
  `;
}