import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { Product } from "../../interfaces/product.interface";
import { styles } from "./styles";

interface ProductCardProps {
  product: Product;
  idx: number;
  onClickImage: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  idx,
  onClickImage,
}) => {
  const [isTouching, setIsTouching] = useState(false);
  const [startY, setStartY] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const imageUrls = product.images.split(",");
  const firstImage = imageUrls[0]?.trim();

  const handleTouchStart = (e: any) => {
    setIsTouching(true);
    setStartY(e.nativeEvent.pageY);
    setHasMoved(false);
  };

  const handleTouchMove = (e: any) => {
    const moveDistance = Math.abs(e.nativeEvent.pageY - startY);
    if (moveDistance > 10) setHasMoved(true);
  };

  const handleTouchEnd = () => {
    if (isTouching && !hasMoved) onClickImage(product);
    setIsTouching(false);
  };

  return (
    <View
      style={styles.productCard}
      onStartShouldSetResponder={(e) => {
        return true;
      }}
      onMoveShouldSetResponder={(e) => {
        const moveDistance = Math.abs(e.nativeEvent.pageY - startY);
        if (moveDistance > 10) {
          setHasMoved(true);
          return false;
        }
        return true;
      }}
      onResponderGrant={handleTouchStart}
      onResponderMove={handleTouchMove}
      onResponderRelease={handleTouchEnd}
    >
      <ImageBackground
        source={{ uri: firstImage }}
        style={styles.productImage}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.productName}>{product.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductCard;
