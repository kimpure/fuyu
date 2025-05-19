export const renderElement = document.querySelector('.render') as HTMLDivElement;

export class RbxElement {
    element: HTMLDivElement;
    childs: RbxElement[];
    parent?: RbxElement;

    constructor() {
        this.element = document.createElement('div');
        this.childs = [];
    };

    render() {
        renderElement.appendChild(this.element as Node);
    };
};
