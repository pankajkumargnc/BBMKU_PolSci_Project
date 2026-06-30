const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// The @vitalets/google-translate-api works via fetch
async function run() {
    const { translate } = await import('@vitalets/google-translate-api');
    
    let html = fs.readFileSync('index.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const accordions = document.querySelectorAll('details.qa-accordion');
    console.log(`Found ${accordions.length} accordions.`);

    let promises = [];
    let count = 0;

    for (let acc of accordions) {
        // Translate Summary
        let summary = acc.querySelector('summary');
        if (summary && !summary.querySelector('.en')) {
            let badge = summary.querySelector('.qa-badge');
            let marks = summary.querySelector('.qa-marks');
            
            let badgeHTML = badge ? badge.outerHTML : '';
            let marksHTML = marks ? marks.outerHTML : '';
            
            if (badge) badge.remove();
            if (marks) marks.remove();
            
            let originalText = summary.textContent.trim();
            if (originalText) {
                promises.push((async () => {
                    try {
                        let res = await translate(originalText, { to: 'hi' });
                        let newHTML = `${badgeHTML} <span class="hi">${res.text}</span><span class="en">${originalText}</span> ${marksHTML}`;
                        summary.innerHTML = newHTML;
                        count++;
                    } catch (e) {
                        console.error('Error translating summary:', e);
                    }
                })());
            }
        }

        // Translate content
        let content = acc.querySelector('.qa-content');
        if (content) {
            let elements = content.querySelectorAll('p, li, h5');
            for (let el of elements) {
                if (!el.querySelector('.en')) {
                    let originalHTML = el.innerHTML;
                    let originalText = el.textContent.trim();
                    if (originalText) {
                        promises.push((async () => {
                            try {
                                let res = await translate(originalText, { to: 'hi' });
                                let newHTML = `<span class="hi">${res.text}</span><span class="en">${originalHTML}</span>`;
                                el.innerHTML = newHTML;
                                count++;
                            } catch (e) {
                                console.error('Error translating element:', e);
                            }
                        })());
                    }
                }
            }
        }
    }

    console.log(`Waiting for ${promises.length} translation requests...`);
    
    // Process in batches of 10 to avoid rate limits
    const batchSize = 10;
    for (let i = 0; i < promises.length; i += batchSize) {
        const batch = promises.slice(i, i + batchSize);
        await Promise.all(batch);
        console.log(`Completed batch ${i / batchSize + 1} of ${Math.ceil(promises.length / batchSize)}`);
        await new Promise(r => setTimeout(r, 500)); // 500ms delay between batches
    }

    // Write back
    fs.writeFileSync('index.html', dom.serialize(), 'utf-8');
    console.log(`Done. Translated elements.`);
}

run().catch(console.error);
