
const Navbar2 = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-dark p-3 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav gap-3">
          <li class="nav-item ">
            <a href="#home" className={'nav-link active text-light '}>Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" className={'nav-link active text-light '}>About</a>
          </li>
          <li class="nav-item">
            <a href="#works" className={'nav-link active text-light '}>Works</a>
          </li>
          <li class="nav-item">
            <a href="#contact" className={'nav-link active text-light '}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;