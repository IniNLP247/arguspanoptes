import Section from "../components/Section";

function AboutPage() {
  return (
    <>
      <Section style={{ paddingBottom: 0 }}>
        <div className="section-label">About the project</div>
        <h1 className="section-title about-title">Who We Are</h1>
        <div className="divider"></div>
      </Section>

      <Section style={{ paddingTop: "40px" }}>
        <div className="about-grid">
          <div>
            <div className="about-block">
              <h2 className="about-subtitle">The Project</h2>
              <p>
                Argus Panoptes is a multi-drone autonomous search and rescue
                research platform. The system is designed to deploy a
                coordinated swarm of UAVs into unknown, GPS-denied environments
                and locate survivors using onboard computer vision, real-time
                mapping, and decentralized task planning.
              </p>
              <p>
                The platform is built on ROS 2 and simulated in Gazebo before
                real-world hardware trials. Every design decision prioritizes
                reliability under degraded conditions over performance in ideal
                ones.
              </p>
            </div>

            <div className="about-block">
              <h2 className="about-subtitle">Approach</h2>
              <p>
                Rather than adapting commercial drone software to SAR tasks,
                Argus Panoptes is built from first principles. The perception
                stack uses RGB cameras and trained neural networks to detect
                human presence from above. Future improvements focus on thermal
                imagery as well.
              </p>
              <p>
                Swarm coordination is planned around ROS 2 mesh networking
                capabilities, including Zenoh. This open-source middleware is
                emerging as a practical option for decentralized multi-robot
                systems in constrained environments.
              </p>
            </div>

            <div className="motivation-box">
              <p>
                "Current SAR drone systems are either human-piloted and
                resource-intensive, or autonomous only in controlled airspace.
                The gap between the lab demo and the mountain at 2am is
                enormous. That is the gap we are closing."
              </p>
            </div>
          </div>

          <div>
            <h2 className="about-subtitle">The Team</h2>
            <p className="about-team-caption">Core research team</p>

            <div className="team-grid">
              <div className="team-card">
                <div className="name">Inigo Chandia</div>
                <div className="role">Project Lead / Robotics / Perception</div>
                <div className="bio">
                  System architecture, ROS 2 integration, simulation
                  environment, swarm coordination, computer vision pipeline,
                  depth estimation, and target classification.
                </div>
              </div>

              <div className="team-card">
                <div className="name">Spencer Sedano</div>
                <div className="role">Hardware / Robotics / Flight Systems</div>
                <div className="bio">
                  PX4 configuration, controller tuning, trajectory planning, and
                  hardware-in-the-loop testing, plus mission logic for
                  GPS-denied localization.
                </div>
              </div>
            </div>

            <div className="stack-box">
              <h3>CORE STACK</h3>
              <div className="stack-tags">
                {[
                  "ROS 2 Humble",
                  "Gazebo",
                  "PX4",
                  "Python",
                  "C++",
                  "Computer Vision",
                  "Docker",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default AboutPage;
