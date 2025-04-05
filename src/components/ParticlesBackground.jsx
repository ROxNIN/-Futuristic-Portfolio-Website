import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: "#1a0b2e",
        },
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          color: { value: "#d4aaff" },
        },
      }}
    />
  );
};

export default ParticlesBackground;


