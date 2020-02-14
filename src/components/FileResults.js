import React from 'react';
import '../scss/results.scss';

class FileResults extends React.Component {
    render() {
        let id = 1;
        let listItems = this.props.data.map((file) => {
            if (file.categories) {
                return (<tr className="result-item" key={"result-item-" + id++}>
                    <td className="result">
                        <a href={file.url} target="_blank" rel="noopener noreferrer">{file.requestedUrl}</a>
                    </td>
                    <td className="result">
                        {file.categories.performance ? Math.ceil(file.categories.performance.score * 100) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories.accessibility ? Math.ceil(file.categories.accessibility.score * 100) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories['best-practices'] ? Math.ceil(file.categories['best-practices'].score * 100) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories.seo ? Math.ceil(file.categories.seo.score * 100) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories.pwa ? Math.ceil(file.categories.pwa.score * 100) : 'n/a'}
                    </td>
                </tr>)
            }
            return null;
        });
        return (
            <tbody>{this.props.data ? listItems : <tr><td colSpan="3">No results returned.</td></tr>}</tbody>
        );
    }
}

export default FileResults;