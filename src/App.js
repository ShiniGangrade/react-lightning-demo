import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Tabs, TabsPanel} from '@salesforce/design-system-react';
import {SplitViewHeader, SplitViewListbox, SplitView} from '@salesforce/design-system-react';
import {Link, Switch, Route} from 'react-router-dom'

import DataChart from './components/DataChart'
const SORT_OPTIONS = {
    UP: 'up',
    DOWN: 'down',
};

const listOptions = [
    {
        id: '001',
        label: 'Riley Shultz',
        topRightText: '99',
        bottomLeftText: 'Biotech, Inc.',
        bottomRightText: 'Nurturing',
    },
    {
        id: '002',
        label: 'Jason A. - VP of Sales',
        topRightText: '92',
        bottomLeftText: 'Case Management Solutions',
        bottomRightText: 'Contacted',
    },
    {
        id: '003',
        label: 'Josh Smith',
        topRightText: '90',
        bottomLeftText: 'Acme, Inc.',
        bottomRightText: 'Contacted',
    },
    {
        id: '004',
        label: 'Bobby Tree',
        topRightText: '89',
        bottomLeftText: 'Salesforce, Inc.',
        bottomRightText: 'Closing',
    },
    {
        id: '005',
        label: 'Riley Shultz',
        topRightText: '74',
        bottomLeftText: 'Tesla',
        bottomRightText: 'Contacted',
    },
    {
        id: '006',
        label: 'Andy Smith',
        topRightText: '72',
        bottomLeftText: 'Universal Technologies',
        bottomRightText: 'New',
    },
    {
        id: '007',
        label: 'Jim Steele',
        topRightText: '71',
        bottomLeftText: 'BigList, Inc.',
        bottomRightText: 'New',
    },
    {
        id: '008',
        label: 'John Gardner',
        topRightText: '70',
        bottomLeftText: '3C Systems',
        bottomRightText: 'Contacted',
    },
    {
        id: '009',
        label: 'Sarah Loehr',
        topRightText: '68',
        bottomLeftText: 'MedLife, Inc.',
        bottomRightText: 'New',
    },
];

class Dashboard extends Component {

    render() {
        return (
            <div className="slds-grid">
                {/*<div className="slds-col slds-size_3-of-5">*/}
                <div className="slds-col ">
                    Task List


                    <Tabs id="tabs-example-default">
                        <TabsPanel label="Project">
                            <DataList/>
                        </TabsPanel>
                        <TabsPanel label="Report">Report</TabsPanel>
                        <TabsPanel label="Sales Escalation">Sales Escalation</TabsPanel>
                    </Tabs>

                </div>
                <div className="slds-col slds-size_2-of-5">
                    <DataChart/>y


                </div>
            </div>

        );
    }

}

class DataList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: listOptions,
            selected: [listOptions[listOptions.length - 2]],
            unread: [listOptions[0], listOptions[2]],
            sortDirection: SORT_OPTIONS.DOWN,
        };

        this.sortList = this.sortList.bind(this);
    }

    sortList() {
        const sortDirection =
            this.state.sortDirection === SORT_OPTIONS.DOWN
                ? SORT_OPTIONS.UP
                : SORT_OPTIONS.DOWN;

        this.setState({
            options: this.state.options.sort(
                (a, b) =>
                    (sortDirection === SORT_OPTIONS.DOWN
                        ? a.label > b.label
                        : b.label > a.label)
            ),
            sortDirection,
        });
    }

    masterView() {
        return [
            <SplitViewHeader

            />,
            <SplitViewListbox
                key="2"
                labels={{
                    header: 'Lead Score',
                }}
                multiple
                sortDirection={this.state.sortDirection}
                options={this.state.options}
                events={{
                    onSort: this.sortList,
                    onSelect: (event, {selectedItems, item}) => {
                        this.setState({
                            unread: this.state.unread.filter((i) => i !== item),
                            selected: selectedItems,
                        });
                    },
                }}
                selection={this.state.selected}
                unread={this.state.unread}
            />,
        ];
    }

    detailView() {
        return (
            <div>
                <DataChart/>

            </div>
        );
    }

    render() {
        return (

            <SplitView
                id="base-multiple-example"

                detail={this.masterView()}
            />

        );
    }
}


class App extends Component {


    constructor() {
        super();
        this.verticalNavClicked = this.verticalNavClicked.bind(this);
    }

    verticalNavClicked(e) {
        console.log(e.target.name)

        // change the is active

    }

    render() {
        return (
            <div className="App">
                <div className="slds-grid slds-grid--frame slds-grid--vertical">

                    <header className="header slds-size--1-of-1" role="banner">

                        <div className="slds-grid">
                            <div
                                className="stage-left slds-grid slds-size--2-of-12 slds-theme--alt-inverse slds-p-vertical--x-small slds-p-horizontal--medium js-nav-toggle open">
        <span className="slds-icon__container slds-align-middle">
          <img className="slds-icon slds-icon--small" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8005/rows.svg"
               alt="Toggle Menu"/>
          <span className="slds-assistive-text">Toggle Menu</span>
        </span>
                            </div>
                            <div className="slds-grid slds-grow">
                                <div className="slds-p-vertical--x-small slds-p-horizontal--medium">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8005/salesforce-logo.png"
                                         style={{height: 44}}/>
                                </div>
                            </div>
                        </div>

                    </header>

                    <div className="stage-container slds-grid slds-nowrap slds-size--1-of-1">
                        <nav
                            className="stage-left slds-size--2-of-12 slds-shrink-none slds-scrollable--y slds-theme--alt-inverse slds-p-around--small open">

                            <ul role="navigation" className="slds-has-block-links">
                                <li>
                                    <a href="#">
            <span className="slds-icon__container slds-icon-standard-today slds-m-right--small">
              <img className="slds-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8005/today.svg"
                   alt="Nav Item One"/>
              <span className="slds-assistive-text">Nav Item One</span>
            </span>
                                        <span className="stage-left__text slds-max-medium-hide">Nav Item One</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
            <span className="slds-icon__container slds-icon-standard-opportunity slds-m-right--small">
              <img className="slds-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8005/opportunity.svg"
                   alt="Nav Item One"/>
              <span className="slds-assistive-text">Nav Item Two</span>
            </span>
                                        <span className="stage-left__text slds-max-medium-hide">Nav Item Two</span>
                                    </a>
                                </li>
                            </ul>

                        </nav>

                        <section className="stage slds-grid slds-grid--vertical slds-nowrap">

                            <div className="slds-shrink-none">
                                <div className="slds-page-header">Page Header</div>
                            </div>

                            <div className="stage-main slds-grid slds-wrap slds-grow slds-scrollable--y" role="main">

                                <div
                                    className="slds-grow slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--8-of-12 slds-col-rule--right slds-p-around--large">

                                    Primary Content Area

                                </div>

                                <div
                                    className="slds-shrink-none slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--4-of-12 slds-p-around--large"
                                    role="complementary">

                                    Secondary Content Area

                                </div>

                            </div>

                        </section>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
