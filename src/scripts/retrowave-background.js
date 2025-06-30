import * as THREE from 'three';

export function initRetrowaveBackground() {
  console.log('Initializing RetrowaveBackground...');
  
  // Wait for element to be available
  const container = document.getElementById('retrowave-background');
  if (!container) {
    console.error('retrowave-background container not found');
    return;
  }

  // Three.js scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true 
  });

  // Configure renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.zIndex = '-1';

  // Add to container
  container.appendChild(renderer.domElement);
  console.log('Canvas added to container');

  // Create sun positioned higher on the horizon
  const sunGeometry = new THREE.CircleGeometry(20, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x888888,
    transparent: true,
    opacity: 0.9
  });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.position.set(0, 15, -100); // Sun higher and more distant
  scene.add(sun);

  // Create horizontal lines of the sun
  for (let i = 0; i < 30; i++) {
    const lineGeometry = new THREE.BufferGeometry();
    const y = 35 - (i * 1.3);
    const radius = 20;
    const distanceFromCenter = Math.abs(y - 15);
    
    if (distanceFromCenter < radius) {
      const width = Math.sqrt(radius * radius - distanceFromCenter * distanceFromCenter) * 2;
      
      const points = [
        new THREE.Vector3(-width, y, -99.5),
        new THREE.Vector3(width, y, -99.5)
      ];
      lineGeometry.setFromPoints(points);
      
      const opacity = 0.8 - (distanceFromCenter / radius) * 0.4;
      
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x666666,
        transparent: true,
        opacity: opacity
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }
  }

  // Create grid with perfect squares
  const gridGroup = new THREE.Group();
  
  // Function to create a grid of perfect squares with tapering
  function createPerfectSquareGrid() {
    const gridSize = 80;
    const divisions = 40;
    const squareSize = gridSize / divisions;
    
    // Create vertical (longitudinal) lines
    for (let i = 0; i <= divisions; i++) {
      const x = (i - divisions / 2) * squareSize;
      const points = [];
      
      // Line goes from the near to the horizon
      for (let z = 180; z >= -150; z -= 2) {
        const tapeFactor = Math.abs(z) / 150; // 0 to 1
        const adjustedX = x * (1 - tapeFactor * 0.6); // Tapers 60%
        points.push(new THREE.Vector3(adjustedX, -5, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0x555555,
        transparent: true,
        opacity: 0.7
      });
      
      const line = new THREE.Line(geometry, material);
      gridGroup.add(line);
    }
    
    // Create horizontal (latitudinal) lines to form squares
    for (let j = 0; j <= 60; j++) { // More horizontal lines for coverage
      const z = 180 - (j * 3); // 3 unit spacing
      const points = [];
      const tapeFactor = Math.abs(z) / 150;
      const currentWidth = gridSize * (1 - tapeFactor * 0.6); // Current width
      
      // Create full horizontal line
      for (let x = -currentWidth / 2; x <= currentWidth / 2; x += 0.5) {
        points.push(new THREE.Vector3(x, -5, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0x444444,
        transparent: true,
        opacity: 0.6 - tapeFactor * 0.3
      });
      
      const line = new THREE.Line(geometry, material);
      gridGroup.add(line);
    }
  }
  
  createPerfectSquareGrid();
  
  // Position the grid already in the middle of the animation
  gridGroup.position.z = -30; // Starts in the middle
  
  scene.add(gridGroup);

  // Position camera in low perspective (as if on the road)
  camera.position.set(0, 2, 15); // Lower camera
  camera.lookAt(0, 0, -30); // Looking towards the horizon where the sun is

  // Add fog for a smoother depth effect
  scene.fog = new THREE.Fog(0x2a2a2a, 50, 180);

  // Variables for a precise time system
  let timeAccumulator = 0;
  const gridSpeed = 0.08; // Speed adjusted for smoothness
  const basePosition = -30;
  const loopDistance = 3; // Distance based on grid geometry
  
  // Animation function with high precision time
  function animate() {
    requestAnimationFrame(animate);
    
    // Increment time with precision
    timeAccumulator += gridSpeed;
    
    // Absolutely perfect mathematical loop system
    gridGroup.position.z = basePosition + (timeAccumulator % loopDistance);
    
    // Smooth and consistent rotation of the sun based on accumulated time
    sun.rotation.z = timeAccumulator * 0.025;
    
    // Subtle pulsation of the sun based on accumulated time for consistency
    const pulseFactor = 1 + Math.sin(timeAccumulator * 0.05) * 0.015;
    sun.scale.set(pulseFactor, pulseFactor, pulseFactor);

    renderer.render(scene, camera);
  }

  // Window resizing
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize);

  // Start animation
  animate();
  console.log('Animation started!');
  
  // Cleanup
  window.addEventListener('beforeunload', () => {
    renderer.dispose();
    scene.clear();
  });
  
  console.log('RetrowaveBackground initialized successfully!');
} 