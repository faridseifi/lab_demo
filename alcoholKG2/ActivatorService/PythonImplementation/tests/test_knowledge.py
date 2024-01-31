import re
import pytest
from ..alcohol_control_package.qalyValue import qalyValue


def test_alcohol_knowledge_works():
    input= { "features": { "age": 65, "gender": 1, "race": 0, "smokeyear": 30, "quityear": 0, 
                          "cigpday": 20, "diabetes": 1, "totalcholesterol": 200, "hdl": 30, 
                          "sbp": 110, "htmedication": 0, "alcohol_abuse": 1 } }
    test=qalyValue("" , input["features"])
    assert test==0.9465250000000003
    
def test_alcohol_knowledge_exception_missing_argument_name():
    input= { "features": { "gender": 1, "race": 0, "smokeyear": 30, "quityear": 0, 
                          "cigpday": 20, "diabetes": 1, "totalcholesterol": 200, "hdl": 30, 
                          "sbp": 110, "htmedication": 0, "alcohol_abuse": 1 } }
    with pytest.raises(KeyError, match="age"):
        qalyValue("" , input["features"])
        
def test_alcohol_knowledge_exception_wrong_data_type():
    input= { "features": { "age": "65", "gender": 1, "race": 0, "smokeyear": 30, "quityear": 0, 
                          "cigpday": 20, "diabetes": 1, "totalcholesterol": 200, "hdl": 30, 
                          "sbp": 110, "htmedication": 0, "alcohol_abuse": 1 } }
    with pytest.raises(TypeError, match=re.escape("can't multiply sequence by non-int of type 'float'")):
        qalyValue("" , input["features"]) 
        

        
       
        
