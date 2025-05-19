import { RbxElement } from "./index.js";
import { color, udim } from './style.js'

export type GuiObject = {
    active: boolean,
    anchordPoint: {
        x: number,
        y: number,
    },
    backgroundColor: {
        r: number,
        g: number,
        b: number,
    },
    backgroundTransparency: number,
    borderColor: {
        r: number,
        g: number,
        b: number,
    },
    borderMode: string,
    borderSize: number,
    clipsDescendants: boolean,
    position: {
        x: {
            offset: number,
            scale: number,
        },
        y: {
            offset: number,
            scale: number,
        },
    },
    rotation: number,
    size: {
        x: {
            offset: number,
            scale: number,
        },
        y: {
            offset: number,
            scale: number,
        },
    },
    sizeConstraint: string,
    visible: boolean,
    zIndex: number,
}

export class GuiObjectElement extends RbxElement {
    guiObject: GuiObject;

    constructor(guiObject: GuiObject) {
        super();
        this.guiObject = guiObject;
    };

    applyStyle() {
        switch (this.guiObject.sizeConstraint) {
            case 'RelativeXX':
                this.element.style.aspectRatio = `${this.guiObject.size.x.scale} / ${this.guiObject.size.y.scale}`;
                break;
        
            case 'RelativeYY':
                this.element.style.aspectRatio = `${this.guiObject.size.y.scale} / ${this.guiObject.size.x.scale}`;
                break;

            default:
                break;
        };
            
        switch (this.guiObject.borderMode) {
            case 'Inset':
                this.element.style.boxShadow = `inset 0 0 0 ${color(this.guiObject.borderColor)}`;
                break;
        
            case 'Outline':
                this.element.style.boxShadow = `0 0 0 ${color(this.guiObject.borderColor)}`;
                break;

            default:
                this.element.style.boxShadow = `0 0 0 ${this.guiObject.borderSize}px ${color(this.guiObject.borderColor)}, inset 0 0 0 ${this.guiObject.borderSize}px ${color(this.guiObject.borderColor)}`;
                break;
        };

        this.element.style.backgroundColor = color(this.guiObject.backgroundColor);
        this.element.style.transform = `rotate(${this.guiObject.rotation}deg) translate(${this.guiObject.anchordPoint.x * 100}%, ${this.guiObject.anchordPoint.y * 100}%)`;
        this.element.style.position = 'relative';
        this.element.style.top = udim(this.guiObject.position.y);
        this.element.style.left = udim(this.guiObject.position.x);
        this.element.style.overflow = this.guiObject.clipsDescendants ? 'hidden' : 'visible';
        this.element.style.height = udim(this.guiObject.size.y);
        this.element.style.width = udim(this.guiObject.size.x);
        this.element.style.zIndex = this.guiObject.zIndex as any;
    };
};
