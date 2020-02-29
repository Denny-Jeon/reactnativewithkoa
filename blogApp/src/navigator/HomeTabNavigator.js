import * as React from "react";
import {
  Text, View, Image, TouchableOpacity, ScrollView, Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const CustomHeader = ({ navigation, title, isHome = false }) => (
  <View style={{
    flexDirection: "row",
    height: 50,
  }}
  >
    <View style={{
      flex: 1,
      justifyContent: "center",
    }}
    >
      {isHome ? (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
            }}
            source={require("../../assets/menu.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              marginLeft: 5,
            }}
            source={require("../../assets/back.png")}
            resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>
      )}
    </View>


    <View style={{
      flex: 1.5,
      justifyContent: "center",
    }}
    >
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </View>
    <View style={{
      flex: 1,
    }}
    />
  </View>
);

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>Home!</Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("HomeDetail")}
        >
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


function HomeDetailScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>Home Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting" isHome navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>Setting!</Text>

        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("SettingDetail")}
        >
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


function SettingDetailScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting Detail" navigation={navigation} />
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>Settings Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Notifications Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const CustomDrawerContent = (props) => (
  <SafeAreaView
    style={{
      fex: 1,
      marginLeft: 5,
    }}
  >
    <View
      style={{
        height: 150,
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Image
        source={require("../../assets/profile.png")}
        style={{
          height: 120,
          width: 120,
          borderRadius: 60,
        }}
      />
    </View>
    <ScrollView>
      <TouchableOpacity
        style={{
          margintTop: 20,
        }}
        onPress={() => props.navigation.navigate("MenuTab")}
      >
        <Text>Menu Tab</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          margintTope: 20,
        }}
        onPress={() => props.navigation.navigate("Notifications")}
      >
        <Text>Notifications</Text>
      </TouchableOpacity>
    </ScrollView>

  </SafeAreaView>
);


function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Register Screen</Text>
      </View>
    </SafeAreaView>
  );
}


function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>Login Screen!</Text>

        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("HomeApp")}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const Tab = createBottomTabNavigator();

const navigationOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();
const HomeStack = () => (
  <StackHome.Navigator initialRouteName="Home">
    <StackHome.Screen name="Home" component={HomeScreen} options={navigationOptionHandler} />
    <StackHome.Screen name="HomeDetail" component={HomeDetailScreen} options={navigationOptionHandler} />
  </StackHome.Navigator>
);

const StackSetting = createStackNavigator();
const SettingStack = () => (
  <StackSetting.Navigator initialRouteName="Setting">
    <StackSetting.Screen name="Setting" component={SettingScreen} options={navigationOptionHandler} />
    <StackSetting.Screen name="SettingDetail" component={SettingDetailScreen} options={navigationOptionHandler} />
  </StackSetting.Navigator>
);


const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused
            ? require("../../assets/home.png")
            : require("../../assets/home-black.png");
        } else if (route.name === "Settings") {
          iconName = focused
            ? require("../../assets/setting.png")
            : require("../../assets/setting-black.png");
        }

        // You can return any component that you like here!
        // return <Ionicons name={iconName} size={size} color={color} />;
        return (
          <Image
            source={iconName}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: "red",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Settings" component={SettingStack} />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="MenuTab"
    drawerContent={(props) => CustomDrawerContent(props)}
  >
    <Drawer.Screen name="MenuTab" component={TabNavigator} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
);

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navigationOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navigationOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navigationOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
