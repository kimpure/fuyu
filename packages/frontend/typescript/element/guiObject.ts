import { RbxElement } from "./index";

export type GuiObjectElementProps = {
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
    elementProps: GuiObjectElementProps;

    constructor(elementProps: GuiObjectElementProps) {
        super();
        this.elementProps = elementProps;
    };

    applyStyle() {
        switch (this.elementProps.sizeConstraint) {
            case 'RelativeXX':
                this.element.style.aspectRatio = `${this.elementProps.size.x.scale} / ${this.elementProps.size.y.scale}`;
                break;
        
            case 'RelativeYY':
                this.element.style.aspectRatio = `${this.elementProps.size.y.scale} / ${this.elementProps.size.x.scale}`;
                break;

            default:
                break;
        };

        this.element.style.backgroundColor = `rgb(${this.elementProps.backgroundColor.r}, ${this.elementProps.backgroundColor.g}, ${this.elementProps.backgroundColor.b})`;
        
        switch (this.elementProps.borderMode) {
            case 'Inset':
                this.element.style.boxShadow = `inset 0 0 0 ${this.elementProps.borderSize}px rgb(${this.elementProps.borderColor.r}, ${this.elementProps.borderColor.g}, ${this.elementProps.borderColor.b})`;
                break;
        
            case 'Outline':
                this.element.style.boxShadow = `0 0 0 ${this.elementProps.borderSize}px rgb(${this.elementProps.borderColor.r}, ${this.elementProps.borderColor.g}, ${this.elementProps.borderColor.b})`;
                break;

            default:
                this.element.style.boxShadow = `0 0 0 ${this.elementProps.borderSize}px rgb(${this.elementProps.borderColor.r}, ${this.elementProps.borderColor.g}, ${this.elementProps.borderColor.b}), inset 0 0 0 ${this.elementProps.borderSize}px rgb(${this.elementProps.borderColor.r}, ${this.elementProps.borderColor.g}, ${this.elementProps.borderColor.b})`;
                break;
        };

        this.element.style.transform = `rotate(${this.elementProps.rotation}deg) translate(${this.elementProps.anchordPoint.x * 100}%, ${this.elementProps.anchordPoint.y * 100}%)`;
        this.element.style.position = 'relative';
        this.element.style.top = `calc(${this.elementProps.position.y.offset}px + ${this.elementProps.position.y.scale}%)`;
        this.element.style.left = `calc(${this.elementProps.position.x.offset}px + ${this.elementProps.position.x.scale}%)`;
        this.element.style.overflow = this.elementProps.clipsDescendants ? 'hidden' : 'visible';
        this.element.style.height = `calc(${this.elementProps.size.y.offset}px + ${this.elementProps.size.y.scale}%)`;
        this.element.style.width = `calc(${this.elementProps.size.x.offset}px + ${this.elementProps.size.x.scale}%)`;
        this.element.style.zIndex = this.elementProps.zIndex as any;
    };
};
