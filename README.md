# minions-leads

**Lead records, company profiles, contact details, and qualification status**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-leads/sdk minions-sdk

# Python
pip install minions-leads

# CLI (global)
npm install -g @minions-leads/cli
```

---

## CLI

```bash
# Show help
leads --help
```

---

## Python SDK

```python
from minions_leads import create_client

client = create_client()
```

---

## Project Structure

```
minions-leads/
  packages/
    core/           # TypeScript core library (@minions-leads/sdk on npm)
    python/         # Python SDK (minions-leads on PyPI)
    cli/            # CLI tool (@minions-leads/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [leads.minions.help](https://leads.minions.help)
- Blog: [leads.minions.blog](https://leads.minions.blog)
- App: [leads.minions.wtf](https://leads.minions.wtf)

---

## License

[MIT](LICENSE)
