//Cart functions 

let menuCartContainer = document.querySelector('.cart-container');

menuCartContainer.addEventListener('click', (event)=>{
	if(event.target==menuCartContainer){
		menuToggleCart();
	}
})

let menuCartView = false;
let menuCart = menuCartContainer.querySelector('.cart');

function menuToggleCart(){
	if(menuCartView){
		menuCartShow();
		setTimeout(()=>{
			menuCartContainer.style.display = 'none'
		}, 250);
	}else{
		menuCartContainer.style.display = 'flex';
		setTimeout(menuCartShow, 250);
	}
}

function menuCartShow(){

	let menuSize = '0vw';	
	if(window.innerWidth>=1350){
		menuSize = '25vw';
	}else if(window.innerWidth<1350){
		menuSize = '100vw';
	}

	if(menuCartView){
		menuCart.style.width = '0vw';
		menuCart.style.padding = '0px';
		menuCartView = false;
	}else{
		menuCart.style.width = menuSize;
		menuCart.style.padding = '10px';
		menuCartView = true;
	}
}



//Banner Main Slide

let bannerContainer = document.querySelector('.banner-container');
let bannersItem = document.querySelectorAll('.banner-item');
let bannerWidth = bannersItem[0].clientWidth;
let bannerPosition = 0;

bannerContainer.style.width = bannersItem.length*bannerWidth+'px';

function nextBanner(){
	if(bannerPosition<bannersItem.length-1){
		bannerPosition++;
	}else{
		bannerPosition = 0;
	}
	bannerContainer.style.marginLeft = -(bannerPosition*bannerWidth)+'px';
}

setInterval(nextBanner, 5000);


// Product Content

let product = [
	{
		uid: "0001",
		brand: "Apple",
		product: "Iphone",
		model: "14",
		color: "Roxo Profundo",
		capacity: "128gb",
		value: 5600,
		discount: 0,
		mainImage:"iphone-14-pro-max.png"
	},
	{
		uid: "0002",
		brand: "Apple",
		product: "Iphone",
		model: "14 Plus",
		color: "Preto Espacial",
		capacity: "256gb",
		value: 6000,
		discount: 0,
		mainImage:"iphone-14-pro-max.png"
	},
	{
		uid: "0003",
		brand: "Apple",
		product: "Iphone",
		model: "14 Pro",
		color: "Prateado",
		capacity: "512gb",
		value: 6800,
		discount: 5,
		mainImage:"iphone-14-pro-max.png"
	},
	{
		uid: "0004",
		brand: "Apple",
		product: "Iphone",
		model: "14 Pro Max",
		color: "Dourado",
		capacity: "1TB",
		value: 7999,
		discount: 0,
		mainImage:"iphone-14-pro-max.png"
	},
	{
		uid: "0005",
		brand: "Apple",
		product: "Macbook",
		model: "Air",
		color: "Space Gray",
		capacity: "500gb",
		value: 10000,
		discount: 11,
		mainImage:"macbook-air-space-gray-select-201810.jpg"
	},
	{
		uid: "0006",
		brand: "Apple",
		product: "Airpod",
		model: "Pro",
		color: "Branco",
		capacity: "",
		value: 999.90,
		discount: 23,
		mainImage:"airpods_pro_branco.png"
	},
	{
		uid: "0007",
		brand: "Apple",
		product: "Watch",
		model: "SE",
		color: "Branco",
		capacity: "32gb",
		value: 999.12,
		discount: 0,
		mainImage:"Apple-watch-se-32gb.jpg"
	},
	{
		uid: "0009",
		brand: "Apple",
		product: "Acessorio",
		model: "Cabo  de carregamento USB",
		color: "",
		capacity: "",
		value: 80,
		discount: 5,
		mainImage:"cabo-usb-iphone.png"
	},
	{
		uid: "0010",
		brand: "Apple",
		product: "Iphone",
		model: "14 Pro Max",
		color: "Roxo Profundo",
		capacity: "128gb",
		value: 7999,
		discount: 0,
		mainImage:"iphone-14-pro-max.png"
	},
	{
		uid: "0011",
		brand: "Apple",
		product: "Macbook",
		model: "Air",
		color: "Space Gray",
		capacity: "500gb",
		value: 10000,
		discount: 0,
		mainImage:"macbook-air-space-gray-select-201810.jpg"
	},
	{
		uid: "0012",
		brand: "Apple",
		product: "Airpod",
		model: "Pro",
		color: "Branco",
		capacity: "",
		value: 999.90,
		discount: 23,
		mainImage:"airpods_pro_branco.png"
	},
	{
		uid: "0013",
		brand: "Apple",
		product: "Watch",
		model: "SE",
		color: "Branco",
		capacity: "32gb",
		value: 999.12,
		discount: 0,
		mainImage:"Apple-watch-se-32gb.jpg"
	},
	{
		uid: "0014",
		brand: "Apple",
		product: "Acessorio",
		model: "Cabo  de carregamento USB",
		color: "",
		capacity: "",
		value: 80,
		discount: 0,
		mainImage:"cabo-usb-iphone.png"
	},
	{
		uid: "0015",
		brand: "Apple",
		product: "Macbook",
		model: "Air",
		color: "Space Gray",
		capacity: "500gb",
		value: 10000,
		discount: 11,
		mainImage:"macbook-air-space-gray-select-201810.jpg"
	},
	{
		uid: "0016",
		brand: "Apple",
		product: "Airpod",
		model: "Pro",
		color: "Branco",
		capacity: "",
		value: 999.90,
		discount: 23,
		mainImage:"airpods_pro_branco.png"
	},
	{
		uid: "0017",
		brand: "Apple",
		product: "Watch",
		model: "SE",
		color: "Branco",
		capacity: "32gb",
		value: 999.12,
		discount: 0,
		mainImage:"Apple-watch-se-32gb.jpg"
	},
];




function setProductItem(){
	let saleProductContent = document.querySelector('.item-container');
	let mainProductContent = document.querySelector('.item-container-grid');

	mainProductContent.innerHTML = '';
	saleProductContent.innerHTML = '';

	product.forEach((item)=>{
		if(item.discount==0){
			mainProductContent.innerHTML += `
				<div data="${item.uid}" class="item" onclick="productViewToggle(this)">
					<div class="item-image">
						<img src="./assets/media/${item.mainImage}">
					</div>
					<div class="item-description">
						<div class="product-name"> ${item.product} ${item.product} ${item.capacity==""?"":'('+item.capacity+')'} - ${item.color} </div>
						<div class="now">Por: R$ ${(item.value).toFixed(2)} </div>
						<div class="or">Ou 10x de R$ ${(item.value/10).toFixed(2)}</div>
					</div>
				</div>
			` 
		}else{
			let discount = item.discount==0?"":`<div class="discount"> `+item.discount+`% </div>`;
			saleProductContent.innerHTML += `
				<div data="${item.uid}" class="item" onclick="productViewToggle(this)"> 
					${discount} 
					<div class="item-image">
						<img src="./assets/media/${item.mainImage}">
					</div>
					<div class="item-description">
						<div class="product-name"> ${item.product} ${item.model} ${(item.capacity!=""?'('+item.capacity+')':"")} - ${item.color} </div>
						<div class="after">De: R$ ${(item.value).toFixed(2)}</div>
						<div class="now">Por: R$ ${(item.value - (item.discount/100*item.value)).toFixed(2)} <span> no pix </span></div>
						<div class="or">Ou 10x de R$ ${(item.value/10).toFixed(2)}</div>
					</div>
				</div>
			`
		}
	});
}

setProductItem();

//Product View

let productView = document.querySelector('.product-view');
let productViewStatus = false;

function productViewToggle(element = 'none'){
	setProductView(element);
	if(productViewStatus){
		productView.style.display = 'none';
		productViewStatus = false;
	}else{
		productView.style.display = 'flex';
		productViewStatus = true;
	}

	resetProductView();
}


function setProductView(element){
	let productView = document.querySelector('.product-view-container');
	if(element != 'none'){
		let content = product.filter((product)=> product.uid == element.getAttribute('data'));
		let productName = `${content[0].product} ${content[0].model} ${content[0].capacity} ${content[0].color} `;
		let productRef = `Ref ${content[0].uid}`;
		let productPriceAfter = `R$ ${content[0].value.toFixed(2)}`;
		let productNewPrice = `R$ ${(content[0].value - (content[0].discount/100 * content[0].value)).toFixed(2)}<span> no PIX</span>`;
		let productColor = content[0].color;
		let productCapacity = content[0].capacity;
		let productImage = content[0].mainImage;
		let productSale = `${content[0].discount}%`;
		let productPriceOr = `Ou <span> 10x </span> de <span>R$ ${(content[0].value/10).toFixed(2)}</span>`

		productView.querySelector('.section-image-container .image-container .main-image').setAttribute("src", "./assets/media/"+productImage);
		productView.querySelector('.section-product-name').innerHTML = productName;
		productView.querySelector('.section-product-ref').innerHTML = productRef;

		let oldValue = productView.querySelector('.section-after');
		oldValue.innerHTML = productPriceAfter;

		let sale = productView.querySelector('.section-sale');
		if(content[0].discount > 0){
			sale.innerHTML = productSale;
			sale.style.display = "inline";
			oldValue.style.display = "flex";
		}else{
			oldValue.style.display = "none";
			sale.style.display = "none";
		}

		productView.querySelector('.section-now').innerHTML = productNewPrice;
		productView.querySelector('.section-or').innerHTML = productPriceOr;
		productView.querySelector('.button').setAttribute("data-item", content[0].uid);

		let productDetail = productView.querySelectorAll('.section-product-view-title p');
		productDetail[0].innerHTML = productColor;
		productDetail[1].innerHTML = productCapacity;
	}
}

//Product View Click

let productContainer = document.querySelector(".item-container");

productView.addEventListener('click', (e)=>{
	if(e.target == productView){
		productViewToggle();
	}
});

//Cart Products
let cartList = [];

//Set Page Title

function setTitle(){
	let title = document.querySelector('title');
	let newTitle = cartList.length>0?`(${cartList.length}) iPhoneTop`:`iPhoneTop`;

	title.innerHTML = newTitle;
}

function setCartIconDescription(){
	let iconQtdContainer = document.querySelector('.icon-button p');
	if(cartList.length<=0){
		iconQtdContainer.innerHTML = '';
	}else if(cartList.length>0 && cartList.length<2){
		iconQtdContainer.innerHTML = `${cartList.length} Item`;
	}else{
		iconQtdContainer.innerHTML = `${cartList.length} Itens`;
	}
}

//Update Cart

function updateCart(){
	let cartContainer = document.querySelector('.cart');
	let cartTitle = cartContainer.querySelector('.cart-backBar-title');
	let cartEmpty = cartContainer.querySelector('.cart-empty');
	//Cart Itens
	let cartItemContainer = cartContainer.querySelector('.cart-item-container');
	let subTotal = 0.00;
	let discount = 0.00;
	let total = 0.00;

	//Cart Title
	if(cartList.length==0){
		cartTitle.innerHTML = `Cesta`;
		cartEmpty.style.display = "flex";
		cartItemContainer.style.display = "none"
	}else{
		cartEmpty.style.display = "none";
		cartItemContainer.style.display = "flex"
		cartTitle.innerHTML = `Cesta(${cartList.length})`;
	}

	cartItemContainer.innerHTML = '';

	cartList.forEach((item)=>{
		cartItemContainer.innerHTML += `
			<div class="cart-item">
				<div class="cart-item-img">
					<img src="./assets/media/${item.item.mainImage}">
				</div>
				<div class="cart-item-description">
					<h4> ${item.item.product} ${item.item.model} ${item.item.capacity!=""?'('+item.item.capacity+')':item.item.capacity} - ${item.item.color}</h4>
					<span> R$ ${item.item.value.toFixed(2)}  </span>
				</div>
				<div class="cart-item-qtdButton">
					<div class="cart-item-qtdButton-button-container">
						<label class="qtd-button">
							<input data-item="${item.item.uid}" type="number" min=0 value="${item.qtd}" onChange="updateCartItem(this)">
						</label>
					</div>
					<div data-item="${item.item.uid}" class="cart-item-qtdButton-del" onclick="removeCartItem(this)">
						<img src="./assets/icons/icon-trash.png">
					</div>
				</div>
			</div>
		`;

		subTotal += (item.item.value - (item.item.discount/100 *item.item.value)) * item.qtd;
		total = subTotal - discount;
	});

	let cartValue = cartContainer.querySelectorAll('.description-item-value');
	cartValue[0].innerHTML = `R$ ${subTotal.toFixed(2)}`;
	cartValue[1].innerHTML = `R$ ${discount.toFixed(2)}`;
	cartValue[2].innerHTML = `R$ ${total.toFixed(2)}`;

	setTitle();
	setCartIconDescription();
}

updateCart();


function setAddCartItem(elementUid){
	let content = product.filter((product)=> product.uid == elementUid.getAttribute('data-item'));
	let newItem = {
		item:content[0],
		qtd:1
	}

	let itemExist = cartList.filter((product)=> product.item.uid == content[0].uid);

	if(itemExist.length != 1){
		cartList.push(newItem);
	}else{
		cartList.forEach((cartItem)=>{
			if(cartItem.item.uid == content[0].uid){
				cartItem.qtd++;
			}
		});
	}
	setAlertAddCartItem(newItem);		
	updateCart();
}

let alertAddCartContainer = document.querySelector(".product-cart-alert");
let productViewContainer = document.querySelector('.product-view-container');

function setAlertAddCartItem(element){
	productViewContainer.style.display = "none";
	alertAddCartContainer.style.display = "flex";

	document.querySelector('.product-cart-alert-item-image img').setAttribute("src", './assets/media/'+element.item.mainImage);
	document.querySelector('.alert-item-name').innerHTML = `${element.item.product} ${element.item.model} ${element.item.capacity!=""?'('+element.item.capacity+')':element.item.capacity} ${ element.item.color!=""?' - '+element.item.color:""}`;
	document.querySelector('.alert-item-price .section-or').innerHTML = `10x de R$ ${(element.item.value/10).toFixed(2)}`;
	document.querySelector('.alert-item-price span').innerHTML = `Total a prazo R$ ${element.item.value.toFixed(2)}`;
	document.querySelector('.alert-item-pix-price .section-now').innerHTML = `R$ ${(element.item.discount!=0?element.item.value - (element.item.discount/100*element.item.value):element.item.value).toFixed(2)}`;

}

function closeAlertAddCartItem(){
	productViewContainer.style.display = "flex";
	alertAddCartContainer.style.display = "none";

	productViewToggle();
	setTimeout(()=>{
		return menuToggleCart();
	}, 500);
}

function resetProductView(){
	productViewContainer.style.display = "flex";
	alertAddCartContainer.style.display = "none";
}

function removeCartItem(elementUid){
	let itemExist = cartList.filter((product)=> product.item.uid != elementUid.getAttribute('data-item'));
	cartList = itemExist;

	updateCart();
}

function updateCartItem(element){
	if(element.value<1){
		removeCartItem(element);
	}else{
		cartList.forEach((item)=>{
			if(item.item.uid == element.getAttribute('data-item')){
				item.qtd = element.value;
			}
		});
	}

	updateCart();
}

let filters = [];
let lastCategory = "";

let mainContainer = document.querySelector('main');

function loadCategory(category = "Iphone"){

	if(category!=lastCategory){
		filters = [];
	}

	lastCategory = category;

	
	mainContainer.innerHTML = "";

	let categoryContent = product.filter((product)=> product.product == category);
	let categoryContentFilted = [];

	if(filters.length==0){
		categoryContentFilted = categoryContent;
	}else{
		filters.forEach((filter)=>{
			if(filters.indexOf(filter)==0){
				let newContent = categoryContent.filter((product)=> product[filter.type] == filter.value);
				categoryContentFilted = categoryContentFilted.concat(newContent);
			}else{
				categoryContentFilted = categoryContentFilted.filter((product)=> product[filter.type] == filter.value);
			}
		});
	}

	mainContainer.innerHTML = `
		<section>
			<div class="section-content">
				<div class="section-product-filter-grid">
					<div class="product-grid-filter-container">
						<div class="filter-title-container">
							<div class="filter-title">Filtros</div>
							<div class="filter-list">
								<!-- <div class="filter-list-item">14 Pro Max</div> -->
							</div>
						</div>
						<div class="filter-category-container">
							<div class="filter-category model">
								<div class="filter-title">Modelo</div>
								<ul>

								</ul>
							</div>
							<div class="filter-category capacity">
								<div class="filter-title">Armazenamento</div>
								<ul>

								</ul>
							</div>
							<div class="filter-category color">
								<div class="filter-title">Cor</div>
								<ul>

								</ul>
							</div>
						</div>
					</div>
					<div class="item-container-grid2">
						<!--
						<div class="item">
							<div class="item-image">
								<img src="./assets/media/iphone-14-pro-max.png">
							</div>
							<div class="item-description">
								<div class="product-name"> Iphone 14 Pro Max (128gb) - Roxo Amarelo Azul Branco Preto </div>
								<div class="after">De: R$ 10.000,00</div>
								<div class="now">Por: R$ 8.000,00</div>
								<div class="or">Ou 12x de R$ 720,57</div>
							</div>
						</div>
						-->
					</div>
				</div>
			</div>
		</section>
	`;

	let gridFilterContainer = mainContainer.querySelector(".filter-category-container");
	let gridFilterTitle = mainContainer.querySelector(".filter-title-container");
	let gridProductContainer = mainContainer.querySelector(".item-container-grid2");

	setFilterView(gridFilterTitle);

	gridProductContainer.innerHTML = "";

	let model = [];
	let capacity = [];
	let color = [];

	categoryContentFilted.forEach((product)=>{
		if(!model.includes(product.model)){
			product.model==""?null:model.push(product.model);
		}

		if(!capacity.includes(product.capacity)){
			product.capacity==""?null:capacity.push(product.capacity);
		}

		if(!color.includes(product.color)){
			product.color==""?null:color.push(product.color);
		}

		gridProductContainer.innerHTML += 
		`
			<div data="${product.uid}" class="item" onclick="productViewToggle(this)">
				${(product.discount!=0?`<div class="discount"> ${product.discount}% Off </div>`:"")}
				<div class="item-image">
					<img src="./assets/media/${product.mainImage}">
				</div>
				<div class="item-description">
					<div class="product-name"> ${product.product} ${product.model} ${product.capacity!=""?'('+product.capacity+')':product.capacity} ${ product.color!=""?' - '+product.color:""} </div>
					<div class="after">${(product.discount!=0?"De: R$ "+product.value.toFixed(2):"")}</div>
					<div class="now">Por: R$ ${(product.discount!=0?product.value - (product.discount/100*product.value):product.value).toFixed(2)}</div>
					<div class="or">Ou 10x de R$ ${(product.value/10).toFixed(2)}</div>
				</div>
			</div>
		`;		
	});


	gridFilterContainer.querySelector(".model ul").innerHTML = "";
	if(model.length>0){
		model.forEach((model)=>{
			gridFilterContainer.querySelector(".model ul").innerHTML += `<li onclick='addFilter("model", this)'>${model}</li>`;
		});	
	}else{
		gridFilterContainer.querySelector(".model").innerHTML = "";		
	}

	gridFilterContainer.querySelector(".capacity ul").innerHTML = "";
	if(capacity.length>0){
		capacity.forEach((capacity)=>{
			gridFilterContainer.querySelector(".capacity ul").innerHTML += `<li onclick='addFilter("capacity", this)'>${capacity}</li>`;
		});
	}else{
		gridFilterContainer.querySelector(".capacity").innerHTML = "";		
	}
	
	gridFilterContainer.querySelector(".color ul").innerHTML = "";
	if(color.length>0){
		color.forEach((color)=>{
			gridFilterContainer.querySelector(".color ul").innerHTML += `<li onclick='addFilter("color", this)'>${color}</li>`;
		});	
	}else{
		gridFilterContainer.querySelector(".color").innerHTML = "";
	}

	setMenuToggleFilter();
		
}

function addFilter(type, element){
	if(filters.filter((filter)=> filter.value==element.innerHTML).length==0){
		filters.push({
			type:type,
			value:element.innerHTML
		})
	}

	loadCategory(lastCategory);
}

function delFilter(element){
	filters.forEach((filter)=>{
		if(filter.value == element.innerHTML){
			filters.splice(filters.indexOf(filter), 1);
		}
	});

	loadCategory(lastCategory);
}

function setFilterView(elementContainer){
	let filterItemContainer = elementContainer.querySelector(".filter-list");
	filterItemContainer.innerHTML = "";

	filters.forEach((filter)=>{
		filterItemContainer.innerHTML += `<div onclick="delFilter(this)" class="filter-list-item">${filter.value}</div>`;
	});
}


//Search Bar

let searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e)=>{
	searchBar(e.target.value);
});

searchInput.addEventListener("change", (e)=>{
	cleanSearchFilter();
	searchBarContent(e.target.value);
})


let contentSearchResult = [];

function searchBar(search){
	let searchResultElement = document.querySelector(".result-search-bar");
	let searchResume = searchResultElement.querySelector("p");
	let searchResultContent = document.querySelector(".result-search-content");

	if(search.length>=2){
		searchResultElement.style.display = "flex";
	}else{
		searchResultElement.style.display = "none";
	}

	contentSearchResult = [];

	contentSearchResult = product.filter((product)=>{
		let productName = `${product.product} ${product.model} ${product.capacity!=""?product.capacity:product.capacity} ${ product.color!=""?' - '+product.color:""}`;
		return productName.toUpperCase().includes(search.toUpperCase());
	}); 

	searchResume.innerHTML = `Buscando por "${search}" - ${contentSearchResult.length} resultado(s)`;

	searchResultContent.innerHTML = "";

	contentSearchResult.forEach((searchItem)=>{
		searchResultContent.innerHTML += `
			<div data="${searchItem.uid}" class="result-search-item" onclick="productViewToggle(this)">
				<div class="result-search-item-image">
					<img src="./assets/media/${searchItem.mainImage}"/>
				</div>
				<div class="result-search-item-description">
					<div class="product-name"> ${searchItem.product} ${searchItem.model} ${searchItem.capacity!=""?searchItem.capacity:searchItem.capacity} ${ searchItem.color!=""?' - '+searchItem.color:""} </div>
					${(searchItem.discount>0?`<div class="after">De: R$ ${(searchItem.value).toFixed(2)}</div>`:"")}
					<div class="now">Por: R$ ${(searchItem.value - (searchItem.discount/100*searchItem.value)).toFixed(2)} <span> no pix </span></div>
					<div class="or">Ou 10x de R$ ${(searchItem.value/10).toFixed(2)}</div>
				</div>
				<div class="result-search-item-discount">
					${(searchItem.discount>0?`<div class="discount"> ${searchItem.discount}% Off </div>`:"")}
				</div>
			</div>
		`;
	});
}

let searchFilter = [];

function searchBarContent(search = ""){
	let searchResultElement = document.querySelector(".result-search-bar");
	searchResultElement.style.display = "none";

	let categoryContentFilted = [];

	if(searchFilter.length==0){
		categoryContentFilted = contentSearchResult;
	}else{
		searchFilter.forEach((filter)=>{
			if(searchFilter.indexOf(filter)==0){
				let newContent = contentSearchResult.filter((product)=> product[filter.type] == filter.value);
				categoryContentFilted = categoryContentFilted.concat(newContent);
			}else{
				categoryContentFilted = categoryContentFilted.filter((product)=> product[filter.type] == filter.value);
			}
		});
	}

	mainContainer.innerHTML = `
		<section>
			<div class="section-content">
				<div class="section-product-filter-grid">
					<div class="product-grid-filter-container">
						<div class="filter-title-container">
							<div class="filter-title">Filtros</div>
							<div class="filter-list">
								<!-- <div class="filter-list-item">14 Pro Max</div> -->
							</div>
						</div>
						<div class="filter-category-container">
							<div class="filter-category product">
								<div class="filter-title">Modelo</div>
								<ul>

								</ul>
							</div>
							<div class="filter-category model">
								<div class="filter-title">Modelo</div>
								<ul>

								</ul>
							</div>
							<div class="filter-category capacity">
								<div class="filter-title">Armazenamento</div>
								<ul>

								</ul>
							</div>
							<div class="filter-category color">
								<div class="filter-title">Cor</div>
								<ul>

								</ul>
							</div>
						</div>
					</div>
					<div class="item-container-grid2">
						<!--
						<div class="item">
							<div class="item-image">
								<img src="./assets/media/iphone-14-pro-max.png">
							</div>
							<div class="item-description">
								<div class="product-name"> Iphone 14 Pro Max (128gb) - Roxo Amarelo Azul Branco Preto </div>
								<div class="after">De: R$ 10.000,00</div>
								<div class="now">Por: R$ 8.000,00</div>
								<div class="or">Ou 12x de R$ 720,57</div>
							</div>
						</div>
						-->
					</div>
				</div>
			</div>
		</section>
	`;

	let gridFilterContainer = mainContainer.querySelector(".filter-category-container");
	let gridFilterTitle = mainContainer.querySelector(".filter-title-container");
	let gridProductContainer = mainContainer.querySelector(".item-container-grid2");

	setSearchFilterView(gridFilterTitle);
	
	gridProductContainer.innerHTML = "";

	let product = [];
	let model = [];
	let capacity = [];
	let color = [];

	categoryContentFilted.forEach((productItem)=>{
		if(!product.includes(productItem.product)){
			productItem.product==""?null:product.push(productItem.product);
		}

		if(!model.includes(productItem.model)){
			productItem.model==""?null:model.push(productItem.model);
		}

		if(!capacity.includes(productItem.capacity)){
			productItem.capacity==""?null:capacity.push(productItem.capacity);
		}

		if(!color.includes(productItem.color)){
			productItem.color==""?null:color.push(productItem.color);
		}

		gridProductContainer.innerHTML += 
		`
			<div data="${productItem.uid}" class="item" onclick="productViewToggle(this)">
				${(productItem.discount!=0?`<div class="discount"> ${productItem.discount}% Off </div>`:"")}
				<div class="item-image">
					<img src="./assets/media/${productItem.mainImage}">
				</div>
				<div class="item-description">
					<div class="product-name"> ${productItem.product} ${productItem.model} ${productItem.capacity!=""?'('+productItem.capacity+')':productItem.capacity} ${ productItem.color!=""?' - '+productItem.color:""} </div>
					<div class="after">${(productItem.discount!=0?"De: R$ "+productItem.value.toFixed(2):"")}</div>
					<div class="now">Por: R$ ${(productItem.discount!=0?productItem.value - (productItem.discount/100*productItem.value):productItem.value).toFixed(2)}</div>
					<div class="or">Ou 10x de R$ ${(productItem.value/10).toFixed(2)}</div>
				</div>
			</div>
		`;		
	});

	gridFilterContainer.querySelector(".product ul").innerHTML = "";
	if(product.length>0){
		product.forEach((product)=>{
			gridFilterContainer.querySelector(".product ul").innerHTML += `<li onclick='addSearchFilter("product", this)'>${product}</li>`;
		});	
	}else{
		gridFilterContainer.querySelector(".product").innerHTML = "";		
	}

	gridFilterContainer.querySelector(".model ul").innerHTML = "";
	if(model.length>0){
		model.forEach((model)=>{
			gridFilterContainer.querySelector(".model ul").innerHTML += `<li onclick='addSearchFilter("model", this)'>${model}</li>`;
		});	
	}else{
		gridFilterContainer.querySelector(".model").innerHTML = "";		
	}

	gridFilterContainer.querySelector(".capacity ul").innerHTML = "";
	if(capacity.length>0){
		capacity.forEach((capacity)=>{
			gridFilterContainer.querySelector(".capacity ul").innerHTML += `<li onclick='addSearchFilter("capacity", this)'>${capacity}</li>`;
		});
	}else{
		gridFilterContainer.querySelector(".capacity").innerHTML = "";		
	}
	
	gridFilterContainer.querySelector(".color ul").innerHTML = "";
	if(color.length>0){
		color.forEach((color)=>{
			gridFilterContainer.querySelector(".color ul").innerHTML += `<li onclick='addSearchFilter("color", this)'>${color}</li>`;
		});	
	}else{
		gridFilterContainer.querySelector(".color").innerHTML = "";
	}

	setMenuToggleFilter();
}

function addSearchFilter(type, element){
	if(searchFilter.filter((filter)=> filter.value==element.innerHTML).length==0){
		searchFilter.push({
			type:type,
			value:element.innerHTML
		})
	}

	searchBarContent();
}

function delSearchFilter(element){
	searchFilter.forEach((filter)=>{
		if(filter.value == element.innerHTML){
			searchFilter.splice(filters.indexOf(filter), 1);
		}
	});

	searchBarContent();
}

function setSearchFilterView(elementContainer){
	let filterItemContainer = elementContainer.querySelector(".filter-list");
	filterItemContainer.innerHTML = "";

	searchFilter.forEach((filter)=>{
		filterItemContainer.innerHTML += `<div onclick="delSearchFilter(this)" class="filter-list-item">${filter.value}</div>`;
	});
}

function cleanSearchFilter() {
	searchFilter = [];
}


//Show menu functions


let menuItemView = false;

function showMenuToggle(){
	let nav = document.querySelector(".nav");

	if(menuItemView){
		setTimeout(()=>nav.style.display = "none",400);
		nav.style.height = "0vh";
		menuItemView = false;		
	}else{
		nav.style.display = "flex";
		setTimeout(()=>nav.style.height = "100vh",100);
		menuItemView = true;
	}
}

function setSearchFocus(){
	document.querySelector(".search-input-container input").focus();
}

function setMenuToggle(){
	let menuToggleBar = document.querySelector(".navMobile");

	menuToggleBar.innerHTML = `
		<div class="navMobileButton" onclick="{showMenuToggle()}">
			<img src="./assets/icons/icon-menu.png">
		</div>
		<div class="navMobileButton" onclick="{setSearchFocus()}">
			<img src="./assets/icons/icon-search.png">
		</div>
		<div class="navMobileButton" onclick="{menuToggleCart()}">
			<img src="./assets/icons/icon-cart-gray.png">
		</div>
	`;
}

setMenuToggle();

function setMenuToggleFilter(){
	let menuToggleBar = document.querySelector(".navMobile");

	menuToggleBar.innerHTML = `
		<div class="navMobileButton" onclick="{showMenuToggle()}">
			<img src="./assets/icons/icon-menu.png">
		</div>
		<div class="navMobileButton" onclick="{setSearchFocus()}">
			<img src="./assets/icons/icon-search.png">
		</div>
		<div class="navMobileButton" onclick="{showFilterToggle()}">
			<img src="./assets/icons/icon-filter.png">
		</div>
		<div class="navMobileButton" onclick="{menuToggleCart()}">
			<img src="./assets/icons/icon-cart-gray.png">
		</div>
	`;
}


let filterView = false;

function showFilterToggle(){
	let filterContainer = document.querySelector(".product-grid-filter-container");
	let filterSize = "50vw";

	let screenSize = window.screen.width;

	screenSize<=450?filterSize = "100vw":null;

	if(filterView){
		setTimeout(()=>filterContainer.style.display = "none",300);
		filterContainer.style.width = "0vw";
		filterView = false;
	}else{
		filterContainer.style.display = "flex";
		setTimeout(()=>filterContainer.style.width = filterSize ,100);
		filterView = true;
	}
}


/*
function showMenuToggle(){
	let nav = document.querySelector(".nav");

	if(menuItemView){
		setTimeout(()=>nav.style.display = "none",400);
		nav.style.height = "calc(0vh - 100px)";
		menuItemView = false;		
	}else{
		nav.style.display = "flex";
		setTimeout(()=>nav.style.height = "calc(100vh - 100px)",100);
		menuItemView = true;
	}
}
*/
