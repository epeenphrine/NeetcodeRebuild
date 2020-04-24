from flask import Flask
import os


app = Flask(__name__)

@app.route('/api')
def hello_world():
    print('before script')
    os.system('bash script.sh')
    print('after script')
    return "Hello World!"


if __name__ == '__main__':
    app.run(debug=True)
