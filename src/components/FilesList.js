import React from 'react';
import '../scss/results.scss';
import FileResults from './FileResults.js';
import TopIssues from './TopIssues.js';
import FileAverages from './FileAverages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
            fetchComplete: false,
            noOfResults: 0,
            url: "/scan-results/files.json"
        }
        this.sortNestedItems = this.sortNestedItems.bind(this);
        this.setNoOfResults = this.setNoOfResults.bind(this);
    };

    componentDidMount() {
        fetch(this.state.url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.getAllFileData(json).then(data => {
                    this.setState({
                        data: data,
                        fetchComplete: true
                    });
                    this.setAverages(data);
                });
            });
    }

    async getAllFileData(listOfFiles) {
        let data = [];
        for (let i = 1; i < listOfFiles.length; i++) {
            let fetchUrl = (window.location.href.includes("localhost") ? "/scan-results/data/" : "/code4good-accessibility/scan-results/data/") + listOfFiles[i].filename;
            let resp = await fetch(fetchUrl)
                .then(response => response.json())
                .then(json => {
                    json.url = fetchUrl;
                    return json;
                }).catch(function () {
                    console.log("Error in file: " + fetchUrl);
                    return null;
                });
            if (resp !== null)
                data.push(resp);
        }
        return Promise.all(data);
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    setAverages(data) {
        let averages = {
            performance: 0,
            accessibility: 0,
            "best-practices": 0,
            seo: 0,
            pwa: 0
        }
        for (let i = 0; i < data.length; i++) {
            for (let key in data[i].categories) {
                averages[key] += (data[i].categories[key].score * 100);
            }
        }
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
    setNoOfResults(val) {
        this.setState({
            noOfResults: val
        })
    }
    sortNestedItems(value) {
        let isAsc = true;
        if (value === this.state.sorting.sortOn)
            isAsc = !this.state.sorting.sortAsc;
        const nested = value.split(".");
        function compare(a, b) {
            let x = a;
            let y = b;
            for (let i = 0; i < nested.length; i++) {
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
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <p className="mt-20">Please wait, results are processing.</p>
                </div>}
                {this.state.fetchComplete && <div>
                    <FileAverages averages={this.state.averages} />
                    <TopIssues data={this.state.data} />
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faList} size="lg" /><h2>All Data</h2>
                    </div>
                    <div className="mb-20" >Total Pages: {this.state.noOfResults}</div>
                    <div className="table-container">
                        <table className="results" cellPadding="0" cellSpacing="0">
                            <thead>
                                <tr className="result-item heading">
                                    <SortableHeaderCell title="URL" category="requestedUrl" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems} />
                                    <SortableHeaderCell title="Performance" category="categories.performance.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems} />
                                    <SortableHeaderCell title="Accessibility" category="categories.accessibility.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems} />
                                    <SortableHeaderCell title="Best Practices" category="categories.best-practices.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems} />
                                    <SortableHeaderCell title="SEO" category="categories.seo.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems} />
                                    <SortableHeaderCell title="Progressive Web App" category="categories.pwa.score" sorting={this.state.sorting} sortNestedItems={this.sortNestedItems} />
                                </tr>
                            </thead>
                            <FileResults data={this.state.data} setNoOfResults={this.setNoOfResults} />
                        </table>
                    </div>
                    <div className="back-to-top center mt-20">
                        <button onClick={this.scrollToTop}><FontAwesomeIcon icon={faArrowUp} /><br />Back to Top</button>
                    </div>
                    <div className="disclaimer mt-20">
                        Accessibility data pulled from GitHub: <a href={this.state.url} target="_blank" rel="noopener noreferrer">{this.state.url}</a>. Use Chrome for best experience.
                    </div>
                </div>}
            </div>
        );
    }
}

export default FilesList;