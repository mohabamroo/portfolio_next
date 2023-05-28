export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content fixed top-0 z-10 px-10 py-4">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost normal-case text-xl">
          Hobzfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
