import { useEffect, useRef } from "react";
import Section from "../components/Section";

function DevelopmentsPage() {
  const phasesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = phasesRef.current;
    if (!root) return;

    const phases = Array.from(root.querySelectorAll<HTMLElement>(".phase"));

    if (!("IntersectionObserver" in window)) {
      phases.forEach((phase) => {
        phase.style.opacity = "1";
        phase.style.transform = "translateX(0)";
      });
      return;
    }

    phases.forEach((phase) => {
      phase.style.opacity = "0";
      phase.style.transform = "translateX(-12px)";
      phase.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateX(0)";
          observer.unobserve(target);
        });
      },
      { threshold: 0.15 },
    );

    phases.forEach((phase) => observer.observe(phase));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Section style={{ paddingBottom: 0 }}>
        <div className="section-label">Roadmap</div>
        <h1 className="section-title about-title">Developments</h1>
        <div className="divider"></div>
        <p className="page-intro">
          Six phases from simulation foundation to full multi-drone deployment
          in realistic field conditions. Each phase builds directly on the last.
        </p>
      </Section>

      <Section style={{ paddingTop: "32px", paddingBottom: 0 }}>
        <div className="status-legend">
          <div>
            <div className="legend-dot legend-dot--completed"></div>
            <span>Completed</span>
          </div>
          <div>
            <div className="legend-dot legend-dot--inprogress"></div>
            <span>In Progress</span>
          </div>
          <div>
            <div className="legend-dot legend-dot--upcoming"></div>
            <span>Upcoming</span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="roadmap" ref={phasesRef}>
          <div className="roadmap-track"></div>

          <RoadmapPhase
            number="01"
            title="Foundation"
            status="Completed"
            variant="completed"
            description="Establishing simulation environment and infrastructure: Docker workflow, ROS 2 workspace, Gazebo world setup, and baseline X500 PX4 integration with verified takeoff, hover, and landing."
            items={[
              "ROS 2 Humble",
              "Gazebo Simulation",
              "PX4 Integration",
              "Docker Environment",
              "X500 Model",
              "MAVROS Bridge",
            ]}
          />

          <RoadmapPhase
            number="02"
            title="Perception"
            status="Completed"
            variant="completed"
            description="Onboard camera pipeline feeding a RF-DETR detection model for top-down human identification, with ROS 2 perception nodes publishing confidence-aware detections."
            items={[
              "YOLO26 / RF-DETR",
              "RGB Camera",
              "Detection Node",
              "Confidence Scoring",
              "Roboflow Dataset",
            ]}
          />

          <RoadmapPhase
            number="03"
            title="Flight Systems"
            status="In Progress"
            variant="inprogress"
            description="Autonomous flight in simulation with waypoint navigation, velocity control, geofencing, mission abort logic, and OFFBOARD control over ROS 2 topics."
            items={[
              "Waypoint Nav",
              "Offboard Control",
              "Velocity Commands",
              "Geofencing",
              "Mission Logic",
              "Controller Tuning",
            ]}
          />

          <RoadmapPhase
            number="04"
            title="Autonomy"
            status="Upcoming"
            variant="upcoming"
            description="Closing perception-flight loop with autonomous search patterns, responsive planning, shared mapping, and GPS-denied localization through visual odometry and IMU fusion."
            items={[
              "Search Patterns",
              "Visual Odometry",
              "Map Building",
              "Reactive Planning",
              "GPS-Denied Nav",
              "Target Approach",
            ]}
          />

          <RoadmapPhase
            number="05"
            title="Swarm"
            status="Upcoming"
            variant="upcoming"
            description="Scaling to decentralized multi-drone coordination with resilient task allocation, shared map updates, deconfliction, and dynamic reassignment on node dropout."
            items={[
              "Multi-Agent Sim",
              "Task Allocation",
              "Coverage Planning",
              "Deconfliction",
              "Shared Map",
              "Node Dropout Handling",
            ]}
          />

          <RoadmapPhase
            number="06"
            title="Realism"
            status="Upcoming"
            variant="upcoming"
            description="Hardening for real conditions with high-fidelity forest worlds, wind simulation, canopy occlusion, lighting variation, adverse weather modeling, and hardware-in-the-loop field trials."
            items={[
              "Forest3D Worlds",
              "Wind Simulation",
              "Lighting Variation",
              "HITL Testing",
              "Hardware Trials",
              "Field Validation",
            ]}
          />
        </div>
      </Section>
    </>
  );
}

function RoadmapPhase({
  number,
  title,
  status,
  description,
  items,
  variant,
}: {
  number: string;
  title: string;
  status: string;
  description: string;
  items: string[];
  variant: "completed" | "inprogress" | "upcoming";
}) {
  return (
    <div className={`phase phase--${variant}`}>
      <div className="phase-indicator">
        <div className="phase-dot"></div>
        <div className="phase-num">{number}</div>
      </div>

      <div className="phase-body">
        <div className="phase-header">
          <span className="phase-title">{title}</span>
          <span className="phase-status">{status}</span>
        </div>
        <p className="phase-desc">{description}</p>
        <ul className="phase-items">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DevelopmentsPage;
