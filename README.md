This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


HTML File → Next.js Route
index.html → /homePages/page.tsx (already exists)
home-1-op.html → /homePages/home-1-op/page.tsx
home-2-op.html → /homePages/home-2-op/page.tsx
home-3-op.html → /homePages/home-3-op/page.tsx
home-4-op.html → /homePages/home-4-op/page.tsx
home-5-op.html → /homePages/home-5-op/page.tsx
about.html → /about/page.tsx
contact.html → /contact/page.tsx
donation.html → /donation/page.tsx
donation-details.html → /donation/[id]/page.tsx
donate-now.html → /donate-now/page.tsx
blog.html → /blog/page.tsx
blog-details.html → /blog/[slug]/page.tsx
team.html → /team/page.tsx
team-details.html → /team/[id]/page.tsx
add-team.html → /add-team/page.tsx
gallery.html → /gallery/page.tsx
pricing.html → /pricing/page.tsx
faq.html → /faq/page.tsx
testimonial.html → /testimonial/page.tsx
cart.html → /shop/cart/page.tsx
checkout.html → /shop/checkout/page.tsx
wishlist.html → /shop/wishlist/page.tsx
error.html → /error/page.tsx
