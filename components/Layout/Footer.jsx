import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FOOTER_NAV_BAR, HIDE_FOOTER_SCREENS } from '../../Constant';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({ state, descriptors, navigation }) {
    return (
        <View style={HIDE_FOOTER_SCREENS.indexOf(state.routes[state.index].key.split('-')[0].trim()) < 0 ? styles.visibleContainer : styles.hideContainer}>
            {state.routes.map((route, index) => {
                const selectedKey = state.routes[index].key.split('-')[0].trim();
                if (Object.keys(FOOTER_NAV_BAR).indexOf(selectedKey) >= 0) {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center' }}
                        >
                            <Icon name={FOOTER_NAV_BAR[selectedKey].icon} size={20} color={isFocused ? "#FF9500" : "#2C2C2E"} />
                            <Text style={isFocused ? styles.textForcused : styles.textNormal}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    visibleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 38,
        paddingRight: 37,
        backgroundColor: '#000000'
    },
    hideContainer: {
        display: 'none'
    },
    textForcused: {
        fontSize: 14,
        lineHeight: 17,
        color: '#FF9500'
    },
    textNormal: {
        fontSize: 14,
        lineHeight: 17,
        color: '#2C2C2E'
    }
});