
//* Define Reducer


const InitialState = {
    counter: 0
}

const MyReducer = (state = InitialState, action) => {
    console.log(state.counter)

    switch (action.type) {
        case "Increament":
            if (state.counter >= 10) {
                return {
                    counter: state.counter = 10
                }
            } else {
                return {
                    counter: state.counter + 1
                }
            }

        case "Decreament":
            if (state.counter < 1) {
                return {
                    counter: state.counter = 0
                }
            } else {
                return {
                    counter: state.counter - 1
                }
            }
        default: return state;
    }

}

export default MyReducer