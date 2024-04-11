import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("kitchen", "assets/img/kitchen.png");
        this.load.image("ticket", "assets/img/ticket.png");
        this.load.image("ticket-holder", "assets/img/ticket-holder.png");
        this.load.image("career", "assets/gui/career.png");
        this.load.image("exit", "assets/gui/exit.png");
        this.load.image("milk", "assets/img/milk.png");
        this.load.spritesheet("timer", "assets/img/timer.png", {
            frameWidth: 15,
            frameHeight: 15,
        });
        this.load.image("fridge-inside", "assets/img/fridge-inside.png");
        this.load.image("pantry-inside", "assets/img/pantry-inside.png");
        this.load.image("carrot", "assets/img/carrot.png");
        this.load.image("chicken", "assets/img/chicken.png");
        this.load.image("butter", "assets/img/butter.png");
        this.load.image("plate", "assets/img/plate.png");
        this.load.spritesheet("bell", "assets/img/bell.png", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet("dish", "assets/img/dish.png", {
            frameWidth: 15,
            frameHeight: 15,
        });
    }

    create() {
        this.anims.create({
            key: "ring-bell",
            frames: "bell",
            duration: 300,
            repeat: 0,
        });
        this.anims.create({
            key: "fill-dish",
            frames: "dish",
            frameRate: 20,
            repeat: 0,
        });
        this.scene.start("Shift1");
    }
}
