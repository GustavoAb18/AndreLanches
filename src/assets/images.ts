/**
 * Registro central das imagens do app.
 *
 * Manter os `require` em um único lugar evita caminhos espalhados
 * pelos componentes e deixa claro quais assets o projeto utiliza.
 */

export const brand = {
  logo: require('../../assets/foodImgs/logo.png'),
  bannerPromocao: require('../../assets/foodImgs/promocao.jpg'),
  telefone: require('../../assets/foodImgs/telefone.png'),
} as const;

export const productImages = {
  xSalada: require('../../assets/foodImgs/xsalada.jpg'),
  cheddar: require('../../assets/foodImgs/cheddar.jpg'),
  batataFrita: require('../../assets/foodImgs/batata.jpg'),
  xBurguer: require('../../assets/foodImgs/cheese.jpg'),
  bigTower: require('../../assets/foodImgs/bigtower.jpg'),
  xFrango: require('../../assets/foodImgs/fragonrequeijao.jpg'),
  nuggets: require('../../assets/foodImgs/nuggets.jpg'),
  refri: require('../../assets/foodImgs/refri.jpg'),
  sucos: require('../../assets/foodImgs/sucos.jpg'),
} as const;

export type ProductImageKey = keyof typeof productImages;
