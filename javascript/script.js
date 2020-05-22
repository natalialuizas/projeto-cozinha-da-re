const criarCardsProdutos = (produtos) =>

    produtos.reduce((accumulator, {nome,descricao,valor,imgUrl}) => {
        
        accumulator +=`
        <div class="card card__border card__tamanho">
        <div class="card__box__img">
                        <img class="card-img-top card__img" src="${imgUrl}" alt="Imagem de capa do card">
                        </div>
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title titulo__produto-card card__test ">${nome}</h5>
                            <p class="card-text text__descricao card__test2 ">${descricao}</p>
                            <div class="card-informacao ">
                                <p class="card-text text__preco">${valor}</p>
                                
                                <div class="card-delivery">
                                    <a  class="btn-comprar" href="https://api.whatsapp.com/send?phone=5511988390192&text=Seja%20bem-vindxs%20a%20cozinha%20da%20R%C3%AA!">
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
     slidesToShow: 4,
     slidesToScroll: 4,
     prevArrow: $("#arrow-prev"), 
     nextArrow: $("#arrow-next"), 
     responsive: [
       {
         breakpoint: 1200,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3, 
         }
       },
       {
         breakpoint: 985,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
    });
   
   
   
   })