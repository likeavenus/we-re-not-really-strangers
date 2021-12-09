import { createSlice } from '@reduxjs/toolkit';

const cards = [
    {
        id: '0',
        type: 'love',
        text: 'На какое приключение ты бы хотел пойти со мной?',
        active: true,
    },
    {
        id: '1',
        type: 'love',
        text: 'Что из того, что я делал(а), ты считаешь исключительно добрым или заботливым?',
        active: false
    },
    {
        id: '2',
        type: 'life',
        text: 'Ты когда-нибудь ломал(а) себе кости?',
        active: false,
    },
    {
        id: '3',
        type: 'life',
        text: 'У тебя был когда-нибудь питомец?',
        active: false,
    },
    {
        id: '4',
        type: 'life',
        text: 'Были ли у тебя проблемы с законом?',
        active: false,
    },
    {
        id: '5',
        type: 'love',
        text: 'Что тебе действительно нравится во мне?',
        active: false,
    },
];

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        cards,
    },
    reducers: {
        removeCard: (state, action) => {
            let isFirstItemChecked = false;
            state.cards = state.cards.filter(item => {
                if (item.id !== action.payload) {
                    if (!isFirstItemChecked) {
                        item.active = true;
                        isFirstItemChecked = true;
                        return item;
                    } else {
                        return item;
                    }
                }
            });
        }
    },
    // extraReducers: {},
});

export const { removeCard } = gameSlice.actions;

export default gameSlice.reducer;