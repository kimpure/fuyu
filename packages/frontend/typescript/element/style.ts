export function color(rbxRgb: { r: number, g: number, b: number }) {
    return `rgb(${rbxRgb.r * 255}, ${rbxRgb.b * 255}, ${rbxRgb.b * 255})`;
};

export function udim(rbxUdim: { offset: number, scale: number }) {
    return `calc(${rbxUdim.offset}px + ${rbxUdim.scale * 100}%)`;
};
