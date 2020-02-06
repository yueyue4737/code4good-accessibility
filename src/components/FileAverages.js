import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

class FileAverages extends React.Component {
    render() {
        return (
            <div>
                <div className="section-heading"><FontAwesomeIcon icon={faChartPie} size="lg" /><h2>Average Results</h2></div>
                <div className="averages">
                    <div className="average-item">
                        <h3>Performance</h3>
                        <div className="avg performance">
                            {this.props.averages.performance == 0 ? "n/a" : this.props.averages.performance}
                        </div>
                    </div>
                    <div className="average-item">
                        <h3>Accessibility</h3>
                        <div className="avg accessibility">
                            {this.props.averages.accessibility == 0 ? "n/a" : this.props.averages.accessibility}
                        </div>
                    </div>
                    <div className="average-item">
                        <h3>Best Practices</h3>
                        <div className="avg best-practices">
                            {this.props.averages["best-practices"] == 0 ? "n/a" : this.props.averages["best-practices"]}
                        </div>
                    </div>
                    <div className="average-item">
                        <h3>SEO</h3>
                        <div className="avg seo">
                            {this.props.averages.seo == 0 ? "n/a" : this.props.averages.seo}
                        </div>
                    </div>
                    <div className="average-item">
                        <h3>Progressive Web App</h3>
                        <div className="avg progressive">
                            {this.props.averages.pwa == 0 ? "n/a" : this.props.averages.pwa}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileAverages;