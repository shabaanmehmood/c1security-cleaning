"use client";
import Ferrofluid from '../Ferrofluid';


export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden bg-white">

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Ferrofluid
    colors={["#ffffff","#ffffff","#ffffff"]}
    speed={0.5}
    scale={1.6}
    turbulence={1}
    fluidity={0.1}
    rimWidth={0.2}
    sharpness={2.5}
    shimmer={1.5}
    glow={2}
    flowDirection="down"
    opacity={1}
    mouseInteraction
    mouseStrength={1}
    mouseRadius={0.35}
  />
</div>
    </div>
  );
}