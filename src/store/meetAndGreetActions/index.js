
const INITIAL_STATE = {
    seatlists: [
        { name: "Adults", desc: "(above 12y.o.)", minNum: 1, maxNum: 20 },
        { name: "Children", desc: "(from 2 to  12y.o.)", minNum: 0, maxNum: 20 },
        { name: "Infants", desc: "(below 12y.o.)", minNum: 0, maxNum: 20 }
    ]
};

export const meetAndGreetActions = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
};