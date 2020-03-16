/**1) @When_used_in_global_context
* @params {this is window}
*/

/* function f() {
  console.log(this)
}
f()
console.log(this) */

/**2) @When_used_inside_object_method
* @params {this is bound to "immediate" enclosing object}
*/

var obj = {
  name: "obj",
  f: function () {
    return this + ":" + this.name;
  }
};
console.log(obj.f())
/**
 *  @Even_if_you_add_function_explicitly_to_the_object_as_a_method_it_still_follows_above_rules_that_is_this_still_points_to_the_immediate_parent_object
 */
/*var obj1 = {
    name: "obj1",
}
function returnName() {
    return this + ":" + this.name;
}
obj1.f = returnName;
*/

/**3) @When_invoking_contextless_function
* @params {this is bound to "immediate" enclosing object}
*/