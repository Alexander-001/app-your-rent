import { Dimensions, Image, StyleSheet, View } from "react-native";

interface Props {
  item: { image: string };
  index: number;
}

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
