export const getNumbers = ({ number }) => {
  const intNumber = parseInt(number);

  const list = {
    1: "El caballo, sol, tintero, camello, pescado chico",
    2: "La mariposa, hombre, cafetera, caracol",
    3: "El marinero, luna, taza, ciempiés, muerto",
    4: "El gato, boca, soldado, llave, vela, militar",
    5: "La monja, mar, candado, periódico, fruta, lombriz",
    6: "La jicotea, carta, reverbero, botella",
    7: "El caracol, sueño, mierda, medias, caballero",
    8: "El muerto, león, calabaza, mesa",
    9: "El elefante, entierro, lira, cubo, esqueleto, buey",
    10: "El pescado grande, paseo, malla, cazuela, dinero, lancha",
    11: "El gallo, lluvia, fósforo, taller, fábrica",
    12: "La mujer mala, viaje, toallas, cometa, perro grande",
    13: "El pavo real, niño, anafe, chulo",
    14: "El gato tigre, matrimonio, sartén y cementerio",
    15: "El perro, visita, cuchara",
    16: "El toro, plancha, vestido, incendio, funerales, avispa",
    17: "La luna, mujer buena, hule, camisón, armas, opio",
    18: "El pescado chiquito, la iglesia, sirena, palma, gato amarillo",
    19: "La lombriz, campesino, tropa, mesa grande, armadura",
    20: "El gato fino, cañón, camiseta, tibor, libro, mujer",
    21: "El majá, reloj de bolsillo, cotorra",
    22: "El sapo, estrella, chimenea",
    23: "El vapor, submarino, escalera, barco, águila",
    24: "La paloma, música, carpintero, cocina",
    25: "La piedra fina, casa, sol",
    26: "La anguila, calle, médico",
    27: "La avispa, campana, cuchara grande, canario",
    28: "El chivo, bandera, político, uvas, perro chico",
    29: "El ratón, nube, venado",
    30: "El camarón, arco iris, almanaque, buey, cangrejo",
    31: "El venado, escuela, zapatos",
    32: "El cochino, enemigo, mulo, demonio",
    33: "La tiñosa, baraja, santa, Jesucristo, bofetón",
    34: "El mono, familia, negro, capataz",
    35: "La araña, novia, bombillos, mosquito",
    36: "La cachimba, teatro, bodega, coloso",
    37: "La gallina prieta, gitana, hormiga, carretera",
    38: "El dinero, carro, goleta, guantes, barril",
    39: "El conejo, culebra, rayo, baile, tintorero",
    40: "El cura, sangre, bombero, cantina, estatua",
    41: "La lagartija, prisión, pato chico, jubo, capuchino",
    42: "El pato, país lejano, carnero, abismo",
    43: "El alacrán, amigo, vaca, puerta, presidiario y jorobado",
    44: "Año del cuero, infierno, año malo, temporal, tormenta",
    45: "El tiburón, presidente, traje, tranvía, estrella",
    46: "La guagua, humo, hambre, hurón, baile, chino",
    47: "El pájaro, mala noticia, mucha sangre, escolta, rosa",
    48: "La cucaracha, abanico, barbería, cubo",
    49: "El borracho, riqueza, figurín, percha, tesoro, fantasma",
    50: "El policía, alegría, florero, alcalde, pícaro, árbol",
    51: "El soldado, sereno, anteojos, sed, oro, presillas",
    52: "La bicicleta, coche, abogado, libreta",
    53: "La luz eléctrica, prenda, tragedia, diamante, beso, alguacil",
    54: "Flores, gallina blanca, sueño, timbre, cañón",
    55: "El cangrejo, los Isleños, caerse, sellos",
    56: "La reina, merengue, piedra",
    57: "La cama, ángeles, telegrama, puerta",
    58: "Un adulterio, retrato, cuchillo, ferretero",
    59: "El loco, langosta, anillo",
    60: "Sol Oscuro, payaso, cósmico",
    61: "El cañonazo, revolver, boticario",
    62: "El matrimonio, nieve, lámpara, visión, academia, carretilla",
    63: "El asesino, cuernos, espada, bandidos",
    64: "Un muerto grande, tiro de rifle, maromero, relajo",
    65: "La cárcel, comida, bruja, ventana, trueno",
    66: "El divorcio, los tarros, la máscara, el carnaval",
    67: "La puñalada, autoridad, fonda, aborto, zapato",
    68: "Cementerio Grande, globo, cuchillo grande, templo, bolos",
    69: "El pozo, fiera, la loma, vagos, polvorín",
    70: "El teléfono, coco, tiro, barril, bala",
    71: "Río, sombrero, perro mediano, pantera y fusil",
    72: "El ferrocarril, buey viejo, serrucho, collar, cetro, relámpago",
    73: "Un parque, navaja, manzanas, maleta, ajedrez, cigarrillo",
    74: "El papalote, coronel, serpiente, cólera, tarima",
    75: "El cine, corbata, viento, guitarra",
    76: "La bailarina, el humo en cantidad, la caja de hierro, violín",
    77: "Banderas, guerra, colegio, billetes de banco, ánfora",
    78: "El obispo, sarcófago, rey, apetito, lunares",
    79: "Coche de tren, dulces",
    80: "El médico, la buena noticia, la luna llena, paraguas, barba, trompo",
    81: "El teatro, ingeniero, cuerda, actriz",
    82: "La madre, la batea, pleito, muelle",
    83: "La tragedia, la procesión, el limosnero, el bastón, la madera",
    84: "El ciego, sastre, bohío, banquero, cofre, la marcha atrás",
    85: "El reloj, espejo, guano",
    86: "El convento, tijera, desnudar, manguera",
    87: "El baúl, fuego, plátanos",
    88: "Los espejuelos, gusano, vaso, hojas",
    89: "La lotería, agua, la monja vieja, melón",
    90: "El viejo, el espejo grande, el caramelo",
    91: "El tranvía, pájaro negro, bolchevique",
    92: "Globo muy alto, suicidio, Cuba",
    93: "Revolución, sortija, general, joyas, libertad",
    94: "El machete, la mariposa grande, leontina",
    95: "La guerra, alacrán",
    96: "El desafío, periódico, pícaro, zapatos nuevos",
    97: "El mosquito, mono grande, sinsonte, grillo grande",
    98: "El piano, entierro grande, santo",
    99: "El serrucho, carbonero, lluvia",
  };

  return list[intNumber + 1];
};

export const getNumberOnlyKeyWord = ({ number }) => {
  const intNumber = parseInt(number);

  const list = {
    1: "El caballo, sol",
    2: "La mariposa",
    3: "El marinero",
    4: "El gato",
    5: "La monja, mar",
    6: "La jicotea",
    7: "El caracol",
    8: "El muerto",
    9: "El elefante",
    10: "El pescado grande",
    11: "El gallo, lluvia",
    12: "La mujer mala",
    13: "El pavo real",
    14: "El gato tigre",
    15: "El perro",
    16: "El toro",
    17: "La luna",
    18: "El pescado chiquito",
    19: "La lombriz, campesino",
    20: "El gato fino",
    21: "El majá",
    22: "El sapo",
    23: "El vapor",
    24: "La paloma",
    25: "La piedra fina",
    26: "La anguila",
    27: "La avispa",
    28: "El chivo",
    29: "El ratón",
    30: "El camarón",
    31: "El venado",
    32: "El cochino",
    33: "La tiñosa",
    34: "El mono",
    35: "La araña",
    36: "La cachimba",
    37: "La gallina prieta",
    38: "El dinero",
    39: "El conejo",
    40: "El cura",
    41: "La lagartija",
    42: "El pato",
    43: "El alacrán",
    44: "Año del cuero",
    45: "El tiburón",
    46: "La guagua",
    47: "El pájaro",
    48: "La cucaracha",
    49: "El borracho",
    50: "El policía",
    51: "El soldado",
    52: "La bicicleta",
    53: "La luz eléctrica",
    54: "Flores",
    55: "El cangrejo",
    56: "La reina",
    57: "La cama",
    58: "Un adulterio",
    59: "El loco",
    60: "Sol Oscuro",
    61: "El cañonazo",
    62: "El matrimonio",
    63: "El asesino",
    64: "Un muerto grande",
    65: "La cárcel",
    66: "El divorcio",
    67: "La puñalada",
    68: "Cementerio Grande",
    69: "El pozo, fiera",
    70: "El teléfono",
    71: "Río",
    72: "El ferrocarril",
    73: "Un parque",
    74: "El papalote",
    75: "El cine",
    76: "La bailarina",
    77: "Banderas",
    78: "El obispo",
    79: "Coche de tren",
    80: "El médico",
    81: "El teatro",
    82: "La madre",
    83: "La tragedia",
    84: "El ciego",
    85: "El reloj",
    86: "El convento",
    87: "El baúl",
    88: "Los espejuelos",
    89: "La lotería",
    90: "El viejo",
    91: "El tranvía",
    92: "Globo muy alto",
    93: "Revolución",
    94: "El machete",
    95: "La guerra",
    96: "El desafío",
    97: "El mosquito",
    98: "El piano",
    99: "El serrucho",
  };

  return list[intNumber + 1];
};