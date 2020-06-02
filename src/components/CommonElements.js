import React from 'react';
import DescriptionPopover from './DescriptionPopover.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

class TopIssues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            showMore: false,
        }
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        let arr = this.props.data;
        this.setState({
            data: arr,
            filteredData: arr.map(item => {
                item.count.value = item.count.rcb.misc + item.count.rcb.top + item.count.rco.misc + item.count.rco.top;
                return item;
            })
        });
    }

    handleClick() {
        if (!this.state.showMore) {
            this.setState({
                showMore: true
            })
        }
    }

    render() {
        let id = 0;
        let rendered = this.state.filteredData.map(item => {
            return <tr key={"issue-item-" + id++}>
                <td className="pointer">
                    <DescriptionPopover title={item.selector} description={item.domPath} />
                </td>
                <td>{item.label}</td>
                <td><a href={item.exampleUrl} target="_blank" rel="noopener noreferrer"> {item.count.value}</a></td>
                <td>{item.auditTriggered}</td>
            </tr>
        })
        return (
            <div>
                <div className="section-heading"><FontAwesomeIcon icon={faExclamationTriangle} size="lg" /><h2>Common Problematic Nodes</h2></div>
                <div className={this.state.showMore ? "section" : "section shortened"} onClick={this.handleClick}>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>selector</th>
                                    <th>label</th>
                                    <th># of Pages Affected</th>
                                    <th>Failed Audit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rendered}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopIssues;