# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Layout.astro
│   │   ├── Header.astro
│   │   ├── MobileMenu.astro
│   │   └── Footer.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Programs.astro
│   │   ├── Schedule.astro
│   │   ├── Sponsors.astro
│   │   ├── SponsorProduct.astro
│   │   ├── Gallery.astro
│   │   ├── Testimonials.astro
│   │   ├── Stats.astro
│   │   └── Contact.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   ├── ImageCloudinary.astro
│   │   ├── SectionTitle.astro
│   │   ├── StatCard.astro
│   │   ├── FeatureCard.astro
│   │   ├── ProgramCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── SponsorCard.astro
│   │   ├── GalleryItem.astro
│   │   ├── ContactForm.astro
│   │   └── Newsletter.astro
│   └── shared/
│       ├── NavItem.astro
│       ├── SocialLink.astro
│       └── ScrollButton.astro
├── data/
│   ├── site.ts
│   ├── navigation.ts
│   ├── hero.ts
│   ├── about.ts
│   ├── programs.ts
│   ├── schedule.ts
│   ├── sponsors.ts
│   ├── gallery.ts
│   ├── testimonials.ts
│   ├── stats.ts
│   └── contact.ts
├── types/
│   └── index.d.ts
├── utils/
│   ├── cloudinary.ts
│   └── helpers.ts
├── layouts/
│   └── MainLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── env.d.ts
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
