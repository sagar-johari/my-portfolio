"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create Star Geometry
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xb1b1b1, size: 1 });

    const starVertices = [];

    const totalStars = 4000;
    const innerSphereRadius = 150; // Perfect sphere in the center
    const outerMinRadius = 300; // Starts after the sphere
    const outerMaxRadius = 2000; // Outer scattered stars

    for (let i = 0; i < totalStars; i++) {
      let radius, x, y, z;

      if (i < 2000) {
        // Inner Perfect Sphere (Dense Stars)
        radius = innerSphereRadius;
      } else {
        // Outer Layer (Random Scattered Stars)
        radius = outerMinRadius + Math.pow(Math.random(), 2) * (outerMaxRadius - outerMinRadius);
      }

      const theta = Math.random() * Math.PI * 2; // 0 to 360 degrees
      const phi = Math.acos((Math.random() * 2) - 1); // 0 to 180 degrees

      x = radius * Math.sin(phi) * Math.cos(theta);
      y = radius * Math.sin(phi) * Math.sin(theta);
      z = radius * Math.cos(phi);

      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 500;

    // Animation Loop (Rotation)
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0008;
      stars.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Event
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="star-back fixed top-0 left-0 w-full h-full" ref={mountRef}></div>;
}
