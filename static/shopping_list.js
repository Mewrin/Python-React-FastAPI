'use strict';

import { StringUnorderedList } from "./unordered_string_list.js";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }

    componentDidMount() { // this is called after the component is placed in the DOM and rendered, as part of the react life-cycle
        fetch("/shopping-list")
            .then(response => response.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return React.createElement('p', {}, "An error occured.") 
        } else if (!isLoaded) {
            return React.createElement('p', {}, "Loading...") 
        } else {
            return (React.createElement('div', {}, 
                            React.createElement("h2", {}, "Shopping list"),
                            React.createElement(StringUnorderedList, items)))
        }
    }
}

export {
    ShoppingList
}