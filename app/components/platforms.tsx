export default function PlatformsSection() {
  // TODO: extract to a separate file
  const portfolioPlatforms = [
    {
      name: "Contra",
      logo: "https://images.squarespace-cdn.com/content/v1/5355ed0ae4b0753f93e22adc/1644539543541-7R7ZEBNOJFHUC7KIMYQL/Contra+Logo.png",
      link: "https://contra.com/mohab_amr_nzna3l55"
    },
    {
      name: "Upwork",
      link: "https://www.upwork.com/freelancers/~017199663769814810",
      logo: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png"
    },
    {
      name: "RemoteMore",
      link: "https://app.remotemore.com/public/eyJjYW5kaWRhdGVJZCI6IjVDcktVYnRxejh3c3NZNWRSaERLIiwib3JnYW5pemF0aW9uSWQiOiIiLCJpc1dpdGhvdXRTYWxhcnkiOnRydWV9",
      logo: "https://app.remotemore.com/assets/remotemore-rocket-logo.svg"
    },
    {
      name: "Freelancer.com",
      link: "https://www.freelancer.com/u/mohabamr",
      logo: "https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
    },
    {
      name: "Turing.com",
      link: "https://matching.turing.com/developer-resume-preview/5e3f81933ce6ca4486850f3823775f51d69c89a7c9",
      logo: "https://www.turing.com/blog/wp-content/uploads/2023/03/turing-logo.webp"
    },
    {
      name: "wellfound",
      link: "https://wellfound.com/u/mohab-amr",
      logo: "https://wellfound.com//assets/logo/wellfound-transitionlogo-black-40ce2b7cda01e53a6e5a8775a6d020fd2c081bfe93cdce89ac24f77070075f5e.svg"
    }
  ];
  return (
    <div className="hero my-10">
      <div className="max-w-5xl">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-center text-bold text-secondary">
            You may find me on
          </h1>
        </div>
        {/* Skills list */}
        <div className="min-w-full">
          <div className=" flex flex-row justify-center flex-wrap min-h-64">
            {portfolioPlatforms.map((platform, idx) => (
              <div key={idx} className="my-1 mr-1">
                <div className="avatar">
                  <a
                    href={platform.link}
                    target="_blank"
                    className="w-16 h-16 rounded-xl bg-white p-1"
                  >
                    <img
                      style={{ objectFit: "contain" }}
                      src={platform.logo}
                      alt={platform.name}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
