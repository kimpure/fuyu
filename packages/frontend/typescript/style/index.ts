import initRenderStyle from "./render";

export function initStyle() {
    const html = document.querySelector('html') as HTMLElement;
    const body = document.querySelector('body') as HTMLBodyElement;

    html.style.height = '100%';
    body.style.height = '100%';
    html.style.width = '100%';
    body.style.width = '100%';

    html.style.margin = '0';
    body.style.margin = '0';
    html.style.padding = '0';
    body.style.padding = '0';

    initRenderStyle();
};
