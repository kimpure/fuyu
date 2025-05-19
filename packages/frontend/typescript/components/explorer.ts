import { Component } from "./index";

export class Explorer extends Component {
    constructor() {
        super();
        this.element.classList.add('explorer');
        this.element.style.height = '100px';
        this.element.style.width = '100px';
        this.element.style.top = '10px';
        this.element.style.left = '10px';
        this.element.style.position = 'relative';
        this.element.style.backgroundColor = 'red';
    };
};
