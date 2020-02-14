import React from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover';


class DescriptionPopover extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            isPopoverOpen: false
        }
    };
    render() {
        return (
            <Popover
                isOpen={this.state.isPopoverOpen}
                align={'end'}
                position={'bottom'} // preferred position
                onClickOutside={() => this.setState({ isPopoverOpen: false })}
                content={({ position, targetRect, popoverRect }) => (
                    <ArrowContainer
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                        arrowColor={'#eeeeee'}
                        arrowSize={10}
                        arrowStyle={{  }}
                    >
                        <div className="popover">
                            {this.props.description}
                        </div>
                    </ArrowContainer>
                )}
            >
                <div onClick={() => this.setState({ isPopoverOpen: !this.state.isPopoverOpen })}>
                    {this.props.title}
                </div>
            </Popover>
        );
    }
}

export default DescriptionPopover;