import React from 'react';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/home/scenes/Home';
import Article from '../modules/home/scenes/Article';
import Source from '../modules/home/scenes/Source';

import { color, navTitleStyle, backButtonStyle } from "../styles/theme";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root"
                    navigationBarStyle={{ backgroundColor: "#af5166" }}
                    titleStyle={navTitleStyle}
                    backTitle=''
                    backButtonTextStyle={backButtonStyle}
                    backButtonTintColor={color.white}>
                    <Scene key="Home" component={Home} title="NEWS HEADLINES" initial
                        backTitle=''
                        backButtonTextStyle={backButtonStyle}
                        backButtonTintColor={color.white}
                    />
                    <Scene key="Article" component={Article} title="NEWS DETAILS"
                        backTitle=''
                        backButtonTextStyle={backButtonStyle}
                        backButtonTintColor={color.white}
                    />
                    <Scene key="Source" component={Source} title=""
                        backTitle=''
                        backButtonTextStyle={backButtonStyle}
                        backButtonTintColor={color.white}
                    />
                </Stack>
            </Router>
        )
    }
}