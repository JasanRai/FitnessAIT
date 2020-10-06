import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Gallery from "react-native-image-gallery";

import Camera from "./Camera";

const initialImages = [
  { source: { uri: "http://i.imgur.com/XP2BE7q.jpg" } },
  { source: { uri: "http://i.imgur.com/5nltiUd.jpg" } },
  { source: { uri: "http://i.imgur.com/6vOahbP.jpg" } },
  { source: { uri: "http://i.imgur.com/kj5VXtG.jpg" } },
];

export default function GalleryComponent() {
  const [images, setImages] = useState(initialImages);
  const [takePhoto, setTakePhoto] = useState(false);

  if (takePhoto) return <Camera setTakePhoto={setTakePhoto} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gallery}>
        <Gallery
          style={{ width: 600, resizeMode: "contain" }}
          images={images}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          buttonStyle={styles.button}
          title="Take Photo"
          onPress={() => setTakePhoto(true)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: "center",
  },
  gallery: {
    flex: 2,
  },
  bottom: {
    flex: 1,
  },
  button: {
    width: 150,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
