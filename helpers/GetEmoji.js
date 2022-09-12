/**
 * Switch statement/ helper function to get the correct emoji name to write to the db ~ keeps component code clutter free..
 * @param {*} props 
 * @returns {string} emoji
 */
const GetEmoji = (props) => {
    let emoji = "";
    switch (props) {
        case (19):
            emoji = "open_mouth";
            break;
        case (20):
            emoji = "clap";
            break;
        case (21):
            emoji = "joy";
            break;
        case (22):
            emoji = "purple_heart";
            break;
        case (23):
            emoji = "fire";
            break;
        case (24):
            emoji = "heart_eyes";
            break;
    }
    return emoji;
}

export default GetEmoji;