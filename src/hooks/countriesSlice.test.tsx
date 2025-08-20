import countriesReducer, { setSelectedCountry } from "./countriesSlice";
import { initialCountries } from "../utils/consts";
import { describe, expect, it } from "vitest";

describe("countriesSlice reducer", () => {
    const initialState = {
        countries: initialCountries,
        selectedCountry: "",
    };

    it("should return the initial state when passed an empty action", () => {
        expect(countriesReducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("should handle setSelectedCountry", () => {
        const action = setSelectedCountry("France");
        const state = countriesReducer(initialState, action);
        expect(state.selectedCountry).toBe("France");
        expect(state.countries).toEqual(initialCountries);
    });

    it("should not mutate countries array when selecting a country", () => {
        const action = setSelectedCountry("Germany");
        const state = countriesReducer(initialState, action);
        expect(state.countries).toBe(initialCountries);
    });

    it("should update selectedCountry multiple times", () => {
        let state = countriesReducer(initialState, setSelectedCountry("Italy"));
        expect(state.selectedCountry).toBe("Italy");
        state = countriesReducer(state, setSelectedCountry("Spain"));
        expect(state.selectedCountry).toBe("Spain");
    });
});