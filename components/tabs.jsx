import React from 'react';
import TabHeader from './tabHeader';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };

        this.handleTabSelect = this.handleTabSelect.bind(this);
        this.handleHeaderClass = this.handleHeaderClass.bind(this);
    }

    handleTabSelect(index) {
        this.setState({
            selectedIndex: index
        });
    }

    handleHeaderClass(index) {
        if (index == this.state.selectedIndex) {
            return "tab-header-selected";
        } else {
            return "tab-header-unselected";
        }
    }

    render() {
        return (
            <div className="tab-div">
                <ul className="tab-ul">
                {this.props.tabItems.map((tabItem, index) => (
                    <li key={index}>
                        <h1 className={this.handleHeaderClass(index)} onClick={() => {this.handleTabSelect(index)}}>{tabItem.title}</h1>
                    </li>
                ))}
                </ul>
                <article>
                    <p>{this.props.tabItems[this.state.selectedIndex].content}</p>
                </article>
            </div>
        )
    }
}

export default Tabs;