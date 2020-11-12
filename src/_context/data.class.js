import noData from './state';
import { makePropertiesFilters } from '../_util';

export default class{
  constructor(props){
    this.builderId = props._id;
    this.office = {
      id: props.office,
      name: props.email,
      email: props.email,
      address: props.address,
      phone: props.phone,
      mobile: props.movil,
    };

    this.main = {
      primaryColor: props.primaryColor,
      secondaryColor: "#ffffff",
      favicon: "",
      logo:{
        isImage: props.logo ? true : false,
        value: props.logo,
      },
      logoDark:{
        isImage: props.logoDark ? true : false,
        value: props.logoDark,
      },      
    };

    this.home = {
      hero:{
        visible: true,
        title: props.home.hero.title || noData.home.hero.title,
        background: props.home.hero.background || noData.home.hero.background,
      },
      properties:{
        visible: true,
        title: props.home.properties.title || noData.home.properties.title,
        footer: props.home.properties.footer || noData.home.properties.footer,
        bannerImage: "/banner.jpg",
        buttonText: props.home.properties.buttonText || noData.home.properties.buttonText,
        items: props.home.properties.items || noData.home.properties.items,
      },
      about:{
        banner:{
          visible: true,
          image: props.home.about.banner.image || noData.home.about.banner.image,
          title: props.home.about.banner.title || noData.home.about.banner.title,
          subTitle: props.home.about.banner.subTitle || noData.home.about.banner.subTitle,
          buttonText: props.home.about.banner.buttonText || noData.home.about.banner.buttonText,
        },
      },
      services:{
        visible: true,
        items: props.home.services.items || noData.home.services.items,
      },
      reviews:{
        visible: true,
        items: props.home.reviews.items || noData.home.reviews.items,
      },
      contact:{
        visible: true,
        title: "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.",
        buttonText: "contacto"
      },    
    }
  }
  static paginateProperties = (filters)=> new Promise(async(resolve, reject) => {
    try{
      const url = makePropertiesFilters(filters);
      const data = await fetch(url);
      const result = await data.json();
      resolve(result);
    }catch(e){
      console.log("paginateProperties error:", e);
      reject(e)
    }
  });
}