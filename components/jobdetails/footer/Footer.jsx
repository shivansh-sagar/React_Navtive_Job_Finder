import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ToastAndroid,
  Modal,
} from "react-native";
import { icons } from "../../../constants";
import styles from "./footer.style";
import { WebView } from "react-native-webview";

const Footer = ({ url }) => {
  const [visible, setVisible] = useState(false);
  const openLinkInWebView = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={() =>
          ToastAndroid.show("Added to Liked !", ToastAndroid.SHORT)
        }
      >
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply Now</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.applyBtn} onPress={openLinkInWebView}>
        <Text style={styles.applyBtnText}>Apply Now</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        presentationStyle={"pageSheet"}
        animationType={"slide"}
        onRequestClose={() => setVisible(false)}
      >
        <WebView source={{ uri: url }} />
      </Modal>
    </View>
  );
};

export default Footer;
