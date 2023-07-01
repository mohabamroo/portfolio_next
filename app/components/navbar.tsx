export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content fixed top-0 z-10 px-10 py-4">
      <div className="navbar-start">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost normal-case text-xl">
            Hobzfolio
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#hobbies">Hobbies</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="text-secondary" href="/#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
