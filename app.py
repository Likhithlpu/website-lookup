from flask import Flask, request, render_template
import subprocess
import os
import whois

app = Flask(__name__)

def whois_lookup(domain):
    w = whois.whois(domain)
    return (w)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    website = request.form['website']
    results = {}

    try:
        # Perform WHOIS lookup
        results['whois'] = whois_lookup(website)

        # Perform DIG command
        # dig_output = subprocess.check_output(['dig', website]).decode('utf-8')
        # results['dig'] = dig_output

        # Perform NMAP command
        # nmap_output = subprocess.check_output(['nmap', website]).decode('utf-8')
        # results['nmap'] = nmap_output

        return render_template('results.html', results=results)
    except Exception as e:
        error_message = f"Error: {str(e)}"
        return render_template('error.html', error_message=error_message)


if __name__ == '__main__':
    app.run(debug=True)


