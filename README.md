# smartex

1 - O site para a validação web está fora do ar.<br />
2 - meu macbook de trabalho tem bloqueio de instalação e configuração limitada pela empresa então não puder usar sua estrutura então tive que instalar tudo em um notebook pessoal que não aguenta muito.<br />
3 - teste de API ok;<br />
4 - testeweb eu coloquei outros sites dummys para criar uma validação, como tinha que instalar tudo, considerei usar cypress e ver como me saia. o codigo está em 2 etapas pois devido configuração da nova versão do cypress 11, varios configurações mudaram de sitio. Então coloquei um script funcionando com todas as validações spec.cy.js  que possui referencia aos 3 arquivos nao ficheiro fixtures. E coloquei outro que devido a problemas na configuração no cypress não consegui colocar a rodar .feature e portanto tem apenas o esqueleto de exemplo de como seria a estrutura de um fluxo com cucumber. frontend.feature que executa frontendSteps.cy.js que tem o pageobject frontendPage.cy.js.<br />
5 - Infelizmente devido a limitação do laptop pessoal que não aguenta abrir a tela mobile não foi possivel criar o script.
