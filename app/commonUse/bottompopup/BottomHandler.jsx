"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";

const BottomPopupCall = dynamic(() => import("./bottomPopupCall"), {
  loading: () => <p>loading</p>,
});

const BottomPopupForm = dynamic(() => import("./bottomPopupForm"), {
  loading: () => <p>loading</p>,
});

const BottomHandler = () => {
  const { GetCallSetting, FetchWebCheckout, callDetail, sc } =
    useGlobalContext();

  const [Ap, setAp] = useState({ api: "", key: "" });

  function checkcall() {
    let checkcolumn = localStorage.getItem("PATH_KEY");

    switch (checkcolumn) {
      case "/":
        return setAp({
          api: process.env.NEXT_APP_URL,
          key: process.env.NEXT_APP_API_KEY,
        });

      case "/hfo":
        return setAp({
          api: process.env.NEXT_APP_URL_HFO,
          key: process.env.NEXT_APP_API_KEY_HFO,
        });

      case "/hfu":
        return setAp({
          api: process.env.NEXT_APP_URL_HFU,
          key: process.env.NEXT_APP_API_KEY_HFU,
        });

      case "/hfd":
        return setAp({
          api: process.env.NEXT_APP_URL_HFD,
          key: process.env.NEXT_APP_API_KEY_HFD,
        });

      case "/hflip":
        return setAp({
          api: process.env.NEXT_APP_URL_HFLIP,
          key: process.env.NEXT_APP_API_KEY_HFLIP,
        });

      case "/hfq":
        return setAp({
          api: process.env.NEXT_APP_URL_HFQ,
          key: process.env.NEXT_APP_API_KEY_HFQ,
        });

      case "/hfkrt":
        return setAp({
          api: process.env.NEXT_APP_URL_HFKRT,
          key: process.env.NEXT_APP_API_KEY_HFKRT,
        });

      case "/hfkt":
        return setAp({
          api: process.env.NEXT_APP_URL_HFKT,
          key: process.env.NEXT_APP_API_KEY_HFKT,
        });

      case "/hfkart":
        return setAp({
          api: process.env.NEXT_APP_URL_HFKART,
          key: process.env.NEXT_APP_API_KEY_HFKART,
        });

      case "/hkart":
        return setAp({
          api: process.env.NEXT_APP_URL_HKART,
          key: process.env.NEXT_APP_API_KEY_HKART,
        });

      case "/hfb":
        return setAp({
          api: process.env.NEXT_APP_URL_HFB,
          key: process.env.NEXT_APP_API_KEY_HFB,
        });

      case "/hfs":
        return setAp({
          api: process.env.NEXT_APP_URL_HFS,
          key: process.env.NEXT_APP_API_KEY_HFS,
        });

      // ---------------------------------------------------------------------------------

      case "/ahf":
        return setAp({
          api: process.env.NEXT_APP_URL_AHF,
          key: process.env.NEXT_APP_API_KEY_AHF,
        });

      case "/ahfkt":
        return setAp({
          api: process.env.NEXT_APP_URL_AHFKT,
          key: process.env.NEXT_APP_API_KEY_AHFKT,
        });

      case "/bhf":
        return setAp({
          api: process.env.NEXT_APP_URL_BHF,
          key: process.env.NEXT_APP_API_KEY_BHF,
        });

      case "/bhfkt":
        return setAp({
          api: process.env.NEXT_APP_URL_BHFKT,
          key: process.env.NEXT_APP_API_KEY_BHFKT,
        });

      case "/hfn":
        return setAp({
          api: process.env.NEXT_APP_URL_HFN,
          key: process.env.NEXT_APP_API_KEY_HFN,
        });

      case "/hfh":
        return setAp({
          api: process.env.NEXT_APP_URL_HFH,
          key: process.env.NEXT_APP_API_KEY_HFH,
        });

      case "/hft":
        return setAp({
          api: process.env.NEXT_APP_URL_HFT,
          key: process.env.NEXT_APP_API_KEY_HFT,
        });

      //------------------------------------------------------------------------------

      case "/hfy":
        return setAp({
          api: process.env.NEXT_APP_URL_HFY,
          key: process.env.NEXT_APP_API_KEY_HFY,
        });

      case "/hfa":
        return setAp({
          api: process.env.NEXT_APP_URL_HFA,
          key: process.env.NEXT_APP_API_KEY_HFA,
        });

      case "/hfp":
        return setAp({
          api: process.env.NEXT_APP_URL_HFP,
          key: process.env.NEXT_APP_API_KEY_HFP,
        });

      case "/hfv":
        return setAp({
          api: process.env.NEXT_APP_URL_HFV,
          key: process.env.NEXT_APP_API_KEY_HFV,
        });

      case "/hfw":
        return setAp({
          api: process.env.NEXT_APP_URL_HFW,
          key: process.env.NEXT_APP_API_KEY_HFW,
        });

      case "/hfx":
        return setAp({
          api: process.env.NEXT_APP_URL_HFX,
          key: process.env.NEXT_APP_API_KEY_HFX,
        });

      case "/hfkrt":
        return setAp({
          api: process.env.NEXT_APP_URL_HFKRT,
          key: process.env.NEXT_APP_API_KEY_HFKRT,
        });

      case "/hfkart":
        return setAp({
          api: process.env.NEXT_APP_URL_HFKART,
          key: process.env.NEXT_APP_API_KEY_HFKART,
        });

      case "/hflip":
        return setAp({
          api: process.env.NEXT_APP_URL_HFLIP,
          key: process.env.NEXT_APP_API_KEY_HFLIP,
        });

      case "/hfp":
        return setAp({
          api: process.env.NEXT_APP_URL_HFP,
          key: process.env.NEXT_APP_API_KEY_HFP,
        });

      case "/hfm":
        return setAp({
          api: process.env.NEXT_APP_URL_HFM,
          key: process.env.NEXT_APP_API_KEY_HFM,
        });

      case "/cjhf":
        return setAp({
          api: process.env.NEXT_APP_URL_CJHF,
          key: process.env.NEXT_APP_API_KEY_CJHF,
        });

      case "/hfsnh":
        return setAp({
          api: process.env.NEXT_APP_URL_HFSNH,
          key: process.env.NEXT_APP_API_KEY_HFSNH,
        });

      // HFCBETA

      case "/hftbet":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTBET,
          key: process.env.NEXT_APP_API_KEY_HFTBET,
        });

      // HFTDELTA

      case "/hftdelta":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTDELTA,
          key: process.env.NEXT_APP_API_KEY_HFTDELTA,
        });

      case "/hft36sin":
        return setAp({
          api: process.env.NEXT_APP_URL_HFT36SIN,
          key: process.env.NEXT_APP_API_KEY_HFT36SIN,
        });

      case "/hft71e":
        return setAp({
          api: process.env.NEXT_APP_URL_HFT71E,
          key: process.env.NEXT_APP_API_KEY_HFT71E,
        });

      case "/hfncw":
        return setAp({
          api: process.env.NEXT_APP_URL_HFNCW,
          key: process.env.NEXT_APP_API_KEY_HFNCW,
        });

      case "/hfncf":
        return setAp({
          api: process.env.NEXT_APP_URL_HFNCF,
          key: process.env.NEXT_APP_API_KEY_HFNCF,
        });

      case "/hftsx":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTSX,
          key: process.env.NEXT_APP_API_KEY_HFTSX,
        });

      case "/hfrush":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRUSH,
          key: process.env.NEXT_APP_API_KEY_HFRUSH,
        });

      case "/hfstar":
        return setAp({
          api: process.env.NEXT_APP_URL_HFSTAR,
          key: process.env.NEXT_APP_API_KEY_HFSTAR,
        });

      case "/hfjsx":
        return setAp({
          api: process.env.NEXT_APP_URL_HFJSX,
          key: process.env.NEXT_APP_API_KEY_HFJSX,
        });

      case "/hfbulge":
        return setAp({
          api: process.env.NEXT_APP_URL_HFBULGE,
          key: process.env.NEXT_APP_API_KEY_HFBULGE,
        });

      case "/hft143":
        return setAp({
          api: process.env.NEXT_APP_URL_HFT143,
          key: process.env.NEXT_APP_API_KEY_HFT143,
        });

      case "/hftreal":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTREAL,
          key: process.env.NEXT_APP_API_KEY_HFTREAL,
        });

      case "/hftlh6":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTLH6,
          key: process.env.NEXT_APP_API_KEY_HFTLH6,
        });

      case "/hftcu469":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTCU469,
          key: process.env.NEXT_APP_API_KEY_HFTCU469,
        });

      case "/hftoral69":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTORAL69,
          key: process.env.NEXT_APP_API_KEY_HFTORAL69,
        });

      case "/hfrx":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRX,
          key: process.env.NEXT_APP_API_KEY_HFRX,
        });

      case "/hftrci":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTRCI,
          key: process.env.NEXT_APP_API_KEY_HFTRCI,
        });

      case "/hfrtab":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRTAB,
          key: process.env.NEXT_APP_API_KEY_HFRTAB,
        });

      case "/hftbng":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTBNG,
          key: process.env.NEXT_APP_API_KEY_HFTBNG,
        });

      case "/hftbngf":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTBNGF,
          key: process.env.NEXT_APP_API_KEY_HFTBNGF,
        });

      case "/hftpro":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTPRO,
          key: process.env.NEXT_APP_API_KEY_HFTPRO,
        });

      // HFXYC

      case "/hfxyc":
        return setAp({
          api: process.env.NEXT_APP_URL_HFXYC,
          key: process.env.NEXT_APP_API_KEY_HFXYC,
        });

      case "/hfsxy":
        return setAp({
          api: process.env.NEXT_APP_URL_HFSXY,
          key: process.env.NEXT_APP_API_KEY_HFSXY,
        });

      case "/hftraz":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTRAZ,
          key: process.env.NEXT_APP_API_KEY_HFTRAZ,
        });

      case "/hfrht":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRHT,
          key: process.env.NEXT_APP_API_KEY_HFRHT,
        });


      case "/hfrai":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRAI,
          key: process.env.NEXT_APP_API_KEY_HFRAI,
        });

      // hftafc


      case "/hftafc":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTAFC,
          key: process.env.NEXT_APP_API_KEY_HFTAFC,
        });


      // HFTJNT



      case "/hftjnt":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTJNT,
          key: process.env.NEXT_APP_API_KEY_HFTJNT,
        });


      case "/hftnxt":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTNXT,
          key: process.env.NEXT_APP_API_KEY_HFTNXT
        });


      case "/hftvht":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTVHT,
          key: process.env.NEXT_APP_API_KEY_HFTVHT
        });



      case "/hftv":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTV,
          key: process.env.NEXT_APP_API_KEY_HFTV
        });



      case "/hfreng":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRENG,
          key: process.env.NEXT_APP_API_KEY_HFRENG
        });


      case "/hfrg":
        return setAp({
          api: process.env.NEXT_APP_URL_HFRG,
          key: process.env.NEXT_APP_API_KEY_HFRG
        });


      case "/hftsz":
        return setAp({
          api: process.env.NEXT_APP_URL_HFTSZ,
          key: process.env.NEXT_APP_API_KEY_HFTSZ
        });


      default:
        return setAp({
          api: process.env.NEXT_APP_URL,
          key: process.env.NEXT_APP_API_KEY,
        });
    }
  }

  useEffect(() => {
    checkcall();
  }, []);

  useMemo(() => {
    if (Ap.api && Ap.key) {
      GetCallSetting(Ap.key);
      FetchWebCheckout(Ap.key, Ap.api);
    }
  }, [Ap]);

  return (
    <div
      className={`w-full block sm:hidden ${sc > 50 ? "tt" : "xx"
        } fixed z-[10000] text-white`}
    >
      {callDetail.callStatus ? <BottomPopupCall /> : <BottomPopupForm />}
    </div>
  );
};

export default BottomHandler;
