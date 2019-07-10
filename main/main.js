'use strict';


const posMachine = () => {

}

const verifyBarcodesAndFindItem = (barcodes) => {
    let barcodeValid = [];
    const allItems = loadAllItems()
    console.log(allItems)
    for(let i=0; i<barcodes; i++) {
        for (let j = 0; j < allItems.length; j++) {
            let element = splitBarcode(barcodes[i])
            console.log(element)
            if(element[0] === allItems[j].barcode) {
                let item = allItems[j].barcode;
                item.count = element[1];
                barcodeValid.push(item);
            } 
        }
    }
    return barcodeValid;
} 

const splitBarcode = (barcode) => {
    const spliter = "-";
    const [code, count] = barcode.split(spliter);
    console.log([code, count])
    return count ? [code, count] : [code, 1];
}

const calculateItems = (barcodes) => {

}

//calculate counts
const calculateItemCounts = (barcodeValid) => {
    let hash = [];
    let items = [];
    for(let i=0; i<barcodeValid.length; i++) {
        if(hash.indexOf(barcodeValid[i]) === -1) {
            items.push(barcodeValid[i]);
        } else {
            for(let j=0; j<items.length; j++) {
                if(barcodeValid[i].barcode === items[j].barcode) {
                    items[i].count += items[j].count;
                    break;
                }
            }
        }
    }
    return items;
}

//calculate amount
const calculateItemAmount = (items) => {
    let sum = 0;
    for(let i=0; i<items.length; i++) {
        sum = sum + items[i].price * items[i].count;
    }
    return sum;
}

const calculatePromotionInDBByItemAndCounts = () => {
    

}

const findPromotionByItemInDB = (barcodeValid) => {
    const promotionItems = loadPromotions()
    const items = []
    for(let i=0; i<barcodeValid; i++) {
        for (let j = 0; j < promotionItems.length; j++) {
            if(barcodeValid[i].barcode === promotionItems[j].barcode) {
                let item = promotionItems[j].barcode;
                item.count = element[1];
                items.push(item);
            } 
        }
    }
    return items
}

//
const calculatePromotion = (promotionItems) => {
    let sum = 0;
    for(let i=0; i<promotionItems.length; i++) {
        sum = sum + promotionItems[i].price * promotionItems[i].count;
    }
    return sum;
}

const printReceipt = () => {

}

const tags = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005-2',
  ];

console.log(verifyBarcodesAndFindItem(tags));
// module.exports = {
//     verifyBarcodesAndFindItem
//   }


