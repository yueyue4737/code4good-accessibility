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
                performance: null,
                accessibility: null,
                "best-practices": null,
                seo: null,
                pwa: null
            },
            sorting: {
                sortOn: "",
                sortAsc: false
            },
            fetchComplete: false
        }
        this.sortNestedItems = this.sortNestedItems.bind(this);
    };

    componentDidMount() {
        fetch("https://api.github.com/repos/annahinnyc/code4good-accessibility/contents/scan-results/data-chrome-dev")
        //fetch("https://api.github.com/repos/rbitting/testing/contents/audits")
		.then( (response) => {
			return response.json() })
		.then( (json) => { 
            this.getAllFileData(json).then(data => {
                this.setState({
                    data: data,
                    fetchComplete: true
                });
                this.setAverages(data);
            });
		})
    }

    getAllFileData(listOfFiles) {
        let data = [];
        for (let i=1; i<listOfFiles.length; i++) {
            data.push(fetch(listOfFiles[i].download_url)
            .then(response => response.json())
            .then(json => {
                json.url = listOfFiles[i].download_url;
                return json;
            }));
        }
        return Promise.all(data);
    }

    setAverages(data) {
        let averages = {
            performance: 0,
            accessibility: 0,
            "best-practices": 0,
            seo: 0,
            pwa: 0
        }
        for (let i=0;i<data.length;i++) {
            for (let key in data[i].categories) {
                averages[key] += (data[i].categories[key].score * 100);
                console.log(averages[key])
            }
        }
        console.log(averages)
        this.setState({
            averages: {
                performance: Math.ceil(averages.performance / data.length),
                accessibility: Math.ceil(averages.accessibility / data.length),
                "best-practices": Math.ceil(averages["best-practices"] / data.length),
                seo: Math.ceil(averages.seo / data.length),
                pwa: Math.ceil(averages.pwa / data.length)
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
                {!this.state.fetchComplete && <div className="waiting">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <p className="mt-20">Please wait, results are processing.</p>
                </div>}
                {this.state.fetchComplete && <div>
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
                    <div className="disclaimer mt-20">
                        Accessibility data pulled from GitHub: <a href="https://github.com/rbitting/testing/tree/master/audits" target="_blank" rel="noopener noreferrer">https://github.com/rbitting/testing/tree/master/audits</a>
                    </div>
                </div>}
            </div>
        );
    }
}

export default FilesList;