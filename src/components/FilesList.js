import React from 'react';
import '../scss/results.scss';
import FileResults from './FileResults.js';
import FileAverages from './FileAverages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import SortableHeaderCell from './SortableHeaderCell';

class FilesList extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            data: [],
            averages: {
                avgPerf: null,
                avgADA: null,
                avgBP: null,
                avgSEO: null,
                avgPWA: null
            },
            sorting: {
                sortOn: "",
                sortAsc: false
            }
        }
        this.sortNestedItems = this.sortNestedItems.bind(this)
    };

    componentDidMount() {
        fetch("https://api.github.com/repos/rbitting/testing/contents/audits")
		.then( (response) => {
			return response.json() })
		.then( (json) => { 
            this.getAllFileData(json).then(data => {
                this.setState({
                    data: data
                });
                this.setAverages(data);
            });
		})
    }

    getAllFileData(listOfFiles) {
        let data = [];
        for (let i=1; i<listOfFiles.length; i++) {
            data.push(fetch(listOfFiles[i].download_url).then(response => response.json()));
        }
        return Promise.all(data);
    }

    setAverages(data) {
        let averages = {
            avgPerf: 0,
            avgADA: 0,
            avgBP: 0,
            avgSEO: 0,
            avgPWA: 0
        }
        for (let i=0;i<data.length;i++) {
            averages.avgPerf += (data[i].categories.performance.score * 100);
            averages.avgADA += (data[i].categories.accessibility.score * 100);
            averages.avgBP += (data[i].categories["best-practices"].score * 100);
            averages.avgSEO += (data[i].categories.seo.score * 100);
            averages.avgPWA += (data[i].categories.pwa.score * 100);
        }
        
        this.setState({
            averages: {
                avgPerf: Math.ceil(averages.avgPerf / data.length),
                avgADA: Math.ceil(averages.avgADA / data.length),
                avgBP: Math.ceil(averages.avgBP / data.length),
                avgSEO: Math.ceil(averages.avgSEO / data.length),
                avgPWA: Math.ceil(averages.avgPWA / data.length)
            }
        });
    }
    sortNestedItems(value) {
        let isAsc = true;
        if (value === this.state.sorting.sortOn) 
            isAsc = !this.state.sorting.sortAsc;
        const nested = value.split(".");
        function compare(a,b) {
            let x = a;
            let y = b;
            for (let i=0;i<nested.length;i++) {
                x = x[nested[i]];
                y = y[nested[i]];
            }
            if (typeof x === "string") {
                x = x.toLowerCase();
            }
            if (typeof y === "string") {
                y = y.toLowerCase();
            }
            if (isAsc) {
                if (x === null) {
                    return 1;
                }
                else if (y === null) {
                    return -1;
                }
                else if (x === y) {
                    return 0;
                }
                else {
                    return x < y ? -1 : 1;
                }
            }
            else {
                if (x === null) {
                    return -1;
                }
                else if (y === null) {
                    return 1;
                }
                else if (x === y) {
                    return 0;
                }
                else {
                    return x > y ? -1 : 1;
                }
            }
        }
        this.setState({
            items: this.state.data.sort(compare),
            sorting: {
                sortOn: value,
                sortAsc: isAsc
            }
        });
    }
    render() {
        return (
            <div className="container">
                <FileAverages averages={this.state.averages} />
                <div className="section-heading">
                    <FontAwesomeIcon icon={faList} size="lg" /><h2>All Data</h2>
                </div>
                <div className="table-container">
                    <table className="results" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr className="result-item heading">
                                <SortableHeaderCell title="URL" category="requestedUrl" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems}/>
                                <SortableHeaderCell title="Performance" category="categories.performance.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems}/>
                                <SortableHeaderCell title="Accessibility" category="categories.accessibility.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems}/>
                                <SortableHeaderCell title="Best Practices" category="categories.best-practices.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems}/>
                                <SortableHeaderCell title="SEO" category="categories.seo.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems}/>
                                <SortableHeaderCell title="Progressive Web App" category="categories.pwa.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems}/>
                            </tr>
                        </thead>
                        <FileResults data={this.state.data} />
                    </table>
                </div>
                <div className="disclaimer">
                    Accessibility data pulled from GitHub: <a href="https://github.com/rbitting/testing/tree/master/audits" target="_blank" rel="noopener noreferrer">https://github.com/rbitting/testing/tree/master/audits</a>
                </div>
            </div>
        );
    }
}

export default FilesList;