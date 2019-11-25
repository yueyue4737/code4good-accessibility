import React from 'react';
import '../scss/results.scss';

class FileResults extends React.Component {
    render() {
        let id = 1;
        console.log(this.props.data)
        let listItems = this.props.data.map((file) =>
            (<tr className="result-item" key={"result-item-" + id++}>
                <td className="result">
                    <a href={file.requestedUrl} target="_blank" rel="noopener noreferrer">{file.requestedUrl}</a>
                </td>
                <td className="result">
                    {file.categories ? Math.ceil(file.categories.performance.score * 100) : ''}
                </td>
                <td className="result">
                    {file.categories ? Math.ceil(file.categories.accessibility.score * 100) : ''}
                </td>
                <td className="result">
                    {file.categories ? Math.ceil(file.categories['best-practices'].score * 100) : ''}
                </td>
                <td className="result">
                    {file.categories ? Math.ceil(file.categories.seo.score * 100) : ''}
                </td>
                <td className="result">
                    {file.categories ? Math.ceil(file.categories.pwa.score * 100) : ''}
                </td>
            </tr>)
        );
        return (
            <tbody>{this.props.data ? listItems : <tr></tr>}</tbody>
        );
    }
}

export default FileResults;