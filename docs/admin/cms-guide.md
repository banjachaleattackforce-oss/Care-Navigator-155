# Care Navigator Admin Guide for Yvonne

Admin link:

`https://care-navigator-155.netlify.app/admin/`

## Logging In

1. Open the admin link above.
2. Click `Login with Netlify Identity`.
3. Enter your email address and password.
4. If you do not have a password yet, use the invitation email from Netlify to set one.
5. If you forget your password, use the `Forgot password` option on the login screen.

Important: the website developer does not create or store your password. Netlify sends the invitation and you set your own password.

## Site Owner Setup Before First Login

The admin works properly only after Netlify is connected to the GitHub repository and Git Gateway is enabled.

1. In Netlify, open the `care-navigator-155` project.
2. Link the project to GitHub repository `banjachaleattackforce-oss/Care-Navigator-155`.
3. If the repository is not visible, click `Configure the Netlify app on GitHub` and grant Netlify access to `Care-Navigator-155`.
4. Use:
   - Production branch: `main`
   - Build command: `npm run build`
   - Publish directory: `out`
5. Enable Netlify Identity.
6. Set registration to invite-only.
7. Enable Git Gateway.
8. Invite Yvonne's email address from Netlify Identity.

If Yvonne can log in but publishing does not work, check Git Gateway first. Decap CMS saves posts by committing markdown files to GitHub, then Netlify rebuilds the website.

## Creating a Newsletter Post

1. Go to `News`.
2. Click `New News post`.
3. Fill in:
   - `Published`: leave on when the post is ready to go live.
   - `Title`: the headline of the article.
   - `Slug`: the page URL ending, using lowercase words with hyphens.
   - `Publish date`
   - `Author`: defaults to `Yvonne Brown`.
   - `Category`
   - `Summary`: a short introduction shown on the Newsletter page.
   - `Featured image`: optional main article image.
   - `Featured image alt text`: describe the image for accessibility.
   - `Tags`: choose relevant tags from the list.
   - `SEO title`: optional search result title.
   - `SEO description`: optional search result description.
   - `Body`: write the full article using the editor.

Example slug:

`how-to-prepare-for-a-chc-assessment`

Use the editor buttons for headings, bold text, bullet points, links and images.

## Managing Tags

1. Go to `Tags`.
2. To create a new tag, click `New Tag`.
3. Fill in:
   - `Tag name`: the public name shown on the website.
   - `Slug`: the stable URL name, using lowercase words with hyphens.
   - `Description`: shown on the tag page.
   - `Show on website`: leave this on if the tag should appear publicly.
4. Save the tag.
5. The tag can then be selected inside News posts.

Important: you can safely rename the `Tag name` later. Avoid changing the `Slug` once the tag is being used, because the slug controls the website URL.

## Adding Links in Articles

1. Highlight the text you want to turn into a link.
2. Click the link button in the editor.
3. Paste the website address.
4. Save the article.

## Adding Images

1. In a News post, use `Featured image` for the main article image.
2. Add `Featured image alt text` to describe the image.
3. You can also add images inside the article body using the editor.

## Adding CTA Blocks

At the end of a News post, use `Article CTA blocks` to add next-step panels.

Available CTA block types:

- `Consultation enquiry block`
- `Professional referral block`
- `Newsletter signup block`
- `Custom link block`

Recommended URLs:

- Consultation: `/contact#consultation`
- Professional referral: `/for-professionals`
- Newsletter: `/news#newsletter`
- Custom link: use an internal URL beginning with `/` or a full `https://` URL.

If no CTA block is selected, the article automatically shows the newsletter CTA.

## Publishing Changes

After saving and publishing in the admin area, the website will rebuild automatically. Changes may take a few minutes to appear live.

If publishing fails, ask the site owner to check that the Netlify project is connected to GitHub and that Netlify Identity plus Git Gateway are enabled.
