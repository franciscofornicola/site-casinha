# Casinha Mineira - Site

Site do restaurante Casinha Mineira desenvolvido com Next.js.

## 🚀 Deploy na UOL via GitHub

### Pré-requisitos
- Conta na UOL Host
- Conta no GitHub
- Projeto já configurado no painel da UOL

### Passos para Deploy

#### 1. Preparar o Repositório GitHub
```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - Casinha Mineira site"

# Adicionar repositório remoto (substitua pela URL do seu repo)
git remote add origin https://github.com/seu-usuario/casinha-mineira.git

# Enviar para o GitHub
git push -u origin main
```

#### 2. Configurar Deploy Automático na UOL

1. **Acesse o Painel da UOL Host**
   - Faça login no painel de controle da UOL
   - Vá para a seção de "Sites" ou "Hospedagem"

2. **Configurar Integração com GitHub**
   - Procure por "GitHub" ou "Deploy Automático"
   - Clique em "Conectar com GitHub"
   - Autorize o acesso ao seu repositório

3. **Configurar o Deploy**
   - Selecione o repositório: `casinha-mineira`
   - Branch: `main`
   - Comando de build: `npm run build`
   - Pasta de saída: `out`
   - Pasta de deploy: `public_html` (ou a pasta configurada pela UOL)

#### 3. Configurações Específicas da UOL

**Arquivo de Configuração (.htaccess)**
Crie um arquivo `.htaccess` na raiz do projeto:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Cache para arquivos estáticos
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

#### 4. Testar o Deploy

1. Faça uma alteração no código
2. Commit e push para o GitHub
3. Verifique se o deploy automático foi executado
4. Teste o site online

### 📁 Estrutura do Projeto

```
casinha-mineira/
├── public/          # Arquivos estáticos
├── src/
│   ├── app/         # Páginas Next.js 13+
│   ├── components/  # Componentes React
│   └── styles/      # Estilos globais
├── next.config.js   # Configuração Next.js
├── package.json     # Dependências
└── README.md        # Este arquivo
```

### 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Exportar para arquivos estáticos
npm run export

# Lint do código
npm run lint
```

### 📞 Suporte

Para dúvidas sobre o deploy na UOL:
- Suporte UOL: [suporte.uol.com.br](https://suporte.uol.com.br)
- Documentação UOL Host: [host.uol.com.br](https://host.uol.com.br)

---

**Desenvolvido com ❤️ para a Casinha Mineira** 