// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

/* OPDRACHT 1 ----------------------------------------------------------------------------------------*/
/* opdracht 1a ---------------------------------------------------------------------------*/
console.log("\nOpdracht 1a:");
const tvTypeNames = inventory.map((tv) => {
    return tv.type;
});
console.log(tvTypeNames);

/* opdracht 1b ---------------------------------------------------------------------------*/
console.log("\nOpdracht 1b:");
const tvOutOfStock = inventory.filter((tv) => {
    return tv.originalStock - tv.sold === 0;
});
console.log(tvOutOfStock);

/* opdracht 1c ---------------------------------------------------------------------------*/
console.log("\nOpdracht 1c:");
const ambilight = inventory.filter((tv) => {
    return tv.options.ambiLight;
});
console.log(ambilight);

/* opdracht 1d ---------------------------------------------------------------------------*/
console.log("\nOpdracht 1d:");
//uitgecomment om volgende opdrachten originele volgorde te hebben in inventory
// const prices = inventory.sort((a, b) => {
//     return a.price - b.price;
// })
// console.log(prices);


/* OPDRACHT 2 ----------------------------------------------------------------------------------------*/
/* opdracht 2a ---------------------------------------------------------------------------*/
console.log("\nOpdracht 2a:");
// benader voor elke tv hoeveel er verkocht zijn via sold
// tel deze allemaal bij elkaar op in een for loop

const tvSold = inventory.map((tv) => tv.sold);
let soldTotal = 0;
for (let i = 0; i < tvSold.length; i++) {
    soldTotal += tvSold[i];
}
console.log(soldTotal);

/* opdracht 2b ---------------------------------------------------------------------------*/
console.log("\nOpdracht 2b:");
// langere versie:
// const tvSolds = document.getElementById("tvsSold");
// tvSolds.textContent = `${soldTotal}`;

//kortere versie:
document.getElementById("tvsSold").textContent = `${soldTotal}`;


/* opdracht 2c ---------------------------------------------------------------------------*/
console.log("\nOpdracht 2c:");
const tvBought = inventory.map((tv) => {
    return tv.originalStock;
});
let tvBoughtTotal = 0
for (let i = 0; i < tvBought.length; i++) {
    tvBoughtTotal += tvBought[i];
}

console.log(tvBoughtTotal);

/* opdracht 2d ---------------------------------------------------------------------------*/
console.log("\nOpdracht 2d:");
const tvsBought = document.getElementById("tvsBought");
tvsBought.textContent = `${tvBoughtTotal}`;

/* opdracht 2e---------------------------------------------------------------------------*/
console.log("\nOpdracht 2e:");
const tvsSell = document.getElementById("tvsSell");
tvsSell.textContent = `${tvBoughtTotal - soldTotal}`;


/* OPDRACHT 3 ----------------------------------------------------------------------------------------*/
/* opdracht 3a---------------------------------------------------------------------------*/
console.log("\nOpdracht 3a:");
// const tvBrands = inventory.map((tv) => {
//     return tv.brand;
// });
// const listTvBrand = document.getElementById("tvsBrand");
// listTvBrand.textContent = `${tvBrands}`;

/* opdracht 3b---------------------------------------------------------------------------*/
console.log("\nOpdracht 3b:");

// dit wordt een lelijke lijst op 1 regel met alle merken en kommas, maar zonder spaties ertussen:
// Philips,Nikkei,Samsung,Hitachi,Philips,Philips,Brandt,Toshiba
// function tvBrand(array) {
//     const tvBrands = array.map((tv) => tv.brand);
//     const listTvBrand = document.getElementById("tvsBrand");
//     listTvBrand.textContent = `${tvBrands}`;
// }

// dit wordt een nette lijst onder elkaar
function tvBrand(array) {
    const tvBrands = array.map((tv) => tv.brand);
    tvBrands.map((tv) => {
        document.getElementById("tvsBrand").innerHTML += `
        <p>${tv}</p>`;
    });
}

tvBrand(inventory);


/* OPDRACHT 4 ----------------------------------------------------------------------------------------*/
/* opdracht 4a---------------------------------------------------------------------------*/
console.log("\nOpdracht 4a:");

function brandTypeName(array) {
    return `${array[0].brand} ${array[0].type} - ${array[0].name}`;
}

brandTypeName(inventory);


/* opdracht 4b---------------------------------------------------------------------------*/
console.log("\nOpdracht 4b:");

function price(array) {
    return `??? ${array[0].price},-`;
}

price(inventory);


/* opdracht 4c---------------------------------------------------------------------------*/
console.log("\nOpdracht 4c:");

function availableSizes() {
    let sizes = "";
    for (let i = 0; i < inventory[0].availableSizes.length; i++) {
        if (i === inventory[0].availableSizes.length - 1) {
            sizes += `${inventory[0].availableSizes[i]} inch (${Math.round(inventory[0].availableSizes[i] * 2.54)} cm)`;
        } else {
            sizes += `${inventory[0].availableSizes[i]} inch (${Math.round(inventory[0].availableSizes[i] * 2.54)} cm) | `;
        }
    }
    return sizes;
}

availableSizes(inventory);

/* opdracht 4d---------------------------------------------------------------------------*/
console.log("\nOpdracht 4d:");
// document.getElementById("tvs").innerHTML = `
// <p></p>
// <p>...</p>
// <p>${brandTypeName(inventory)}</p>
// <p>${price(inventory)}</p>
// <p>${availableSizes(inventory)}</p>
// <p>...</p>
// <p></p>
// `;


/* opdracht 4e---------------------------------------------------------------------------*/
console.log("\nOpdracht 4e:");

//brandtypenames
const tvsBrandTypeNames = inventory.map((tv) => {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
});
console.log(tvsBrandTypeNames);

//prices
const tvsPrices = inventory.map((tv) => {
    return `??? ${tv.price},-`;
})
console.log(tvsPrices);

//tvSizes met een for loop
const tvsSizes = inventory.map((tv) => {
    let sizes = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        if (i === tv.availableSizes.length - 1) {
            sizes += `${tv.availableSizes[i]} inch (${Math.round(tv.availableSizes[i] * 2.54)} cm)`;
        } else {
            sizes += `${tv.availableSizes[i]} inch (${Math.round(tv.availableSizes[i] * 2.54)} cm) | `;
        }
    }
    return sizes;
});
console.log(tvsSizes);

// tvSizes met 2 map methodes, maar dit werkt niet omdat ie tv.map niet kent
// const mapSizes = inventory.map((tv) => {
//     const mapSize = tv.map((size) => {
//         return `${tv.size} inch (${Math.round(tv.size * 2.54)} cm) | `;
//     });
// })
// console.log(mapSizes);


//injecting
for (let i = 0; i < inventory.length; i++) {
    document.getElementById("tvs").innerHTML += `
        <p>...</p>
        <p>${tvsBrandTypeNames[i]}</p>
        <p>${tvsPrices[i]}</p>
        <p>${tvsSizes[i]}</p>
        <p>...</p>
    `;
}


/* BONUSOPDRACHT 1------------------------------------------------------------------------------------*/
/* opdracht 1b ---------------------------------------------------------------------------*/

// sorteer op prijs------------------------------------------------------------
console.log("Bonusopdracht 1b");

//function voor het sorteren
function handleClickSortPrice(arr) {
    console.log("Sorted by price");
    const prices = arr.sort((a, b) => {
        return a.price - b.price;
    })
    console.log(prices);
}

//functions voor het weergeven van delen van de tv's
function createTvBrandName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

function createTvPrice(tv) {
    return `??? ${tv.price},-`;
}

// nav feedback: onderstaande kan ook met functie join
function createScreensizes(tv) {
    let sizes = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        if (i === tv.availableSizes.length - 1) {
            sizes += `${tv.availableSizes[i]} inch (${Math.round(tv.availableSizes[i] * 2.54)} cm)`;
        } else {
            sizes += `${tv.availableSizes[i]} inch (${Math.round(tv.availableSizes[i] * 2.54)} cm) | `;
        }
    }
    return sizes;
}


//function voor het weergeven van de tv's
function displayTvs(tvArray) {
    let tvs = "";
    tvArray.map((tv) => {
        //brandtypename
        const tvsBrandTypeName = createTvBrandName(tv);
        console.log(tvsBrandTypeName);
        //prices
        const tvsPrice = createTvPrice(tv)
        console.log(tvsPrice);
        //beeldscherm
        const tvsSizes = createScreensizes(tv);
        console.log(tvsSizes);
        tvs += `
        ...
        ${tvsBrandTypeName}
        ${tvsPrice}
        ${tvsSizes}
        ...
        `;
    })
    return tvs;
}

const displayAllTvs = displayTvs(inventory);


const sortPriceButton = document.getElementById('sort-price-button');
sortPriceButton.addEventListener('click', () => {
    handleClickSortPrice(inventory);
    const displayAllTvs = displayTvs(inventory);
    document.getElementById("tvs-click-events").innerHTML += `
        <br>
        <h3>Gesorteerd op prijs</h3>
        <p>${displayAllTvs}</p>
    `;
});


// ambilight-------------------------------------------------------------------
function handleClickAmbiLight(array) {
    console.log("Ambilight TV's");
    const ambilight = array.filter((tv) => {
        return tv.options.ambiLight;
    });
    console.log(ambilight);
}

const ambiLightButton = document.getElementById('ambiLight-button');
ambiLightButton.addEventListener('click', () => {
    const ambis = handleClickAmbiLight(inventory);
    const displayAmbis = displayTvs(ambilight);
    document.getElementById("tvs-click-events").innerHTML += `
        <br>
        <h3>Alleen met ambilight</h3>
        <p>${displayAmbis}</p>
        <p>...</p>
    `;
})


// uitverkochte exemplaren-------------------------------------------------------
function handleClickOutOfStock() {
    console.log("Out of Stock");
    const tvOutOfStock = inventory.filter((tv) => tv.originalStock === tv.sold);
    console.log(tvOutOfStock);
}

const outOfStockButton = document.getElementById('out-of-stock-button');
outOfStockButton.addEventListener('click', () => {
    const slods = handleClickOutOfStock(inventory);
    const displaySolds = displayTvs(tvOutOfStock);
    document.getElementById("tvs-click-events").innerHTML += `
        <br>
        <h3>Uitverkochte exemplaren</h3>
        <p>${displaySolds}</p>
        <p>...</p>
    `;
})


/* BONUSOPDRACHT 2------------------------------------------------------------------------------------*/
// zie opdracht 4e
