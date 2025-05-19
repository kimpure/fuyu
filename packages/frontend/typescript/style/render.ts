export default function initRenderStyle() {
    const render = document.querySelector('.render') as HTMLDivElement;

    render.style.position = 'relative';
    render.style.height = '100%';
    render.style.width = '100%';
    render.style.top = '0px';
    render.style.left = '0px';
    render.style.margin = '0';
    render.style.padding = '0';
};
