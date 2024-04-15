import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exercise from './assets/components/exercise'
import { Homepage } from './assets/components/homepage';
import SignUp from './assets/components/signup'
import { Login } from './assets/components/login';
import Nutrition from './assets/components/nutrition'
import { SplashScreen } from './assets/components/splashScreen';
import Vegetables from './assets/components/vegetables';
import Fruits from './assets/components/fruits';
import Water from './assets/components/water';
import Eggs from './assets/components/eggs';
import Legumes from './assets/components/legumes';
import Dairy from './assets/components/dairy';
import Walking from './assets/components/walking';
import Knee from './assets/components/kneeBend';
import Stand from './assets/components/stand&Stretch';
import BendBack from './assets/components/bendBackwards';
import LegStretch from './assets/components/legStretch';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Exercise" component={Exercise} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

    <Stack.Screen name="Walking" component={Walking} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

              
    <Stack.Screen name="LegExercise" component={LegStretch} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

    <Stack.Screen name="Bending" component={BendBack} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

<Stack.Screen name="Stand" component={Stand} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      <Stack.Screen name="Homepage" component={Homepage} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      <Stack.Screen name="Signup" component={SignUp} 
           options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      <Stack.Screen name="Login" component={Login} 
           options={{
                headerTitle: '',
                headerShown: false,
              }}
      />
      <Stack.Screen name="Nutrition" component={Nutrition} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />
      <Stack.Screen name="Splash" component={SplashScreen} 
           options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

     
    <Stack.Screen name="Vegetables" component={Vegetables} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

<Stack.Screen name="Knee" component={Knee} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />


<Stack.Screen name="Fruits" component={Fruits} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      
<Stack.Screen name="Water" component={Water} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      
      <Stack.Screen name="Legumes" component={Legumes} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      
      <Stack.Screen name="Eggs" component={Eggs} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />

      
      <Stack.Screen name="Dairy" component={Dairy} 
             options={{
                headerTitle: '',
                headerShown: false,
              }}
      />


      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;