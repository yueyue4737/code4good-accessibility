import React from 'react';
import '../scss/results.scss';

class FileResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.setNoOfResults(this.props.data.length);
    }
    render() {
        return (
            <tbody>{this.props.data ? this.renderData() : <tr><td colSpan="3">No results returned.</td></tr>}</tbody>
        );
    }
    renderResult(value) {
        return (<td className="result">
            {value ? Math.ceil(value) : 'n/a'}
        </td>
        )
    }
    renderData() {
        let id = 1;
        let listItems = this.props.data.map((file) => {
            if (file.categories) {
                return (<tr className="result-item" key={"result-item-" + id++}>
                    <td className="result">
                        <a href={(window.location.href.includes("localhost") ? file.url : "/code4good-accessibility" + file.url)} target="_blank" rel="noopener noreferrer">{file.requestedUrl}</a>
                    </td>
                    {this.renderResult(file.categories.performance)}
                    {this.renderResult(file.categories.accessibility)}
                    {this.renderResult(file.categories['best-practices'])}
                    {this.renderResult(file.categories.seo)}
                    {this.renderResult(file.categories.pwa)}
                </tr>)
            }
            return null;
        });
        return listItems;
    }
}

export default FileResults;