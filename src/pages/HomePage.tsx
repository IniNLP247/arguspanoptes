import Section from "../components/Section";

function HomePage() {
  return (
    <>
      <div className="hero-images">
        <div className="hero-img hero-img--1">
          <img src="/images/933179.jpg" alt="Forest terrain" />
        </div>
        <div className="hero-img hero-img--2">
          <img src="/images/drone.png" alt="Drone" />
        </div>
        <div className="hero-img hero-img--3">
          <img src="/images/topdown.png" alt="Aerial view" />
        </div>
      </div>

      <div className="hero-text">
        <h1 className="project-name">
          Argus
          <br />
          <span>Panoptes</span>
        </h1>
        <p className="tagline">
          Multi-drone autonomous search and rescue - built for the environments
          that matter
        </p>
        <p className="mission">
          Argus Panoptes is a research project with the goal of developing fully
          autonomous multi-UAV systems capable of operating in GPS-denied,
          visually complex environments. Designed from the ground up for
          real-world search and rescue scenarios such as dense forest, rugged
          terrain, and disaster zones where human-operated systems are too slow,
          too few, or too costly to deploy at scale.
        </p>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-value">6</span>
          <span className="stat-label">Development Phases</span>
        </div>
        <div className="stat">
          <span className="stat-value">3+</span>
          <span className="stat-label">UAV Nodes Goal</span>
        </div>
        <div className="stat">
          <span className="stat-value">ROS 2</span>
          <span className="stat-label">Core Framework</span>
        </div>
      </div>

      <Section>
        <div className="section-label">Mission</div>
        <h2 className="section-title">Built to save lives</h2>
        <div className="divider"></div>
        <p className="home-copy">
          Search and rescue operations in wilderness environments are
          constrained by response time, terrain access, and the limits of human
          endurance. Existing drone solutions still depend heavily on manual
          piloting or require extensive infrastructure. Argus Panoptes exists to
          close that gap.
        </p>
        <p className="home-copy home-copy--muted">
          The system aims to integrate autonomous flight planning, real-time
          perception via computer vision, and coordinated multi-agent search
          coverage, all designed to operate without GPS, without constant human
          oversight, and without the luxury of a controlled environment.
        </p>
      </Section>
    </>
  );
}

export default HomePage;
