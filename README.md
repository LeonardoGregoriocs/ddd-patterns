# Domain Driver Design (DDD) - Patterns

DDD é um dos designs que existe para desenvolvimento de software, esse design tem como foco o coração da aplicação, e o mesmo é dividido por domínios, tendo como objetivo entender as suas regras, processos e complexidades. O DDD nos ajuda a entender com profundidade o domínios e os subdomínios da aplicação. 


- Domínio: Algo que está inteiramente ligado com a função principal daquilo que vamos desenvolver, ou seja, o coração de software.
- Subdomínio: Partes do nosso sistema que em conjunto consegue gerar valor para a empresa e que dão suporte para o domínio principal.

### Podemos ter alguns graus dentro dos subdomínios. 

- Core Domain:
    
    → É o coração do negócio, ou seja, sem ele aquele negócio não existe, é o domínio principal. 
    
    → Core domain é o diferencial competitivo da empresa. 
    

- Support subdomain:
    
    → Apoia o domínio no dia a dia, ou seja, ele não é o cara principal, mas ele vai auxiliar o core domain.
    
    → Faz com que do domínio seja possível. 
    
- Gereric subdomain:
    
    → Apoia os outros sistemas, mas de forma geral ele não tem um diferencial competitivo para as empresas.
    
    → Geralmente são software de prateleiras, mas que podem facilmente serem substituídos por outros.
