export function Home() {
  return `
    <section class="hero">
      <h2>Hello, I’m <span class="highlight">ojinozenin</span></h2>
      <p>A passionate programmer crafting elegant solutions with clean JavaScript. Welcome to my creative space where code meets design.</p>
    </section>

    <section class="features">
      <h3>Why Work With Me?</h3>
      <div class="feature-grid">
        <div class="feature">
          <h4><span class="iconify" data-icon="mdi:rocket" data-inline="false"></span> High-Performance Code</h4>
          <p>I focus on writing optimized and maintainable code that delivers fast and responsive user experiences.</p>
        </div>
        <div class="feature">
          <h4><span class="iconify" data-icon="mdi:server" data-inline="false"></span> Robust Backend</h4>
          <p>I build robust, scalable, and secure backend systems that support complex web applications.</p>
        </div>
        <div class="feature">
          <h4><span class="iconify" data-icon="mdi:brain" data-inline="false"></span> Always Learning</h4>
          <p>I embrace challenges, continuously explore new tech, and evolve to provide cutting-edge solutions in web development.</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h3>What People Say</h3>
      <div class="testimonial-grid">
        <blockquote>
          <p>"website that he made was very satisfying, and website he built is still useful until now!"</p>
          <footer>- Rizky, Intern at Fatmawati airport</footer>
        </blockquote>
        <blockquote>
          <p>"He finished my KP with me, and it was great!"</p>
          <footer>- Riska, Student</footer>
        </blockquote>
        <blockquote>
          <p>"He helped me manage data in the backend, so I could focus on the front end."</p>
          <footer>- Arief, Frontend Developer</footer>
        </blockquote>
      </div>
    </section>

    <section class="cta">
      <h3>Let’s Build Something Great Together</h3>
      <p>If you're looking for a developer who values quality, performance, and creativity, I’m ready to collaborate.</p>
      <a href="#contact" class="btn">Get in Touch</a>
    </section>
  `;
}
