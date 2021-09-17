import { StringUnorderedList } from './unordered_string_list.js';

// Examples from https://reactjs.org/docs/faq-ajax.html and https://stackoverflow.com/questions/51011971/best-practice-for-handling-null-prop-when-accessing-prop-attribute

class HttpClient {
    constructor() {
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    

      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return React.createElement('div', {}, React.createElement('p', {}, "Error: " + error.message));
        }
        else if (!isLoaded) {
            return React.createElement('div', {}, 'Loading...');
        } 
        else {
            return react.createElement(StringUnorderedList, items)
        }
      }
}

export { HttpClient }