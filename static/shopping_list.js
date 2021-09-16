'use strict';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            React.createElement('div', {}, 
                React.createElement("h2", {}, "Shopping list"),
                React.createElement("ul", {}, React.createElement('li', {}, 'Hello World'))
                )
        )
    }
}

export {
    ShoppingList
}