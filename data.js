var APP_DATA = {
  "scenes": [
    {
      "id": "0-recepcion",
      "name": "RECEPCION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.33185585905020965,
          "pitch": 0.09256672294118928,
          "rotation": 0,
          "target": "9-pasillo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-centro-monitoreo-1",
      "name": "CENTRO MONITOREO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6944823274573011,
          "pitch": 0.010407798971492355,
          "rotation": 0,
          "target": "2-centro-monitoreo-2"
        },
        {
          "yaw": -2.6584917657903127,
          "pitch": 0.1220939558912697,
          "rotation": 0,
          "target": "10-pasillo-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-centro-monitoreo-2",
      "name": "CENTRO MONITOREO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8430949637092606,
          "pitch": 0.04760092277294348,
          "rotation": 0,
          "target": "1-centro-monitoreo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-asistente",
      "name": "ASISTENTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9119459271062489,
          "pitch": 0.1518304232635188,
          "rotation": 0,
          "target": "7-oficina-subdirector"
        },
        {
          "yaw": -2.5521276409656135,
          "pitch": 0.0579538034243825,
          "rotation": 0,
          "target": "11-pasillo-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuarto-de-servidores",
      "name": "CUARTO DE SERVIDORES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.256552477646851,
          "pitch": 0.14276357828043373,
          "rotation": 0,
          "target": "6-laboratorio-de-informatica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-director-cibernetico",
      "name": "DIRECTOR CIBERNETICO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8923617081496396,
          "pitch": 0.17063604013398326,
          "rotation": 0,
          "target": "10-pasillo-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-laboratorio-de-informatica",
      "name": "LABORATORIO DE INFORMATICA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6666148387403155,
          "pitch": 0.11433683631112856,
          "rotation": 0,
          "target": "4-cuarto-de-servidores"
        },
        {
          "yaw": -2.245331423952152,
          "pitch": 0.2742804093978677,
          "rotation": 0,
          "target": "11-pasillo-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-oficina-subdirector",
      "name": "OFICINA SUBDIRECTOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6230223890766737,
          "pitch": 0.26112949650534567,
          "rotation": 0,
          "target": "3-asistente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pasillo-1",
      "name": "PASILLO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2169451424185294,
          "pitch": 0.24529682655087015,
          "rotation": 0,
          "target": "13-salon-de-conferencia-puerta"
        },
        {
          "yaw": -0.18526952524160123,
          "pitch": 0.14858918356913797,
          "rotation": 0,
          "target": "9-pasillo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pasillo-2",
      "name": "PASILLO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.435198882877451,
          "pitch": 0.13637785924693802,
          "rotation": 0,
          "target": "0-recepcion"
        },
        {
          "yaw": 0.068154887750417,
          "pitch": 0.11001791752380363,
          "rotation": 0,
          "target": "10-pasillo-3"
        },
        {
          "yaw": -3.1128906678274966,
          "pitch": 0.03753069970034417,
          "rotation": 0,
          "target": "8-pasillo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pasillo-3",
      "name": "PASILLO 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.654744727720731,
          "pitch": 0.1644206291052619,
          "rotation": 0,
          "target": "9-pasillo-2"
        },
        {
          "yaw": 0.3594840682671574,
          "pitch": 0.13417925794948715,
          "rotation": 0,
          "target": "1-centro-monitoreo-1"
        },
        {
          "yaw": 2.1428582066724005,
          "pitch": 0.07880884957535628,
          "rotation": 0,
          "target": "5-director-cibernetico"
        },
        {
          "yaw": 1.5243760636169057,
          "pitch": 0.10166980286577498,
          "rotation": 0,
          "target": "11-pasillo-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pasillo-4",
      "name": "PASILLO 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5028370639668651,
        "pitch": 0.4830430594915889,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.1923458246503511,
          "pitch": 0.19153340488541915,
          "rotation": 0,
          "target": "6-laboratorio-de-informatica"
        },
        {
          "yaw": -0.8929085247191324,
          "pitch": 0.1842735166281706,
          "rotation": 0,
          "target": "3-asistente"
        },
        {
          "yaw": 1.5018451926709577,
          "pitch": 0.010411463460570758,
          "rotation": 0,
          "target": "10-pasillo-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-salon-de-conferencia-esquina",
      "name": "SALON DE CONFERENCIA ESQUINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7689597485414836,
          "pitch": 0.100765142416952,
          "rotation": 0,
          "target": "13-salon-de-conferencia-puerta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-salon-de-conferencia-puerta",
      "name": "SALON DE CONFERENCIA PUERTA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5893864725096432,
          "pitch": 0.07576365862441037,
          "rotation": 0,
          "target": "12-salon-de-conferencia-esquina"
        },
        {
          "yaw": -2.065880730772875,
          "pitch": 0.32753814055566544,
          "rotation": 0,
          "target": "11-pasillo-4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20260728 OFICINAS LFP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
