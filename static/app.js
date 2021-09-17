import { ShoppingList } from "./shopping_list.js";
import { LikeButton } from "./like_button.js";
import { HttpClient } from "./http_client.js";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            React.createElement('div', {}, 
                React.createElement(ShoppingList), 
                React.createElement(LikeButton))
        )
    }
}

export { 
    App 
}