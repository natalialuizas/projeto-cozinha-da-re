const criarCardsProdutos = (produtos) =>

    produtos.reduce((accumulator, {nome,descricao,valor,imgUrl}) => {
        
        accumulator +=`
        <div class="card">
                        <img class="card-img-top" src="${imgUrl}" alt="Imagem de capa do card">
                        <div class="card-body">
                            <h5 class="card-title text-left">${nome}</h5>
                            <p class="card-text text-left text-descricao">${descricao}</p>
                            <div class="card-informacao ">
                                <p class="card-text text-left text-preco">${valor}</p>
                                
                                <div class="card-delivery">
                                    <a  class="btn-comprar" href="https://api.whatsapp.com/send?phone=5511988390192&text=trouxa">
                                     Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        return accumulator;
    },'')



const inserirCardsPage = (cards) =>{
    const cardDeck = document.querySelector('.card-deck')
    cardDeck.innerHTML = cards

}

const carregarCards = () => {
    Promise.all(produtos)
      .then(criarCardsProdutos)
      .then(inserirCardsPage);
  };
  carregarCards();

  $(function() {

    $('.card-deck').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     prevArrow: $("#arrow-prev"), 
     nextArrow: $("#arrow-next"), 
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
    });
   
   
   
   })