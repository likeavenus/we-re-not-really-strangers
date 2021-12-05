import { removeCard } from './gameSlice';

const CARD_GAP = 30;

export function dragStart(shift, card) {
    return function(event) {
        card.parentElement.style.backgroundColor = 'transparent';
        const touch = event.targetTouches[0];
        const rect = card.getBoundingClientRect();
        shift.x = touch.clientX - rect.x;
        shift.y = touch.clientY - rect.y;
        card.style.transition = 'none';
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

        const currentRectX = card.getBoundingClientRect().x;
        const windowWidth = window.innerWidth + CARD_GAP;
        const triggerValue = currentRectX + windowWidth / 2;

        if (triggerValue > windowWidth) {
            card.parentElement.style.backgroundColor = 'lightgreen';
            
        } else if (triggerValue < 0 + CARD_GAP) {
            card.parentElement.style.backgroundColor = 'red';
        } else {
            card.parentElement.style.backgroundColor = 'transparent';
        }
    }
}

/** TODO: Разобраться с навешиванием обработчиков событий на следующую карточку */

export function dragEnd(card, dispatch) {
    return function() {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth + CARD_GAP;
        const triggerValue = rect.x + windowWidth / 2;
        card.parentElement.style.backgroundColor = 'transparent';

        if (triggerValue > windowWidth) {
            card.style.transform = 'translateX(200%)';
            card.style.transition = 'all 0.35s ease';
            dispatch(removeCard(0));

            
        } else if (triggerValue < 0 + CARD_GAP) {
            card.style.transform = 'translateX(-200%)';
            card.style.transition = 'all 0.35s ease';
        } else {
            card.style.transition = 'all 0.35s ease';
            card.style.transform = 'scale(1) translateY(0px)';
        }
        
    }
}