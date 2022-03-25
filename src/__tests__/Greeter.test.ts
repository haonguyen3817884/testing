import {Greeter} from "../index";

test('My Greeter', () => {
    expect(Greeter("Place")).toBe("Hello Place");
});