export class RbxElement {
    element: HTMLDivElement;
    childs: RbxElement[];

    constructor() {
        this.element = document.createElement('div');
        this.childs = [];
    };

    withGuiObject() {
        
    };
};

