let data = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        imgurl: "https://imgs.search.brave.com/0_qFwDs6AbArVBaR7x4MFhmOKjA6_RtFGsihiCxeGK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzAyL05l/bHNvbl9NYW5kZWxh/XzE5OTQuanBnLzUx/MnB4LU5lbHNvbl9N/YW5kZWxhXzE5OTQu/anBn",
        birthPlace: "Mvezo, South Africa"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        imgurl: "https://imgs.search.brave.com/DXzQMyl3guB0TLBGrNqPQWA2YbVAEbYZrINc5CElgpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qQmxaak13/TkdRdE9UZGxNeTAw/TXpnNUxXSXpORFF0/TXpNM1lXVmhObVF5/WVRkbVhrRXlYa0Zx/Y0djQC5qcGc",
        birthPlace: "Chicago, Illinois, USA"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
        imgurl: "https://imgs.search.brave.com/D7TiuFTrHOSQ41a3xwZ7mXL-V7zG9wmPBhsd6MDdbgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbGxh/Ym91dHN0ZXZlam9i/cy5jb20vcmVzb3Vy/Y2VzL2ltZy90aHVt/YnMvcGljc19oaWdo/bGlnaHRzLzIwMDUt/MDEtMTFfMDUxNzgu/anBn",
        birthPlace: "San Francisco, California, USA"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
        imgurl: "https://imgs.search.brave.com/lbJiaYBYd_usWjWLVK9H3_bXs_W5RCvaWU-6bQ6b0ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE3/MzY0MTEyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWVsZWFub3Itcm9v/c2V2ZWx0LWFtZXJp/Y2FuLWF1dGhvci1k/aXBsb21hdC1odW1h/bml0YXJpYW4tYW5k/LTMybmQtZmlyc3Qt/bGFkeS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Q09NLUs5/Q1hUM25NVjlMdWo3/aEg4N3F6akhXY3Fu/ZWxidjNyR01pZENX/VT0",
        birthPlace: "New York City, New York, USA"
    },
    {
        quote: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey",
        imgurl: "https://imgs.search.brave.com/1fHSeY0pRaADKu3SuEVKSlhHkySmAbWUr_f4CJ-59TI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vcHJh/aC13aW5mcmV5LWxv/cy1hbmdlbGVzLWph/bi1hcnJpdmVzLW5l/dHdvcmstd2ludGVy/LXRjYS1wYXJ0eS1s/YW5naGFtLWh1bnRp/bmd0b24taG90ZWwt/amFudWFyeS0zNDY3/MzAzNS5qcGc",
        birthPlace: "Kosciusko, Mississippi, USA"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        imgurl: "https://imgs.search.brave.com/0IX5gBlAuDnuC47tIYaj7ha-1eQicKoSy5-9Iuvbok4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMjcvMjYyMjI3/LTAwNC0yQzM0M0ZG/RC9Kb2huLUxlbm5v/bi1UaGUtQmVhdGxl/cy0xOTY4LmpwZw",
        birthPlace: "Liverpool, England"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
        imgurl: "https://imgs.search.brave.com/0cU_Zrq5HBevmqWPcOM2mJ4PHW12TNEkZvxKATdKWFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA2/ODUwODkwNC9waG90/by90aGUtY2F0aG9s/aWMtc2lzdGVyLW1v/dGhlci10ZXJlc2Et/Zm91bmRlci1vZi10/aGUtb3JkZXItbWlz/c2lvbmFyaWVzLW9m/LWNoYXJpdHktcGlj/dHVyZWQtYXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVNP/NV95WW9Nc245MmVH/a001MW94LWJhMmJj/V1NqSzAwV25LTHZj/dVEzZWc9",
        birthPlace: "Skopje, North Macedonia"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt",
        imgurl: "https://imgs.search.brave.com/_vYiJdgZL5hK0htd6larZktCIFkuIxJhPNl6yqeWO1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzk2/NjUxMDAvcGhvdG8v/d29ybGQtd2FyLWlp/LWEtcG9ydHJhaXQt/b2YtdGhlLWFtZXJp/Y2FuLXByZXNpZGVu/dC1mcmFua2xpbi1k/ZWxhbm8tcm9vc2V2/ZWx0LXBpY3R1cmVk/LWluLXRoZS11c2Eu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWV1TDYxYmkxb1dW/Vm0tSER2UEo3aDMz/dzR3YW5NWFl2RzlL/aE5pSndkYkk9",
        birthPlace: "Hyde Park, New York, USA"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead",
        imgurl: "https://imgs.search.brave.com/s9w6ChsUWriEwDvMZLv_KH5tKV0RhtQZiJH-OTxqETQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M2LzAz/LzE5L2M2MDMxOTcx/ZjFhMDRhZDlkNzc5/NzFjMTRjODZmZDk1/LmpwZw",
        birthPlace: "Philadelphia, Pennsylvania, USA"
    },

    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
        imgurl: "https://imgs.search.brave.com/WA2XhzVdyWa77ewvn3x4Va_53Gzozlu9IuItfBAdqGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9pbWFnZXMt/cHJvZmlsZS1mbG93/LzQwMC9pbWFnZXMv/YXJ0d29ya2ltYWdl/cy9tZWRpdW1sYXJn/ZS8xL3JvYmVydC1s/b3Vpcy1zdGV2ZW5z/b24tYm9ybi1ub3Zl/bWJlci0xMy0xODUw/ZWRpbmJ1cmdoLXNj/b3RsYS1jYWxpZm9y/bmlhLXZpZXdzLW1y/LXBhdC1oYXRoYXdh/eS1hcmNoaXZlcy5q/cGc",
        birthPlace: "Edinburgh, Scotland"

    },

    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        imgurl: "https://imgs.search.brave.com/C1zQMWn2Wq7pqpgsg0PHvZ1mQ3G9VNb4_jZ-vJsIDlg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y29sb3JpemVkLXBo/b3RvLW9mLWVsZWFu/b3Itcm9vc2V2ZWx0/LWFnZS0xNC1mcm9t/LWEtc2Nob29sLXYw/LWoweGtwZ2liZGkz/NTEuanBnP2F1dG89/d2VicCZzPWU5M2Zi/YWY3OTdhZmM0MGU2/N2MyYWFkZmVmOGM1/ODcxM2ZiY2FkNTM",
        birthPlace: "New York City, New York, USA"
    },

    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
        imgurl: "https://imgs.search.brave.com/j23sY5ajO3brU8K_RVuAgxnymmPt1JIQUYAVr50JaLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc0LzQ0Lzkx/LzM2MF9GXzc0NDQ5/MTc5X2liYU9TQkdD/NW5JRTM0anlkbHZh/bnVXYU03a2ZhTFU5/LmpwZw",
        birthPlace: "Boston, Massachusetts, USA"
    },

    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
        imgurl: "https://imgs.search.brave.com/gbNWwSoRIsyEeUKC9cUrtO_1rkw4qcD4byoUV_Jtlxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/MDM0OTc3L3Bob3Rv/LzI3LTA2LTE4ODAt/c2NocmlmdHN0ZWxs/ZXJpbi11c2Fwb3J0/ciVDMyVBNHQtdW5k/YXRpZXJ0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1qQnd4/Y2h5bHluZk45YW5K/YVdBQVhSdnpMUllw/V1c1Rmo0aFZIX1Jq/R19nPQ",
        birthPlace: "Tuscumbia, Alabama, USA"
    },

    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        imgurl: "https://imgs.search.brave.com/Jlx4b7LbuXWbYN3HwMrRCrU5n2abruWfuLKOxctW_DI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzg5/NjIxMjIvcGhvdG8v/YS1waWN0dXJlLW9m/LXRoZS1zdGF0dWUt/b2YtYXJpc3RvdGxl/LXRoZS1ncmVlay1w/aGlsb3NvcGhlci13/aG8tdGF1Z2h0LWFs/ZXhhbmRlci10aGUt/Z3JlYXQtdGhpcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/d210eWt3MWg5c2pr/LS00SU16TnM4YzMy/Mm5WMjVCWnRsRzVs/ZmFTT18wcz0",
        birthPlace: "Stagira, Greece"
    },

    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
        imgurl: "https://imgs.search.brave.com/3x9AicZOgvBJtYr3AbEbElFmm5s6e2aSWcKAzU5RSok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxL2M4/L2I5L2UxYzhiOWM0/NWRiZGNiNmNiY2E0/MTdkZTM4NTY1MWY5/LmpwZw",
        birthPlace: "Frankfurt, Germany"
    },

    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        imgurl: "https://imgs.search.brave.com/290OqC9PU_aZ54FLMx49AYZppCr9vM0TYbNvlIIMibg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/MzI4NzUyNi92ZWN0/b3IvcmFscGgtd2Fs/ZG8tZW1lcnNvbi0x/OXRoLWNlbnR1cnku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXRhTmlrVEhLZ1ZN/X3pxTVlCNnZzSnBQ/MnJrSE0xdjRoRTg5/X1F4bWFaTlE9",
        birthPlace: "Boston, Massachusetts, USA"
    },

    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
        imgurl: "https://imgs.search.brave.com/qmkTosnTx4ob04kTtaXNSEeKoOzNuVYH57B5tJWMeOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjIy/MzUyNjM0L3Bob3Rv/L3BvcnRyYWl0LW9m/LWFtZXJpY2FuLXBv/ZXQtY2l2aWwtcmln/aHRzLWFjdGl2aXN0/LW1heWEtYW5nZWxv/dS1jaXJjYS0yMDAw/LmpwZz9zPTYxMng2/MTImdz1naSZrPTIw/JmM9SjhCT0JwZXF5/dHZGazNzRl9vLTJ2/QnFCemtSMjBaNEY4/RW5kT0xaaFpfWT0",
        birthPlace: "St. Louis, Missouri, USA"
    },

    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
        imgurl: "https://imgs.search.brave.com/PwIOFbzHd1kXumq9Ssq39AEenR1OMoe_P2sGt4lRqD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFlME1CbTF5dUwu/anBn",
        birthPlace: "Hodgenville, Kentucky, USA"
    },

    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
        imgurl: "https://imgs.search.brave.com/SgTmugIwFxXHYQ3fL12kDm7O8lx1blR1NJVXdo83vtg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjQx/NDc1ODE0L3Bob3Rv/L3BvcnRyYWl0LW9m/LXBpdGNoZXItYmFi/ZS1ydXRoLW9mLXRo/ZS1ib3N0b24tcmVk/LXNveC1jaXJjYS0x/OTE4LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1jRFlpT2cz/VmFxSkVoUEl1MDRa/alNLWXh2Slh4QkJB/bXNpMko0U1lrQTRz/PQ",
        birthPlace: "Baltimore, Maryland, USA"
    },

    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
        imgurl: "https://imgs.search.brave.com/mmQ3jiGBk_dOi36SAqIY8tWp6RHmSkNucK_LxtfojOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9nZXR0/eWltYWdlcy0zMjQ1/OTI3anBnLmpwZz9j/cm9wPTF4dzoxLjB4/aDtjZW50ZXIsdG9w/JnJlc2l6ZT02NDA6/Kg",
        birthPlace: "Tuscumbia, Alabama, USA"
    },

    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
        imgurl: "https://imgs.search.brave.com/bQwT-igES1JfGFirTbFCtoeomcXRTJvKLPl4fWZfvMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/MS8yOC8xMi8wMC90/aG9tYXMtYWx2YS1l/ZGlzb24tNjc3NjNf/NjQwLmpwZw",
        birthPlace: "Milan, Ohio, USA"
    },

    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
        imgurl: "https://imgs.search.brave.com/3YXhcE7sN4BMQ4xCxmBOzs5Eu4UgSh2qQ6D73AqkW0c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc2LzNi/L2I4Lzc2M2JiODYy/MDJkYTNjNTI2MzJi/ZjU1NzE0MGY3ZmVm/LmpwZw",
        birthPlace: "Charlottetown, Canada"
    },

    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        imgurl: "https://imgs.search.brave.com/yxfSeukgezZJx8KNBJwQnwNxRQ6iY6YVdo-X2YbgKBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NDQ4NzMxMy9waG90/by90aGVvZG9yZS1y/b29zZXZlbHQtb2Z0/ZW4tcmVmZXJyZWQt/dG8tYnktaGlzLWlu/aXRpYWxzLXRyLXdh/cy1hbi1hbWVyaWNh/bi1zdGF0ZXNtYW4t/YXV0aG9yLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XaTVp/dllyanREQnpFZTVv/bUVLbU1yUTl0cm1a/dndDTEhSeWJIUm8t/M2ZRPQ",
        birthPlace: "New York City, New York, USA"
    },

    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
        imgurl: "https://imgs.search.brave.com/hoVS3SIrahnv7vE3FvLgbvoWJdu9WndSsRzJmUPBpkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9hcnR3b3Jr/aW1hZ2VzL21lZGl1/bWxhcmdlLzEvNC13/aWxsaWFtLWphbWVz/LTE4NDItMTkxMC1n/cmFuZ2VyLmpwZw",
        birthPlace: "New York City, New York, USA"
    },

    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        imgurl: "https://imgs.search.brave.com/qpFh01kxDP8dcMAdG_o3xNTb3iAALNso7LmIHSxvp0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjYz/NDc3Mi9waG90by9w/b3J0cmFpdC1vZi13/aW5zdG9uLWNodXJj/aGlsbC10b3dhcmRz/LXRoZS1lbmQtb2Yt/aGlzLWxpZmUtZW5n/bGFuZC1lYXJseS0x/OTYwcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cGhJRmNz/TUgxQndaOVh4cldT/OUNXSkNjZG5TaEZX/akVIYzQ5cVA5a0M4/QT0",
        birthPlace: "Woodstock, England"
    },

    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        imgurl: "https://imgs.search.brave.com/rg3a5dq9W-Oa40XKBrQSk-JKdFW7q6sLTOYAndBTcEU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1Lzdj/LzU0L2E1N2M1NDdm/YmE2ZGFjYTQ5MmE1/YzU0MTQ3YzEzMTUz/LmpwZw",
        birthPlace: "Belfast, Ireland"
    },

    {
        quote: "At any given moment you have the power to say: this is not how the story is going to end.",
        author: "Christine Mason Miller",
        imgurl: "https://imgs.search.brave.com/Mw4qty525iSwRacED8P3RHOX7pfXZV7iWMSOftiziMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbmlt/eXN0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNC8wOS9D/TU1fYmlvLTQwMC5q/cGc",
        birthPlace: "Unknown"
    },

    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar",
        imgurl: "https://imgs.search.brave.com/1V8uIHamtKxNbZhzIn3AOfLp3Vh1FkuK5nnZfiuKVpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY3L2Mw/LzA1LzY3YzAwNWU4/NjFjYzBlZTRmZWY1/MWMzNDlhNzdkNDdi/LmpwZw",
        birthPlace: "Coffee County, Alabama, USA"
    },

    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
        imgurl: "https://imgs.search.brave.com/bQwT-igES1JfGFirTbFCtoeomcXRTJvKLPl4fWZfvMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/MS8yOC8xMi8wMC90/aG9tYXMtYWx2YS1l/ZGlzb24tNjc3NjNf/NjQwLmpwZw",
        birthPlace: "Milan, Ohio, USA"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        imgurl: "https://imgs.search.brave.com/Wfv_uJYHg_jf0jgISwHsjW29OLFRJVvmZhNHeRdaoq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDc2/MzgxNzE2L3Bob3Rv/L25ldy15b3JrLXBv/cnRyYWl0LW9mLXNh/bS1sZXZlbnNvbi1o/dW1vcmlzdC13cml0/ZXItdGVsZXZpc2lv/bi1ob3N0LWltYWdl/LWRhdGVkLWphbnVh/cnktMjUtMTk1Ny5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dG5UZjFsMjdWcWJq/MU5OMUpqZFhPbUVG/b0xoUmsxNXMxbk9j/N09Qb2IxTT0",
        birthPlace: "New York City, New York, USA"
    }

];

let quoteCard = document.getElementById("quoteCard");

data.forEach(
    data => {
        quoteCard.innerHTML += `<div class="col-4">
                                    <div class="d-flex bg-info gap-3 p-3 rounded-4">

                                        <div>
                                            <div>
                                                <div class="rounded-circle overflow-hidden">
                                                    <img src="${data.imgurl}" width="100px">
                                                </div>    
                                            </div>
                                        </div>

                                        <div>
                                            <p class="fw-medium fs-5">${data.quote}</p>
                                            <p class="text-end m-0 text-muted fw-medium">${data.birthPlace}</p>
                                            <h5 class="text-end mt-0 text-muted">- ${data.author}</h5>
                                            
                                        </div>

                                    </div>
                                </div>`;
    }
);



