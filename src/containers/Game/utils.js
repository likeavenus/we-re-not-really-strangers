export function dragStart(shift, card) {
    return function(event) {
        const touch = event.targetTouches[0];
        const rect = card.getBoundingClientRect();
        shift.x = touch.clientX - rect.x;
        shift.y = touch.clientY - rect.y;
        console.log(rect)
    }
}

export function dragMove(shift, card) {
    const rect = card.getBoundingClientRect();
    return function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        const moveX = touch.clientX - shift.x - rect.x;
        const moveY = touch.clientY - shift.y - rect.y;

        card.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.03}deg)`;
    }
}