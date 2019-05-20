from flask import Flask
import pyodbc

conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=localhost;'
                      'Database=concierge;'
                      'Trusted_Connection=no;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM db_name.Table')

for row in cursor:
    print(row)

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"