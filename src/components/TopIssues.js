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
            showManual: true,
            selectedIssue: "all-issues"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCheckClick = this.handleCheckClick.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleIssueSelect = this.handleIssueSelect.bind(this);
    };
    componentDidMount() {
        let arr = this.props.data;
        this.setState({
            data: arr,
            filteredData: arr
        });
    }

    handleIssueSelect(e){        
        let issue= e.target.value;      
        if(issue=="all-issues"){
            this.setState({            
                filteredData: (!this.state.showManual ? this.state.data.filter(item => item.manual === false) : this.state.data) ,
                selectedIssue: issue          
            });                   
        }
        else{
            this.setState({            
                filteredData: (this.state.showManual ? this.state.data.filter(item => item.category === issue) : this.state.data.filter(item => item.category === issue && item.manual === false)),
                selectedIssue: issue          
            });           
        }
    }

    handleCheckClick(e) {
        this.handleCheckChange(e);
        let cb = document.getElementById("showmanual-checkbox");
        if (cb.checked) {
            cb.checked = false;
        }
        else {
            cb.checked = true;
        }
    }
    handleCheckChange(e) {
        e.stopPropagation();
        if(this.state.selectedIssue=="all-issues"){
            this.setState({            
                filteredData: (this.state.showManual ? this.state.data.filter(item => item.manual === false) : this.state.data) ,
                showManual: !this.state.showManual   
            });                   
        }
        else{
            this.setState({            
                filteredData: (this.state.showManual ? this.state.data.filter(item => item.category === this.state.selectedIssue && item.manual === false) : this.state.data.filter(item => item.category === this.state.selectedIssue)),
                showManual: !this.state.showManual  
            });            
        }      
    }
    
    handleClick() {
        if (!this.state.showMore) {
            this.setState({
                showMore: true
            })
        }
    }
    sortByCount(a, b) {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    }
    render() {
        let id = 0;
        let rendered = this.state.filteredData.map(item => {
            return <tr key={"issue-item-" + id++}>
                <td className="pointer">
                    <DescriptionPopover title={item.title} description={item.description} />
                </td>
                <td>{item.count}</td>
                <td>{item.manual ? "Yes" : ""}</td>
            </tr>
        })
        return (
            <div>
                <div className="section-heading"><FontAwesomeIcon icon={faExclamationTriangle} size="lg" /><h2>Top Issues</h2></div>
                <div className=" mb-20 issue-select-bar">
                    <div>
                        <span>Select Issue Type:</span>
                        <select className="ml-10 issue-dropdown" name="select-issue-type" id="select-issue-type" onChange={(e) =>{this.handleIssueSelect(e)}} >                        
                            <option value="all-issues">All Issues</option>
                            <option value="performance">Performance</option>  
                            <option value="accessibility">Accessibility</option>                                              
                            <option value="best-practices">Best Practices</option>
                            <option value="seo">SEO</option>
                            <option value="pwa">Progressive Web App</option>
                        </select>                    
                    </div>
                    <div>
                        <input className="pointer" id="showmanual-checkbox" type="checkbox" onChange={(e) => { this.handleCheckChange(e) }} />
                        <span className="pointer" onClick={(e) => { this.handleCheckClick(e) }}>Hide Manual Checks</span>
                    </div>
                </div>
                <div className={this.state.showMore ? "section" : "section shortened"} onClick={this.handleClick}>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Issue</th>
                                    <th># of Pages Affected</th>
                                    <th>Needs manual check?</th>
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