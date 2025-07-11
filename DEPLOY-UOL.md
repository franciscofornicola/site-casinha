# Deploy na UOL - Casinha Mineira

## Passos para substituir o site antigo pelo novo

### 1. Preparar os arquivos
```bash
# Fazer build do projeto
npm run build

# Os arquivos estarão na pasta .next
```

### 2. Acessar o painel da UOL
1. Acesse o painel de controle da UOL
2. Vá em "Hospedagem" > "Gerenciar"
3. Acesse o File Manager ou FTP

### 3. Fazer backup do site atual
1. Faça download de todos os arquivos atuais
2. Guarde em uma pasta de backup

### 4. Upload dos novos arquivos
**Opção A: Via File Manager da UOL**
1. Delete todos os arquivos antigos (exceto configurações de domínio)
2. Faça upload dos seguintes arquivos:
   - Pasta `.next` (build do Next.js)
   - `package.json`
   - `next.config.js`
   - `public/` (imagens e assets)
   - `vercel.json`

**Opção B: Via FTP**
1. Use um cliente FTP (FileZilla, WinSCP)
2. Conecte com as credenciais da UOL
3. Substitua os arquivos

### 5. Configurar Node.js (se necessário)
Se a UOL não suportar Node.js automaticamente:
1. No painel da UOL, procure por "Node.js" ou "Aplicações"
2. Configure para usar Node.js
3. Defina o comando de inicialização: `npm start`

### 6. Verificar o domínio
1. O domínio deve continuar funcionando normalmente
2. Teste todas as páginas e funcionalidades
3. Verifique se as imagens estão carregando

### 7. Configurações importantes
- **SSL**: Mantenha ativo se já estava
- **Redirecionamentos**: Configure se necessário
- **Cache**: Limpe o cache do navegador para testar

## Estrutura de arquivos necessária:
```
/
├── .next/           # Build do Next.js
├── public/          # Imagens e assets
├── package.json     # Dependências
├── next.config.js   # Configuração Next.js
└── vercel.json      # Configuração de deploy
```

## Suporte
Se encontrar problemas:
1. Verifique os logs de erro no painel da UOL
2. Teste localmente com `npm run build && npm start`
3. Entre em contato com o suporte da UOL se necessário 