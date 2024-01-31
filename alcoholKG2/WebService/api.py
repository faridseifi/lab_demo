import sys
from os.path import abspath, dirname

# Add the parent directory to the Python path
sys.path.append(abspath(dirname(dirname(__file__))))
print(abspath(dirname(dirname(__file__))))

from  ActivatorService.PythonImplementation.alcohol_control_package.qalyValue import qalyValue
from  ActivatorService.PythonImplementation.alcohol_control_package.index import qalygain


from fastapi import Body, FastAPI
app=FastAPI()

@app.post("/qalyValue")
async def qalyValueExec( data: dict = Body(...)):
    print(data['features'])
    return qalyValue("",data['features'])

@app.post("/qalyGain")
async def qalyGainExec( data: dict = Body(...)):
    print(data['features'])
    return qalygain(data)

#uvicorn api:app --port=8000