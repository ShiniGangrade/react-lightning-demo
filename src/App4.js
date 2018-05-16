import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Tabs, TabsPanel} from '@salesforce/design-system-react';
import {SplitViewHeader, SplitViewListbox, SplitView} from '@salesforce/design-system-react';
import { Link, Switch, Route } from 'react-router-dom'

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
                <div className="slds-col slds-size_3-of-5">
                    Task List


                    <Tabs id="tabs-example-default">
                        <TabsPanel label="Project">Project</TabsPanel>
                        <TabsPanel label="Report">Report</TabsPanel>
                        <TabsPanel label="Sales Escalation">Sales Escalation</TabsPanel>
                    </Tabs>

                </div>
                {/*<div className="slds-col slds-size_2-of-5">
                 <Tabs id="tabs-example-default">
                 <TabsPanel label="Item One">Item One Content</TabsPanel>
                 <TabsPanel label="Item Two">Item Two Content</TabsPanel>
                 <TabsPanel label="Item Three">Item Three Content</TabsPanel>
                 <TabsPanel disabled label="Disabled">
                 Disabled Content
                 </TabsPanel>
                 </Tabs>

                 </div>*/}
            </div>

        );
    }

}

class DataList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            options: listOptions,
            selected: [listOptions[listOptions.length - 2]],
            unread: [listOptions[0], listOptions[2]],
            sortDirection: SORT_OPTIONS.DOWN,
        };

        this.sortList = this.sortList.bind(this);
    }

    sortList () {
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

    masterView(){
        return [
            <SplitViewHeader
                key="1"
                iconAssistiveText="User"
                iconCategory="standard"
                iconName="lead"
                info="42 items • Updated just now"
                truncate
                variant="objectHome"
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
                    onSelect: (event, { selectedItems, item }) => {
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

    detailView () {
        return (<p>Chart area</p>);
    }

    render() {
        return (

            <SplitView
                id="base-multiple-example"
                master={this.masterView()}
                detail={this.detailView()}
            />

        );
    }
}

class Nav2 extends Component {


    render() {
        return (
            <div className="App">
                <DataList/>
            </div>
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
                <div className="slds-grid">

                    <div className="demo-only slds-col slds-size_1-of-6">
                        <nav className="slds-nav-vertical" aria-label="Sub page">
                            <div className="slds-nav-vertical__section">
                                <h2 id="entity-header" className="slds-nav-vertical__title slds-text-title_caps">
                                    Pricing Catalyst</h2>
                                <ul>
                                    {/*<li className="slds-nav-vertical__item slds-is-active"><Link to='/' className="slds-nav-vertical__action" aria-describedby="entity-header" aria-current="page" >Dashboard</Link></li>*/}
                                    <li className="slds-nav-vertical__item"><Link to='/' className="slds-nav-vertical__action" aria-describedby="entity-header" aria-current="page" >Dashboard</Link></li>
                                    <li className="slds-nav-vertical__item"><Link to='/my-account-planning' className="slds-nav-vertical__action" aria-describedby="entity-header" aria-current="page">My account planning</Link></li>
                                    <li className="slds-nav-vertical__item"><Link to='/my-recent-activity' className="slds-nav-vertical__action" aria-describedby="entity-header" aria-current="page">My recent activity</Link></li>
                                    <li className="slds-nav-vertical__item"><Link to='/my-data' className="slds-nav-vertical__action" aria-describedby="entity-header" aria-current="page">My data</Link></li>
                                    <li className="slds-nav-vertical__item"><Link to='/my-contacts' className="slds-nav-vertical__action" aria-describedby="entity-header" aria-current="page">My contacts</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>



                    {/*<div className="demo-only slds-col slds-size_1-of-6">*/}
                    {/*/!*<div className="demo-only slds-show_inline-block" style={{width: 320}}>*!/*/}
                    {/*<nav className="slds-nav-vertical" aria-label="Sub page">*/}
                    {/*<div className="slds-nav-vertical__section">*/}
                    {/*<h2 id="entity-header" className="slds-nav-vertical__title slds-text-title_caps">*/}
                    {/*Reports</h2>*/}
                    {/*<ul>*/}
                    {/*<li className="slds-nav-vertical__item slds-is-active">*/}
                    {/*<a href="javascript:void(0);" className="slds-nav-vertical__action"*/}
                    {/*aria-describedby="entity-header" aria-current="page"*/}
                    {/*onClick={this.verticalNavClicked} name="dashboard"*/}
                    {/*>Dashboard</a>*/}
                    {/*</li>*/}
                    {/*<li className="slds-nav-vertical__item">*/}
                    {/*<a href="javascript:void(0);" className="slds-nav-vertical__action"*/}
                    {/*aria-describedby="entity-header" name="my-account-planning"*/}
                    {/*onClick={this.verticalNavClicked}*/}
                    {/*>My account planning</a>*/}
                    {/*</li>*/}
                    {/*<li className="slds-nav-vertical__item">*/}
                    {/*<a href="javascript:void(0);" className="slds-nav-vertical__action"*/}
                    {/*aria-describedby="entity-header" name="my-recent-activity"*/}
                    {/*onClick={this.verticalNavClicked}*/}
                    {/*>My recent activity</a>*/}
                    {/*</li>*/}
                    {/*<li className="slds-nav-vertical__item">*/}
                    {/*<a href="javascript:void(0);" className="slds-nav-vertical__action"*/}
                    {/*aria-describedby="entity-header" name="my-data"*/}
                    {/*onClick={this.verticalNavClicked}*/}
                    {/*>My data</a>*/}
                    {/*</li>*/}
                    {/*<li className="slds-nav-vertical__item">*/}
                    {/*<a href="javascript:void(0);" className="slds-nav-vertical__action"*/}
                    {/*aria-describedby="entity-header" name="my-contacts"*/}
                    {/*onClick={this.verticalNavClicked}*/}
                    {/*>My contacts</a>*/}
                    {/*</li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    {/*</nav>*/}
                    {/*</div>*/}



                    <div className="slds-col slds-size_5-of-6">
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/my-account-planning' render={()=>(<p>My account planning</p>)} />
                            <Route exact path='/my-recent-activity' render={()=>(<p>My recent activity</p>)} />
                            <Route exact path='/my-data' render={()=>(<p>My data</p>)} />
                            <Route exact path='/my-contacts' render={()=>(<p>My contacts</p>)} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
