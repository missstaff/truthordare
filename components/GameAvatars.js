import React from 'react';
import {
    Image, 
    StyleSheet, 
    View 
} from 'react-native';


/**
 * @param {*} props 
 * @returns *skeleton of* a viewers game view
 * mostly a placeholder to set up emoji chat animations 
 */
const GameAvatars = (props) => {

    // very generic code ?? address mobility of player isActive status? (only if needed)

    const host = props.players.filter(object => {
        return object.isHost === true;
    });

    const isActive = props.players.filter(object => {
        return object.isActive === true;
    });

    const players = props.players.filter(object => {
        return object.isHost === false
    });
    

    const topRow = players.splice(0, 3);
    const bottomRow = players;

  
    const Col = ({ numRows, children }) => {
        return (
            <View style={styles[`${numRows}img`]}>{children}</View>
        );
    };

    const Row = ({ children }) => {
        return (
            <View style={styles.row}>{children}</View>
        );
    };


    return (
        <View style={styles.container}>
            <Row>
                {topRow.map((player, i) => {
                    return (
                        <Col numRows={1} key={i}> 
                            {!player.isActive ? <Image style={styles.images} source={player.avatarurl} /> : <View style={[styles.images, {borderColor: "blue"}]}></View>}
                        </Col>
                    );
                })}
            </Row>
            <Row>
                <Col numRows={3}>
                    <Image style={styles.active} source={isActive[0].avatarurl} />
                    <Image style={styles.host} source={host[0].avatarurl} />
                </Col>
            </Row>
            <Row>
                {bottomRow.map((player, i) => {
                    return (
                        <Col numRows={1} key={i}>
                            {!player.isActive ? <Image style={styles.images} source={player.avatarurl} /> : <View style={[styles.images, {borderColor: "blue"}]}></View>}
                        </Col>
                    );
                })}
            </Row>
        </View>
    );
};

export default GameAvatars;

const styles = StyleSheet.create({
    active: { 
        borderRadius: 8, 
        borderWidth: 1, 
        height: "100%",
        width: "100%", 
    },
    container: {
        alignItems: "center",
        flex: 3, // the number of columns you want to devide the screen into
        justifyContent: "center",
        marginHorizontal: "auto",
        width: 375,
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
    row: {
        flexDirection: "row",
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