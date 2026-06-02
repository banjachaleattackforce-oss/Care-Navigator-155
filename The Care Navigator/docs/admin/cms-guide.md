# Care Navigator CMS Admin Guide

## Live Admin URL

After deployment, Yvonne will log in at:

`https://care-navigator-155.netlify.app/admin/`

Local CMS preview:

`http://localhost:4010/admin/`

## Netlify Setup Checklist

1. Deploy the site to Netlify with build command `npm run build`.
2. Set publish directory to `out`.
3. Connect the Netlify site to a Git repository.
4. Enable Netlify Identity.
5. Keep registration invite-only.
6. Enable Git Gateway if available.
7. Invite Yvonne's email address as an Identity user.
8. Ask Yvonne to accept the invitation, set a password and open `/admin/`.

Important: a direct Netlify CLI upload can publish the website, but Decap CMS publishing needs a Git-connected Netlify site with Identity and Git Gateway.

## Creating Newsletter Posts

1. Open `/admin/`.
2. Click `Login with Netlify Identity`.
3. Go to `News`.
4. Click `New News post`.
5. Fill in the title, slug, publish date, author, category, summary, tags, SEO title and SEO description.
6. Add the article body in the editor.
7. Add a featured image and alt text only when the article needs one.
8. Save the post.
9. Publish when ready.

The public navigation calls this section `Newsletter`, but the CMS collection is still named `News` so existing routes stay stable.

## Managing Tags

1. Go to `Tags`.
2. Click `New Tag`.
3. Add the tag name, slug, description and `Show on website` setting.
4. Save.

Avoid changing a tag slug once posts are using it, because slugs control topic URLs.

## Adding Article CTA Blocks

At the end of a News post, use `Article CTA blocks` to add the next-step panels.

Available block types:

- `Consultation enquiry block`
- `Professional referral block`
- `Newsletter signup block`
- `Custom link block`

Recommended URLs:

- Consultation: `/contact#consultation`
- Professional referral: `/for-professionals`
- Newsletter: `/news#newsletter`
- Custom link: use an internal URL beginning with `/` or a full `https://` URL

If no CTA block is selected, the article automatically shows the newsletter CTA.

## Publishing Changes

When a post, tag or CTA block is published, Decap CMS commits the markdown change to Git. Netlify then rebuilds the static website. Changes usually take a few minutes to appear live.

If `/admin/` opens but publishing fails, check that Identity and Git Gateway are enabled and that the site is connected to the correct Git repository.

## Image Uploads

Use CMS image upload for article images only. Founder images are already stored in `public/images` and should remain on the About page.
