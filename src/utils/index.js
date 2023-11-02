export const navOptions = [
  {
    id: "home",
    label: "Acceuille",
    path: "/",
  },
  {
    id: "listing",
    label: "Tous les produits",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Homme",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Femme",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Enfants",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Gérer tous les produits",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Ajouter un nouveau produit",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Entrer votre nom",
    label: "Nom",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Entrer votre email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Entrer votre mot de passe",
    label: "mot de passe",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "client",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Entrer votre email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Entrer votre mot de passe",
    label: "mot de passe",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "nom du produits",
    label: "Nom",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "prix du produit",
    label: "Prix",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Homme",
      },
      {
        id: "women",
        label: "Femme",
      },
      {
        id: "kids",
        label: "Enfant",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Entre info de livraison",
    label: "Info de livraison",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "En vente",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "oui",
      },
      {
        id: "no",
        label: "non",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Entrer prix de reduction",
    label: "reduction de prix",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyDXxrb3G-AWjIYsh2sJlovsKx-pzUIVJug",
  authDomain: "e-commerce-70f2c.firebaseapp.com",
  projectId: "e-commerce-70f2c",
  storageBucket: "e-commerce-70f2c.appspot.com",
  messagingSenderId: "73805629658",
  appId: "1:73805629658:web:0f946b1b7b367bcc87fde3",
  measurementId: "G-M3JZF2ECHX"
};

export const firebaseStroageURL =
  "gs://e-commerce-70f2c.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Entrer votre Nom complet",
    label: "Nom complet",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Entrer votre address complet",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Entrer votre Ville",
    label: "Ville",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Entrer votre pays",
    label: "Pays",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Entrer votre postal code",
    label: "Code Postal",
    componentType: "input",
  },
];
