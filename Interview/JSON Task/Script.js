function productlist() {
    let headEl = document.getElementById("output")
    var bagList = [
        {
            "id":1,
            "Name":"PLEXY",
            "Title":"Medium 25 L Backpack SMALL 25 L DAYPACK BAGPACK FOR DAILY ROUTINE",
            "Price":"$1,499",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/j/i/j/-original-imagrtbsztdhghuz.jpeg?q=70",
            "category": "Laptop Bag" 
        },
        {
            "id":2,
            "Name":"Pro Life",
            "Title":"Small 20 L Backpack Poliyester School College Multipurpose",
            "Price":"$1,799",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/c/q/e/-original-imagh3w8hwd7fxde.jpeg?q=70",
            "category": "Laptop Bag"
        },
        {
            "id":3,
            "Name":"WROGN ",
            "Title":"Medium 30 L Laptop Backpack For College School Travel Office For Men & Women",
            "Price":"$2,999",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/q/e/v/13-backpack-for-college-school-travel-office-backpack-for-men-original-imagzskenzcbh9er.jpeg?q=70",
            "category": "Laptop Bag"
        },{
            "id":4,
            "Name":"Fast look",
            "Title":"Large 60 L Backpack Expandable Travel Rucksack for Outdoor Sport Camping Hiking Trekking Bag-Blue",
            "Price":"$₹1,299",
            "image":"https://rukminim2.flixcart.com/image/832/832/kybvo280/rucksack/n/v/h/expandable-travel-rucksack-for-outdoor-sport-camping-hiking-original-imagah5dkqgy9zre.jpeg?q=70",
            "category": "Laptop Bag"
        },
        {
            "id":5,
            "Name":"SKYBAGS ",
            "Title":"Large 33 L Backpack RIDDLE 1",
            "Price":"$2,198",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/backpack/o/q/b/-original-imagkycghfxjf2ey.jpeg?q=70",
            "category": "Laptop Bag"
        },
        {
            "id":6,
            "Name":"Perfect Choice",
            "Title":"Women Maroon Shoulder Bag",
            "Price":"$2,599",
            "image":"https://rukminim2.flixcart.com/image/832/832/l27wtjk0/hand-messenger-bag/t/i/u/stylish-women-formal-office-college-causal-party-wears-handbag-original-imagdhejwdxuqcg9.jpeg?q=70",
            "category": "Ladies Hand Bag"
        },
        {
            "id":7,
            "Name":"LIKE STYLE",
            "Title":"Women Black Sling Bag",
            "Price":"$1,599",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/s/i/e/-original-imagkycfwatxsyhg.jpeg?q=70",
            "category": "Ladies Hand Bag"
        },
        {
            "id":8,
            "Name":"Leather Land",
            "Title":"Black Women Sling Bag",
            "Price":"$1,999",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/sling-bag/j/b/u/designer-box-golden-chain-in-black-1-8-box-sling-bag-leather-original-imagg7fhyfbhuzry.jpeg?q=70",
            "category": "Ladies Hand Bag"
        },
        {
            "id":9,
            "Name":"Ryzon",
            "Title":"Black Women Sling Bag - Medium",
            "Price":"$999",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/sling-bag/n/y/d/-original-imagrngxhjhhjybt.jpeg?q=70",
            "category": "Ladies Hand Bag"
        },
        {
            "id":10,
            "Name":"LaFille",
            "Title":"Women Brown Tote",
            "Price":"$3,199",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/f/q/8/dgn292-tote-bag-41-dgn292bn-tote-lafille-28-original-imagtq6fzhvucdr5.jpeg?q=70",
            "category": "Ladies Hand Bag"
        },
        {
            "id":11,
            "Name":"Harddo",
            "Title":"harddo Unisex Portable Thermal Insulated Lunch Bag/Tiffin Bag/Storage Bag/Lunch Box for School/College/Office with Adjustable Shoulder Handle (Pack of 1) Lunch Bag  (Light Blue, 1 L)",
            "Price":"$1,099",
            "image":"https://rukminim2.flixcart.com/image/416/416/km57hjk0/bag/z/e/i/unisex-portable-thermal-insulated-lunch-bag-tiffin-bag-storage-original-imagf3vgk3huhzq4.jpeg?q=70",
            "category": "Lunch Bag"
        },
        {
            "id":12,
            "Name":"LOREM",
            "Title":"LOREM FZ-TB11 Black PVC Coated Insulated Lunch/Tiffin Bag Men & Women Office, School Waterproof Lunch Bag",
            "Price":"$1,399",
            "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/bag/z/o/e/fz-tb11-black-pvc-coated-insulated-lunch-tiffin-bag-men-women-original-imagtng8hbrvqd6m.jpeg?q=70",
            "category": "Lunch Bag"
        },
        {
            "id":13,
            "Name":"Kyros",
            "Title":"Kyros Lunch Bags for Office Women & Men, Insulated Lunch Bag for Kids, Tiffin Bag Waterproof Lunch Bag",
            "Price":"$599",
            "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/bag/n/b/v/lunch-bags-for-office-women-men-insulated-lunch-bag-for-kids-original-imagsgctpqbq7bhu.jpeg?q=70",
            "category": "Lunch Bag"
        },
        {
            "id":14,
            "Name":"ARECA INTERNATIONAL",
            "Title":"ARECA INTERNATIONAL Multipurpose Unisex Jute Lunch bag |Tiffin Bag |Tote Bag | Jute Bag Waterproof Lunch Bag ",
            "Price":"$499",
            "image":"https://rukminim2.flixcart.com/image/416/416/knc2p3k0/bag/n/u/k/eco-friendly-shopping-grocery-lunch-tota-jute-bag-tiffin-bag-original-imag2fnefhrhq2zy.jpeg?q=70",
            "category": "Lunch Bag"
        },
        {
            "id":15,
            "Name":"GOOD FRIENDS",
            "Title":"GOOD FRIENDS Insulated Lunch Bags Lightweight and Reusable Food Cooler Lunch Box Insulation Waterproof Lunch Bag",
            "Price":"$999",
            "image":"https://rukminim2.flixcart.com/image/416/416/xif0q/bag/p/g/d/26-lightweight-lunch-tiffin-bag-for-office-school-college-picnic-original-imagsyq7dz4rh5fq.jpeg?q=70",
            "category": "Lunch Bag"
        },
        {
            "id":16,
            "Name":"TRAVEL POINT ",
            "Title":"WATERPROOF TREKKING BAG HIKKING BACKPACK FOR TRAVEL & OUTDOOR Rucksack - 60 L ",
            "Price":"$3,499",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/rucksack/d/i/k/-original-imagrh36tja35jss.jpeg?q=70",
            "category": "Travel Bag"
        },
        {
            "id":17,
            "Name":"Gear",
            "Title":"22 L Hand Duffel Bag - Cross Training - Grey, Orange - Regular Capacity",
            "Price":"$1,299",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/duffel-bag/i/d/d/-original-imaghdtwjyt5rdde.jpeg?q=70",
            "category": "Travel Bag"
        },
        {
            "id":18,
            "Name":"ARISTOCRAT",
            "Title":"61 L Strolley Duffel Bag - VOLT NXT DFT 65 TEAL - Blue - Large Capacity",
            "Price":"$3,700",
            "image":"https://rukminim2.flixcart.com/image/832/832/kufuikw0/duffel-bag/o/w/i/volt-nxt-dft-65-teal-dftvon65etbl-duffel-with-wheels-strolley-original-imag7jjzrjngkscz.jpeg?q=70",
            "category": "Travel Bag"
        },
        {
            "id":19,
            "Name":"SAFARI ",
            "Title":"Medium Check-in Suitcase (67 cm) - STAR 65 4W",
            "Price":"$8,250",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/suitcase/t/y/n/-original-imagz4qkzsgpvfff.jpeg?q=70",
            "category": "Travel Bag"
        },
        {
            "id":20,
            "Name":"AMERICAN TOURISTER",
            "Title":"78 L Strolley Duffel Bag - CAMP WHEEL DUFFLE 65cm - TEAL - Blue - Large Capacity",
            "Price":"$4,090",
            "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/duffel-bag/h/p/a/-original-imagtehemkahpkta.jpeg?q=70",
            "category": "Travel Bag"
        },
    ]
    console.log(bagList)
    
    bagList.map((index,value)=> {
        headEl.innerHTML += "<div class='card col-12 col-sm-12 col-md-6 col-lg-4 -2' style='width: 288px'>"+
        "<img src="+index.image+" class='card-img-top' alt='No Image'/>"+
        "<p class='text-secondary'>"+index.Name+"</p>"+
        "<h4 class='text-black'>"+index.Title+"</h4>"+
        "<p class='text-danger'>"+index.Price+"</p><small class='text-body-secondary'>"+index.category+"</small></div>"
    }) 
}