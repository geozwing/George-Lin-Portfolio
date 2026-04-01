const menuHTML = `
  <div class="page-margin">
    <div class="footer" data-aos="fade" data-aos-duration="800">
      <div class="flex-container">
        <div>
          <div class="logo">
            <p><a href="index"><b>GEORGE</b> LIN </a></p>
          </div>
          <p>Tel: <a href="tel:+17789396091"> +1 (778) 939-6091</a></p>
          <p>Email: <a href="mailto:georgelin3d@gmail.com">georgelin3d@gmail.com</a></p>
        </div>

        <div>
          <div class="right">
            <p><a href="https://www.linkedin.com/in/georgelindesign/">Linkedin</a></p>
            <p><a href="doc/resume_georgelin.pdf" target="_blank">Resume</a></p>
            <p><a href="http://www.youtube.com/aaa984"> YouTube </a></p>
            <p><a href="sidework">Side Work</a></p>

          </div>
        </div>

      </div>
    </div>
  </div>
`;

// This finds the <footer> tag on your page and injects the HTML above into it
document.querySelector('footer').innerHTML = menuHTML;