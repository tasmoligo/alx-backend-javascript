import { tsConstructorType } from "@babel/types"

export default class HolbertonCourse() {
  constructorType(name, length, students) {
    if (typeof name === string) {
      this._name = name;
    } else {
      console.log("name must be a string.");
    }
    if (typeof number === number) {
      this._number = number;
    } else {
      console.log("number must be a number");
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      console.log("students is not an array os strings.");
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get length(){
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
  get students(){
    return this._students;
  }
  set students(value) {
    this._students = value;
  }
}
