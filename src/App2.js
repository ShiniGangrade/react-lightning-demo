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


class App extends Component {


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
            <div className="App">
                <SplitView
                    id="base-multiple-example"
                    master={this.masterView()}
                    detail={this.detailView()}
                />
            </div>
        );
    }
}

export default App;


// has split view

