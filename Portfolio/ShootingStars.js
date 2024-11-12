class RandomCoordinates { // gives the element a random x and y position
    constructor() {
        this.x = Math.random() * 100 + '%';
        this.y = Math.random() * 100 + '%';
    }
}


class ShootingStar {
    constructor() {
        this.star = document.createElement('div'); // create the element to be the star
        this.star.classList.add('star'); // add the class of star to the element, makes it look like a star

        this.start = new RandomCoordinates(); // gives it a random starting position

        this.setStyles(); // sets the look of the stars, size, angle, etc
    }

    setStyles() {
        this.setNewStyleVar('--start-x', this.start.x); // applies starting position of the stars
        this.setNewStyleVar('--start-y', this.start.y); //-------------------------------

        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's'); //controls how long the stars last

        this.setNewStyleVar('--delay', Math.random() * 0.2); //controls delay of stars

        this.setNewStyleVar('--top', Math.random() * 100 - 30 + '%'); // controls where they start from
        this.setNewStyleVar('--left', Math.random() * 100 - 30+ '%'); // ------------------------------

        this.setNewStyleVar('--size', Math.random() + 0.1); // controls the size of the stars

        this.setNewStyleVar('--angle', Math.random() * 360 + 'deg'); // controls the angle of the stars
    }

    setNewStyleVar(styleName, styleValue) {
        this.star.style.setProperty(styleName, styleValue);
    }

    getStar() {
        return this.star; // returns the element, to be pushed to the screen
    }
}

new ShootingStar();

class NightSky {
    constructor() {
        this.nightSky = document.getElementById('night-sky'); // gets the element that will have the stars as children

        this.numberOfStars = Number.parseInt(this.nightSky.style.getPropertyValue('--number-of-stars'));
        this.addStars(this.numberOfStars); // (also line above) gets grabs the number of stars wanted and then creates that many with the function
    }

    addStars(numberOfStars) {
        for (let i = 0; i < numberOfStars; i++) { //makes a new element/star everytime it goes through the list
            this.nightSky.appendChild(new ShootingStar().getStar()); 
        }
    }
}

new NightSky(); // pushes it to the display screen