const menuHTML = `

<div class="nav-bar">
  <!-- Mobile top section -->
  <div class="mobile">
    <div class="logo">
      <a href="/">
        <h2><b>GEORGE</b> LIN<h2>
      </a>
    </div>
  </div>

  <!-- HAMBURGER MENU -->
  <nav>

    <details>
      <summary><img src="img/hamburger.png" alt="mobile nav icon" style="width:15px"> MENU</summary>
      <div class="nav-details">
        <ul>
          <li><a href="bio.html">Bio</a></li>
          <li><a href="/#section02">Work</a></li>
          <li><a href="doc/resume_georgelin.pdf" target="_blank">Resume</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="sidework.html">Side Work</a></li> 
        </ul>
      </div>
    </details>
  </nav>

  <div class="desktop-nav">

    <div class="desktop">
      <div class="logo">
        <a href="/">
          <h2><b>GEORGE</b> LIN<h2>
        </a>
      </div>
    </div>

    <!-- Destop Nav with abstract -->

    <!-- Top navigation -->
    <div class="topnav">
      <nav>
        <ul>
          <!-- Centered link -->
          <li><a href="bio.html">Bio</a></li>
          <li><a href="/#section02">Work</a></li>
          <li><a href="doc/resume_georgelin.pdf" target="_blank">Resume</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="sidework.html">Side Work</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
`;

// This finds the <main-nav> tag on your page and injects the HTML above into it
  document.querySelector('main-nav').innerHTML = menuHTML;