import { View } from 'react-native';
import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from './styles'; 

type Props = {
    task: string;
}

const index = ({task}: Props) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.listItem}>
            <BouncyCheckbox
                size={25}
                fillColor="#5E60CE"
                text={task}
                iconStyle={{ borderColor: "#4EA8DE" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={styles.listText}
            />
        </View>
    )
}

export default index;