# Evidências de validação técnica

Atualizado em 23/11/2026. Esta página registra apenas evidências consultadas nos workflows públicos do GitHub. Um CI aprovado confirma que os comandos definidos naquele workflow terminaram sem erro naquele commit; não certifica segurança, precisão científica, prontidão comercial ou funcionamento em produção.

## Execuções recentes consultadas

| Projeto | Workflow | Resultado | Execução |
|---|---|---|---|
| Aurora GeoIntelligence XAI | CPU CI | **success** | [Abrir execução](https://github.com/felipetjmg1-bit/aurora-geointelligence-xai/actions/runs/45096470734) |
| Oráculo X-37 | Python CI | **success** | [Abrir execução](https://github.com/felipetjmg1-bit/oraculo-x37/actions/runs/45095241080) |
| Sentinela Brasil | Sentinela Brasil CI | **success** | [Abrir execução](https://github.com/felipetjmg1-bit/sentinela-brasil/actions/runs/45096304076) |
| Projeto Ybyrá | Projeto Ybyra CI | **success** | [Abrir execução](https://github.com/felipetjmg1-bit/projeto-ybyra/actions/runs/45096369689) |
| Canário Soberano X | CI | **success** | [Abrir execução](https://github.com/felipetjmg1-bit/canario-soberano-x/actions/runs/45096451625) |

## O que os resultados significam

- **Aurora GeoIntelligence XAI:** o workflow instala as dependências, compila fontes Python e executa pytest.
- **Oráculo X-37:** o workflow instala requirements, compila a aplicação e executa pytest.
- **Sentinela Brasil:** o workflow instala o extra de testes, compila Python e executa pytest.
- **Projeto Ybyrá:** o workflow instala requirements, compila Python e executa unittest.
- **Canário Soberano X:** o workflow instala o extra dev, executa verificações Ruff selecionadas e pytest.

## O que ainda não foi comprovado por esta página

- Deploy público e disponibilidade contínua de cada aplicação.
- Segurança por auditoria independente, pentest ou revisão formal.
- Validação científica de modelos, dados, métricas ou alegações quânticas.
- Integração real com satélites, sensores, blockchain, carteiras ou serviços externos.
- Capturas de telas de aplicações que não tenham sido iniciadas em ambiente de execução.

## Evidência visual do portal

O workflow [Portfolio visual verification](../.github/workflows/portfolio-visual.yml) inicia o portal estático, verifica a presença dos 33 cartões e seus links, testa a busca e salva capturas reais do painel e do catálogo em desktop e mobile como artefato da execução. Essas capturas documentam somente o portal web estático, não os 33 sistemas listados.

Execução visual aprovada em 23/11/2026: [abrir workflow e baixar o artefato](https://github.com/felipetjmg1-bit/felipetjmj1.github.io/actions/runs/45159975843). O artefato `impulso-digital-portfolio-screenshots` contém quatro capturas PNG: catálogo desktop, resultado da busca, painel desktop e catálogo/painel mobile. As capturas são do portal estático, não dos 33 sistemas listados.
