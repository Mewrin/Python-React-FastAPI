'use strict';

import { StringUnorderedList } from "./unordered_string_list.js";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            React.createElement('div', {}, 
                React.createElement("h2", {}, "Shopping list"),
                React.createElement(StringUnorderedList, this.props)
                )
            )
        }
}

export {
    ShoppingList
}