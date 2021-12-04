import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        cards: [
            {
                id: 0,
                type: 'life',
                text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
                active: true,
              },
              {
                id: 1,
                type: 'love',
                text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
                active: false,
              },
              {
                id: 2,
                type: 'love',
                text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
                active: false,
              },
        ],
    },
    reducers: {},
    extraReducers: {},
});

export default gameSlice.reducer;