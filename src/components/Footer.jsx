import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        {/* Website Name + Navigation */}
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Gallery</a>
          <a className="link link-hover">Contact</a>
        </nav>

        {/* Contact Information */}
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold text-gray-700">ArtMart</h2>
          <p className="text-sm text-gray-500">
            For inquiries:
            <a
              href="mailto:hello@artmart.com"
              className="link link-hover text-primary ml-1"
            >
              hello@artmart.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Call us:
            <a
              href="tel:+8801700000000"
              className="link link-hover text-primary ml-1"
            >
              +880 1700-000000
            </a>
          </p>
        </div>

        {/* Social Links */}
        <nav className="mt-4">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-sky-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195C18.413 2.846 17.132 2.25 15.716 2.25c-3.179 0-5.515 2.966-4.797 6.045C7.828 8.09 4.2 6.13 1.771 3.15c-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419C5.621 19.622 3.013 20.347.4 20.039 2.579 21.436 5.168 22.25 7.948 22.25c9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.683a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0zM12 7.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Copyright */}
        <aside className="mt-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">ArtMart</span>. All
            rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
