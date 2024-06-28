import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          {/* <a className="link link-hover">About us</a> */}
          {/* <a className="link link-hover">Contact</a> */}
          {/* <a className="link link-hover">Jobs</a> */}
          {/* <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                className="fill-current"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 23 23"
                className="fill-current"
              >
                <path d="M12 2.09c3.204 0 3.587.012 4.849.07 1.361.062 2.636.336 3.608 1.307.971.971 1.245 2.247 1.307 3.608.058 1.262.07 1.645.07 4.849s-.012 3.587-.07 4.849c-.062 1.361-.336 2.636-1.307 3.608-.971.971-2.247 1.245-3.608 1.307-1.262.058-1.645.07-4.849.07s-3.587-.012-4.849-.07c-1.361-.062-2.636-.336-3.608-1.307-.971-.971-1.245-2.247-1.307-3.608-.058-1.262-.07-1.645-.07-4.849s.012-3.587.07-4.849c.062-1.361.336-2.636 1.307-3.608.971-.971 2.247-1.245 3.608-1.307 1.262-.058 1.645-.07 4.849-.07zm0-2.09C8.32 0 8.133.013 7.243.07 5.45.184 4.2.637 3.276 1.561c-.923.923-1.377 2.173-1.491 3.967C1.013 8.857 1 9.244 1 12.005s.013 3.148.07 4.838c.114 1.793.568 3.043 1.491 3.967.923.923 2.173 1.377 3.967 1.491C8.852 23.987 9.239 24 12 24s3.148-.013 4.838-.07c1.793-.114 3.043-.568 3.967-1.491.923-.923 1.377-2.173 1.491-3.967.057-1.69.07-3.038.07-4.838s-.013-3.148-.07-4.838c-.114-1.793-.568-3.043-1.491-3.967-.923-.923-2.173-1.377-3.967-1.491C15.148.013 14.761 0 12 0zm0 5.525a6.475 6.475 0 1 0 0 12.95 6.475 6.475 0 0 0 0-12.95zm0 2.09a4.385 4.385 0 1 1 0 8.77 4.385 4.385 0 0 1 0-8.77zM18.25 5c.517 0 .75.233.75.75s-.233.75-.75.75-.75-.233-.75-.75.233-.75.75-.75z"/>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
