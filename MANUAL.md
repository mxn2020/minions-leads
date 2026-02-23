# Manual Setup Steps for Minions Leads

This document lists the steps that must be completed manually after scaffolding.
Each step includes specific values for your project.

---

## 1. GitHub Repository Secrets

Go to **GitHub → mxn2020/minions-leads → Settings → Secrets and variables → Actions** and add:

| Secret | Description | Where to get it |
|--------|-------------|-----------------|
| `NPM_TOKEN` | npm publish token | [npmjs.com → Access Tokens](https://www.npmjs.com/settings/~/tokens) |
| `PYPI_TOKEN` | PyPI API token for `minions-leads` | [pypi.org → Account Settings → API tokens](https://pypi.org/manage/account/#api-tokens) |

> **Note**: If you share tokens across repos, you can use GitHub Organization secrets instead.

---

## 2. Netlify Sites

Create **3 Netlify sites** — one for each app:

### Web App (Playground)
- **Netlify site name**: `minions-leads-web`
- **GitHub repo**: `mxn2020/minions-leads`
- **Base directory**: `apps/web`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/web/dist`
- **Custom domain**: `leads.minions.wtf`

### Documentation
- **Netlify site name**: `minions-leads-docs`
- **GitHub repo**: `mxn2020/minions-leads`
- **Base directory**: `apps/docs`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/docs/dist`
- **Custom domain**: `leads.minions.help`

### Blog
- **Netlify site name**: `minions-leads-blog`
- **GitHub repo**: `mxn2020/minions-leads`
- **Base directory**: `apps/blog`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/blog/dist`
- **Custom domain**: `leads.minions.blog`

---

## 3. DNS Configuration

Add CNAME records at your DNS provider:

| Record | Type | Name | Value |
|--------|------|------|-------|
| Docs | CNAME | `leads.minions.help` | _(Netlify subdomain)_ |
| Blog | CNAME | `leads.minions.blog` | _(Netlify subdomain)_ |
| App  | CNAME | `leads.minions.wtf` | _(Netlify subdomain)_ |

> Get the Netlify subdomain from Netlify → Site settings → Domain management

---

## 4. npm Packages — First Publish

Before the CI publish workflow works, you need to publish initial versions manually:

```bash
# From the project root
pnpm install
pnpm run build

# Publish SDK
cd packages/core
npm publish --access public
cd ../..

# Publish CLI
cd packages/cli
npm publish --access public
cd ../..
```

Your packages:
- SDK: [`@minions-leads/sdk`](https://www.npmjs.com/package/@minions-leads/sdk)
- CLI: [`@minions-leads/cli`](https://www.npmjs.com/package/@minions-leads/cli)

---

## 5. PyPI Package — First Publish

```bash
cd packages/python

# Create virtual env
python -m venv .venv
source .venv/bin/activate

# Install build tools
pip install hatch twine

# Build
hatch build

# Upload (you'll be prompted for your PyPI token)
twine upload dist/*
```

Your package: [`minions-leads`](https://pypi.org/project/minions-leads/)

---

## 6. Release Please

Release Please is pre-configured. After your first merge to `main`:

1. A "Release PR" will be auto-created
2. Merging the Release PR creates a GitHub Release + git tag
3. The `publish.yml` workflow triggers on tags to publish to npm/PyPI

Verify config:
- [`release-please-config.json`](./release-please-config.json)
- [`.release-please-manifest.json`](./.release-please-manifest.json)

---

## 7. Branch Protection

Go to **GitHub → Settings → Branches → Add rule**:

- **Branch name pattern**: `main`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (select: `build-and-test`, `python-sdk`)
- ✅ Require branches to be up to date
- ❌ Do not allow force pushes

---

## 8. Add to Minions Ecosystem

Update the main [minions.dev](https://minions.dev) website to include this project:

1. Add to the plugins/projects listing page
2. Add the project color to `color_tracking.md`
3. Link documentation from the main docs

---

## Quick Reference

| Item | Value |
|------|-------|
| Project | `minions-leads` |
| SDK (npm) | `@minions-leads/sdk` |
| CLI (npm) | `@minions-leads/cli` |
| Python (PyPI) | `minions-leads` |
| GitHub | `github.com/mxn2020/minions-leads` |
| Docs domain | `leads.minions.help` |
| Blog domain | `leads.minions.blog` |
| App domain | `leads.minions.wtf` |
| Author | Mehdi Nabhani <mehdi@the-mehdi.com> |
| License | MIT |
