// Background Wallpaper Icons Generator
document.addEventListener('DOMContentLoaded', function() {
    // Create the container
    const container = document.createElement('div');
    container.id = 'background-wallpaper';
    document.body.prepend(container);

    // List of icon filenames (add your own icons to images/backgroundIcons/)
    const icons = [
        'robot.svg',
        'gear.svg', 
        'circuit.svg',
        'microchip.svg',
        'code.svg',
        'terminal.svg'
    ];

    // Number of icons to generate
    const iconCount = 15;

    // Generate icons with random positions
    for (let i = 0; i < iconCount; i++) {
        // Pick a random icon
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        // Random position in grid pattern with jitter
        const posX = (i % 5) * 20 + Math.random() * 10;
        const posY = Math.floor(i / 5) * 30 + Math.random() * 15;

        // Create the icon
        const img = document.createElement('img');
        img.src = `images/backgroundIcons/${randomIcon}`;
        img.className = 'wallpaper-icon';

        // Position
        img.style.left = `${posX}%`;
        img.style.top = `${posY}%`;

        // Randomize the start angle so they don't all start at 0deg
        img.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Randomize Speed (Between 40s and 80s to match the "slowRotate" feel)
        const duration = Math.random() * 40 + 40; 
        img.style.animationDuration = `${duration}s`;

        // Randomize Direction (some clockwise, some counter-clockwise)
        if (Math.random() > 0.5) {
            img.style.animationDirection = 'reverse';
        }

        // Add jitter
        img.style.marginLeft = `${(Math.random() - 0.5) * 5}%`;
        img.style.marginTop = `${(Math.random() - 0.5) * 5}%`;

        container.appendChild(img);
    }
});
