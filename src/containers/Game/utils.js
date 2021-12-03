export function dragStart(shift, card) {
    return function(event) {
        const touch = event.targetTouches[0];
        // shift.x = touch.clientX - card.getBoundingClientRect().left + touch.radiusX;
        // shift.y = touch.clientY - card.getBoundingClientRect().top + 35;
        shift.x = touch.clientX - card.getBoundingClientRect().left + 15;
        shift.y = touch.clientY - card.getBoundingClientRect().top + 35;
    }
}

export function dragMove(shift, card) {
    return function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        const moveX = touch.clientX - shift.x;
        const moveY = touch.clientY - shift.y;

        // console.log(rect);
        // console.log(touch.pageX);

        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        // card.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.04}deg)`;
    }
}