import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.6 } },
        push: { quantity: 3 },
      },
    },
    particles: {
      color: { value: ['#6366f1', '#06b6d4', '#ec4899', '#f8fafc'] },
      links: {
        color: '#6366f1',
        distance: 140,
        enable: true,
        opacity: 0.3,
        width: 1.5,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'out' },
        random: true,
        speed: 1.2,
        straight: false,
      },
      number: { density: { enable: true, width: 800 }, value: 70 },
      opacity: { value: { min: 0.3, max: 0.8 }, animation: { enable: true, speed: 1, sync: false } },
      shape: { type: 'circle' },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBg;
