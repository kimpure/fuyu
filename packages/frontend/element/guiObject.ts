export type GuiObjectElement = {
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
};

export class GuiObject {
    guiObjectElement: GuiObjectElement;
    element: HTMLDivElement;

    constructor(guiObjectElement: GuiObjectElement) {
        this.guiObjectElement = guiObjectElement;
        this.element = document.createElement('div');
    };

    applyElmentStyle() {
        switch (this.guiObjectElement.sizeConstraint) {
            case 'RelativeXX':
                this.element.style.aspectRatio = `${this.guiObjectElement.size.x.scale} / ${this.guiObjectElement.size.y.scale}`;
                break;
        
            case 'RelativeYY':
                this.element.style.aspectRatio = `${this.guiObjectElement.size.y.scale} / ${this.guiObjectElement.size.x.scale}`;
                break;

            default:
                break;
        };

        this.element.style.backgroundColor = `rgb(${this.guiObjectElement.backgroundColor.r}, ${this.guiObjectElement.backgroundColor.g}, ${this.guiObjectElement.backgroundColor.b})`;
        
        switch (this.guiObjectElement.borderMode) {
            case 'Inset':
                this.element.style.boxShadow = `inset 0 0 0 ${this.guiObjectElement.borderSize}px rgb(${this.guiObjectElement.borderColor.r}, ${this.guiObjectElement.borderColor.g}, ${this.guiObjectElement.borderColor.b})`;
                break;
        
            case 'Outline':
                this.element.style.boxShadow = `0 0 0 ${this.guiObjectElement.borderSize}px rgb(${this.guiObjectElement.borderColor.r}, ${this.guiObjectElement.borderColor.g}, ${this.guiObjectElement.borderColor.b})`;
                break;

            default:
                this.element.style.boxShadow = `0 0 0 ${this.guiObjectElement.borderSize}px rgb(${this.guiObjectElement.borderColor.r}, ${this.guiObjectElement.borderColor.g}, ${this.guiObjectElement.borderColor.b}), inset 0 0 0 ${this.guiObjectElement.borderSize}px rgb(${this.guiObjectElement.borderColor.r}, ${this.guiObjectElement.borderColor.g}, ${this.guiObjectElement.borderColor.b})`;
                break;
        };

        this.element.style.transform = `rotate(${this.guiObjectElement.rotation}deg) translate(${this.guiObjectElement.anchordPoint.x * 100}%, ${this.guiObjectElement.anchordPoint.y * 100}%)`;
        this.element.style.position = 'relative';
        this.element.style.top = `calc(${this.guiObjectElement.position.y.offset}px + ${this.guiObjectElement.position.y.scale}%)`;
        this.element.style.left = `calc(${this.guiObjectElement.position.x.offset}px + ${this.guiObjectElement.position.x.scale}%)`;
        this.element.style.overflow = this.guiObjectElement.clipsDescendants ? 'hidden' : 'visible';
        this.element.style.height = `calc(${this.guiObjectElement.size.y.offset}px + ${this.guiObjectElement.size.y.scale}%)`;
        this.element.style.width = `calc(${this.guiObjectElement.size.x.offset}px + ${this.guiObjectElement.size.x.scale}%)`;
        this.element.style.zIndex = this.guiObjectElement.zIndex as any;
    };
};
