import json
import g4f

with open('missing_words.json', 'r') as f:
    words = json.load(f)

prompt = "Generate a B1/B2 level English example sentence and its Turkish translation for the following words. Output ONLY valid JSON in the format: { \"word\": \"English sentence. - Turkish translation.\" }. Here are the words:\n"
prompt += "\n".join([w['word'] for w in words[:10]])

response = g4f.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": prompt}]
)
print(response)
