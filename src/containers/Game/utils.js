import { removeCard } from './gameSlice';

const CARD_GAP = 30;

export function dragStart(shift, container) {
    return function(event) {
        container.style.backgroundColor = 'transparent';
        const card = container.firstChild;
        const touch = event.targetTouches[0];
        const rect = container.firstChild.getBoundingClientRect();
        shift.x = touch.clientX - rect.x;
        shift.y = touch.clientY - rect.y;
        card.style.transition = 'none';
    }
}

export function dragMove(shift, container) {
    const cardForRect = container.querySelector('.card');
    const rect = cardForRect.getBoundingClientRect();
    return function(e) {
        e.preventDefault();
        if (e.target.classList.contains('card')) {
            const touch = e.targetTouches[0];
            const moveX = touch.clientX - shift.x - rect.x;
            const moveY = touch.clientY - shift.y - rect.y;
    
            const card = container.querySelector('.card');
            card.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.03}deg)`;
    
            const currentRectX = card.getBoundingClientRect().x;
            const windowWidth = window.innerWidth + CARD_GAP;
            const triggerValue = currentRectX + windowWidth / 2;
    
            if (triggerValue > windowWidth) {
                container.style.backgroundColor = 'lightgreen';
                
            } else if (triggerValue < 0 + CARD_GAP) {
                container.style.backgroundColor = '#b72e32';
            } else {
                container.style.backgroundColor = 'transparent';
            }
        }
    }
}

const handleRemoveCard = (e, dispatch) => {
    setTimeout(() => {
        dispatch(removeCard(e.target.id));
    }, 100);
};

export function dragEnd(container, dispatch) {
    return function(e) {
        e.preventDefault();
        if (e.target.classList.contains('card')) {
            const currentCard = container.querySelector('.card');

            const rect = currentCard.getBoundingClientRect();
            const windowWidth = window.innerWidth + CARD_GAP;
            const triggerValue = rect.x + windowWidth / 2;
            container.style.backgroundColor = 'transparent';
    
            if (triggerValue > windowWidth) {
                currentCard.style.transform = 'translateX(200%)';
                currentCard.style.transition = 'all 0.35s ease';
                handleRemoveCard(e, dispatch);
    
                
            } else if (triggerValue < 0 + CARD_GAP) {
                currentCard.style.transform = 'translateX(-200%)';
                currentCard.style.transition = 'all 0.35s ease';
                handleRemoveCard(e, dispatch);
            } else {
                currentCard.style.transition = 'all 0.35s ease';
                currentCard.style.transform = 'scale(1) translateY(0px)';
            }
        }
        
        
    }
}