export function dragStart(shift, card) {
    return function(event) {
        const touch = event.targetTouches[0];
        shift.x = touch.clientX - card.getBoundingClientRect().left + touch.radiusX;
        shift.y = touch.clientY - card.getBoundingClientRect().top + 37;
    }
}

export function dragMove(shift, card) {
    return function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        const moveX = touch.clientX - shift.x;
        const moveY = touch.clientY - shift.y;

        card.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.05}deg)`;
    }
}