import {
  faBell,
  faHeart,
  faPaperPlane,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Map from "../../../../../components/Map";
import Slider from "../../../../../components/Slider";
import { RootStackParamList } from "../../../../../interfaces/menu.interfaces";
import { formatPrice } from "../../../../../utils/common";
import { styles } from "./styles";
import { useProductDetails } from "./useProductDetails";

export type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;

const ProductDetail = ({ route }: { route: ProductDetailScreenRouteProp }) => {
  const { carouselImages, product } = useProductDetails(route);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={40}
      enableAutomaticScroll
    >
      <View style={{ height: 420 }}>
        <Slider dataSlider={carouselImages} />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>
          {formatPrice(product.price.toString(), "CLP")}
        </Text>

        <View style={styles.contentSendMessage}>
          <Text style={styles.textSend}>Envía un mensaje al vendedor</Text>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="Hola. ¿Sigue estando disponible?"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ICONOS */}
        <View style={styles.contentIcons}>
          {[
            { icon: faBell, label: "Alertas" },
            { icon: faPaperPlane, label: "Enviar Oferta" },
            { icon: faShareAlt, label: "Compartir" },
            { icon: faHeart, label: "Favorito" },
          ].map(({ icon, label }, index) => (
            <View key={index} style={styles.iconContainer}>
              <View style={styles.iconCircle}>
                <FontAwesomeIcon icon={icon} size={20} color="#333" />
              </View>
              <Text style={styles.iconLabel}>{label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* DESCRIPCIÓN */}
        <View style={styles.top20}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.divider} />

        {/* DETALLES */}
        <View style={styles.top20}>
          <Text style={styles.sectionTitle}>Detalles</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailKey}>Estado.</Text>
            <Text style={styles.detailValue}>{product.status}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailKey}>Marca.</Text>
            <Text style={styles.detailValue}>Mac</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* UBICACIÓN */}
        <View style={[styles.top20, { marginBottom: 50 }]}>
          <Text style={styles.sectionTitle}>Preferencias de entrega</Text>
          <Map />

          <Text style={styles.locationNote}>La ubicación es cerca</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProductDetail;
