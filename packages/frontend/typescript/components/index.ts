const components = document.querySelector('.components') as HTMLBodyElement

export class Component {
    element: HTMLDivElement;
    
    constructor() {
        this.element = document.createElement('div');
    };

    render() {
        components.appendChild(this.element);
    };
};
