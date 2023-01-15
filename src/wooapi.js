import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://demostore.mirailit.com",
    consumerKey: "ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8",
    consumerSecret: "cs_1dd3842d9bdc656ace99007faef0bb09a4d34400",
    version: "wc/v3"
});

export default api