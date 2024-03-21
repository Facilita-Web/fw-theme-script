// Seletor para encontrar e remover a div com a classe span8, referente a "Bem-vindo, identifique-se para fazer pedidos" com a url: https://www.temperodocampo.com.br/conta/login
$(document).ready(function () {
  $(".superior .span8").remove();
});

$(document).ready(function () {
  $(".conteudo-topo .superior.row-fluid.hidden-phone").remove();
});

/////////////////////////////////////////////////////

$(document).ready(function () {
  // Verificar se o usuário está logado
  const isUserLogged = Cookies.get("LI-isUserLogged") === "true";

  // Criação da nova div minha-conta-fw
  var minhaContaDiv = $(
    '<div class="minha-conta-fw">' +
      '<div class="minha-conta-fw-login">' +
      '<i  > <svg class="stroke-color" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></i> <span>Minha Conta</span>' +
      "</div>" +
      '<ul class="conta-ul conta-hidden">' +
      "<li>" +
      '<a href="https://www.temperodocampo.com.br/conta/pedido/listar" class="cor-secundaria">Meus Pedidos</a>' +
      "</li>" +
      "<li>" +
      '<a href="https://www.temperodocampo.com.br/conta/index" class="cor-secundaria">Minha Conta</a>' +
      "</li>" +
      "<li>" +
      '<a href="https://www.temperodocampo.com.br/conta/favorito/listar" class="cor-secundaria">Meus Favoritos</a>' +
      "</li>" +
      "</ul>" +
      "</div>"
  );

  // Adição do botão "Entrar" ou "Logout" com base no estado de login
  if (isUserLogged) {
    // Se o usuário estiver logado, adicione o botão de Logout
    minhaContaDiv
      .find(".conta-ul")
      .append(
        '<li><a href="https://www.temperodocampo.com.br/conta/logout">Sair</a></li>'
      );
  } else {
    // Se o usuário não estiver logado, adicione o botão de Entrar
    minhaContaDiv
      .find(".conta-ul")
      .append(
        '<li class="botao fundo-secundario"><a href="https://www.temperodocampo.com.br/conta/login">Entre ou cadastre-se</a></li>'
      );
  }

  // Adição da nova div minha-conta-fw após a div "carrinho vazio"
  $(".span4.hidden-phone .carrinho").after(minhaContaDiv);

  // Adição de eventos de hover com animações de fade
  minhaContaDiv.hover(
    function () {
      // Função executada ao passar o mouse
      // Exibe a lista com fade in
      minhaContaDiv.find(".conta-ul").stop().fadeIn(100);
    },
    function () {
      // Função executada ao remover o mouse
      // Oculta a lista com fade out
      minhaContaDiv.find(".conta-ul").stop().fadeOut(100);
    }
  );
});

///////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // SVG para o carrinho
  var carrinhoSVG =
    '<i > <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-color"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></i>';

  // Substituir o ícone do carrinho
  $(".carrinho a i.icon-shopping-cart").replaceWith(carrinhoSVG);
});

////////////////////Removendo textos carrinho vazio e meu carrinho

$(document).ready(function () {
  $(
    "#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div > div.span4.hidden-phone > div.carrinho.vazio > a > span.titulo.cor-secundaria.vazio-text"
  ).remove();
  $(
    "#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div > div.span4.hidden-phone > div.carrinho > a > span:nth-child(3)"
  ).remove();
});
///////////////////////////Removendo icone de cart do carrinho suspenso

$(document).ready(function () {
  $(
    "#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div > div.span4.hidden-phone > div.carrinho > div > div > div > a > i"
  ).remove();
});

//////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // Remove a div row-fluid existente
  $(".barra-inicial.fundo-secundario .conteiner .row-fluid").remove();

  // Adiciona uma nova div row-fluid com ordem invertida
  $(".barra-inicial.fundo-secundario .conteiner").append(
    '<div class="row-fluid">' +
      '<div class="canais-contato span9">' +
      "<ul>" +
      '<li class="hidden-phone contato-position" id="fale-conosco-li">' +
      '<a href="#modalContato" data-toggle="modal" data-target="#modalContato">' +
      '<i class="icon-comment icone-fale-conosco icone-contatos"></i> <span class="contato-text">Fale Conosco</span>' +
      "</a>" +
      "</li>" +
      '<li class="hidden-phone contato-position">' +
      "<span>" +
      '<i class="icon-phone icone-telefone icone-contatos"></i> <span class="contato-text">(47) 3091-0630</span>' +
      "</span>" +
      "</li>" +
      '<li class="tel-whatsapp contato-position">' +
      "<span>" +
      '<i class="fab fa-whatsapp icone-whatsapp icone-contatos"></i> <span class="contato-text">(47) 99661-2217</span>' +
      "</span>" +
      "</li>" +
      "</ul>" +
      "</div>" +
      '<div class="lista-redes span3 hidden-phone">' +
      "<ul>" +
      "<li>" +
      '<a href="https://facebook.com/temperodocampo" target="_blank" aria-label="Siga nos no Facebook"><i class="icon-facebook fab"></i></a>' +
      "</li>" +
      "<li>" +
      '<a href="https://instagram.com/temperodocampo" target="_blank" aria-label="Siga nos no Instagram"><i class="icon-instagram fab"></i></a>' +
      "</li>" +
      "</ul>" +
      "</div>" +
      "</div>"
  );
});

//////////////////////////////////////////////////////////
$(document).ready(function () {
  // Criação da nova div de idiomas
  var idiomasDiv = $(
    '<div class="span10 idiomas">' +
      '<button class="botao-idioma" id="ptBotao"></button>' +
      '<button class="botao-idioma" id="engBotao"></button>' +
      '<button class="botao-idioma" id="esBotao"></button>' +
      "</div>"
  );

  // Adiciona a nova div entre as divs filho da div "inferior row-fluid"
  $(".span8.busca-mobile").after(idiomasDiv);
});

//////////////////////////////////////////////////
//Barra superior fixa

$(document).ready(function () {
  var barraAltura = $(".barra-inicial").outerHeight();
  var cabecalho = $("#cabecalho");
  var cabecalhoAltura = cabecalho.outerHeight();

  // Armazena a altura do cabeçalho

  // Adiciona um espaço reservado no lugar do cabeçalho
  var espacoReservado = $("<div class='espaco-reservado'></div>");
  espacoReservado.css("height", cabecalhoAltura + "px");
  cabecalho.before(espacoReservado);

  // Adiciona classe ao #cabecalho ao rolar
  $(window).scroll(function () {
    if ($(this).scrollTop() > barraAltura) {
      cabecalho.addClass("fixo-no-topo");
      espacoReservado.show(); // Esconde o espaço reservado quando o cabeçalho está fixo
    } else {
      cabecalho.removeClass("fixo-no-topo");
      espacoReservado.hide(); // Mostra o espaço reservado quando o cabeçalho não está fixo
    }
  });
});
/////////////////////////////////////////////////////////
//Adicionar sessões de imagens de destaque:
$(document).ready(function () {
  // Verifique se a página atual é a página principal ou possui parâmetro de idioma
  var currentUrl = window.location.href;

  if (
    currentUrl === "https://www.temperodocampo.com.br/" ||
    currentUrl === "https://www.temperodocampo.com.br/?lang=pt" ||
    currentUrl === "https://www.temperodocampo.com.br/?lang=eng" ||
    currentUrl === "https://www.temperodocampo.com.br/?lang=es" ||
    currentUrl === "http://127.0.0.1:5500/index.html?lang=pt" ||
    currentUrl === "http://127.0.0.1:5500/index.html?lang=eng" ||
    currentUrl === "http://127.0.0.1:5500/index.html?lang=es" ||
    currentUrl === "https://tempero-do-campo.vercel.app/" ||
    currentUrl === "https://tempero-do-campo.vercel.app/?lang=es" ||
    currentUrl === "https://tempero-do-campo.vercel.app/?lang=pt" ||
    currentUrl === "https://tempero-do-campo.vercel.app/?lang=eng"
  ) {
    // Array com as informações de cada banner
    var banners = [
      { url: bannerExposicaoUrl1, img: bannerExposicaoImg1 },
      { url: bannerExposicaoUrl2, img: bannerExposicaoImg2 },
      { url: bannerExposicaoUrl3, img: bannerExposicaoImg3 },
      { url: bannerExposicaoUrl4, img: bannerExposicaoImg4 },
      { url: bannerExposicaoUrl5, img: bannerExposicaoImg5 },
    ];

    // Crie uma nova div com a classe sessao-exposicao
    var divSessaoExposicao = $('<div class="sessao-exposicao"></div>');

    // Adicione a nova div antes da div com a classe secao-banners
    $(".secao-banners").after(divSessaoExposicao);

    // Crie uma nova div pai com a classe sessao-exposicao-container
    var divExposicaoContainer = $(
      '<div class="sessao-exposicao-container"></div>'
    );

    // Crie containers adicionais para os banners superiores e inferiores
    var divSuperiorContainer = $('<div class="superior-expo-container"></div>');
    var divInferiorContainer = $('<div class="inferior-expo-container"></div>');

    // Percorra a array de banners e anexe os elementos correspondentes
    banners.forEach(function (banner, index) {
      var exposicaoItem = $(
        `<div class="sessao-exposicao-item exposicao-${index + 1} ${
          index < 2 ? "superior-expo-banner" : "inferior-expo-banner"
        }">` +
          `<a href="${banner.url}"><img class="img-exposicao img-exposicao-${
            index + 1
          }" src="${
            banner.img
          }" alt="Cheque novamente o tutorial e veja onde errou"></a>` +
          `</div>`
      );

      // Adicione o exposicaoItem ao container correspondente
      index < 2
        ? divSuperiorContainer.append(exposicaoItem)
        : divInferiorContainer.append(exposicaoItem);
    });

    // Adicione os containers superior e inferior ao divExposicaoContainer
    divExposicaoContainer.append(divSuperiorContainer, divInferiorContainer);

    // Adicione a nova div pai com a classe sessao-exposicao-container e adicione a divExposicaoContainer como filho
    divSessaoExposicao.append(divExposicaoContainer);
  }
});

//////////////////////////////////////////////////////////////////////////

$(window).on("load", function () {
  var subtituloLancamentos = "Confira nossos mais novos produtos!";
  var categorias = [];
  var subtitulosConfig = window.subtitulosConfig || {};

  // Adiciona sempre a categoria "lancamentos"
  categorias.push({
    categoria: "lancamentos",
    id: "lancamentos",
    subtitulo: subtituloLancamentos,
    classeOrignal: "lancamento",
  });

  // Itera sobre as tags <a> e adiciona as categorias dinamicamente
  $(".titulo-categoria.borda-principal.cor-principal").each(function (
    index,
    elemento
  ) {
    var classeOriginal = $(elemento)
      .attr("class")
      .match(/vitrine-(\d+)/);
    if (classeOriginal) {
      var subtituloCategoria =
        subtitulosConfig["subtituloCategoria" + index] || "";

      categorias.push({
        categoria: "meus-" + classeOriginal[1],
        id: "meus-" + classeOriginal[1],
        subtitulo: subtituloCategoria,
        classeOrignal: classeOriginal[1],
      });
    }
  });

  // Agora o array categorias está dinâmico
  console.log(categorias);

  // Itera sobre as categorias e realiza as operações necessárias
  categorias.forEach(function (categoria) {
    var elementoCategoria = $(
      ".titulo-categoria.borda-principal.cor-principal.vitrine-" +
        categoria.classeOrignal
    );
    elementoCategoria.attr("id", categoria.id);

    var spanElement = $("<span>", {
      text: categoria.subtitulo,
      class: "span-" + categoria.categoria + " span-subtitulo",
    });

    $("#" + categoria.id).append(spanElement);
  });
});

/////////////////////////////////
$(window).on("load", function () {
  // Seu código jQuery aqui// Adiciona uma classe à div entre "preco-produto destaque-preco" e "preco-promocional cor-principal titulo"
  $(".preco-produto.destaque-preco > div:first-child").addClass(
    "preco-total-fw"
  );
  $(".preco-produto.destaque-preco > div:nth-child(2)").addClass("valores");

  $(".desconto-a-vista").each(function () {
    // Encontrar o elemento div.valores mais próximo antes do elemento atual
    var divValores = $(this).prev(".valores");

    // Se a div.valores não existir, crie-a antes de mover o elemento
    if (divValores.length === 0) {
      divValores = $('<div class="valores"></div>').insertBefore(this);
    }

    // Mover o elemento desconto-a-vista para dentro da div.valores
    $(this).appendTo(divValores);
    // Adicionar a classe "strong-fw" a todas as strongs dentro da div.valores
    divValores.find("strong").addClass("strong-fw");
    $(".acoes-produto a").addClass("botao-fw");
    $(".acoes-produto a i").remove();
  });
});
////////////////////////////////////////////////
$(document).ready(function () {
  // Remover o elemento com o ID "barraNewsletter"
  $("#barraNewsletter").remove();
});
/////////////////////////////////////////// ADICIONANDO SESSÃO REDES SOCIAIS////////////////////////////////////////
$(document).ready(function () {
  // Criar a div "sessao-redes-sociais" e adicionar a classe "conteiner"
  var novaSessaoRedesSociais = $("<div>", {
    id: "sessao-redes-sociais",
    class: "sessao-redes-sociais", // Adicionando as classes "conteiner" e "sessao-redes-sociais"
  });

  // Criar a div "sessao-redes-sociais-conteiner" e adicionar a classe "conteiner"
  var divRedesSociaisConteiner = $("<div>", {
    class: "sessao-redes-sociais-conteiner", // Adicionando as classes "conteiner" e "sessao-redes-sociais-conteiner"
  });

  // Adicionar a div "sessao-redes-sociais-conteiner" dentro da div "sessao-redes-sociais"
  novaSessaoRedesSociais.append(divRedesSociaisConteiner);

  divRedesSociaisConteiner.html(`
  
    <div class="redes-sociais-title">
    <h2>Siga-nos nas redes sociais</h2>
    </div>
    <div class="redes-sociais-links"> <div class="instagram-redes-sociais-siga"><a target="_blank" href="https://instagram.com/temperodocampo" aria-label="Instagram de Tempero do Campo">    
    <span class="redes-icons">
    <i class="fab fa-instagram"></i>
    
      <h2 class="">@temperodocampo</h2>
    </span>
  </a></div>
  
  <div class="facebook-redes-sociais-siga">  <a target="_blank" href="https://www.facebook.com/temperodocampo" aria-label="Facebook de Tempero do Campo">    
  
  <span class="redes-icons">
  <i class="fab fa-facebook-square"></i>
    <h2 class="">/temperodocampo</h2>
  </span>
  </a></div></div>
   
  
  `);

  // Adicionar a nova div entre "corpo" e "rodapé"
  $("#corpo").after(novaSessaoRedesSociais);
});
//////////////////////////////////////////////////////Div Pagamentos
$(document).ready(function () {
  var divMetodosPagamento = $("<div>", {
    id: "pagamento-seguro",
    class: "sessao-pagamento-seguro",
  });

  var metodosPagamentoConteiner = $("<div>", {
    class: "pagamento-seguro-conteiner",
  });

  divMetodosPagamento.append(metodosPagamentoConteiner);

  metodosPagamentoConteiner.html(`
    <div class="compra-segura-titulo">
      <h2>Liberdade e segurança para pagar como quiser</h2>
    </div>
    <ul class="metodos-pagamento">
      <li class="cartao-de-credito-metodo metodo-pagamento">
        <i class="fas fa-credit-card"></i>
        <span class="metodo-texto">Cartões de crédito</span>
      </li>
      <li class="pix-metodo metodo-pagamento">
        <i class="pix-icone"><img class="pix-imagem" src="https://cdn.awsli.com.br/1887/1887246/arquivos/facilitaweb-pix.svg"></i>
      </li>
      <li class="boleto-bancario-metodo metodo-pagamento">
        <i class="fas fa-barcode"></i>
        <span class="metodo-texto">Boleto Bancário</span>
      </li>
      <li class="compra-segura-metodo metodo-pagamento">
        <i class="pix-icone"><img class="compra-segura-imagem" src="https://cdn.awsli.com.br/1887/1887246/arquivos/facilitaweb-compra-segura.png"></i>
      </li>
    </ul>
  `);

  $("#sessao-redes-sociais").after(divMetodosPagamento);
});
//////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // Remover o elemento com o ID "barraNewsletter"
  $(".pagamento-selos").remove();
  $(
    "#rodape > div.institucional.fundo-secundario > div > div > div.span3 > div"
  ).remove();
});

//////////////////////////
$(document).ready(function () {
  // Seleciona a última div dentro de #rodape
  var divInferior = $("#rodape > div:last-child");

  // Seleciona a div "institucional fundo-secundario"
  var divInstitucional = $("#rodape .institucional.fundo-secundario");

  // Move a div inferior para dentro da div "institucional fundo-secundario"
  divInstitucional.append(divInferior);
});
/////////////////////////////////////

////////Removendo coisas do rodapé///////
$(document).ready(function () {
  $(
    "#rodape > div > div.conteiner > div > div.span9 > div > div.span4.links-rodape.links-rodape-categorias"
  ).remove();
  $("#rodape > div > div.conteiner > div > div.span3").remove();
  $(
    "#rodape > div > div.conteiner > div > div > div > div.span12.visible-phone"
  ).remove();
  $(
    "#rodape > div > div.conteiner > div > div > div > div.span4.sobre-loja-rodape > span"
  ).remove();
});

$(document).ready(function () {
  // Modificar o texto "Sobre a loja" para "Institucional"
  $(".span4.links-rodape .titulo").text("Institucional");

  // Adicionar uma imagem entre <span class="titulo"> e <p>
  var imagemURL =
    "https://cdn.awsli.com.br/400x300/1887/1887246/logo/6300cdd9db.png";
  var imagemHTML =
    '<img class="logo-rodape" src="' +
    imagemURL +
    '" alt="Logo Tempero do Campo">';
  $(".span4.sobre-loja-rodape p").before(imagemHTML);
});

$(document).ready(function () {
  $("#rodape > div > div.conteiner > div > div").addClass("cor-preta");
});

///////////////////////adicionando divs novas ao rodapé

$(document).ready(function () {
  // Definindo variáveis

  // Adiciona a div "atendimento-rodape" antes da div "links-rodape"
  $(".links-rodape").before('<div class="span4 contato-rodape"></div>');

  // Conteúdo para a div "contato-rodape"
  $(".contato-rodape").html(`
    <span class="titulo">Atendimento</span>
    <ul class="atendimento-lista">
      <li>
        <i class="fas fa-phone"></i>
        ${temperoDoCampoTelefone}
      </li>
      <li>
        <i class="fab fa-whatsapp"></i>
        ${temperoDoCampoWhatsapp}
      </li>
      <li>
        <i class="fas fa-at"></i>
        <a href="mailto:${temperoDoCampoEmail}">${temperoDoCampoEmail}</a>
      </li>
      <li>
        <i class="far fa-clock"></i>
        ${horarioAtendimento}
      </li>
      <li>
        <i class="fas fa-map-marker-alt"></i>
        <a href="${mapaLink}" target="_blank">${endereco}</a>
      </li>
    </ul>

    <span class="titulo">Redes Sociais</span>
    <ul class="redes-sociais-lista-rodape">
      <li><a target="_blank" href="${facebookLink}" aria-label="Facebook de Tempero do Campo"><i class="fab fa-facebook facebook-rodape icone-redes-sociais-rodape"></i></a></li>
      <li><a target="_blank" href="${instagramLink}" aria-label="Instagram de Tempero do Campo"><i class="fab fa-instagram instagram-rodape icone-redes-sociais-rodape"></i></a></li>
    </ul>
  `);
});

///////////////adicionando logo facilita ao rodapé

$(document).ready(function () {
  // Seletor do elemento após o qual você quer adicionar a nova tag
  var elementoExistente = $(
    "#rodape > div > div:nth-child(2) > div > div > div:nth-child(2) > a"
  );

  // Crie a nova tag <a> com <img>
  var novaTag = $("<a>", {
    href: "https://facilitaweb.com/",
    title: "Facilita Web ;) - Experiências Digitais",
    target: "_blank",
    style:
      "opacity: 1 !important; display: inline-block !important; visibility: visible !important; margin: 0 !important; position: static !important; overflow: visible !important;",
  }).append(
    '<img class="logo-facilita" src="https://cdn.awsli.com.br/1887/1887246/arquivos/logo-facilitaweb.svg" alt="Logomarca Facilita Web" style="opacity: 1 !important; display: inline !important; visibility: visible !important; margin: 0 !important; position: static !important; max-width: 1000px !important; max-height: 1000px !important;">'
  );

  // Adicione a nova tag após o elemento existente
  elementoExistente.after(novaTag);
});

////////////////////////////PÁGINAS ESPECIFICAS DOS PRODUTOS
$(document).ready(function () {
  // Remover elementos se existirem
  var elemento1 = $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div:nth-child(1)"
  );
  var elemento2 = $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div.menu.lateral.outras"
  );
  var elemento3 = $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3 > div.row-fluid"
  );
  var elemento4 = $("#corpo > div > div.breadcrumbs.borda-alpha");
  var elemento5 = $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > h1"
  );

  if (elemento1.length > 0) {
    elemento1.remove();
  }

  if (elemento2.length > 0) {
    elemento2.remove();
  }

  if (elemento3.length > 0) {
    elemento3.remove();
  }

  if (elemento4.length > 0) {
    elemento4.remove();
  }

  if (elemento5.length > 0) {
    elemento5.remove();
  }
});

$(document).ready(function () {
  // Seleciona o elemento "componente" e o move imediatamente antes da div com id "listagemProdutos"
  $("#listagemProdutos").before($(".coluna.span3 .componente"));
});

$(document).ready(function () {
  // Verifica se o elementoDiv existe
  var elementoDiv = $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.coluna.span3"
  );

  if (elementoDiv.length > 0) {
    // Defina a posição inicial da div para oculta à esquerda
    elementoDiv.css("left", "-530px");

    // Defina a posição de rolagem para o topo
    $(window).scrollTop(0);

    var divOffset = elementoDiv.offset().top;

    // Subtrai 100 pixels para começar a animação um pouco antes do início da sessao-redes-sociais
    var startScroll = $("#sessao-redes-sociais").offset().top - 700;
    var windowHeight = $(window).height();

    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();

      if (scrollPos >= divOffset && scrollPos < startScroll) {
        elementoDiv.stop().animate({ left: "1px" }, 200);
      } else {
        elementoDiv.stop().animate({ left: "-530px" }, 200);
      }

      // Adiciona uma nova condição para verificar se a rolagem atingiu o ponto antes da sessao-redes-sociais
      if (scrollPos >= startScroll) {
        // Se atingiu, faça a div voltar para a posição original
        elementoDiv.stop().animate({ left: "-530px" }, 200);
      }
    });
  }
});

$(document).ready(function () {
  // Seleciona todas as labels dentro das li
  $("div.coluna.span3 li label").each(function () {
    // Obtém o texto da label
    var labelText = $(this).text();

    // Aplica negrito apenas aos números e cifrões usando expressão regular
    var boldText = labelText.replace(/[\d\.,]+|\R\$/g, function (match) {
      return "<b>" + match + "</b>";
    });

    // Substitui o texto original pelo texto com os números e cifrões em negrito
    $(this).html(boldText);
  });
});

$(document).ready(function () {
  $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div.componente > div > h4 > i"
  ).remove();
});

//////////////////////////////////////////////////////remover borda final do corpo
$(document).ready(function () {
  $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div.ordenar-listagem.rodape.borda-alpha"
  ).remove();
});

/////////////////////////////////bandeiras dos produtos
$(document).ready(function () {
  // Função para adicionar o elemento no DOM
  function adicionarElementoNoDOM() {
    // Crie um elemento <i> com a classe desejada e insira o SVG dentro dele
    var iconElement = $("<i>", {
      html: '<svg id="checkout-cart" xmlns="http://www.w3.org/2000/svg" data-name=" icons" viewBox="0 0 24 24" id="checkout"><path d="M18.2607422,4.9472656l-1.2929688,1.2929688-.2929688-.2929688c-.390625-.390625-1.0234375-.390625-1.4140625,0s-.390625,1.0234375,0,1.4140625l1,1c.1953125,.1953125,.4511719,.2929688,.7070312,.2929688s.5117188-.0976562,.7070312-.2929688l2-2c.390625-.390625,.390625-1.0234375,0-1.4140625s-1.0234375-.390625-1.4140625,0Z"></path><path d="M21.7783203,3.0566406c-.0585938-.0771484-.1289062-.1552734-.2001953-.2333984,0,0-.0732422-.0800781-.0732422-.0810547-.3007812-.3271484-.6474609-.6191406-1.0029297-.8457031-.0058594-.0039062-.0107422-.0078125-.0166016-.0117188s-.0126953-.0078125-.0185547-.0117188c-.8740234-.5712891-1.9003906-.8730469-2.9667969-.8730469-1.6064453,0-3.1230469,.6962891-4.1464844,1.8935547-.6450195,.722168-1.074646,1.6188354-1.2555542,2.6243896-.7893066,.0825195-1.5978394,.199707-2.4319458,.385376l-.5498047,.1201172c-.5390625,.1171875-.8808594,.6503906-.7626953,1.1904297,.1015625,.4667969,.515625,.7861328,.9755859,.7861328,.0703125,0,.1425781-.0078125,.2148438-.0234375l.5537109-.1201172c.6893311-.1541748,1.3543091-.2546387,2.0048218-.3304443,.0494995,.2592773,.1105347,.5118408,.1963501,.7425537,.1357422,.4189453,.3339844,.8251953,.5683594,1.1738281,.2519531,.4121094,.5771484,.7949219,.9443359,1.1230469,.0566406,.0585938,.1298828,.1289062,.2285156,.1953125,.9628906,.7998047,2.1875,1.2392578,3.4599609,1.2392578,.3417358,0,.6752319-.0413208,1.0028687-.1012573l-.5878296,1.3268433c-.2441406,.5537109-.7011719,.9423828-1.2470703,1.046875l-.1113281,.0244141c-2.4306641,.4550781-4.8984375,.4550781-7.3349609,0-.5683594-.1054688-1.0576172-.5625-1.2802734-1.2041016-.7705078-2.1513672-1.1611328-4.4365234-1.1611328-6.7929688v-1.2402344c0-1.1357422-.875-2.0595703-1.9501953-2.0595703h-.8300781c-.5527344,0-1,.4472656-1,1s.4472656,1,1,1l.7802734,.0595703v1.2402344c0,2.5869141,.4296875,5.0996094,1.2744141,7.4570312,.4550781,1.3105469,1.5292969,2.2714844,2.8017578,2.5068359,1.3359375,.2490234,2.6933594,.3759766,4.0332031,.3759766,1.3408203,0,2.6982422-.1269531,4.0625-.3818359l.1152344-.0253906c1.1669922-.2226562,2.1679688-1.0449219,2.6767578-2.1982422l.6083984-1.3730469c.258667-.5745239,.4187012-1.1968384,.5180054-1.821167,.0772705-.0612183,.1538696-.1230469,.2192993-.1798096,1.2138672-1.0371094,1.9101562-2.5537109,1.9101562-4.1601562,0-.8613281-.2041016-1.7167969-.5917969-2.4775391-.1914062-.3720703-.4140625-.7109375-.6298828-.9658203Zm-1.9912109,6.0869141c-.1054688,.0908203-.2148438,.1845703-.3847656,.2861328-1.2080078,.8144531-3.0097656,.7148438-4.1220703-.2392578-.0244141-.0205078-.0498047-.0400391-.0761719-.0585938-.0009766-.0009766-.0019531-.0029297-.0039062-.0039062-.2714844-.2451172-.4765625-.484375-.6484375-.7636719-.1533203-.2294922-.2714844-.46875-.3632812-.7509766-.125-.3378906-.1884766-.7119141-.1884766-1.1660156,.0146484-.8388672,.3154297-1.6279297,.859375-2.2382812,.6572266-.7685547,1.6191406-1.2089844,2.640625-1.2089844,.6767578,0,1.3251953,.1894531,1.8730469,.546875l.0009766,.0009766c.0136719,.0097656,.0273438,.0185547,.0419922,.0283203,.2158203,.1357422,.4287109,.3164062,.6025391,.5039062l.0869141,.0966797c.0273438,.0292969,.0546875,.0576172,.109375,.1269531,.1523438,.1806641,.2919922,.3945312,.4140625,.6308594,.2421875,.4765625,.3710938,1.0185547,.3710938,1.5654297,0,1.0214844-.4404297,1.9833984-1.2128906,2.6435547Z"></path><circle cx="8.5" cy="18.5" r="1.5"></circle><circle cx="16.5" cy="18.5" r="1.5"></circle></svg>',
    });

    // Selecione o span desejado, remova o conteúdo existente e adicione o elemento <i> dentro dele
    $(".adicionado-carrinho").empty().append(iconElement);

    $(".adicionado-carrinho").each(function () {
      // Cria uma mensagem para cada elemento
      var carrinhoMensagem = $(
        '<a href="https://www.temperodocampo.com.br/carrinho/index" class="carrinho-mensagem">' +
          "Produto no carrinho" +
          "</a>"
      ).appendTo($(this));

      // Adição de eventos de hover com animações de fade para cada elemento
      $(this).hover(
        function () {
          // Função executada ao passar o mouse
          // Exibe a mensagem com fade in apenas para o elemento atual
          carrinhoMensagem.stop().fadeIn(100);
        },
        function () {
          // Função executada ao remover o mouse
          // Oculta a mensagem com fade out apenas para o elemento atual
          carrinhoMensagem.stop().fadeOut(100);
        }
      );
    });
  }

  // Adicione o elemento no DOM quando o DOM carregar
  adicionarElementoNoDOM();

  // Adicione o elemento no DOM quando o botão for clicado
  $(".botao-comprar").on("click", function (event) {
    // Evite que a página seja recarregada
    event.preventDefault();

    // Aguarde 1 segundo antes de chamar a função
    setTimeout(function () {
      adicionarElementoNoDOM();
      console.log("Elemento adicionado após o clique do botão");
    }, 1000);
  });
});

/////////////////////////////////SESSAO DE PRODUTOS:

$(document).ready(function () {
  // Seletor para encontrar o elemento que você deseja remover

  $(
    $(
      "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div.span5 > div > div.info-principal-produto > div.breadcrumbs.borda-alpha"
    )
  ).remove();
});

$(document).ready(function () {
  // Move o <span> para fora do <label>
  $(".comprar label.qtde-adicionar-carrinho").before(
    $(".comprar span.qtde-carrinho-title")
  );
});

$(document).ready(function () {
  // Altera o texto dentro do span
  $(".qtde-carrinho-title").text("QUANTIDADE");
});

$(document).ready(function () {
  // Cria uma nova div com a classe "ver-pagamentos"
  var novaDiv = $('<div class="ver-pagamentos"></div>');

  // Adiciona um texto à nova div
  novaDiv.text("VER MÉTODOS DE PAGAMENTO");

  // Adiciona a nova div como última filha da div com a classe "preco-produto"
  $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(1) > div.span5 > div > div > div > div"
  ).append(novaDiv);
});

/////////////////////////CRIANDO MODAL

$(document).ready(function () {
  // Adiciona o modal dinamicamente no final do corpo da página
  $("body").append(`
      <div class="modal fade" id="metodosModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Métodos de Pagamento</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="metodosModalBody">
              <!-- Conteúdo dinâmico será inserido aqui -->
            </div>
            <div class="modal-footer">
              <button type="button" class="botao principal" data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `);

  // Se a lista de métodos de pagamento ainda não foi movida para o modal, mova-a
  if (!$(".parcelas-produto").hasClass("movido-para-modal")) {
    var listaMetodosPagamento = $(".parcelas-produto");
    $("#metodosModalBody").append(listaMetodosPagamento);

    // Adiciona uma classe para indicar que a lista foi movida para o modal
    $(".parcelas-produto").addClass("movido-para-modal");
  }

  // Ao clicar no elemento com a classe 'ver-pagamentos', move a lista de métodos de pagamento para o modal
  $(".ver-pagamentos").click(function () {
    // Exibe o modal
    $("#metodosModal").modal("show");
  });
});

$(document).ready(function () {
  // Adiciona as classes "botao" e "principal"
  $("#formCalcularCep > div > div > button")
    .addClass("botao principal")
    .removeClass("btn");
});

///////////////////adicionando sessão de infos

var tituloDescricao = $(".nome-produto.titulo.cor-secundaria").text();
$("#descricao").prepend('<div id="titulo-descricao"></div>');
$("#titulo-descricao").prepend("<h2>" + tituloDescricao + "</h2>");

$(
  "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(3) > div > div.abas-custom"
).prepend('<div id="bandeiras-descricao"></div>');

$(document).ready(function () {
  // Crie a div com a classe .paragrafos-descricao
  var divParagrafoDescricao = $('<div class="paragrafos-descricao"></div>');
  // Selecione todos os elementos <p> dentro da div #descricao e mova-os para a nova div
  $("#descricao p").appendTo(divParagrafoDescricao);
  // Insira a nova div após a última div dentro da div #descricao
  $("#descricao").append(divParagrafoDescricao);
});

$(document).ready(function () {
  // Crie a div com a classe .subtitulo-descricao
  var divH3Descricao = $('<div id="subtitulo-descricao"></div>');

  // Selecione todos os elementos <h3> dentro da div #descricao e mova-os para a nova div
  $("#descricao h3").appendTo(divH3Descricao);

  // Insira a nova div após a div com a classe .titulo-descricao
  divH3Descricao.insertAfter("#titulo-descricao");
});
////////////////////////////////
$(document).ready(function () {
  // Variável com o texto do subtitulo

  // Criar uma nova div com a classe "textos-relacionados"
  var newDiv = $("<div>", {
    class: "textos-relacionados",
  });

  // Mover o elemento h4 com a classe "titulo cor-secundaria" para a nova div
  var h4Element = $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(6) > div > div.listagem.aproveite-tambem.borda-alpha > h4"
  );
  newDiv.append(h4Element);

  // Adicionar um novo span com a classe "span-subtitulo" abaixo do h4
  newDiv.append(
    $("<span>", {
      class: "span-subtitulo",
      text: subtituloRelacionados,
    })
  );

  // Adicionar a nova div como primeiro filho da div pai com a classe "listagem"
  $(".aproveite-tambem").prepend(newDiv);
});

////////////////////////////////////////

$(document).ready(function () {
  // Adicionar a ID ao botão de login
  $(
    'form[action="https://www.temperodocampo.com.br/conta/login"] button[type="submit"]'
  ).attr("class", "botao-secundario-fw");

  // Adicionar a mesma ID ao botão de cadastro
  $(
    'form[action="https://www.temperodocampo.com.br/conta/criar"] button[type="submit"]'
  ).attr("class", "botao-secundario-fw");
});

$(document).ready(function () {
  // Encontrar os elementos control-group span6 que têm um filho i
  $(".control-group.span6:has(i)").each(function () {
    // Remover o filho i
    $(this).find("i").remove();
  });
});

$(document).ready(function () {
  // Selecionar e remover a tag <br> entre as divs
  $(".row-fluid br").remove();
});

$(document).ready(function () {
  // Adiciona a classe 'input-half' aos inputs de celular e telefone
  $("#id_telefone_celular, #id_telefone_principal").addClass("input-half");
});

$(document).ready(function () {
  // Adiciona a ID ao elemento <a>
  $("#formCadastroCompleto > form > div.acao-editar.row-fluid > div > a").attr(
    "id",
    "botao-secundario-fw"
  );

  // Adiciona as classes ao botão e remove classes e id existentes
  $("#formCadastroCompleto > form > div.acao-editar.row-fluid > div > button")
    .removeAttr("id")
    .removeClass()
    .addClass("botao principal");
});

$(document).ready(function () {
  // Altere a propriedade background-image
  $("#cabecalho > div.conteiner > div.row-fluid").css(
    "background-image",
    "url(" + imagemDeCabecalho + ")"
  );
});

$(document).ready(function () {
  // Altere a propriedade background-image
  $("#rodape > div").css("background-image", "url(" + imagemDoRodape + ")");
});

$(document).ready(function () {
  $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > div > div:nth-child(1) > div > div:nth-child(1) > fieldset > div > a.botao.principal"
  ).removeClass("pequeno");
});

$(document).ready(function () {
  $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > div > div:nth-child(1) > div > div:nth-child(1) > fieldset > div > a.botao.pequeno.pull-left"
  )
    .removeClass("botao pequeno")
    .addClass("botao-secundario-fw");
});

$(document).ready(function () {
  $(
    "#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.conteudo.span9 > div > div > div:nth-child(1) > div > div:nth-child(2) > fieldset:nth-child(2) > div > a"
  ).removeClass("pequeno");
});

$(document).ready(function () {
  $(".acao-editar a").find("i").remove();
});

//corrigindo classes da página de produtos principais//

$(document).ready(function () {
  // Encontre o corpo
  var corpo = $("#corpo");

  // Percorra os pais até encontrar a div desejada
  corpo.find(".principal .acoes-produto").each(function () {
    // Adicione a classe à div alvo
    $(this).find("div:first").addClass("container-produto-preco-fw");
  });
});
