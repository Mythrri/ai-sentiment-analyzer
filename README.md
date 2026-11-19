# 💬 AI Sentiment Analyzer

A Lexicon-based NLP Web App that detects if a sentence is **Positive, Negative or Neutral**.

Built using HTML, CSS, JavaScript - No API, No Backend, Works 100% in Browser.

## 🚀 Live Demo
https://mythrri.github.io/ai-sentiment-analyzer/

## ✨ Features
- Real-time Sentiment Analysis using NLP
- Positive / Negative / Neutral classification with Emoji
- Counts Positive & Negative words found
- Shows which words triggered the result
- 1-Click Example Sentences to test instantly
- Clean, Mobile-friendly UI

## 🧠 How AI Works
1. User types a sentence
2. Text is converted to lowercase for matching
3. App checks against 2 Lexicons:
   - **Positive Lexicon (15 words):** love, amazing, great, good, happy, excellent, awesome, best, beautiful, helpful, fantastic, wonderful, nice, enjoy, perfect
   - **Negative Lexicon (15 words):** hate, bad, terrible, worst, boring, sad, angry, awful, horrible, disappoint, useless, annoying, stupid, difficult, fail
4. Logic:
   - If Positive Words > Negative Words = **POSITIVE 😊**
   - If Negative Words > Positive Words = **NEGATIVE 😡**
   - If Equal / None = **NEUTRAL 😐**

This is called **Lexicon-Based Sentiment Analysis** - a core technique in NLP.

## 🛠️ Technologies Used
- HTML5 - Structure
- CSS3 - Styling
- JavaScript - Sentiment Logic / NLP

## 📸 Test Examples
| Input | Output |
| :--- | :--- |
| I love this college, teachers are amazing | 😊 POSITIVE |
| I hate this boring lecture, it is terrible | 😡 NEGATIVE |
| Today is Monday and I went to college | 😐 NEUTRAL |

## 👩‍💻 Author
**Mythrri**
- Aspiring BTech(CSE) Artificial Intelligence Student
- Interested in NLP, Machine Learning & AI Applications

## 📄 License
This project is open source and free to use for learning.
