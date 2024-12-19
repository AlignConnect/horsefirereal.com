import axios from "axios";
import Joi from "joi";

export class CheckoutFile {
  constructor() {}

  static getCheckOutData = async ({
    APP_API_URL,
    get_next_key,
    get_next_url,
  }) => {
    const url =
      process.env.NEXT_APP_API_URL +
      "product/fetch_with_api_key?api_key=" +
      get_next_key;

    const res = await fetch(url, {
      headers: {
        web_site_url: get_next_url,
      },
    });

    if (!res.ok) {
      throw new Error("Interal Server Error Please Try out After some Time");
    }

    return await res.json();
  };

  //this is for joi validation

  static joiValidator = (formdata) => {
    const schema = Joi.object({
      name: Joi.string().trim().required(),
      phone: Joi.string()
        .regex(/^[6-9]\d{9}$/)
        .required()
        .messages({ "string.regex": "Please Fill Correct Value" }),
      email: Joi.string().allow("").default(""),
      pincode: Joi.number().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      address: Joi.string(),
    });

    const { error, value } = schema.validate(formdata, {
      allowUnknown: false,
      abortEarly: true,
      stripUnknown: false,
    });

    if (error) {
      throw error.message;
    }
    return value;
  };

  // this is for generate pincode ,city and state

  static PincodeValidation = async (pincodevalue) => {
    const url = "https://api.postalpincode.in/pincode/" + Number(pincodevalue);
    const pinCode = await fetch(url)
      .then((v) => v)
      .then((response) => response.json())
      .catch((err) => err);
    console.log("pinCode: ", pinCode);
    if (pinCode && pinCode[0] && pinCode[0].Status === "Success") {
      return {
        pincode: pincodevalue,
        state: pinCode ? pinCode[0]?.PostOffice[0]?.State : "",
        city: pinCode ? pinCode[0]?.PostOffice[0]?.District : "",
        status: true,
      };
    } else {
      return { pincode: pincodevalue, status: false };
    }
  };

  //this is for create order in brahmikalp

  static createOrder = async (formdata) => {
    console.log(formdata);
    const orderData = {
      customer_name: formdata.name,
      customer_phone: String(formdata.phone),
      customer_email: "",
      customer_address: formdata.address,
      pincode: String(formdata.pincode),
      state: formdata.state,
      city: formdata.city,
      postOffice: null,
      product: formdata.id,
      product_name: formdata.product_name,
      price: formdata.price,
      discount: formdata.discount,
      totalPrice: formdata.price - formdata.discount,
      payment_mode: formdata.online ? "online" : "cod",
      form_id: null,
    };

    try {
      const { get_next_url, get_next_key } = handleCheckApiKey();

      const url =
        process.env.NEXT_APP_API_URL + "order/create?api_key=" + get_next_key;

      const response = await axios.post(url, orderData, {
        headers: {
          "Content-Type": "application/json",
          web_site_url: get_next_url,
        },
      });

      console.log(response);
      return response;
    } catch (error) {
      console.log("error: ", error);
      throw error.message;
    }
  };

  static PaymentInitial = (paymentdata, setalertVerify) => {
    console.log("paymentdata", paymentdata);

    const options = {
      key: paymentdata.razorpay_key_id,
      amount: paymentdata.amount,
      name: paymentdata.product_name,
      description: "X - Transaction",
      image: window.location.origin + paymentdata.img,
      order_id: paymentdata.id,
      notes: { merchant_order_id: "SGI-" + paymentdata.OrderId },
      prefill: {
        name: paymentdata.customer_name,
        email: paymentdata.customer_email,
        contact: paymentdata.customer_phone,
      },
      handler: async (response) => {
        response["receipt"] = paymentdata.receipt;

        try {
          const { get_next_url, get_next_key } = handleCheckApiKey();

          const { data } = await axios.post(
            `${process.env.NEXT_APP_API_URL}order/verify?api_key=${get_next_key}`,
            response,
            { headers: { web_site_url: get_next_url } }
          );
          console.log("data: ", data);

          if (data.message === "Payment verified successfully") {
            console.log(
              "${process.env.NEXT: ",
              `${process.env.NEXT_APP_URL}/order-status?orderId=${paymentdata?.OrderId}`
            );
            //  setalertVerify((e) => ({ open: true, message: "Payment Success" }))

            return (window.location.href = `${process.env.NEXT_APP_URL}/order-status?orderId=${paymentdata?.OrderId}`);

            // return alert( `${process.env.NEXT_APP_URL}/order-status?orderId=${paymentdata?.OrderId}`)
          } else {
            // return setalertVerify((e) => ({ open: true, message: "Payment Failed" }))
            return alert("PAYMENT FAILED");
          }
        } catch (error) {
          console.log("error: ", error);
          // return setalertVerify((e) => ({ open: true, message: "Something Went Wrong" }))
          return alert("PAYMENT CATCH FAILED");
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      options.handler(response);
    });
    rzp1.open();
  };
}

//this function used to checkapi before the order create

export const handleCheckApiKey = () => {
  let get_next_url = "";
  let get_next_key = "";

  const apicheck = localStorage.getItem("PATH_KEY");

  console.log(apicheck);

  if (!apicheck) {
    get_next_url = process.env.NEXT_APP_URL;
    get_next_key = process.env.NEXT_APP_API_KEY;
  } else {
    switch (apicheck) {
      case "/":
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
        break;

      case "/hfo":
        get_next_url = process.env.NEXT_APP_URL_HFO;
        get_next_key = process.env.NEXT_APP_API_KEY_HFO;
        break;

      case "/hfu":
        get_next_url = process.env.NEXT_APP_URL_HFU;
        get_next_key = process.env.NEXT_APP_API_KEY_HFU;
        break;

      case "/hfd":
        get_next_url = process.env.NEXT_APP_URL_HFD;
        get_next_key = process.env.NEXT_APP_API_KEY_HFD;
        break;

      case "/hfq":
        get_next_url = process.env.NEXT_APP_URL_HFQ;
        get_next_key = process.env.NEXT_APP_API_KEY_HFQ;
        break;

      case "/hflip":
        get_next_url = process.env.NEXT_APP_URL_HFLIP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFLIP;
        break;

      case "/hfkt":
        get_next_url = process.env.NEXT_APP_URL_HFKT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKT;
        break;

      case "/hfkrt":
        get_next_url = process.env.NEXT_APP_URL_HFKRT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKRT;
        break;

      case "/hfkart":
        get_next_url = process.env.NEXT_APP_URL_HFKART;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKART;
        break;

      case "/hkart":
        get_next_url = process.env.NEXT_APP_URL_HKART;
        get_next_key = process.env.NEXT_APP_API_KEY_HKART;
        break;

      case "/hfb":
        get_next_url = process.env.NEXT_APP_URL_HFB;
        get_next_key = process.env.NEXT_APP_API_KEY_HFB;
        break;

      case "/hfs":
        get_next_url = process.env.NEXT_APP_URL_HFS;
        get_next_key = process.env.NEXT_APP_API_KEY_HFS;
        break;

      //---------------------------------------

      case "/ahf":
        get_next_url = process.env.NEXT_APP_URL_AHF;
        get_next_key = process.env.NEXT_APP_API_KEY_AHF;
        break;

      case "/ahfkt":
        get_next_url = process.env.NEXT_APP_URL_AHFKT;
        get_next_key = process.env.NEXT_APP_API_KEY_AHFKT;
        break;

      case "/bhf":
        get_next_url = process.env.NEXT_APP_URL_BHF;
        get_next_key = process.env.NEXT_APP_API_KEY_BHF;
        break;

      case "/bhfkt":
        get_next_url = process.env.NEXT_APP_URL_BHFKT;
        get_next_key = process.env.NEXT_APP_API_KEY_BHFKT;
        break;

      case "/hfn":
        get_next_url = process.env.NEXT_APP_URL_HFN;
        get_next_key = process.env.NEXT_APP_API_KEY_HFN;
        break;

      case "/hft":
        get_next_url = process.env.NEXT_APP_URL_HFT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT;
        break;

      case "/hfh":
        get_next_url = process.env.NEXT_APP_URL_HFH;
        get_next_key = process.env.NEXT_APP_API_KEY_HFH;
        break;

      //-----------------------------------------------------------------------------------

      case "/hfy":
        get_next_url = process.env.NEXT_APP_URL_HFY;
        get_next_key = process.env.NEXT_APP_API_KEY_HFY;
        break;

      case "/hfa":
        get_next_url = process.env.NEXT_APP_URL_HFA;
        get_next_key = process.env.NEXT_APP_API_KEY_HFA;
        break;

      case "/hfp":
        get_next_url = process.env.NEXT_APP_URL_HFP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFP;
        break;

      case "/hfp":
        get_next_url = process.env.NEXT_APP_URL_HFP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFP;
        break;

      case "/hfv":
        get_next_url = process.env.NEXT_APP_URL_HFV;
        get_next_key = process.env.NEXT_APP_API_KEY_HFV;
        break;

      case "/hfw":
        get_next_url = process.env.NEXT_APP_URL_HFW;
        get_next_key = process.env.NEXT_APP_API_KEY_HFW;
        break;

      case "/hfx":
        get_next_url = process.env.NEXT_APP_URL_HFX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFX;
        break;

      case "/hfkrt":
        get_next_url = process.env.NEXT_APP_URL_HFKRT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKRT;
        break;

      case "/hfkart":
        get_next_url = process.env.NEXT_APP_URL_HFKART;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKART;
        break;

      case "/hflip":
        get_next_url = process.env.NEXT_APP_URL_HFLIP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFLIP;
        break;

      case "/hfp":
        get_next_url = process.env.NEXT_APP_URL_HFP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFP;
        break;

      case "/hfm":
        get_next_url = process.env.NEXT_APP_URL_HFM;
        get_next_key = process.env.NEXT_APP_API_KEY_HFM;
        break;

      case "/cjhf":
        get_next_url = process.env.NEXT_APP_URL_CJHF;
        get_next_key = process.env.NEXT_APP_API_KEY_CJHF;
        break;

      // HF69H

      case "/hfsnh":
        get_next_url = process.env.NEXT_APP_URL_HFSNH;
        get_next_key = process.env.NEXT_APP_API_KEY_HFSNH;
        break;
      // hftbeta

      case "/hftbet":
        get_next_url = process.env.NEXT_APP_URL_HFTBET;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTBET;
        break;

      // hftdelta

      case "/hftdelta":
        get_next_url = process.env.NEXT_APP_URL_HFTDELTA;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTDELTA;
        break;

      case "/hft36sin":
        get_next_url = process.env.NEXT_APP_URL_HFT36SIN;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT36SIN;
        break;

      case "/hft71e":
        get_next_url = process.env.NEXT_APP_URL_HFT71E;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT71E;
        break;

      case "/hfncw":
        get_next_url = process.env.NEXT_APP_URL_HFNCW;
        get_next_key = process.env.NEXT_APP_API_KEY_HFNCW;
        break;

      case "/hfncf":
        get_next_url = process.env.NEXT_APP_URL_HFNCF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFNCF;
        break;

      case "/hftsx":
        get_next_url = process.env.NEXT_APP_URL_HFTSX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTSX;
        break;

      case "/hfrush":
        get_next_url = process.env.NEXT_APP_URL_HFRUSH;
        get_next_key = process.env.NEXT_APP_API_KEY_HFRUSH;
        break;

      case "/hfstar":
        get_next_url = process.env.NEXT_APP_URL_HFSTAR;
        get_next_key = process.env.NEXT_APP_API_KEY_HFSTAR;
        break;

      case "/hfjsx":
        get_next_url = process.env.NEXT_APP_URL_HFJSX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFJSX;
        break;

      case "/hfbulge":
        get_next_url = process.env.NEXT_APP_URL_HFBULGE;
        get_next_key = process.env.NEXT_APP_API_KEY_HFBULGE;
        break;

      // HFT143

      case "/hft143":
        get_next_url = process.env.NEXT_APP_URL_HFT143;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT143;
        break;

      case "/hftreal":
        get_next_url = process.env.NEXT_APP_URL_HFTREAL;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTREAL;
        break;

      case "/hftlh6":
        get_next_url = process.env.NEXT_APP_URL_HFTLH6;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTLH6;
        break;

      case "/hftcu469":
        get_next_url = process.env.NEXT_APP_URL_HFTCU469;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTCU469;
        break;

      case "/hftoral69":
        get_next_url = process.env.NEXT_APP_URL_HFTORAL69;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTORAL69;
        break;

      case "/hfrx":
        get_next_url = process.env.NEXT_APP_URL_HFRX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFRX;
        break;

      case "/hftrci":
        get_next_url = process.env.NEXT_APP_URL_HFTRCI;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRCI;
        break;

      case "/hfrtab":
        get_next_url = process.env.NEXT_APP_URL_HFRTAB;
        get_next_key = process.env.NEXT_APP_API_KEY_HFRTAB;
        break;

      case "/hftbng":
        get_next_url = process.env.NEXT_APP_URL_HFTBNG;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTBNG;
        break;

      case "/hftbngf":
        get_next_url = process.env.NEXT_APP_URL_HFTBNGF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTBNGF;
        break;

      case "/hftpro":
        get_next_url = process.env.NEXT_APP_URL_HFTPRO;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTPRO;
        break;

      case "/hfxyc":
        get_next_url = process.env.NEXT_APP_URL_HFXYC;
        get_next_key = process.env.NEXT_APP_API_KEY_HFXYC;
        break;

      case "/hfsxy":
        get_next_url = process.env.NEXT_APP_URL_HFSXY;
        get_next_key = process.env.NEXT_APP_API_KEY_HFSXY;
        break;

      case "/hftraz":
        get_next_url = process.env.NEXT_APP_URL_HFTRAZ;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRAZ;
        break;

      case "/hfrht":
        get_next_url = process.env.NEXT_APP_URL_HFRHT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFRHT;
        break;

      default:
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
        break;
    }
  }

  return { get_next_url, get_next_key };
};
