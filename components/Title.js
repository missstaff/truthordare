import React from "react";
import { Text, View } from "react-native";

import Icon from "./Icon";
import styles from "../styles/styles";

/**
 * @returns View of title bar with close button
 */
const Title = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer} >
                <Text style={styles.truth}
                >truth
                </Text>
                <Text style={styles.or}
                >or
                </Text>
                <Text style={styles.dare}
                >dare
                </Text>
                <View style={styles.close}>
                    <Icon name={"close"} onPress={() => console.log("PRESS TO CLOSE")} />
                </View>
            </View>
            <View style={styles.viewersContainer}>
                <Text style={styles.viewers}
                >216 viewers</Text>
            </View>
        </View>
    );
};

export default Title;
