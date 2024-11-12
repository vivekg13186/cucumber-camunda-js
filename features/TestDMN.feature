@dmn
Feature: DMN Demo
    Example to show how to test DMN rules


    Background: simple dmn Example
        Given deploy dmn file "./bpmn/rule1.dmn"
    
    Scenario Outline: Rule execution
        Then evaluate decision "Ruletest1" with input  <input>  and match <output>
        Examples:
            | input | output | 
            | '{"A" : 1 , "B" : 1 }' | '{"C" : 2 , "D" : "OK"}' |
            | '{"A" : 1 , "B" : 2 }' | '{"C" : 3 , "D" : "OKOK"}' |
            | '{"A" : 3 , "B" : 1 }' | '{"C" : 4 , "D" : "OKOKOK"}' |
            | '{"A" : 10 , "B" : 1 }' | 'null' |
    
    Scenario: Rule testing with excel
        Then evaluate decision "Ruletest1" with input from excel "./features/test_rule.xlsx" and "2" input columns