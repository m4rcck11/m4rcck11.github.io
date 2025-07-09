// Hero Script - Separated for better performance and maintainability
// Following Astro best practices for client-side JavaScript

export function initHero() {
  // Initialize all hero functionality
  initParticles();
  initASCII3DEffect();
  initSaoPauloTime();
  initSloganTyping();
}

// Particle System with performance optimizations
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const container = document.getElementById('particles-container');
  
  if (!canvas || !container) {
    console.error('Canvas or container not found');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2D Context not available');
    return;
  }
  
  let particles = [];
  const mouse = { x: -1000, y: -1000 };
  let animationId;
  let isVisible = true;
  
  // Character sets for international effect
  const charSets = {
    japanese: ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ'],
    chinese: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '中', '国', '人', '大', '小'],
    brazilian: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
    russian: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н']
  };
  
  const colors = ['#00ff41', '#ff4444', '#44ff44', '#4444ff'];
  
  function getRandomCharacter(index = 0) {
    const charSetNames = Object.keys(charSets);
    const charSetIndex = index % charSetNames.length;
    const selectedCharSet = charSets[charSetNames[charSetIndex]];
    return selectedCharSet[Math.floor(Math.random() * selectedCharSet.length)];
  }
  
  function getCharacterColor(index = 0) {
    return colors[index % colors.length];
  }
  
  // Optimized canvas resize
  function resizeCanvas() {
    if (!canvas || !container) return;
    
    const canvasElement = canvas;
    const rect = container.getBoundingClientRect();
    
    // Only resize if dimensions actually changed
    if (canvasElement.width !== rect.width || canvasElement.height !== rect.height) {
      canvasElement.width = rect.width;
      canvasElement.height = rect.height;
      createParticles(); // Recreate particles with new dimensions
    }
  }
  
  // Create particles with optimized grid
  function createParticles() {
    particles = [];
    
    if (!canvas) return;
    
    const canvasElement = canvas;
    const spacing = Math.max(50, Math.min(80, canvasElement.width / 20)); // Responsive spacing
    const cols = Math.floor(canvasElement.width / spacing);
    const rows = Math.floor(canvasElement.height / spacing);
    
    const offsetX = (canvasElement.width - (cols - 1) * spacing) / 2;
    const offsetY = (canvasElement.height - (rows - 1) * spacing) / 2;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const particle = {
          x: offsetX + col * spacing,
          y: offsetY + row * spacing,
          originalX: offsetX + col * spacing,
          originalY: offsetY + row * spacing,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: 5,
          opacity: 0.8,
          char: getRandomCharacter(particles.length)
        };
        particles.push(particle);
      }
    }
  }
  
  // Optimized animation loop
  function animate() {
    if (!isVisible) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Batch particle updates for better performance
    particles.forEach(particle => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 80;
      
      if (distance < maxDistance && mouse.x > -500) {
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);
        const pushDistance = force * 120;
        
        particle.x -= Math.cos(angle) * pushDistance * 0.3;
        particle.y -= Math.sin(angle) * pushDistance * 0.3;
      } else {
        const returnSpeed = 0.08;
        particle.x += (particle.originalX - particle.x) * returnSpeed;
        particle.y += (particle.originalY - particle.y) * returnSpeed;
      }
      
      // Subtle random movement
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      
      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = 'rgba(14, 204, 68, ' + particle.opacity + ')';
      ctx.font = particle.size + 'px monospace';
      ctx.fillText(particle.char, particle.x, particle.y);
      ctx.restore();
    });
    
    // Draw connections (optimized)
    drawConnections();
    
    animationId = requestAnimationFrame(animate);
  }
  
  // Optimized connection drawing
  function drawConnections() {
    const maxConnectionDistance = 80;
    
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const particle1 = particles[i];
        const particle2 = particles[j];
        
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxConnectionDistance) {
          const opacity = (1 - distance / maxConnectionDistance) * 0.2;
          ctx.globalAlpha = opacity;
          
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
  }
  
  // Event listeners with cleanup
  function setupEvents() {
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    const handleResize = () => {
      resizeCanvas();
    };
    
    // Use passive listeners for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Visibility API for performance
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      if (!isVisible) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });
    
    // Return cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }
  
  // Initialize
  resizeCanvas();
  const cleanup = setupEvents();
  animate();
  
  // Return cleanup function for component unmount
  return cleanup;
}

// ASCII 3D Effect with performance optimizations
function initASCII3DEffect() {
  const asciiTitle = document.getElementById('ascii-title');
  if (!asciiTitle) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let animationId;
  
  const originalText = asciiTitle.textContent;
  const glitchChars = ['▓', '▒', '░', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○'];
  let cascadeActive = false;
  
  // Throttled mouse move handler
  let ticking = false;
  const handleMouseMove = (e) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        ticking = false;
      });
      ticking = true;
    }
  };
  
  // Cascade effect function
  function triggerCascade(fromAxis) {
    if (cascadeActive) return;
    cascadeActive = true;
    
    const lines = originalText.split('\n');
    const totalLines = lines.length;
    const lineLength = Math.max(...lines.map(line => line.length));
    
    let step = 0;
    const maxSteps = 8;
    
    function animateCascade() {
      if (step >= maxSteps) {
        asciiTitle.textContent = originalText;
        cascadeActive = false;
        return;
      }
      
      const modifiedLines = lines.map((line, lineIndex) => {
        return line.split('').map((char, charIndex) => {
          let distanceFromOrigin;
          
          if (fromAxis === 'horizontal') {
            distanceFromOrigin = Math.abs(charIndex - (mouseX < 0 ? 0 : lineLength));
          } else {
            distanceFromOrigin = Math.abs(lineIndex - (mouseY < 0 ? 0 : totalLines));
          }
          
          if (distanceFromOrigin <= step && distanceFromOrigin > step - 3) {
            if (char.trim() !== '') {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
          }
          
          return char;
        }).join('');
      });
      
      asciiTitle.textContent = modifiedLines.join('\n');
      step++;
      
      setTimeout(animateCascade, 50);
    }
    
    animateCascade();
  }
  
  // Smooth animation
  function animateTitle() {
    const deltaX = Math.abs(mouseX - targetX);
    const deltaY = Math.abs(mouseY - targetY);
    const totalDelta = deltaX + deltaY;
    
    if (totalDelta > 0.1 && !cascadeActive) {
      const dominantAxis = deltaX > deltaY ? 'horizontal' : 'vertical';
      triggerCascade(dominantAxis);
    }
    
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;
    
    const rotateX = targetY * 8;
    const rotateY = targetX * -8;
    const translateZ = Math.abs(targetX) * 5 + Math.abs(targetY) * 5;
    
    asciiTitle.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(${translateZ}px)
    `;
    
    animationId = requestAnimationFrame(animateTitle);
  }
  
  document.addEventListener('mousemove', handleMouseMove, { passive: true });
  animateTitle();
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(animationId);
  };
}

// São Paulo Time with error handling
function initSaoPauloTime() {
  const timeElement = document.getElementById('sao-paulo-time');
  const timezoneElement = document.getElementById('timezone-info');
  
  if (!timeElement) return;
  
  function updateTime() {
    try {
      const now = new Date();
      const saoPauloTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      
      const saoPauloDate = new Date(now.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));
      const utcDate = new Date(now.toLocaleString("en-US", {timeZone: "UTC"}));
      const offsetMs = saoPauloDate.getTime() - utcDate.getTime();
      const offsetHours = offsetMs / (1000 * 60 * 60);
      
      let timezoneText = '';
      if (offsetHours === -3) {
        timezoneText = 'GMT-3 (BRT)';
      } else if (offsetHours === -2) {
        timezoneText = 'GMT-2 (BRST)';
      } else {
        timezoneText = `GMT${offsetHours >= 0 ? '+' : ''}${offsetHours}`;
      }
      
      timeElement.textContent = saoPauloTime;
      if (timezoneElement) {
        timezoneElement.textContent = timezoneText;
      }
    } catch (error) {
      console.error("Could not get São Paulo time", error);
      const now = new Date();
      const timeString = now.toTimeString().slice(0, 8);
      timeElement.textContent = timeString;
      if (timezoneElement) {
        timezoneElement.textContent = 'GMT-3';
      }
    }
  }
  
  updateTime();
  const interval = setInterval(updateTime, 1000);
  
  return () => clearInterval(interval);
}

// Slogan typing effect
function initSloganTyping() {
  const sloganTexts = [
    'We build websites.',
    'Systems.',
    'Apps.',
    'Interfaces.',
    'Digital experiences.'
  ];
  
  const sloganLines = [
    document.getElementById('slogan-line-1'),
    document.getElementById('slogan-line-2'),
    document.getElementById('slogan-line-3'),
    document.getElementById('slogan-line-4'),
    document.getElementById('slogan-line-5')
  ];
  
  const cursor = document.getElementById('slogan-cursor');
  
  if (!sloganLines[0] || !cursor) {
    console.error('Slogan elements not found');
    return;
  }
  
  let currentLineIndex = 0;
  let currentCharIndex = 0;
  let typingTimeout;
  
  setTimeout(() => {
    cursor.style.opacity = '1';
    startTyping();
  }, 3000);
  
  function startTyping() {
    if (currentLineIndex >= sloganTexts.length) {
      setTimeout(() => {
        cursor.style.opacity = '0';
      }, 1000);
      return;
    }
    
    const currentLine = sloganLines[currentLineIndex];
    const currentText = sloganTexts[currentLineIndex];
    
    currentLine.style.opacity = '1';
    
    function typeCharacter() {
      if (currentCharIndex < currentText.length) {
        currentLine.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        const delay = currentText[currentCharIndex - 1] === '.' ? 200 : 60 + Math.random() * 40;
        typingTimeout = setTimeout(typeCharacter, delay);
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
        typingTimeout = setTimeout(startTyping, 600);
      }
    }
    
    typeCharacter();
  }
  
  return () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };
} 