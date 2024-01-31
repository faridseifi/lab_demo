import { assertEquals} from "https://deno.land/std@0.202.0/assert/mod.ts";
import {qalyValue } from "./qalyValue.js";


Deno.test("test knowledge calculating Quality-Adjusted Life Year Gain By Stop Using Alcohol", ()=>{
    const feature={ "age": 65, "gender": 1, "race": 0, "smokeyear": 30, "quityear": 0, 
    "cigpday": 20, "diabetes": 1, "totalcholesterol": 200, "hdl": 30, 
    "sbp": 110, "htmedication": 0, "alcohol_abuse": 1 }

    assertEquals(qalyValue("",feature), 0.9465250000000003);
});
  