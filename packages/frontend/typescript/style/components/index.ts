import initExplorerStyle from "./explorer";

export default function initComponentsStyle() {
    const components = document.querySelector('.components') as HTMLDivElement;
    components.style.height = '100%';
    components.style.width = '100%';
    components.style.margin = '0';
    components.style.padding = '0';
    
    initExplorerStyle();
};
