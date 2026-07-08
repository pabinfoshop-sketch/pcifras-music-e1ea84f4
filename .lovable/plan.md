## Plano: Novo logo PCifras na tela de login e favicon

### O que será feito
Substituir o wordmark "🎸 PCifras" na tela de login pela imagem do logo enviada, mantendo o texto "PCifras" como nome da marca acima do subtítulo "Cifras & Repertórios". Atualizar também o favicon do site para usar o mesmo logo.

### Layout final na tela de login

```text
┌─────────────────────────┐
│                         │
│   [imagem logo PCifras] │
│                         │
│        PCifras          │
│   CIFRAS & REPERTÓRIOS  │
│                         │
│   Acesse suas cifras... │
│   [Continuar com Google]│
│          ...            │
└─────────────────────────┘
```

### Passos técnicos

1. **Subir a imagem para o CDN (Lovable Assets)**
   - Origem: `user-uploads://IMG_20260624_211155-2.jpg`
   - Criar ponteiro `src/assets/pcifras-logo.jpg.asset.json`
   - Não deixar o binário da imagem dentro do repositório

2. **Alterar `src/components/AuthScreen.jsx`**
   - Trocar o `<h1 className="auth-screen-wordmark">🎸 PCifras</h1>` por `<img>` usando o asset do CDN
   - Inserir "PCifras" como texto acima da eyebrow "Cifras & Repertórios"
   - Manter formulário, botões Google/email, textos e restante da página inalterados

3. **Ajustar `src/styles.css`**
   - Adicionar estilos para a imagem do logo (tamanho, espaçamento, sombra suave)
   - Ajustar espaçamento entre logo, texto "PCifras" e "Cifras & Repertórios"
   - Manter o tema dark e cores atuais

4. **Atualizar favicon**
   - Remover `public/favicon.ico` padrão
   - Adicionar link no `src/routes/__root.tsx` apontando para a mesma URL do asset do logo

5. **Verificar**
   - Conferir visualmente na preview se o logo e favicon aparecem corretamente
   - Garantir que build não quebre (imports resolvidos, `<Outlet />` preservado em `__root.tsx`)

### Observação
A imagem enviada tem detalhes ricos (violão, acordeão, palheta dourada). Para favicon de 16–32 px o navegador vai reduzir a imagem; se a leitura do "PC" ficar ruim, posso gerar uma versão simplificada do favicon em seguida.