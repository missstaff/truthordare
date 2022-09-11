import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    active: {
        borderRadius: 8,
        borderWidth: 1,
        height: "100%",
        width: "100%",
    },
    avatarContainer: {
        alignItems: "center",
        flex: 3, // the number of columns you want to devide the screen into
        justifyContent: "center",
        marginHorizontal: "auto",
        width: 375,
    },
    close: {
        left: 80,
        postition: "absolute",
        top: 30,
    },
    container: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    dare: {
        color: "red",
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing: 0.10,
        marginTop: 50,
        marginBottom: 5,
    },
    emoji: {
        height: 25,
        marginRight: 15,
        marginLeft: 15,
        padding: 15,
        width: 25,
      },
    EmojisContainer: {
        alignItems: "center",
        backgroundColor: "#222",
        borderRadius: 25,
        display: "flex",
        flexDirection: "row",
        height: 50,
        justifyContent: "space-evenly",
        marginTop: 25,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
    },
    host: {
        alignSelf: "flex-end",
        borderRadius: 8,
        borderWidth: 1,
        height: "40%",
        position: "absolute",
        top: 150,
        width: "40%",
    },
    images: {
        borderRadius: 8,
        borderWidth: 1,
        height: "100%",
        width: "100%",
    },
    or: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing: 0.10,
        marginTop: 50,
        marginBottom: 5,
        paddingRight: 2,
        paddingLeft: 2,
    },
    row: {
        flexDirection: "row",
    },
    safe: {
        backgroundColor: "#000",
        flexDirection: 'column',
        height: "100%",
        marginRight: 2,
        marginLeft: 2,
    },
    scroll: {
        flex: 1,
        width: "100%",
    },
    titleContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'center',
        position: "relative"
    },
    truth: {
        color: "goldenrod",
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing: 0.10,
        marginTop: 50,
        marginBottom: 5,
        marginLeft: 50
    },
    viewers: {
        color: '#666',
        fontSize: 12,
        letterSpacing: 0.10,
        marginBottom: 20,
    },
    viewersContainer: {
        alignSelf: "center"
    },
    "1img": {
        flex: 1,
        height: 100,
    },
    "3img": {
        borderWidth: 1,
        flex: 3,
        height: 250,
    },
});

export default styles;