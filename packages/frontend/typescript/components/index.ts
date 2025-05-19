const components = document.querySelector('.components') as HTMLBodyElement

export class Component {
    element: HTMLDivElement;
    useWindowMovement: boolean;

    constructor() {
        this.element = document.createElement('div');
        this.useWindowMovement = true;
    };

    initWindowMovement() {
        const element = this.element;
        
        let x1 = 0, 
            x2 = 0, 
            y1 = 0, 
            y2 = 0;

        const moveEvent = (e: MouseEvent) => {
            x2 = x1 - e.clientX;
            y2 = y1 - e.clientY;

            x1 = e.clientX;
            y1 = e.clientY;
            
            element.style.top = `${element.offsetTop - y2}px`;
            element.style.left = `${element.offsetLeft - y2}px`;
        };

        const removeEvent = () => {
            element.removeEventListener('mousemove', moveEvent);
            element.removeEventListener('mouseup', removeEvent);
        };

        element.addEventListener('mousedown', (e) => {
            x1 = e.clientX; 
            y1 = e.clientY; 

            element.addEventListener('mouseup', removeEvent);
            element.addEventListener('mousemove', moveEvent);
        });
    }

    render() {
        if (this.useWindowMovement) {
            this.initWindowMovement();
        };
        
        components.appendChild(this.element);
    };
};
