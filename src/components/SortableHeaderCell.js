import React from 'react';
import '../scss/results.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class SortableHeaderCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.sortNestedItems(this.props.category);
    };
    render() {
        return (
            <th className={this.props.sorting.sortOn === this.props.category ? "result sorted" :"result"}>
                <button onClick={this.handleClick}>{this.props.title} <FontAwesomeIcon icon={(this.props.sorting.sortOn === this.props.category && this.props.sorting.sortAsc) ? faCaretUp : faCaretDown} /></button>
            </th>
        );
    }
}

export default SortableHeaderCell;