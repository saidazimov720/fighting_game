document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = 1024;
    canvas.height = 576;

    class Sprite {
        constructor({ position, velocity }) {
            this.position = position;
            this.velocity = velocity;
        }

        draw() {
            c.fillStyle = 'red';
            c.fillRect(this.position.x, this.position.y, 50, 150);
        }

        update() {
            this.draw();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }

    const player = new Sprite({
        position: {
            x: 0,
            y: 0
        },
        velocity: {
            x: 0,
            y: 10 
        }
    });

    const enemy = new Sprite({
        position: {
            x: 400,
            y: 100
        },
        velocity: {
            x: 0,
            y: 10 
        }
    });

    function animate() {
        window.requestAnimationFrame(animate);
        c.fillRect(0, 0, canvas.width, canvas.height);
        player.update();
        enemy.update();
    }

    animate();
});
