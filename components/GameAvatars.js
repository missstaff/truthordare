import React from "react";
import { Image, View } from "react-native";

import styles from "../styles/styles";


/**
 * mostly a placeholder to set up emoji chat animations 
 * @param {*} props 
 * @returns *skeleton of* a viewers game view
 */
const GameAvatars = (props) => {


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
        <View style={styles.avatarContainer}>
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
