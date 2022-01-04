const cityInfo = [
  {
      "id": 1,
      "name": "Ponta Delgada"
  },
  {
      "id": 2,
      "name": "Praia"
  },
  {
      "id": 3,
      "name": "Casablanca"
  },
  {
      "id": 4,
      "name": "Abidjan"
  },
  {
      "id": 5,
      "name": "Keflavik"
  },
  {
      "id": 6,
      "name": "Aberdeen"
  },
  {
      "id": 7,
      "name": "City of London"
  },
  {
      "id": 8,
      "name": "Tripoli"
  },
  {
      "id": 9,
      "name": "Lagos"
  },
  {
      "id": 10,
      "name": "Istanbul"
  },
  {
      "id": 11,
      "name": "Jeddah"
  },
  {
      "id": 12,
      "name": "Stockholm"
  },
  {
      "id": 13,
      "name": "Paris"
  },
  {
      "id": 14,
      "name": "Saint Petersburg"
  },
  {
      "id": 15,
      "name": "Kyiv"
  },
  {
      "id": 16,
      "name": "Lima"
  },
  {
      "id": 17,
      "name": "Santiago"
  },
  {
      "id": 18,
      "name": "Manaus"
  },
  {
      "id": 19,
      "name": "Sao Paulo"
  },
  {
      "id": 20,
      "name": "New York"
  },
  {
      "id": 21,
      "name": "Santiago de Cali"
  },
  {
      "id": 22,
      "name": "Hamilton"
  },
  {
      "id": 23,
      "name": "Caracas"
  },
  {
      "id": 24,
      "name": "Salvador"
  },
  {
      "id": 25,
      "name": "Rio de Janeiro"
  },
  {
      "id": 26,
      "name": "Jamestown"
  },
  {
      "id": 27,
      "name": "Edinburgh of the Seven Seas"
  },
  {
      "id": 28,
      "name": "Iqaluit"
  },
  {
      "id": 29,
      "name": "Toronto"
  },
  {
      "id": 30,
      "name": "Nuuk"
  },
  {
      "id": 31,
      "name": "Halifax"
  },
  {
      "id": 32,
      "name": "Qaanaaq"
  },
  {
      "id": 33,
      "name": "Clyde River"
  },
  {
      "id": 34,
      "name": "Sisimiut"
  },
  {
      "id": 35,
      "name": "Kinshasa"
  },
  {
      "id": 36,
      "name": "Cape Town"
  },
  {
      "id": 37,
      "name": "Nairobi"
  },
  {
      "id": 38,
      "name": "Durban"
  },
  {
      "id": 39,
      "name": "Grytviken"
  },
  {
      "id": 40,
      "name": "Karachi"
  },
  {
      "id": 41,
      "name": "Mogadishu"
  },
  {
      "id": 42,
      "name": "Delhi"
  },
  {
      "id": 43,
      "name": "Bengaluru"
  },
  {
      "id": 44,
      "name": "Juneau"
  },
  {
      "id": 45,
      "name": "Vancouver"
  },
  {
      "id": 46,
      "name": "Fort McMurray"
  },
  {
      "id": 47,
      "name": "Winnipeg"
  },
  {
      "id": 48,
      "name": "Longyearbyen"
  },
  {
      "id": 49,
      "name": "Tromso"
  },
  {
      "id": 50,
      "name": "Murmansk"
  },
  {
      "id": 51,
      "name": "Antananarivo"
  },
  {
      "id": 52,
      "name": "Ambovombe"
  },
  {
      "id": 53,
      "name": "Hithadhoo"
  },
  {
      "id": 54,
      "name": "Ekaterinburg"
  },
  {
      "id": 55,
      "name": "Samara"
  },
  {
      "id": 56,
      "name": "Tomsk"
  },
  {
      "id": 57,
      "name": "Almaty"
  },
  {
      "id": 58,
      "name": "Port Montt"
  },
  {
      "id": 59,
      "name": "Comodoro Rivadavia"
  },
  {
      "id": 60,
      "name": "Adamstown"
  },
  {
      "id": 61,
      "name": "Puerto Ayora"
  },
  {
      "id": 62,
      "name": "Ostrov Paskhi"
  },
  {
      "id": 63,
      "name": "Olonkinbyen"
  },
  {
      "id": 64,
      "name": "Vorkuta"
  },
  {
      "id": 65,
      "name": "Noril'sk"
  },
  {
      "id": 66,
      "name": "Mould Bay"
  },
  {
      "id": 67,
      "name": "Inuvik"
  },
  {
      "id": 68,
      "name": "Isachsen"
  },
  {
      "id": 69,
      "name": "Gjoa Haven"
  },
  {
      "id": 70,
      "name": "Port-aux-Francais"
  },
  {
      "id": 71,
      "name": "Kapaa"
  },
  {
      "id": 72,
      "name": "Honolulu"
  },
  {
      "id": 73,
      "name": "Hilo"
  },
  {
      "id": 74,
      "name": "Bethel"
  },
  {
      "id": 75,
      "name": "Dutch Harbor"
  },
  {
      "id": 76,
      "name": "Anchorage"
  },
  {
      "id": 77,
      "name": "Apia"
  },
  {
      "id": 78,
      "name": "Faaa"
  },
  {
      "id": 79,
      "name": "Moerai"
  },
  {
      "id": 80,
      "name": "Los Angeles"
  },
  {
      "id": 81,
      "name": "Houston"
  },
  {
      "id": 82,
      "name": "Iztapalapa"
  },
  {
      "id": 83,
      "name": "Krasnoyarsk"
  },
  {
      "id": 84,
      "name": "Ulaanbaatar"
  },
  {
      "id": 85,
      "name": "Mirny"
  },
  {
      "id": 86,
      "name": "Shenyang"
  },
  {
      "id": 87,
      "name": "Waitangi"
  },
  {
      "id": 88,
      "name": "Dhaka"
  },
  {
      "id": 89,
      "name": "Bangkok"
  },
  {
      "id": 90,
      "name": "Shanghai"
  },
  {
      "id": 91,
      "name": "Budta"
  },
  {
      "id": 92,
      "name": "Magadan"
  },
  {
      "id": 93,
      "name": "Khabarovsk"
  },
  {
      "id": 94,
      "name": "Anadyr"
  },
  {
      "id": 95,
      "name": "Yelizovo"
  },
  {
      "id": 96,
      "name": "Jakarta"
  },
  {
      "id": 97,
      "name": "Surabaya"
  },
  {
      "id": 98,
      "name": "Perth"
  },
  {
      "id": 99,
      "name": "Kotzebue"
  },
  {
      "id": 100,
      "name": "Barrow"
  },
  {
      "id": 101,
      "name": "Hobart"
  },
  {
      "id": 102,
      "name": "Christchurch"
  },
  {
      "id": 103,
      "name": "Port Moresby"
  },
  {
      "id": 104,
      "name": "Adelaide"
  },
  {
      "id": 105,
      "name": "Noumea"
  },
  {
      "id": 106,
      "name": "Wellington"
  },
  {
      "id": 107,
      "name": "Magadan"
  },
  {
      "id": 108,
      "name": "Khabarovsk"
  },
  {
      "id": 109,
      "name": "Anadyr"
  },
  {
      "id": 110,
      "name": "Yelizovo"
  },
  {
      "id": 111,
      "name": "Khatanga"
  },
  {
      "id": 112,
      "name": "Tiksi"
  },
  {
      "id": 113,
      "name": "Hobart"
  },
  {
      "id": 114,
      "name": "Christchurch"
  },
  {
      "id": 115,
      "name": "Deputatsky"
  },
  {
      "id": 116,
      "name": "Bilibino"
  },
  {
      "id": 117,
      "name": "Tokyo"
  },
  {
      "id": 118,
      "name": "Saipan"
  },
  {
      "id": 119,
      "name": "Tarawa"
  },
  {
      "id": 120,
      "name": "Tokyo"
  },
  {
      "id": 121,
      "name": "Saipan"
  },
  {
      "id": 122,
      "name": "Tarawa"
  },
  {
      "id": 123,
      "name": "Deputatsky"
  },
  {
      "id": 124,
      "name": "Bilibino"
  },
  {
      "id": 125,
      "name": "Port Moresby"
  },
  {
      "id": 126,
      "name": "Adelaide"
  },
  {
      "id": 127,
      "name": "Noumea"
  },
  {
      "id": 128,
      "name": "Wellington"
  }
]

export default cityInfo;