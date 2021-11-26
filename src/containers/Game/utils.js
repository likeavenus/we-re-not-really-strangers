export function dragMove(e) {
    e.preventDefault();
    const touch = event.targetTouches[0];
    const shift = {
        x: this.getBoundingClientRect().left,
        y: this.getBoundingClientRect().top,
    };

    console.log('shift.x', shift.x)
    console.log('touch.pageX', touch.pageX)

    this.style.transform = `translate(${touch.pageX - 80}px, ${touch.pageY - 100}px)`;
}