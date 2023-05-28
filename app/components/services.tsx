export default function ServicesSection() {
  return (
    <div id="services" className="hero min-200 py-28">
      <div className="max-w-5xl">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold text-center text-bold text-secondary">
            Digital Services
          </h1>
        </div>
        <div className="min-w-full">
          <div className="flex flex-row flex-wrap justify-around">
            {/* Backend */}
            <div className="card my-3 w-80 bg-base-100 text-primary-content">
              <div className="card-body justify-content-center">
                <div className="avatar placeholder justify-content-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24 margin-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title margin-auto">Backend Development</h2>
                <p className="text-center text-sm">
                  Developing RESTful APIs, including database design & system
                  architecture utilizing proper design patterns.
                </p>
              </div>
            </div>
            {/* Web */}
            <div className="card my-3 w-80 bg-base-100 text-primary-content">
              <div className="card-body justify-content-center">
                <div className="avatar placeholder justify-content-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24 margin-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title margin-auto">Web Development</h2>
                <p className="text-center text-sm">
                  Building web applications using modern technologies such as
                  React, Next.js, and Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Mobile */}
            <div className="card my-3 w-80 bg-base-100 text-primary-content">
              <div className="card-body justify-content-center">
                <div className="avatar placeholder justify-content-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24 margin-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title margin-auto">Mobile Development</h2>
                <p className="text-center text-sm">
                  Building mobile applications using React Native and Expo &
                  releasing to play/app store.
                </p>
              </div>
            </div>

            {/* DevOps */}
            <div className="card my-3 w-80 bg-base-100 text-primary-content">
              <div className="card-body justify-content-center">
                <div className="avatar placeholder justify-content-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24 margin-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title margin-auto">DevOps</h2>
                <p className="text-center text-sm">
                  Shipping services to production using Docker, Kubernetes &
                  Helm.
                </p>
              </div>
            </div>

            {/* Cloud */}
            <div className="card my-3 w-80 bg-base-100 text-primary-content">
              <div className="card-body justify-content-center">
                <div className="avatar placeholder justify-content-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24 margin-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title margin-auto">Cloud Services</h2>
                <p className="text-center text-sm">
                  Deploying services on cloud providers like AWS, GCP &
                  DigitalOcean.
                </p>
              </div>
            </div>

            {/* Product */}
            <div className="card my-3 w-80 bg-base-100 text-primary-content">
              <div className="card-body justify-content-center">
                <div className="avatar placeholder justify-content-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24 margin-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title margin-auto">Product & Planning</h2>
                <p className="text-center text-sm">
                  Contribution to product development and planning, including
                  user research, user testing, and product design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
