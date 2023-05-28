export default function HobbiesSection() {
  // TODO: add const for hobbies
  return (
    <div className="hero min-200 py-10 my-10">
      <div className="max-w-5xl">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-center text-bold text-secondary">
            Personal Hobbies
          </h1>
        </div>
        <div className="min-w-full">
          <div className="flex flex-row flex-wrap justify-around">
            {/* Writing */}
            <div className="my-4 w-1/2 min-w-fit text-primary-content flex items-center">
              <div className="avatar placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div>
                <h2 className="card-title text-2xl">Free writing</h2>

                <p className="text-left text-sm">
                  I had passion for writing since I was a kid.
                  <br />I also have a personal diary published{" "}
                  <a
                    target="_blank"
                    href="https://mohabamroo.com"
                    className="link link-error font-bold text-lg flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                      />
                    </svg>
                    Hobzlog
                  </a>
                </p>
              </div>
            </div>

            {/* Photography */}
            <div className="my-4 w-1/2 min-w-fit text-primary-content flex items-center">
              <div className="avatar placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="card-title text-2xl">Photography & Editing</h2>

                <p className="text-left text-sm">
                  Not a professional photographer,
                  <br />
                  but I love taking photos and editing them.
                  <br />
                  Random shots after editing can be a whole new vibe.
                </p>
              </div>
            </div>

            {/* Watching */}
            <div className="my-4 w-1/2 min-w-fit text-primary-content flex items-center">
              <div className="avatar placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="card-title text-2xl">Movies & Series</h2>

                <p className="text-left text-sm">
                  I have spent thousands of hours watching movies
                  <br />
                  and series.
                  <br />
                  Oh, anime too!
                </p>
              </div>
            </div>

            {/* Reading */}
            <div className="my-4 w-1/2 min-w-fit text-primary-content flex items-center">
              <div className="avatar placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                  />
                </svg>
              </div>
              <div>
                <h2 className="card-title text-2xl">Reading</h2>

                <p className="text-left text-sm">
                  Although I am not a consistent reader,
                  <br />I do enjoy reading books, novels, articles and random
                  pieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
