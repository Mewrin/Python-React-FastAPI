import { ShoppingList } from "./shopping_list.js";
import { LikeButton } from "./like_button.js";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            React.createElement('div', {}, 
                React.createElement(ShoppingList, ["Hello world", "React is interesting so far"]), 
                React.createElement(LikeButton))
        )
    }
}

export { 
    App 
}