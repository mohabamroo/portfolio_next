const stops = [
  {
    title: "Born",
    description: "Born in cairo, Egypt",
    date: "1996"
  },
  {
    title: "High School",
    description: "Graduated from high school top of my school",
    date: "2014"
  },
  {
    title: "Web Development Freelancer",
    description: "Started working as a fullstack freelanc engineer",
    date: "2017"
  },
  {
    title: "Graduation",
    description: "Graduated from GUC with a BSc in Mechatronics Engineering",
    date: "2019"
  },
  {
    title: "Software Engineer",
    description: "Started working as a fullstack engineer at Everestminds",
    date: "2020"
  },
  {
    title: "Senior Engineer",
    description: "Joined Thndr as a senior software engineer",
    date: "2021"
  },
  {
    title: "Team Lead",
    description: "Promoted to team lead at Preventia Technologies",
    date: "2022"
  }
];
export default function Timeline() {
  // TODO: add const for hobbies
  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-center text-bold text-secondary">
          Timeline & Experience
        </h1>
      </div>
      <div className="hero min-h-screen py-6 flex justify-center sm:py-12">
        <div className="py-3 sm:max-w-4xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden sm:block w-1 bg-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* Start icon */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="rounded-full bg-primary border-white w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Actual checkpoints */}
            {stops.map((x, idx) => {
              return (
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div
                      className={
                        "flex w-full mx-auto items-center " +
                        (idx % 2 == 0 ? "justify-start" : "justify-end")
                      }
                    >
                      <div
                        className={
                          "w-full sm:w-1/2 " +
                          (idx % 2 == 0 ? "sm:pr-8" : "sm:pl-8")
                        }
                      >
                        <div className="p-4 card card-compact bg-base-100 rounded shadow text-white">
                          <div className="card-body">
                            <div className="flex flex-row items-center justify-between">
                              <div className="card-title font-bold text-2xl">
                                {x.title}
                              </div>
                              <div>
                                <span className="badge">{x.date}</span>
                              </div>
                            </div>
                            <p>{x.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primary border-white w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Icon */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="rounded-full bg-primary border-white w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
