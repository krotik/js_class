/*
 Unit tests for class.js
 */

test("Test Inheritence", function() {

    var res, a, b, c, oa, ob, oc;

    a = Class.create({

        a : "a",

        init : function (res_add) {
            res += res_add;
        },
        
        test1 : function(to_add) {
            return "xx" + to_add;
        }
    });

    b = a.create({

        b : "b",

        init : function (res_add) {
            this._super(res_add + this.a);
        }
    });

    c = a.create(b, {

        c : "c",

        init : function (res_add) {
            this._super(res_add + this.b);
        },
        
        test1 : function(to_add) {
            return this._super("yy" + to_add + this.b);
        }
    });

    // Test constructors
    res = "test:";
    oa = new a("a");
    ok( res === "test:a", "Test constructor execution simple instantiation" );

    res = "test:";
    ob = new b("b");
    ok( res === "test:ba", "Test constructor execution simple inheritance" );

    res = "test:";
    oc = new c("c");
    ok( res === "test:cba", "Test constructor execution multi inheritance" );

    // Test function execution
    ok( oc.test1("zz") === "xxyyzzb", "Test function execution with multi inheritance" );
    
    // Test instanceof
    ok( oc instanceof c, "Test instanceof direct class" ) 
    ok( oc instanceof a, "Test instanceof superclass" ) 
    ok(!(oc instanceof b), "Test instanceof mixin class" ) 
});
