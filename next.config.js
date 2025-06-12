/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {


        NEXT_APP_API_URL: 'https://api.brahmikalp.com/api/',

        // NEXT_APP_API_URL_SHOPIFY: "https://shopifyapi.plantifygarden.in",
        NEXT_APP_API_URL_SHOPIFY: "https://webapi.brahmikalp.com",



        SHOPIFY_GENERATE_TOKEN:
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9waWZ5YWNjZXNzdG9rZW4iOiJzaHBhdF8wMDg2MGQ3ZDg5YjlhM2NhOTExMmI3MGQ3MGJmNWZmZiIsInNob3BpZnl1cmwiOiJodHRwczovLzZlMTJmNy04ZS5teXNob3BpZnkuY29tIiwiaWF0IjoxNzI1NTI5Mjc3fQ.F098pecX4aU-4jqgrszxR5gU7ac2eCAbxVoBX_xZCB_6qW5G0tHGhOgJPLzYu8J757DJtFEsA6iP90XJ4zMHnSAAJ8Uww2PUqBs3TgruHLHQNORkw78aEjAHN9EEDPg5A9tQlJXcyv7N7ws0u1A5rgNyeJZ8jmi_3t4raPVQi_GjkXW1UVu9WFpc131OWMr0N75fU4yFo5OH6N_vWHzO657tDFzo18lLiLa82_4ZUBaIEWk6JO4KhniIbSaNeTM1XJoYHz6CEyAV9gxnTHKqw2SBHsyTWwgK-gTqDQ895pVWaJQ55E0zJfAI5yeI3WPG0gOijHi1exUFEpSHwA_Sow",





        // https://horsefirereal.com/hftnxteg


        //main env
        NEXT_APP_URL: 'https://horsefirereal.com',
        NEXT_APP_API_KEY: 'FRpFWKZVZKCbjKXDDaxOsnulOhQJoFhcyjCyGJkokZbziYUxAJ',


        NEXT_APP_URL_HFTNXTEG: 'https://horsefirereal.com/hftnxteg',
        NEXT_APP_API_KEY_HFTNXTEG: 'CxMMFuCUjwJvnduzLMetIcBEbHpNMxRpVwdxCHbHTiKSwaocGK',


        NEXT_APP_URL_AHF: 'https://horsefirereal.com/ahf',
        NEXT_APP_API_KEY_AHF: 'iuOKTWEIZMXSpsbkeuNzJZHHmYvOSNjjYZQNQpjTvsszQwShsN',

        NEXT_APP_URL_AHFKT: 'https://horsefirereal.com/ahfkt',
        NEXT_APP_API_KEY_AHFKT: 'ZdZOuySMWVioHTxNjFfdVNJRxydPMJbCQbfnQyMOUtcjTwXimp',

        NEXT_APP_URL_BHF: 'https://horsefirereal.com/bhf',
        NEXT_APP_API_KEY_BHF: 'hzneKHBjqbAoiybFfClFswgbDlEoHjosXthdFcREjObsNvxmge',

        NEXT_APP_URL_BHFKT: 'https://horsefirereal.com/bhfkt',
        NEXT_APP_API_KEY_BHFKT: 'qpyFnbuDVmkaAsFfKZaxmDqGBRMaqoroMHEnSRHXWwnucCEapk',

        NEXT_APP_URL_HFN: 'https://horsefirereal.com/hfn',
        NEXT_APP_API_KEY_HFN: 'wgXvWegpLYTujLKHoiMDrSHTqSPDwUvNYxbMpflJdBZXivEIBo',

        NEXT_APP_URL_HFT: 'https://horsefirereal.com/hft',
        NEXT_APP_API_KEY_HFT: 'scjrBRCPeqQxDLNANIBaKVscqSNcQQonZpgggxVtiPyPAINTOr',

        NEXT_APP_URL_HFH: 'https://horsefirereal.com/hfh',
        NEXT_APP_API_KEY_HFH: 'eJSasjdhYwkVcRrurxOChdKRZqKigdRTJShSUhjPzpmqoHANUY',

        //-------------------------------------------------
        NEXT_APP_URL_HFY: 'https://horsefirereal.com/hfy',
        NEXT_APP_API_KEY_HFY: 'NUTGdxMakQiXRBbMUKIENVVbnHgEaCoICPhyrQKVBApajBCCtI',

        NEXT_APP_URL_HFA: 'https://horsefirereal.com/hfa',
        NEXT_APP_API_KEY_HFA: 'xjXBRIXSiNGvDYmnWfOULYiJRYisFaTPDTotcKqpMfZVXzLSCv',

        NEXT_APP_URL_HFP: 'https://horsefirereal.com/hfp',
        NEXT_APP_API_KEY_HFP: 'WvaCygkuSaRXhKiJTzNmfxclwNkzPBQHQPQEiMkmRBnCTDIKiZ',

        NEXT_APP_URL_HFV: 'https://horsefirereal.com/hfv',
        NEXT_APP_API_KEY_HFV: 'byYyhCSRQKmyLXlsgsDcpElYQzyLsitXkJNDJQRokFScioGWTc',

        NEXT_APP_URL_HFW: 'https://horsefirereal.com/hfw',
        NEXT_APP_API_KEY_HFW: 'quBWZviaPqaRXAUrrQygIplXOqECaAxDpBBBuGQCmVNZuOznXW',

        NEXT_APP_URL_HFX: 'https://horsefirereal.com/hfx',
        NEXT_APP_API_KEY_HFX: 'MZKDxtxDKRNSQlABknAGFOcKmsaIdrgdrMJmEkFgIwuhuHNbqb',

        NEXT_APP_URL_HFKRT: 'https://horsefirereal.com/hfkrt',
        NEXT_APP_API_KEY_HFKRT: 'VrMegQpOigjSUokiExDxfJQcdJqprurfJruyPDDAzSqJVakrLI',

        NEXT_APP_URL_HFKART: 'https://horsefirereal.com/hfkart',
        NEXT_APP_API_KEY_HFKART: 'kSBGIGKEXMRTkgGAxjmWXEQJrFNEcEqLBOVVQhAesDSWqxMWBO',

        NEXT_APP_URL_HFLIP: 'https://horsefirereal.com/hflip',
        NEXT_APP_API_KEY_HFLIP: 'WSlfTqQTftTnvRbjIYjPlHbKZiTErmEcdvZyRgkjFLeLrMxJBL',

        // NEXT_APP_URL_HFP: 'https://horsefirereal.com/hfp',
        // NEXT_APP_API_KEY_HFP: 'PrRrnzLYEAzHSfNzhFvxkmExbXjsHyZtEMgzWGsHjIZjXkbERm',

        NEXT_APP_URL_HFM: 'https://horsefirereal.com/hfm',
        NEXT_APP_API_KEY_HFM: 'pCVKEWUnblFGoLQVQaSnGsoyaifVzRwgVyASOMtUcvZiZbjxMq',

        NEXT_APP_URL_CJHF: 'https://horsefirereal.com/cjhf',
        NEXT_APP_API_KEY_CJHF: 'JaullQIhWmliahxQmwWiZDDPlFLfyZaTZHivMjXCKUcltRpAoP',

        NEXT_APP_URL_HFSNH: 'https://horsefirereal.com/hfsnh',
        NEXT_APP_API_KEY_HFSNH: 'NwEHKNFnlstUGncFvLjetWGuozAAIgQeHfuEhzAgGbeIMKCIzH',

        NEXT_APP_URL_HFTBET: 'https://horsefirereal.com/hftbet',
        NEXT_APP_API_KEY_HFTBET: 'TqhyuNqDPzaIOpnoyVNxKLdRjtMXXPHtHRMvYTlRuseDpPpwIQ',

        NEXT_APP_URL_HFTDELTA: 'https://horsefirereal.com/hftdelta',
        NEXT_APP_API_KEY_HFTDELTA: 'ugXcBUjpCoxPNWoyhWIQrNokTWCPTrxsZcpaVJIeZCpPbCdxlo',

        NEXT_APP_URL_HFT71E: 'https://horsefirereal.com/hft71e',
        NEXT_APP_API_KEY_HFT71E: 'yRHxNktdnLWIlQxzDxcAaRRNRmmiGQMStRCChkhlXymYJmFeLd',

        NEXT_APP_URL_HFT36SIN: 'https://horsefirereal.com/hft36sin',
        NEXT_APP_API_KEY_HFT36SIN: 'GvQcooHjIXynfzytLvzJybkgUbEQkEqTiZxUbxkjobGvJXMtJd',

        NEXT_APP_URL_HFNCF: 'https://horsefirereal.com/hfncf',
        NEXT_APP_API_KEY_HFNCF: 'XhLBrvBxfTKBZVsMAlUQJAlXjylahXNgxGFkkpOQmWPOJfeGzQ',

        NEXT_APP_URL_HFNCW: 'https://horsefirereal.com/hfncw',
        NEXT_APP_API_KEY_HFNCW: 'bHdkACZXAYcxjdJzuMnTUBCLTvmfnGsmTYcJtaRXeHuwgKiRll',

        NEXT_APP_URL_HFTSX: 'https://horsefirereal.com/hftsx',
        NEXT_APP_API_KEY_HFTSX: 'EniEQjnWTHFXSQsLoscwKIJGmxhCktlpXUvtjbKcxeBCUSCZmi',

        NEXT_APP_URL_HFRUSH: 'https://horsefirereal.com/hfrush',
        NEXT_APP_API_KEY_HFRUSH: 'JksIUBEKTiJdAaEKEvzIBxSLXNSNmKHJWnyWuRPNzuSmuSVaTS',

        NEXT_APP_URL_HFSTAR: 'https://horsefirereal.com/hfstar',
        NEXT_APP_API_KEY_HFSTAR: 'daKuOPpGxcqFxqbqZEkHJUcJzycCuQunrJlxIUfaSbmvFZuqEU',

        NEXT_APP_URL_HFJSX: 'https://horsefirereal.com/hfjsx',
        NEXT_APP_API_KEY_HFJSX: 'uniKhkNSZBVazcoAFQRoAXrEZhpifBRcxzrVelSAuXCBkUPxXH',

        NEXT_APP_URL_HFBULGE: 'https://horsefirereal.com/hfbulge',
        NEXT_APP_API_KEY_HFBULGE: 'KJteXtOyCbcJqaIrWEBqYUAnsqhtAGOKGLlvdAvIFItaEPUiCf',

        NEXT_APP_URL_HFT143: 'https://horsefirereal.com/hft143',
        NEXT_APP_API_KEY_HFT143: 'SYKrZdzGFvoXITnpbhLWkyNCgQqGTnXwCRRzPELkWwWKxCiMVG',

        NEXT_APP_URL_HFTREAL: 'https://horsefirereal.com/hftreal',
        NEXT_APP_API_KEY_HFTREAL: 'dbBkEPENLCMzxkcHsyfJdrXTFatfoCbrlXrtuVONiFrdKKGHkA',

        NEXT_APP_URL_HFTLH6: 'https://horsefirereal.com/hftlh6',
        NEXT_APP_API_KEY_HFTLH6: 'SMznZUtNFKzqAhofAGYfJkWjKMHbaliBwLAxRHtClCEpwrMNCM',

        NEXT_APP_URL_HFTCU469: 'https://horsefirereal.com/hftcu469',
        NEXT_APP_API_KEY_HFTCU469: 'fjvLACinVdcPjmRSDSjxpwZLytfAXIGWvAMUkjUeRCorXSEyZv',

        NEXT_APP_URL_HFTORAL69: 'https://horsefirereal.com/hftoral69',
        NEXT_APP_API_KEY_HFTORAL69: 'JCvcPYokPRUFxQLgiKpjcFgIZPBNAAuwYHCPnOiSdaaMZsumCq',

        NEXT_APP_URL_HFRX: 'https://horsefirereal.com/hfrx',
        NEXT_APP_API_KEY_HFRX: 'dQuWaFUCgXjAwDCynkhvsGMlDkkLaXMNFRMaFRRpAbVhiVqRHY',

        NEXT_APP_URL_HFTRCI: 'https://horsefirereal.com/hftrci',
        NEXT_APP_API_KEY_HFTRCI: 'ZygJUHjfIciLcmxGUYLWvSLAoYNfKJLgZetKkxJRtDnfpAEPOz',

        NEXT_APP_URL_HFRTAB: 'https://horsefirereal.com/hfrtab',
        NEXT_APP_API_KEY_HFRTAB: 'ybkVOlxIqZLNgbzIlhzdtzJjfyFpPPjVicVYvnvKFfwjhYhVjT',

        NEXT_APP_URL_HFTBNG: 'https://horsefirereal.com/hftbng',
        NEXT_APP_API_KEY_HFTBNG: 'AXkgeolFnbddyOmkiftkjlcJkQrsFpSKFBNYNCKhPSWnYobKqL',

        NEXT_APP_URL_HFTBNGF: 'https://horsefirereal.com/hftbngf',
        NEXT_APP_API_KEY_HFTBNGF: 'aZFqJAAURfMcKCLzCnAHPlICGGdCYeYNXBDHDEKhtzWVeanmLv',

        NEXT_APP_URL_HFTPRO: 'https://horsefirereal.com/hftpro',
        NEXT_APP_API_KEY_HFTPRO: 'WmRlmHnvYGUApBYVmSrKzyiRJEYLufVCpUeknOVDMQRrroIerT',

        NEXT_APP_URL_HFXYC: 'https://horsefirereal.com/hfxyc',
        NEXT_APP_API_KEY_HFXYC: 'mSoSdLojFAtxvzCXMJIvVZMWLqBVDrVZBsrSxAJZRwYhIBPEZm',

        NEXT_APP_URL_HFSXY: 'https://horsefirereal.com/hfsxy',
        NEXT_APP_API_KEY_HFSXY: 'YaCEmtEBKpldEgCUFRHtjqeIqcNtRpwFMgHbSXoszFSqZrCvXh',


        NEXT_APP_URL_HFTRAZ: 'https://horsefirereal.com/hftraz',
        NEXT_APP_API_KEY_HFTRAZ: 'DEFGpyYNgLsGhdkkcfeVwsIkqynaNYACuyNqLAFMBWWZmHmEnC',


        NEXT_APP_URL_HFRHT: 'https://horsefirereal.com/hfrht',
        NEXT_APP_API_KEY_HFRHT: 'AdaVWBFtpRaKYrBNbybvXiUjveNpAKfYLqLDUwOCvOSpxasLWt',

        NEXT_APP_URL_HFRAI: 'https://horsefirereal.com/hfrai',
        NEXT_APP_API_KEY_HFRAI: 'XTZdgKPOtppgyijCgVXOORMNUvHiPexFxcdTSnJaKOvCuQkXfY',


        NEXT_APP_URL_HFTAFC: 'https://horsefirereal.com/hftafc',
        NEXT_APP_API_KEY_HFTAFC: 'tuBsswBXgvLsGylYpLmkoMTenXwaclZozAGIbTaDjWLXzEtTBg',

        // https://horsefirereal.com/hftjnt
        NEXT_APP_URL_HFO: 'https://horsefirereal.com/hfo',
        NEXT_APP_API_KEY_HFO: 'UMywqUduhITkghEiAvpXDtrLpFlZWxwRDZVrQcouEwSDWnghhd',


        NEXT_APP_URL_HFTJNT: 'https://horsefirereal.com/hftjnt',
        NEXT_APP_API_KEY_HFTJNT: 'EyDJlNLQpwbehLXITqjLywlAhCYNKXgRNElVgmIdFYzBZrgvmo',

        NEXT_APP_URL_HFTNXT: 'https://horsefirereal.com/hftnxt',
        NEXT_APP_API_KEY_HFTNXT: 'ZeQRFMSoraYhtoanEblMnyWQOqjymNhWHLbBNagJDAOImmUUXA',

        NEXT_APP_URL_HFTVHT: 'https://horsefirereal.com/hftvht',
        NEXT_APP_API_KEY_HFTVHT: 'OfhjPicxVXhCBgFeHzzIzxSFhdVqDXypAjOvjNMuJKmzPRmRFc',


        NEXT_APP_URL_HFTV: 'https://horsefirereal.com/hftv',
        NEXT_APP_API_KEY_HFTV: 'vHYVklsbLUHIXDNVAkTWziXVgJMfXJJMlloIgLztmeiBTvHAVd',

        NEXT_APP_URL_HFRENG: 'https://horsefirereal.com/hfreng',
        NEXT_APP_API_KEY_HFRENG: 'QtxpAlobwewRAnVMjzLYdmEmTKpkXWeLVtVjJpuCBPXQHJJfdu',

        NEXT_APP_URL_HFRG: 'https://horsefirereal.com/hfrg',
        NEXT_APP_API_KEY_HFRG: 'xIXxyqkSubEoxkwTMXZjHuaLiKWWLKkkqABTyuvdhzQqkRfDbJ',

        
        NEXT_APP_URL_HFTSZ: 'https://horsefirereal.com/hftsz',
        NEXT_APP_API_KEY_HFTSZ: 'aAsiYeglUXWsJkzACbSqDKkTClKAcWsDFrgxijnTeYWqKfpqcC',

        

    },
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP'],
        optimizeCss: true

    },


    //--------------------------------------------------------------------------------------------------

    webpack(config, { dev, isServer }) {

        // Code splitting
        config.optimization.splitChunks.cacheGroups = {
            default: false,
            vendors: false,
        };

        config.optimization.splitChunks.chunks = 'async';
        config.optimization.splitChunks.minSize = 20000;
        config.optimization.splitChunks.maxAsyncRequests = 5;
        config.optimization.splitChunks.maxInitialRequests = 3;

        //Only minimize the bundle in production
        if (!dev && !isServer) {
            config.optimization.minimize = true;
            config.optimization.concatenateModules = true;
            config.optimization.usedExports = true;
        }
        return config;
    },

    //--------------------------------------------------------------------------------------------------
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    },
    trailingSlash: true,

    output: "export",
    reactStrictMode: false

}

module.exports = nextConfig;

