from flask import Flask, render_template, request, render_template
from functions import criar_slide

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/processar', methods=['POST'])
def processar():
    num_slides = int(request.form['num-slides'])
    slide_content = []
    for i in range(num_slides):
        slide_content.append(str(request.form[f'slide-{i+1}']))

    return criar_slide("slide", str(request.form['titulo']), str(request.form['titulo']), num_slides, slide_content)


if __name__ == '__main__':
    app.run(debug=True)
