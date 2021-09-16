'use strict';

class StringUnorderedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = Object.values(this.props).map((indexItem, index) => {
            return React.createElement('li', {'key':index}, indexItem)
        })
        return React.createElement('ul', {}, listItems);
    }
}

export { StringUnorderedList }