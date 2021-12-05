import { createSlice, current } from '@reduxjs/toolkit';

const cards = [
    {
        id: '0',
        type: 'life',
        text: 'Как думаешь, я когда-нибудь сбегал(а) из дома будучи подростком?',
        active: true,
      },
      {
        id: '1',
        type: 'life',
        text: 'Ты когда-нибудь ломал(а) себе кости?',
        active: false,
      },
      {
        id: '2',
        type: 'life',
        text: 'У тебя был когда-нибудь питомец?',
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