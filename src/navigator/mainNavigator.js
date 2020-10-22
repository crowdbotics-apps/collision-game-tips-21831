import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5155593Navigator from '../features/BlankScreen5155593/navigator';
import BlankScreen4155592Navigator from '../features/BlankScreen4155592/navigator';
import EmailAuth155591Navigator from '../features/EmailAuth155591/navigator';
import ArticleList155588Navigator from '../features/ArticleList155588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5155593: { screen: BlankScreen5155593Navigator },
BlankScreen4155592: { screen: BlankScreen4155592Navigator },
EmailAuth155591: { screen: EmailAuth155591Navigator },
ArticleList155588: { screen: ArticleList155588Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
