import React from 'react';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange(e) {
        let queryString = e.target.value;
        this.setState({
            query: queryString
        });
    }

    handleSelect(listItem) {
        this.setState({
            query: listItem
        });
    }

    render() {
        return(
            <div className="auto-div">
                <p>Autocomplete</p>
                <input type="text" value={this.state.query} onChange={this.handleChange}></input>
                <ul>
                    {this.props.list.map((listItem) => {
                        if (listItem.startsWith(this.state.query)) {
                            return(
                                    <li onClick={() => (this.handleSelect(listItem))} key={listItem}>{listItem}</li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default AutoComplete;