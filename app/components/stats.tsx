export default function StatsSection() {
  return (
    <div className="stats shadow my-10">
      <div className="stat place-items-center">
        <div className="stat-title">Experience</div>
        <div className="stat-value">+6 yrs</div>
        <div className="stat-desc mt-1">Jan. 2017</div>
      </div>

      <div className="stat hidden sm:block place-items-center">
        <div className="stat-title">Projects</div>
        <div className="stat-value text-secondary">+20</div>
        <div className="stat-desc text-secondary">↗︎ 10 freelance</div>
      </div>
      <div className="stat hidden sm:block place-items-center">
        <div className="stat-title">Teams</div>
        <div className="stat-value">+10</div>
        <div className="stat-desc">5 remote teams</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Technologies</div>
        <div className="stat-value">+15</div>
        <div className="stat-desc">Fullstack frameworks</div>
      </div>
    </div>
  );
}
