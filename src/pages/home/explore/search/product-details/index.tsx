import {
  faBell,
  faHeart,
  faPaperPlane,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons"; // Importar los íconos necesarios
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../../../../interfaces/menu.interfaces";
import { Product } from "../../../../../interfaces/product.interface";

// Asegúrate de que los tipos de navegación estén bien configurados
type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;

const ProductDetail = ({ route }: { route: ProductDetailScreenRouteProp }) => {
  const data: any = route.params;
  const product: Product = data.product;

  const images = product.images.split(","); // Dividir las imágenes

  const renderCarouselItem = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={{ width: "100%", height: 300 }}
      resizeMode="cover"
    />
  );

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {/* Carrusel de imágenes */}
      <View style={{ height: 300 }}>
        {/* <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={400}
          itemWidth={400}
          loop={true}
        /> */}
      </View>

      {/* Título y precio */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
        {product.name}
      </Text>
      <Text style={{ fontSize: 20, color: "#09f", marginTop: 5 }}>
        ${product.price}
      </Text>

      {/* Card para mensaje al vendedor */}
      <View
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#f7f7f7",
          borderRadius: 8,
          elevation: 3,
        }}
      >
        <Text>Envia un mensaje al vendedor</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
            paddingLeft: 10,
          }}
          placeholder="Hola ¿sigue estando disponible?"
        />
        <Button title="Enviar" onPress={() => {}} color="#09f" />
      </View>

      {/* Iconos y texto */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <FontAwesomeIcon icon={faBell} size={30} style={{ color: "#000" }} />
          <Text>Alertas</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size={30}
            style={{ color: "#000" }}
          />
          <Text>Enviar Oferta</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faShareAlt}
            size={30}
            style={{ color: "#000" }}
          />
          <Text>Compartir</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FontAwesomeIcon icon={faHeart} size={30} style={{ color: "#000" }} />
          <Text>Favorito</Text>
        </View>
      </View>

      {/* Descripción */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Descripción</Text>
        <Text>{product.description}</Text>
      </View>

      {/* Detalles */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Detalles</Text>
        <Text>Estado: {product.status}</Text>
      </View>

      {/* Ubicación (puedes reemplazar con un mapa más tarde) */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Ubicación</Text>
        <Image
          source={{ uri: "https://via.placeholder.com/300x200" }} // Placeholder de mapa
          style={{ width: "100%", height: 200, borderRadius: 8 }}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
