//Rocket prefab
class P2Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, score) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);       //add to existing, displayList, updateList
        this.isFiring = false;          //track rocket's firing status
        this.moveSpeed = 2;           //pixels per frame
        this.numScore = score;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        //left/right movement
        if(!this.isFiring)
        {
            if(keyJ.isDown && this.x >= borderUIsize + this.width)
            {
                this.x -= this.moveSpeed;
            } 
            else if (keyL.isDown && this.x <= game.config.width - borderUIsize - this.width)
            {
                this.x += this.moveSpeed;
            }
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyI) && !this.isFiring)
        {
            this.isFiring = true;
            this.sfxRocket.play();
        }

        //if fired, move up
        if(this.isFiring && this.y >= borderUIsize * 3 + borderPadding)
        {
            this.y -= this.moveSpeed;
        }

        //reset on miss
        if(this.y <= borderUIsize * 3 + borderPadding)
        {
            this.isFiring = false;
            this.y = game.config.height - borderUIsize - borderPadding;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUIsize - borderPadding;
    }
}