# jasonleeaudio.github.io

Personal portfolio of Jason Lee — audio & music engineering, machine learning and DSP.

Live at **https://jasonleeaudio.github.io**

## Updating the site

All the content lives in **`content.js`**. You don't need to touch the HTML or CSS.

| To… | Do this in `content.js` |
| --- | --- |
| Add a project | Copy one `{ … }` block in `projects`, change the text |
| Link a repo | Put the URL in that project's `repo: ''` |
| Add a figure | Drop a PNG/JPG in `assets/`, set `media: 'assets/your_file.png'` |
| Add an audio demo | Drop an MP3 in `assets/`, set `audio: 'assets/your_file.mp3'` |
| Add a job | Copy one block in `experience` |
| Add a skill | Add `['Name', 'lang' / 'ml' / 'dsp' / 'tool']` to `skills` |
| Swap the resume | Replace `assets/Jason_Lee_Resume.pdf` (same file name) |

Edit right on GitHub (open the file → pencil icon → **Commit changes**). The site updates in a minute or two.

## Files

- `index.html` — page structure
- `style.css` — the look
- `script.js` — builds the page from `content.js`
- `content.js` — **your content**
- `assets/` — photo, resume, figures, audio

Keep audio as MP3 and under a few MB each.
